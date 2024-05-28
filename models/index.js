const mongoose = require('mongoose')
const ClothingSchema = require('./clothing')
const EquipmentSchema = require('./equipment')
const SportSchema = require('./sport')

const Clothing = mongoose.model('Clothing', ClothingSchema)
const Equipment = mongoose.model('Equipment', EquipmentSchema)
const Sport = mongoose.model('Sport', SportSchema)

module.exports = {
  Clothing,
  Equipment,
  Sport,
}