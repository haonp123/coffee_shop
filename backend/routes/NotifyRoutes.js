const express = require("express");
const Controller = require("../controllers");

const router = express.Router();

//Get current notifications:
router.get("/:user_id", Controller.getCurrentNotify);

module.exports = router;
