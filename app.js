const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

require("dotenv").config();

app.use(cors({
    origin: 'http://127.0.0.1:3000',
    optionsSuccessStatus : 200
}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static('./static/'));

app.get('/', (req, res) => {
    console.log("GET req received");
    res.sendFile(__dirname + '/static/home.html');
    console.log("GET req finished");
})

app.post('/submit', (req, res) => {
    console.log("POST req received");
    fetch(`http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=${req.body.location}`)
    .then(resObj => resObj.text())
    .then(data => {
        res.json(data);
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})