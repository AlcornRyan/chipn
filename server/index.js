
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to the Chipn backend server!');
})

app.get('/discover', (req, res) =>{
    res.send('Discover Charities');
})

app.get('/signup', (req, res) =>{
    res.send('Register for free!');
})

app.get('/login', (req, res) =>{
    res.send('Login Page');
})

app.listen(3001, () => {
    console.log("Backend server running on port 3001.");
})
