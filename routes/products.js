// routes/products.js
const express = require("express");
const router = express.Router();
const ProductData = require("../model/productModels");

// // Define a route
// router.get("/", (req, res) => {
//   res.send("this is products route"); // this gets executed when products visit http://localhost:3000/products
// });

// router.get("/101", (req, res) => {
//   res.send("this is products route 101"); // this gets executed when products visit http://localhost:3000/products/101
// });

// router.get("/102", (req, res) => {
//   res.send("this is products route 102"); // this gets executed when products visit http://localhost:3000/products/102
// });

// // export the router module so that server.js file can use it
// module.exports = router;

// Get all products
// router.get("/", async (req, res) => {
//   try {
//     const allProductData = await ProductData.find();
//     res.json(allProductData);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });

// see all product
router.post("/getallproduct", async (req, res) => {
  try {
    const allProducts = await ProductData.find();
    res.json(allProducts);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Post new product
router.post("/add", async (req, res) => {
  console.log(req.body);
  const newProduct = new ProductData(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// update a product
router.post("/update", async (req, res) => {
  let { _id, updatedFields } = req.body;
  console.log(req.body, "333");
  console.log(_id, updatedFields, "7777");
  try {
    const updatedProduct = await ProductData.findByIdAndUpdate(
      _id,
      updatedFields,
      {
        new: true,
      }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// export the router module so that server.js file can use it
module.exports = router;
