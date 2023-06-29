const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

require("dotenv").config();

app.use(cors({
    origin: 'http://127.0.0.1:3000',
    optionsSuccessStatus : 200
}))

app.get('/', (req, res) => {
    console.log(process.env.API_KEY);
    var params = {
        access_key : process.env.API_KEY,
        query : "New York"
    }
    fetch(`http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=New York`)
    .then(resObj => resObj.text())
    .then(data => {
        res.json(data);
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})