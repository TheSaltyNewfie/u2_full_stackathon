// ,headGear,padding
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
    //bats
    {
        sport_id: hockey[0]._id,
        item: "CCM Ribcore 3 Hockey Stick",
        price: 80
    },
    {
      sport_id: hockey[0]._id,
      item: "Bauer Vapor X2.7 Hockey Stick",
      price: 120
    },
    {
      sport_id: hockey[0]._id,
      item: "Warrior Alpha DX Hockey Stick",
      price: 150
    },
    {
      sport_id: hockey[0]._id,
      item: "True AX9 Hockey Stick",
      price: 180
    },
    {
      sport_id: hockey[0]._id,
      item: "CCM JetSpeed FT3 Pro Hockey Stick",
      price: 250
    },
    {
      sport_id: hockey[0]._id,
      item: "Sher-Wood Rekker M90 Hockey Stick",
      price: 200
    },
    {
      sport_id: tennis[0]._id,
      item: "Wilson Pro Staff RF97 Autograph Tennis Racket",
      price: 220
    },
    {
        sport_id: tennis[0]._id,
        item: "Babolat Pure Aero Tennis Racket",
        price: 200
    },
    {
        sport_id: tennis[0]._id,
        item: "Head Graphene 360+ Speed Pro Tennis Racket",
        price: 250
    },
    {
        sport_id: tennis[0]._id,
        item: "Yonex EZONE 98 Tennis Racket",
        price: 230
    },
    {
        sport_id: tennis[0]._id,
        item: "Prince Textreme Tour 100P Tennis Racket",
        price: 180
    },
    {
        sport_id: tennis[0]._id,
        item: "Dunlop CX 200 Tennis Racket",
        price: 170
    },
    {
      sport_id: baseball[0]._id,
      item: "Louisville Slugger Omaha 518 BBCOR Baseball Bat",
      price: 100
    },
    {
        sport_id: baseball[0]._id,
        item: "Marucci CAT7 BBCOR Baseball Bat",
        price: 200
    },
    {
        sport_id: baseball[0]._id,
        item: "Easton Ghost X BBCOR Baseball Bat",
        price: 300
    },
    {
        sport_id: baseball[0]._id,
        item: "DeMarini Voodoo One BBCOR Baseball Bat",
        price: 250
    },
    {
        sport_id: baseball[0]._id,
        item: "Rawlings Quatro Pro BBCOR Baseball Bat",
        price: 400
    },
    {
        sport_id: baseball[0]._id,
        item: "Mizuno MaxCor BBCOR Baseball Bat",
        price: 150
    },
    {
      sport_id: lacrosse[0]._id,
      item: "STX Crux 600 Women's Lacrosse Stick",
      price: 120
    },
    {
        sport_id: lacrosse[0]._id,
        item: "Epoch Dragonfly Integra X Women's Lacrosse Stick",
        price: 200
    },
    {
        sport_id: lacrosse[0]._id,
        item: "Maverik Union Men's Lacrosse Stick",
        price: 100
    },
    {
        sport_id: lacrosse[0]._id,
        item: "STX Stallion 700 Men's Lacrosse Stick",
        price: 150
    },
    {
        sport_id: lacrosse[0]._id,
        item: "Warrior Burn Pro Diamond Men's Lacrosse Stick",
        price: 180
    },
    {
        sport_id: lacrosse[0]._id,
        item: "Brine Clutch Elite Men's Lacrosse Stick",
        price: 250
    },

    //balls
    {
      sport_id: hockey[0]._id,
      item: "puck",
      price: 3
    },
    {
      sport_id: baseball[0]._id,
      item: "baseball",
      price: 6
    },
    {
      sport_id: tennis[0]._id,
      item: "tennis ball x2",
      price: 4
    },
    {
      sport_id: basketball[0]._id,
      item: "basketball",
      price: 30
    },
    {
      sport_id: football[0]._id,
      item: "football",
      price: 30
    },
    {
      sport_id: soccer[0]._id,
      item: "soccer ball",
      price: 40
    },
    {
      sport_id: rugby[0]._id,
      item: "rugby ball",
      price: 40
    },

    //gloves
    {
      sport_id: hockey[0]._id,
      item: "hockey gloves",
      price: 50
    },
    {
      sport_id: baseball[0]._id,
      item: "baseball gloves",
      price: 60
    },
    {
      sport_id: football[0]._id,
      item: "football gloves",
      price: 40
    },
    {
      sport_id: lacrosse[0]._id,
      item: "lacrosse gloves",
      price: 80
    },
    {
      sport_id: tennis[0]._id,
      item: 'tennis gloves',
      price: 80
    },
    {
      sport_id: hockey[0]._id,
      item: "hockey helmet",
      price: 100
    },
    {
      sport_id: rugby[0]._id,
      item: "rugby helmet",
      price: 60
    },
    {
      sport_id: football[0]._id,
      item: "football helmet",
      price: 120
    },
    {
      sport_id: baseball[0]._id,
      item: "baseball helmet",
      price: 40
    },
    {
      sport_id: lacrosse[0]._id,
      item: "lacrosse helmet",
      price: 150
    }



  

]

await Equipment.insertMany(equipments)
console.log('Created equipments with sports!')
}
const run = async () => {
await main()
db.close()
}

run()