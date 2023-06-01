const mongoose = require("mongoose");
const mongodbErrorHandler = require("mongoose-mongodb-errors");

/**
 * Création et exportation du schéma drink
 */
const categorySchema = mongoose.Schema({
  name: { type: String, required: true },
  categoryImage: { type: String, required: true },
});

categorySchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model("Category", categorySchema);
