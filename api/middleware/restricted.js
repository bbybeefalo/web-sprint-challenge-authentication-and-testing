
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
     return res.status(401).json({message: "token required"})
  }
  jwt.verify(token, 'the fish flies at night', (err, ) => {
    if (err) {
      res.json(401).json({message: "token invalid"})
   } else {
      next()
    }
    })
  
 
  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
};
