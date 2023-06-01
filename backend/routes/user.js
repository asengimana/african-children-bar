const express = require("express");
const router = express.Router(); //permet de créer des routeurs séparés pour chaque route de l'application
const userCtrl = require("../controllers/user");
const passwordVerify = require("../middleware/passwordValidator");

router.post("/signup", passwordVerify, userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
