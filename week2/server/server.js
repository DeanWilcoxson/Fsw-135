const express = require("express");
const app = express();
const cors = require("cors")
const morgan = require("morgan");
const router = require('./routes/inventoryRouter')
const mongoose = require("mongoose");

app.use(express.json());
app.use(morgan("dev"));
app.use("/", router);

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
