const db = require('../db')
const { Sport, Clothing } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const hockey = await Sport.find({ name: 'Hockey' })
    const soccer = await Sport.find({ name: 'Soccer' })
    const rugby = await Sport.find({ name: 'Rugby' })
    const basketball = await Sport.find({ name: 'Basketball' })
    const baseball = await Sport.find({ name: 'Baseball' })
    const football = await Sport.find({ name: 'Football' })
    const lacrosse = await Sport.find({ name: 'Lacrosse' })
    const tennis = await Sport.find({ name: 'Tennis' })

  const clothes = [
    {
        sport_id: hockey[0]._id,
        item: "Hockey Pants",
        price: 260
    },
    {
        sport_id: soccer[0]._id,
        item: "Soccer Shorts",
        price: 30
    },
    {
        sport_id: rugby[0]._id,
        item: "Rugby Shorts",
        price: 30
    },
    {
        sport_id: basketball[0]._id,
        item: "Basketball Shorts",
        price: 15
    },
    {
        sport_id: baseball[0]._id,
        item: "Baseball Pants",
        price: 40
    },
    {
        sport_id: football[0]._id,
        item: "Football Pants",
        price: 55
    },
    {
        sport_id: lacrosse[0]._id,
        item: "Lacrosse Pants",
        price: 75
    },
    {
        sport_id: tennis[0]._id,
        item: "Tennis Shorts",
        price: 35
    },
    {
        sport_id: hockey[0]._id,
        item: "Hockey Jersey",
        price: 27
    },
    {
        sport_id: soccer[0]._id,
        item: "Soccer Jersey",
        price: 60
    },
    {
        sport_id: rugby[0]._id,
        item: "Rugby Longsleeve Jersey",
        price: 80
    },
    {
        sport_id: basketball[0]._id,
        item: "Basketball Jersey",
        price: 28
    },
    {
        sport_id: baseball[0]._id,
        item: "Baseball Jersey",
        price: 70
    },
    {
        sport_id: football[0]._id,
        item: "Football Jersey",
        price: 28
    },
    {
        sport_id: lacrosse[0]._id,
        item: "Lacrosse Jersey",
        price: 20
    },
    {
        sport_id: tennis[0]._id,
        item: "Tennis Popover",
        price: 95
    },
    {
        sport_id: hockey[0]._id,
        item: "Hockey Socks",
        price: 30
    },
    {
        sport_id: soccer[0]._id,
        item: "Soccer Socks",
        price: 15
    },
    {
        sport_id: rugby[0]._id,
        item: "Rugby Socks",
        price: 15
    },
    {
        sport_id: basketball[0]._id,
        item: "Basketball Socks",
        price: 12
    },
    {
        sport_id: baseball[0]._id,
        item: "Baseball Socks",
        price: 4
    },
    {
        sport_id: football[0]._id,
        item: "Football Socks",
        price: 17
    },
    {
        sport_id: lacrosse[0]._id,
        item: "Lacrosse Socks",
        price: 15
    },
    {
        sport_id: tennis[0]._id,
        item: "Tennis Socks",
        price: 18
    },
    {
        sport_id: hockey[0]._id,
        item: "Hockey Skates",
        price: 170
    },
    {
        sport_id: soccer[0]._id,
        item: "Soccer Cleats",
        price: 40
    },
    {
        sport_id: rugby[0]._id,
        item: "Rugby Cleats",
        price: 110
    },
    {
        sport_id: basketball[0]._id,
        item: "Basketball Shoes",
        price: 70
    },
    {
        sport_id: baseball[0]._id,
        item: "Baseball Cleats",
        price: 40
    },
    {
        sport_id: football[0]._id,
        item: "Football Cleats",
        price: 60
    },
    {
        sport_id: lacrosse[0]._id,
        item: "Lacrosse Cleats",
        price: 70
    },
    {
        sport_id: tennis[0]._id,
        item: "Tennis Shoes",
        price: 70
    },
]

await Clothing.insertMany(clothes)
console.log('Created clothes with sports!')
}
const run = async () => {
await main()
db.close()
}

run()