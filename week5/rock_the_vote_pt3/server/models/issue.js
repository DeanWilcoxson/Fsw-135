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
  upVote: {
    type: Number,
    required: false,
  },
  downVote: {
    type: Number,
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  postDate: {
    type:String,
    required: true,
    default: Date.now
  }
});
module.exports = mongoose.model("issue", issueSchema);
