"use strict";

const { WatchModel } = require("../models/Watch.model");

const createWatch = async (req, res) => {
  const watch = req.body;
  const newWatch = new WatchModel({
    title: watch.title,
    description: watch.description,
    toUSD: watch.toUSD,
    image: watch.image,
    email: watch.email,
  });
  try {
    await newWatch.save();
    res.send("Added Done Successfully");
  } catch (e) {
    res.send(e);
  }
};

const getWatch = async (req, res) => {
  const email = req.query.email;
  await WatchModel.find({ email: email }, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
};

const deleteWatch = async (req, res) => {
  try {
    const deletefav = await WatchModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Pass",
      data: deletefav,
    });
  } catch (err) {
    res.stat(400).json({ status: err });
  }
};
///////////////////Need fixing //////////////////
const updatedWatch = async (req, res) => {
  try {
    const updatefav = await WatchModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValdidators: true,
      }
    );

    const getfav = await WatchModel.find();
    res.status(200).json({
      status: "Pass",
      data: {
        getfav,
      },
    });
  } catch (err) {
    res.stat(400).json({ status: err });
  }
};

module.exports = {
  createWatch,
  getWatch,
  deleteWatch,
  updatedWatch,
};
