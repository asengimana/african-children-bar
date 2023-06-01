/**
 * Définition des critères de validation d'un mot de passe sécurisé
 */
const passwordValidator = require("password-validator");
const criteres = new passwordValidator();

criteres
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(100) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(1) // Must have at least 1 digit
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123"]); // Blacklist these values

module.exports = (req, res, next) => {
  if (criteres.validate(req.body.password)) {
    next();
  } else {
    res.status(400).json({
      message:
        "Le mot de passe doit contenir au moins 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre",
    });
  }
};
