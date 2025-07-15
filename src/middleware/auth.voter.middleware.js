const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.headers["authorization"];

    if (!token) {
      res.status(401).json({
        message: "No se proporcionó un token de autenticación",
      });
    }

    const validate = jwt.verify(token, process.env.JWT_SECRET);
    voterId = validate.id;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Token inválido",
      error: error.message,
    });
  }
};
