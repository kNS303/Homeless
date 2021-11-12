const express = require("express");
const router = express.Router();

const {
  createAlbergue,
  getAllAlbergues,
} = require("../controllers/albergue.controllers");

router.post("/create", createAlbergue);
router.get("/", getAllAlbergues);

module.exports = router;
