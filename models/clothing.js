const { Schema } = require('mongoose')

const Clothing = new Schema(
  {
    sport_id: { type: Schema.Types.ObjectId, ref: 'sport_id' },
    item: { type: String, required: true },
    price: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = Clothing