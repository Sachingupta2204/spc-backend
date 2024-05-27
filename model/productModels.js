const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const ProductData = mongoose.model("ProductData", productSchema);

module.exports = ProductData;
