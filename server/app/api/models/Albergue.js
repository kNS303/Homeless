const mongoose = require("mongoose");

const albergueSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    opening: { type: String, required: true },
    services: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Albergue = mongoose.model("Albergue", albergueSchema);
module.exports = Albergue;
