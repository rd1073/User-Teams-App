const express = require("express");
const router = express.Router();
const { getAllUser } = require("../controllers/userController");

router.route("/").get(getAllUser);

module.exports = router;