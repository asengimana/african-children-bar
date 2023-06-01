const Drink = require("../models/Drink");
//const fs = require("fs");

/**
 * On récupère toutes les boissons de la base de données
 */

exports.getAllDrinks = (req, res) => {
  Drink.find()
    .then((drinks) => {
      res.status(200).json(drinks);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

/**
 *On renvoi la boisson de l'id fourni en paramètre
 */

exports.getOneDrink = (req, res) => {
  Drink.findOne({ _id: req.params.id })
    .then((drink) => {
      res.status(200).json(drink);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

/**
 * On enregistre une nouvelle boisson et ses détails dans la base de données
 */

exports.createDrink = (req, res) => {
  const drink = new Drink({
    ...req.body,
  });
  drink
    .save()
    .then((drink) => res.status(201).json({ drink }))
    .catch((error) => res.status(400).json({ error }));
};

/**
 * Modification d'une boisson
 */

exports.modifyDrink = (req, res) => {
  Drink.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then((drink) => res.status(200).json({ drink }))
    .catch((error) => res.status(400).json({ error }));
};

/**
 * Suppression d'une boisson
 */
exports.deleteDrink = (req, res) => {
  Drink.deleteOne({ _id: req.params.id })
    .then((drink) => res.status(200).json({ drink }))
    .catch((error) => res.status(400).json({ error }));
};
