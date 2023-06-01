const Category = require("../models/Category");
const Drink = require("../models/Drink");
/**
 * On récupère toutes les boissons de la catégorie
 */
exports.getAllCategories = (req, res) => {
  Category.find()
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
exports.getDrinksByCategory = (req, res) => {
  Drink.find({ category_id: req.params.id })
    .then((drinks) => {
      res.status(200).json(drinks);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
exports.getCategoryName = (req, res) => {
  Category.find({ category_id: req.params.id })
    .then((categoryName) => {
      res.status(200).json(categoryName);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
