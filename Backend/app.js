const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://admin:ReEncT1TNSqlsBTP@cluster0.4rqq8.mongodb.net/bookstore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to Database"))
  .then(() => {
    app.listen(5001);
  })
  .catch((err) => console.log(err));

//ReEncT1TNSqlsBTP
