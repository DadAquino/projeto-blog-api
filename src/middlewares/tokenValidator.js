const jwt = require('../utils/JTWGenerate');

const HTTP_ERROR_UNAUTHORIZED = 401;

const tokenValidator = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(HTTP_ERROR_UNAUTHORIZED).json({ 
      message: 'Token not found', 
    });
  }

  try {
    const tokenDecoded = jwt.decodeToken(token);
    console.log(tokenDecoded);
    req.user = tokenDecoded;

    next();
  } catch (err) {
    return res.status(HTTP_ERROR_UNAUTHORIZED).json({ 
      message: 'Expired or invalid token', 
    });
  }
};

module.exports = {
  tokenValidator,
};