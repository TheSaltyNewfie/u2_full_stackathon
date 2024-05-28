// ball,bat,gloves,headGear,padding
const db = require('../db')
const { Sport, Equipment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const hockey = await Sport.find({ name: 'Hockey' })
  const soccer = await Sport.find({ name: 'Soccer' })
  const rugby = await Sport.find({ name: 'Rugby'})
  const basketball = await Sport.find({ name: 'Basketball'})
  const baseball = await Sport.find({ name: "Baseball"})
  const football = await Sport.find({ name: "Football"})
  const lacrosse = await Sport.find({ name: "Lacrosse"})
  const tennis = await Sport.find({ name: "Tennis"})
  



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