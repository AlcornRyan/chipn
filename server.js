
const express = require('express')
const app = express()
const mysql = require('mysql');

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

//endpoint to ADD NEW USER
app.post('/signup', (req, res) =>{
    res.send('Register for free!');
})

//endpoint for USER LOGIN
app.post('/signin', (req, res) =>{
    res.send('Login Page');
})

//endpoint to retrieve user data for 
//session management (after user logs in)
app.get('/:user_id', (req, res) =>{

    //check if user is a charity or some donor.


    //if result is null, user is not a charity. 
    //query donor_role and user table; 


    //if result is not null, use that result from charity_role
    //and query user table as well for general info. 

    const db_query= '';
    db.query(db_query, (err, result) =>{
    console.log(result);
    res.send('Login Page');
})
})


app.listen(3001, () => {
    console.log("Backend server running on port 3001.");
})
