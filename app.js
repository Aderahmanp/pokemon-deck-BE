const express = require("express");
const digimonRoutes = require("./routes/digimonRoutes")
const mongoose = require("mongoose")

try {
    dotEnv = require("dotenv").config();
} catch (err) {
    console.log(err.message);
}

// Initial PORT 
const PORT = process.env.PORT || 1234;
const mongoUrl = process.env.MONGGO_DB_URL;

// Connecting Mongoose
mongoose.set("useCreateIndex", true);
  mongoose
    .connect("mongodb+srv://aderahmanp:wesper007@cluster0-hshhj.mongodb.net/digimon?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log(`Mongoose connected at ${mongoUrl}`);
      })
      .catch(err => {
        throw new Error(err);
      });
  

 // Running Express Application
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Initialization of plug'in Middleware, Routes
app.use("/", digimonRoutes)

// Listen server
app.listen(PORT, () => {
    console.log(`server is now listening on port ${PORT}`);
})

module.exports = app;