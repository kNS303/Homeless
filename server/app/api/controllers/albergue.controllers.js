const Albergue = require("../models/Albergue");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createAlbergue = async (req, res, next) => {
  try {
    const newAlbergue = new Albergue();
    newAlbergue.name = req.body.name;
    newAlbergue.address = req.body.address;
    newAlbergue.phone = req.body.phone;
    newAlbergue.opening = req.body.opening;
    newAlbergue.services = req.body.services;

    const albergueDb = await newAlbergue.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: { Albergue: albergueDb.name },
    });
  } catch (error) {
    return next(error);
  }
};

const getAllAlbergues = async (req, res, next) => {
  try {
    const albergue = await Albergue.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { albergue: albergue },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { createAlbergue, getAllAlbergues };
