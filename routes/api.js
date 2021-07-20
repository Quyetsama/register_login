const express = require("express");
const router = express.Router();

const apiController = require("../controllers/ApiController");



router.get("/user", apiController.getUser);
router.get("/info", apiController.getInfo);



module.exports = router;