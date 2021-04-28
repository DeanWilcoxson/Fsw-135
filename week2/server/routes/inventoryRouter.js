const { Router } = require("express");
const express = require("express");
const inventoryRouter = express.Router();
const Product = require("../models/inventory.js");
const { v4: uuidv4 } = require("uuid");

const products = [
  { title: "Cheese", genre: "Dairy", expiration_date: "2021", id: uuidv4() },
  { title: "Ham", genre: "Deli", expiration_date: "2022", id: uuidv4() },
];
inventoryRouter.get("/", (req, res, next) => {
  Product.find((err, products) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(products);
  });
});

inventoryRouter.get("/:productId", (req, res, next) => {
  const productId = req.params.productId;
  const foundProduct = Product.find((product) => product.id === productId);
  if (!foundProduct) {
    const error = new Error(`The item with id ${productID} was not found`);
    res.status(500);
    return next(error);
  }
  return res.status(200).send(foundProduct);
});

inventoryRouter.post("/", (req, res, next) => {
  const newProduct = new Product(req.body);
  newProduct.save((err, savedProduct) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedProduct);
  });
});

inventoryRouter.delete("/:productId", (req, res, next) => {
  Product.findOneAndDelete(
    { _id: req.params.productId },
    (err, deletedItem) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res
        .status(200)
        .send(
          `Successfully deleted item ${deletedItem.title} from the database`
        );
    }
  );
});

inventoryRouter.put("/:productId", (req, res, next) => {
  Product.findOneAndUpdate(
    { _id: req.params.productId },
    req.body,
    { new: true },
    (err, updatedProduct) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedProduct);
    }
  );
});

module.exports = inventoryRouter;
