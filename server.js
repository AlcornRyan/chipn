
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
    const db_query= 'u.first_name, u.city, u.state, u.country, c.description from user u, charity_role c where c.charity_id = u.user_id order by u.first_name asc';
    db.query(db_query, (err, result) =>{
        console.log(result);
        res.send(result);
    });
})


//POST REQUESTS 
const jsonParser = bodyParser.json();




//endpoint to ADD NEW USER
app.post('/signup', jsonParser, (req, res) =>{

//check if user exists
let db_query = 'select * from user where email_id = ?';
let values = [req.body.email_id];
var result = db.query(db_query,values, (err, result_outer) => {

    if(err)
        throw err;
    if(result_outer==""){

        //add user if they dont exist when result set is null
        const db_query_inner = 'insert into user(email_id, first_name, address_line_1, address_line_2, city, state, country) values (?,?,?,?,?,?,?)';
        let values_inner = [req.body.email_id, req.body.first_name, req.body.address_line_1, req.body.address_line_2, req.body.city, req.body.state, req.body.country];
        var result_inner = db.query(db_query_inner, values_inner, (error, res) =>{

            if(err)
                throw err;
            res.send('SUCCESS!');
        })
    }
});
})



//endpoint for USER LOGIN

app.post('/signin', (req, res) =>{

let db_query = 'select * from user where email_id = ?';
let values = [req.body.email_id];
var result = db.query(db_query,values, (err, result_outer) => {

    if(err)
        throw err;
    if(result_outer==""){

        //add user if they dont exist when result set is null
        const db_query_inner = 'select password from user where email_id = ?;';
        let values_inner = [req.body.email_id];

        var result_inner = db.query(db_query_inner, values_inner, (error, res) =>{
            if(err)
                throw err;
           if(res == req.body.password){
               res.send('SUCCESS');
           }
        })
    }
});
})

//endpoint to retrieve user data for 
//session management (after user logs in)
// app.get('/:user_id', (req, res) =>{

//     //check if user is a charity or some donor.
    

//     //if result is null, user is not a charity. 
//     //query donor_role and user table; 


//     //if result is not null, use that result from charity_role
//     //and query user table as well for general info. 

//     const db_query= '';
//     db.query(db_query, (err, result) =>{
//     console.log(result);
//     res.send('Login Page');
// })
// })

app.listen(3001, () => {
    console.log("Backend server running on port 3001.");
})
