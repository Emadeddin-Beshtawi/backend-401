"use strict";

const express = require("express");

const cors = require("cors");

const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT;

const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(`${MONGO_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/////// Importing ////////////

const { getDataFromAPI } = require("./controller/API.controller"); // 1)

const {
  createWatch,
  getWatch,
  deleteWatch,
  updatedWatch,
} = require("./controller/Watch.controller");

///////// End of importing //////////

/////// CRUD //////////

app.get("/getDataFromAPI", getDataFromAPI);
app.post("/createWatch", createWatch);
app.get("/getWatch", getWatch);
app.delete("/deleteWatch/:id", deleteWatch);
app.put("/updatedWatch/:id", updatedWatch);

////////// Hello //////

app.get("/", (req, res) => {
  res.send("Hello This is form 401 Exam");
});

////// Initialization //////////

app.listen(PORT, () => {
  console.log(`Exam 401 Running on port ${PORT}`);
});
