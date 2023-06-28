const express = require("express");
const router = express.Router();

const Product = require("../models/product");
const User = require("../models/user");

router.get("/", (req, res) => {
  Product.findAll().then((products) => res.json(products));
});

router.post("/", (req, res) => {
  const { name, image_url, category, price, description, location } = req.body;
  const userId = req.session.userId;
  // const {email} = req.body
  // User.findByEmail(email)
  // .then(userId => res.json( {user_id : userId} ))

  Product.create(
    name,
    image_url,
    category,
    price,
    description,
    location,
    userId
  ).then((product) => res.json(product));
});

router.delete("/:id", (req, res) => {
  const productId = req.params.id;

  Product.delete(productId).then(() =>
    res.json({ message: "deleted successfully" })
  );
});

router.get("/search/", (req, res) => {
  const productId = req.query.p; // Accessing the 'p' query parameter
  console.log(productId);
  Product.findSingleProduct(productId) // Use the productId in the query
    .then((data) => res.json({ product: data }));
});

module.exports = router;
