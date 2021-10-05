"use strict";

const mongoose = require("mongoose");

const watchSchema = new mongoose.Schema({
  title: String,
  description: String,
  toUSD: String,
  image: String,
  email: String,
});

const WatchModel = mongoose.model("watch", watchSchema);

module.exports = {
  WatchModel,
};
