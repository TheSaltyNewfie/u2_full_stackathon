const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const sportController = require('./controllers/sportsController')

const PORT = process.env.PORT || 3000

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/sports', sportController.getSportItems)
app.get('/sports/:id', sportController.getSportItem)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})