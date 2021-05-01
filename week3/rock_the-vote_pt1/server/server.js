const express = require("express");
const app = express();
const morgan = require("morgan");

const userRouter = require('./routes/userRouter')
const issueRouter = require('./routes/issueRouter')
const commentRouter = require('./routes/commentRouter')

const mongoose = require("mongoose");

app.use(express.json());
app.use(morgan("dev"));
app.use("/user", userRouter);
app.use("/issue", issueRouter);
app.use("/comment", commentRouter);

mongoose.connect(
  "mongodb://localhost:27017/inventorydb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("Connected to the DB")
);

app.listen(9000, () => {
  console.log("Server is running on LocalHost:9000");
});
