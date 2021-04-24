const express = require('express')
const inventoryRouter = express.router;
const inventory = require('../models/inventory.js')
let items = [{productName: "Mayonnaise"}]
inventoryRouter.get("/", (req, res, next) => {
  inventory.find((err, items) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(items)
  })
})