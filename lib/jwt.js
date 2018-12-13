const jwt = require('jsonwebtoken');

const sign = (data, secret) => {
  return jwt.sign(data, secret);
}

const verify = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    console.log(error);
    return null;
  }
}

module.exports = {
  sign,
  verify
}