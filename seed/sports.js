const db = require('../db')
const { Sport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const sports = [
    {
        name: 'Hockey',
    },
    {
        name: 'Soccer',
    },
    {
        name: 'Rugby',
    },
    {
        name: 'Basketball',
    },
    {
        name: 'Baseball',
    },
    {
        name: 'Football',
    },
    {
        name: 'Lacrosse',
    },
    {
        name: 'Tennis',
    },
]
 
await Sport.insertMany(sports)
console.log('Created sports!')
}

const run = async () => {
await main()
db.close()
}

run()