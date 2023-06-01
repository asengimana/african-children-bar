const mongoose = require("mongoose");
const mongodbErrorHandler = require("mongoose-mongodb-errors");

/**
 * Création et exportation du schéma drink
 */
const drinkSchema = mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: String, required: false },
  category_id: { type: String, required: true },
  price: { type: String, required: true },
});

drinkSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model("Drink", drinkSchema);
