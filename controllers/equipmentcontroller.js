const {Equipment} = require('../models')

const getEquipments = async (req, res) => {
    try {
        const equipments = await Equipment.find()
        res.json(equipments)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getEquipment = async(req, res) => {
    try {
        const {id} = req.params
        const equipments = await Equipment.findById(id)
        res.json(equipments)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getEquipments,
    getEquipment
}