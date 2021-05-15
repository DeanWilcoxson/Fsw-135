const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
    lowercase: true,
  },
  issueId: {
    type: Schema.Types.ObjectId,
    ref: "issue",
    required: true,
  },
});
module.exports = mongoose.model("comment", commentSchema);
