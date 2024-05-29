const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const sportController = require('./controllers/sportsController')
const clothesController = require('./controllers/clothingcontroller')
const equipmentController = require('./controllers/equipmentcontroller')

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
app.get('/clothes', clothesController.getClothes)
app.get('/clothes/:id', clothesController.getClothing)
app.get('/equipment', equipmentController.getEquipments)
app.get('/equipment/:id', equipmentController.getEquipment)
app.post('/equipment', equipmentController.addEquipment)
app.get('/equipment/sport/:sportId', equipmentController.getEquipmentBySportId)
app.put('/equipment/:id', equipmentController.updateEquipment)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})