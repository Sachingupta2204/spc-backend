// fileName : server.js
// Example using the http module
// const http = require("http");

// Create an HTTP server
// const server = http.createServer((req, res) => {
//   // Set the response headers
//   res.writeHead(200, { "Content-Type": "text/html" });

//   // Write the response content
//   res.write("<h1>Hello World</h1>");
//   res.end();
// });

// Specify the port to listen on
// const port = 3000;

// // Start the server
// server.listen(port, () => {
//   console.log(`Node.js HTTP server is running on port ${port}`);
// });

// // Example using Express.js
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");

// Example defining a route in Express

app.get("/", (req, res) => {
  res.send("<h1>Hiiii World</h1>");
});

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE",
  Credentials: true,
};

app.use(cors(corsOptions));

// Include route files
const usersRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");
const categoryRoutes = require("./routes/category");
const registerRoutes = require("./routes/register");
const contactRoute = require("./routes/contact");

// Use routes
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.use("/category", categoryRoutes);
app.use("/api/auth", registerRoutes);
app.use("/api/form", contactRoute);

// mongoDB connection

mongoose
  .connect("mongodb://localhost:27017/spc", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`connection succesfull`))
  .catch((err) => {
    console.log(err);
  });

// Example specifying the port and starting the server
const port = process.env.PORT || 8080; // You can use environment variables for port configuration
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
