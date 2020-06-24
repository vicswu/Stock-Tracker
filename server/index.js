const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');

const scrapers = require('./scrapers');
const db = require('./db')

app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get('/stocks', async(req, res) => {
    const stocks = await db.getAllStocks();
    res.send(stocks)
})

app.post('/stocks', async(req, res) => {
    console.log(req.body)
    const stockData = await scrapers.scrapeChannel(req.body.stockURL)
    const stocks = await db.insertStock(stockData.name, stockData.price, stockData.ratio, stockData.opinion)
    res.send(stocks);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))