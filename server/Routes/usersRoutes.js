var express = require("express");
var router = express.Router();
var RegisterNewUser = require("../Controllers/usersController")

router.post("/",RegisterNewUser)

module.exports = router;