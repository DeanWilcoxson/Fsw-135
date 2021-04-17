const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const inventorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  expiration_date: {
    type: Number,
    required: true,
    min: 2021,
  },
});
module.exports = mongoose.model("inventory", inventorySchema);