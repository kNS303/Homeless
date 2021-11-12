const Comedor = require("../models/Comedor");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createComedor = async (req, res, next) => {
  try {
    const newComedor = new Comedor();
    newComedor.name = req.body.name;
    newComedor.address = req.body.address;
    newComedor.phone = req.body.phone;
    newComedor.opening = req.body.opening;
    newComedor.description = req.body.description;
    newComedor.info = req.body.info;

    const comedorDb = await newComedor.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: { Comedor: comedorDb.name },
    });
  } catch (error) {
    return next(error);
  }
};

const getAllComedores = async (req, res, next) => {
  try {
    const comedor = await Comedor.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { comedor: comedor },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { createComedor, getAllComedores };
