const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/productRoute");
const connectDB = require("./db/connect");

dotenv.config();

const app = express(); // Create an Express application

app.use(express.json()); // Add this line to parse JSON requests

app.get("/", (req, res) => {
  res.send("My name is Pushpendra Kumar");
});

app.use("/api/products", router);
// Connect to the database
const start = async () => {
  try {
    await connectDB(process.env.URL).then(() => {
      console.log("Connected Successfully To the Database");
      //Start the server
      app.listen(process.env.PORT || 8000, (error) => {
        if (error) console.log(error);
        console.log("Server is running on Port", process.env.PORT || 8000);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

start();
