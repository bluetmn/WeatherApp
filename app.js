const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://127.0.0.1:3000',
    optionsSuccessStatus : 200
}))

app.get('/', (req, res) => {
    fetch('https://api.weatherstack.com/current')
    .then(resObj => resObj.text())
    .then(data => {
        res.json(data);
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})