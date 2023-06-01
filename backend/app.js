const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const helmet = require("helmet");
const userRoutes = require("./routes/user");
const drinkRoutes = require("./routes/drinks");
const categoryRoutes = require("./routes/categories");
require("dotenv").config();

/**
 * Connexion à MongoDB
 */

mongoose
  .connect(
    `mongodb+srv://${process.env.PASSWORD_DB}/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

/**
 * On donne accès à notre API depuis n'importe quelle origine et on définit les méthodes acceptées pour les requêtes
 */

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/drinks", drinkRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/auth", userRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
