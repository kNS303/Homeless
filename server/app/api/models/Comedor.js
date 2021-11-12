const mongoose = require("mongoose");

const comedorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    opening: { type: String, required: true },
    description: { type: String },
    info: { type: String },
  },
  {
    timestamps: true,
  }
);

const Comedor = mongoose.model("Comedor", comedorSchema);
module.exports = Comedor;
