const { sign, verify } = require('../lib/jwt');
const Client = require('../models/Client');

const auth = async (req, res, next) => {
  const token = req.header('Authorization');
  try {
    if (!token) {
      throw new Error('Token not provided');
    }
    const user = verify(token, process.env.JWT_SECRET);
    req.user = await Client.findById(user.id);
    next();
  } catch (error) {
    res.status(401).send();
  }
};

module.exports = auth;