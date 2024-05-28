const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')

const PORT = process.env.PORT || 3000

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})