// routes/users.js
const express = require("express");
const router = express.Router();

// Define a route
router.get("/", (req, res) => {
  res.send("<p>this is users route</p>"); // this gets executed when users visit http://localhost:3000/users
});

router.get("/101", (req, res) => {
  res.send("this is users route 101"); // this gets executed when users visit http://localhost:3000/users/101
});

router.get("/102", (req, res) => {
  res.send("this is users route 102"); // this gets executed when users visit http://localhost:3000/users/102
});

// export the router module so that server.js file can use it
module.exports = router;
