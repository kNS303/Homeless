const express = require("express");
const router = express.Router();

const {
  createComedor,
  getAllComedores,
} = require("../controllers/Comedor.controllers");

router.post("/create", createComedor);
router.get("/", getAllComedores);

module.exports = router;
