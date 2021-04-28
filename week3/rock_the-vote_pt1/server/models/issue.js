const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const issueSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("issue", issueSchema);
