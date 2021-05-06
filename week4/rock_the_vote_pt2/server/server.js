const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
require("dotenv").config();

const userRouter = require("./routes/userRouter");
const issueRouter = require("./routes/issueRouter");
const commentRouter = require("./routes/commentRouter");
const authRouter = require("./routes/authRouter");

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

app.use(express.json());
app.use(morgan("dev"));
// app.use("/user", userRouter);
// app.use("/issue", issueRouter);
// app.use("/comment", commentRouter);
app.use("/auth", authRouter);
app.use("/api/rockthevote/issue", require("./routes/issueRouter.js"));
app.use("/api/rockthevote/comment", require("./routes/commentRouter.js"));
app.use("/api/rockthevote/user", require("./routes/userRouter.js"));

app.use(
  "/api",
  expressJwt({ secret: process.env.secret, algorithms: ["HS256"] })
);

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "Unauthorized Error") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(9000, () => {
  console.log("Server is running on LocalHost:9000");
});
