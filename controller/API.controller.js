"use strict";

const axios = require("axios");

require("dotenv").config();

const mongoose = require("mongoose");

const { Watch } = require("../models/API.model");

const getDataFromAPI = async (req, res) => {
  await axios
    .get(`${process.env.THIRD_API_PARTY}`)
    .then((results) => {
      const allWatch = results.data.map((watch) => {
        return new Watch(watch);
      });
      console.log(allWatch);
      res.send(allWatch);
    })
    .catch((err) => {
      console.log(err, "From API Catch");
    });
};

module.exports = {
  getDataFromAPI,
};
