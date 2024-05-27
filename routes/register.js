const express = require("express");
const router = express.Router();
const User = require("../model/registerModel");
var bcrypt = require("bcryptjs");
const authMiddleware = require("../middlewares/auth-middleware");

router.post("/users", async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, password, phone } = req.body;
  console.log(firstName, lastName, email, password, phone, "SACHIN");

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.json({ error: "User Already Exist" });
    }
    if (!password) {
      // Handle the case where password is undefined or empty
      console.error("Password is undefined or empty");
    } else {
      const saltRound = 10;
      const hashPassword = await bcrypt.hash(password, saltRound);
      const userCreate = await User.create({
        firstName,
        lastName,
        email,
        password: hashPassword,
        phone,
      });
      res.json({
        userCreate,
        token: await userCreate.generateToken(),
        userId: userCreate._id.toString(),
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// User Login Logic

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json("Invalid Credential");
    }
    const user = await userExist.comparePassword(password);
    if (user) {
      res.status(200).json({
        msg: "login Successfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.log(error);
  }
});

/// User Logic to send user data

router.get("/user", authMiddleware, async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from user route ${error}`);
  }
});

module.exports = router;
