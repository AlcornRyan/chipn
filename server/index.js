
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to the Chipn backend server!');
})

app.listen(3001, () => {
    console.log("Backend server running on port 3001.");
})