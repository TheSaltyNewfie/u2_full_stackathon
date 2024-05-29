const {Clothing} = require('../models')

const getClothes = async (req, res) => {
    try {
        const clothes = await Clothing.find()
        res.json(clothes)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getClothing = async(req, res) => {
    try {
        const {id} = req.params
        const clothes = await Clothing.findById(id)
        res.json(clothes)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getClothes,
    getClothing
}