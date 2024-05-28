const { Schema } = require('mongoose')

const Sport = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = Sport