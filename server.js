
const express = require('express')
const app = express()
const mysql = require('mysql');
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: false})); 
app.use(bodyParser.json());

//credentials for accessing the MYSQL cloud database.
const db = mysql.createConnection({
    host:'35.194.93.135', 
    user:'root',
    password:'root',
    database:'chipndb'
});

//to start the connection 
db.connect((err) =>{
    if(err)
        throw err;
});


//GET REQUESTS 

//endpoint to check if '......./' works --- SAMPLE TEST
app.get('/', (req, res) => {
    res.send('Welcome to the Chipn backend server!');
})


//endpoint to Obtain ALL types of CATEGORIES for the Discover page.
app.get('/categories', (req, res) =>{
    const db_query= 'select * from categories;';
    db.query(db_query, (err, result) =>{
        console.log(result);
        res.send(result);
    });
})


//endpoint to obtain two charities for Featured Charities
app.get('/featured', (req, res) =>{
    const db_query= 'select u.first_name, u.city, u.state, u.country, c.description, c.views from user u, charity_role c where c.charity_id = u.user_id limit 2';
    db.query(db_query, (err, result) =>{
        console.log(result);
        res.send(result);
    });
})


//endpoint to retrieve all charities for discover page.
app.get('/charities', (req, res) =>{
    const db_query= 'select u.first_name, u.city, u.state, u.country, c.description from user u, charity_role c where c.charity_id = u.user_id order by u.first_name';
    db.query(db_query, (err, result) =>{
        console.log(result);
        res.send(result);
    });
})

//to collect all charity info based on userid -   /:user_id
app.get('/:email_id', (req, res) =>{
    const db_query= 'select * from user where email_id=?';
    const values = [req.params.email_id];
    db.query(db_query, values, (err, result) =>{
        console.log(result);
        res.send(result);
    });
})

//endpoint to retrieve all donors for discover page.
app.get('/charities/:charity_id', (req, res) =>{
    const db_query= 'select count(distinct user_id) as donors from donor_role where charity_id=?';
    const values = [req.params.charity_id];
    db.query(db_query, values, (err, result) =>{

        if(err)
        {
            res.send('Unfortunately, there are no donors yet.');
        }
        console.log(result);
        res.send(result);
    });
})


//endpoint to retrieve all charities for discover page.
app.get('/charities/donation/:charity_id', (req, res) =>{
    const db_query= 'select sum(donation_amount) as total_donation_amount from donor_role where charity_id=?';
    const values = [req.params.charity_id];
    db.query(db_query, values, (err, result) =>{
        console.log(result);
        res.send(result);
    });
})


//POST REQUESTS 
const jsonParser = bodyParser.json();


//endpoint to ADD NEW USER
app.post('/signup', jsonParser, (req, res) =>{
        const db_query_inner = 'insert into user(email_id, first_name, address_line_1, address_line_2, city, state, country, password) values (?,?,?,?,?,?,?,?)';
        let values_inner = [req.body.email_id, req.body.first_name, req.body.address_line_1, req.body.address_line_2, req.body.city, req.body.state, req.body.country, req.body.password];
        var result_inner = db.query(db_query_inner, values_inner, (error, results) =>{
            
            if(error){
                res.send('User exists already!!!!!!!');
            }
            else{
                res.send('OK!');
            }           
        })
})


//endpoint for USER LOGIN
app.post('/signin', jsonParser, (req, res) =>{

let db_query = 'select password from user where email_id = ?';
let values = [req.body.email_id];

var result = db.query(db_query, values, (err, result_outer) => {

    if(err){
        res.send('Sign up for an account if you have not done so!');
    }
    if(req.body.password === result_outer[0].password){
        res.send('SUCCESSFULLY LOGGED IN!');
    }
    else{
        res.send('INCORRECT PASSWORD!');
    }
})
})


//endpoint to allow users to make donation. 
app.post('/donate', jsonParser, (req, res) =>{

    let db_query = 'insert into donor_role(email_id, charity_id, donation_amount, date_of_donation) values (?, ?, ?, ?)';
    let values = [req.body.email_id, req.body.charity_id, req.body.donation_amount, req.body.date_of_donation];
    var result = db.query(db_query, values, (err, result_outer) => {
    
        if(err){
            res.send('Error making a donation, make sure the values you enter are correct');
        }
        else{
            res.send('DONATION SUCCESSFULLY MADE!');
        }
    })
})

//start the app by listening on default port
app.listen(process.env.PORT || 8080);