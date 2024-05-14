const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  try {
    let tokenHeader = req.headers.authorization;

    // Check token integrity
    if (!tokenHeader || !tokenHeader.startsWith("Bearer")) {
      return res
        .status(401)
        .json({ message: "You're not authorized to do this action!" });
    }

    tokenHeader = tokenHeader.split(" ")[1];

    // Verify token & store user_id in request to use it in the next controller
    const decodedToken = jwt.verify(tokenHeader, process.env.JWT_SECRET);
    req.user = { user_id: decodedToken.userId };

    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "You're not authorized to do this action!" });
  }
}

module.exports = authenticate;
