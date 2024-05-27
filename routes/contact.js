const express = require("express");
const router = express.Router();
const Contact = require("../model/ContactModel");

router.post("/contact", async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ message: "message send successfully" });
  } catch (error) {
    res.status(500).json("message not delivered");
  }
});

// User Login Logic

module.exports = router;
