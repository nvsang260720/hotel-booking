const express = require("express");
const router = express.Router();
const HomeController = require("../../controller/frontend/HomeController");
/* GET home page. */

router.get("/:id", HomeController.getProduct);

module.exports = router;
