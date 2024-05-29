const {Equipment, Sport, Clothing} = require('../models')
const { get } = require('../models/clothing')

const getEquipments = async (req, res) => {
    try {
        const equipments = await Equipment.find()
        res.json(equipments)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getEquipment = async(req, res) => {
    try {
        const {id} = req.params
        const equipments = await Equipment.findById(id)
        res.json(equipments)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getEquipmentBySportId = async(req, res) => {
    try {
        const {sportId} = req.params
        const equipments = await Equipment.find({sport_id: sportId})
        res.json(equipments)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const addEquipment = async(req, res) => {
    try {
        const equipment = await new Equipment(req.body)
        await equipment.save()
        res.json(equipment)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateEquipment = async(req, res) => {
    try {
        const {id} = req.params
        await Equipment.findByIdAndUpdate(id, req.body, {new: true})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



const getEquipmentByEquipmentName = async (req, res) => {
    try {
        const searchTerm = req.params.searchTerm
        const equipments = await Equipment.find({ item: { $regex: searchTerm, $options: 'i' } })
        res.json(equipments)
    } catch (error) {
        console.error("Cannot Find Equipment", error)
        return res.status(500).send(error.message);
    }
}

const deleteEquipment = async (req,res) => {
    try {
        const { id } = req.params
        const deleted = await Equipment.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Equipment has been removed from stock")
        }throw new Error("Equipment Not Found")       
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getEquipments,
    getEquipment,
    getEquipmentBySportId,
    addEquipment,
    getEquipmentByEquipmentName,
    updateEquipment,
    deleteEquipment
}