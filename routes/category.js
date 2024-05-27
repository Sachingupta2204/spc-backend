const express = require("express");
const router = express.Router();
const CategoryData = require("../model/categoryModel");

router.post("/getallcategory", async (req, res) => {
  try {
    const allCategory = await CategoryData.find();
    res.json(allCategory);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post("/add", async (req, res) => {
  console.log(req.body);
  const newCategory = new CategoryData(req.body);
  try {
    const savedCategory = await newCategory.save();
    res.json(savedCategory);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
