const express = require("express");
const router = express.Router(); //permet de créer des routeurs séparés pour chaque route de l'application

const drinkCtrl = require("../controllers/drinks");

router.get("/", drinkCtrl.getAllDrinks);
router.get("/:id", drinkCtrl.getOneDrink);
router.post("/", drinkCtrl.createDrink);
router.put("/:id", drinkCtrl.modifyDrink);
router.delete("/:id", drinkCtrl.deleteDrink);

module.exports = router;
