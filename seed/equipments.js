// ball,bat,gloves,headGear,padding
const db = require('../db')
const { Sport, Equipment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const hockey = await Sport.find({ name: 'Hockey' })
  const soccer = await Sport.find({ name: 'Soccer' })


  const equipments = [
    {
        sport_id: fightClub[0]._id,
        item: { type: String, required: true },
        price: { type: Number, required: true }
      },
]

await Equipment.insertMany(equipments)
console.log('Created equipments with sports!')
}
const run = async () => {
await main()
db.close()
}

run()