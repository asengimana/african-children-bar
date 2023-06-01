const express = require("express");
const router = express.Router(); //permet de créer des routeurs séparés pour chaque route de l'application

const categoryCtrl = require("../controllers/categories");

router.get("/", categoryCtrl.getAllCategories);
router.get("/:id", categoryCtrl.getDrinksByCategory);
router.get("/:id", categoryCtrl.getCategoryName);

module.exports = router;
