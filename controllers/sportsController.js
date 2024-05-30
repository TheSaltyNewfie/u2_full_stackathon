const { Sport, Equipment, Clothing } = require('../models')

const getSportItems = async (req, res) => {
    try {
        const items = await Sport.find()
        return res.status(200).json({ items })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getSportItem = async (req, res) => {
    try {
        const { id } = req.params
        const item = await Sport.findById(id)
        if (item) {
            return res.status(200).json({ item })
        }
        return res.status(404).send('Item with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getSportIdByName = async (req, res) => {
    try {
        const { name } = req.params
        const item = await Sport.findOne({ name:{$regex: name, $options: 'i'   } })
        if (item) {
            const items = await Equipment.find({ sport_id: item._id })
            const clothes = await Clothing.find({ sport_id: item._id })
            return res.status(200).json({ items, clothes })
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getSportItems,
    getSportItem,
    getSportIdByName
}