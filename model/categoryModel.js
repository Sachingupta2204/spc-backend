const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },

  category: {
    type: String,
    // require: true,
  },
  image: {
    type: String,
  },
  stock: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  subProduct: [
    {
      name: {
        type: String,
        // require: true,
      },
      description: {
        type: String,
      },
      price: {
        type: Number,
      },

      category: {
        type: String,
        // require: true,
      },
      image: {
        type: String,
      },
      stock: {
        type: Number,
      },
      rating: {
        type: Number,
      },
    },
  ],
});

const CategoryData = mongoose.model("CategoryData", categorySchema);

module.exports = CategoryData;
