const Equipment = require('../models/')

const getAllEquipments = async (req, res) => {
    try {
        const equipments = await Equipment.find()
        res.json(equipments)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getEquipmentById = async (req,res) => {
    try{
        const { id } = req.params
        const equipment = await Equipment.findById(id)
        if (equipment){
            return res.json(equipment)
        }
        return res.status(404).send(`that equipment doesn't exist!!!!!!!!`)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
}

const createEquipment = async (req,res) => {
    try {
        const equipment = await new Equipment(req.body)
        await equipment.save()
        return res.status(201),json({
            equipment
        })
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

const updateEquipment = async (req,res) => {
    try {
        let {id} = req.params
        let equipment = await Equipment.findByIdAndUpdate(id, req.body, { new: true })
        if (equipment) {
            return res.status(200).json(equipment)
        }
        throw new Error("Equipment not found, bro")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteEquipment = async (req,res) => {
    try {
        const { id } = req.params
        const deleted = await Equipment.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Equipment has been reduced to ashes")
        }throw new Error("Can't delete a equipment that doesn't exist!!!!!")       
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllEquipments,
    getEquipmentById,
    createEquipment,
    updateEquipment,
    deleteEquipment
}