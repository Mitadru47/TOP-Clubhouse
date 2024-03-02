const express = require("express");
const app = express();

// Mongo DB Connection Setup

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = "mongodb+srv://Admin-Mitadru:DB1234@clustermg.e4fjgoy.mongodb.net/clubhouseDB?retryWrites=true&w=majority&appName=ClusterMG"

async function main(){

    try{ await mongoose.connect(mongoDB); }
    catch(error){ console.log(error); }
}

// View Engine Setup

app.set("view", __dirname + "/views");
app.set("view engine", "pug");

// Routing

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

module.exports = app;