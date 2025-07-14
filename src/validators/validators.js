const { body } = require("express-validator");

exports.validatorVoters = [
  body("name").notEmpty().withMessage("El nombre no puede ir vacio"),
  body("document")
    .notEmpty()
    .withMessage("El documento no puede ir vacio")
    .isLength({ min: 7 })
    .withMessage("El documento debe tener minimo siete caracteres"),
  body("email").isEmail().withMessage("Ingrese un email valido"),
];

exports.validatorCandidates = [
  body("name").notEmpty().withMessage("El nombre no puede ir vacio"),
  body("document")
    .notEmpty()
    .withMessage("El documento no puede ir vacio")
    .isLength({ min: 7 })
    .withMessage("El documento debe tener minimo siete caracteres"),
];
