const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json({extended: true}))

app.use(cors())


app.use("/api", require('./routes/index'))



const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUrl"), {      
      user: process.env.MONGO_USR,
      pass: process.env.MONGO_PWD,
      dbName: process.env.MONGO_DBN
    });
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`)
    );
  } catch (e) {
    console.log("Server Error", e.message);
    process.exitCode = 1;
  }
}

start();
