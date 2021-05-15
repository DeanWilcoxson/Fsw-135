const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  memberSince: {
    type: String,
    required: true,
    default: Date.now
  },
});
module.exports = mongoose.model("user", userSchema);
