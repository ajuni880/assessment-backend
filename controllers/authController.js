const { sign } = require('../lib/jwt');
const Client = require('../models/Client');

exports.login = async (req, res) => {
  const { email } = req.body;
  try {
    const client = await Client.findByField({ email });
    if (!client) {
       throw new Error('User Not found');
    }
    res.header('Authorization', sign({ id: client.id }, process.env.JWT_SECRET)).send();
  } catch (e) {
    res.status(401).send();
  }
};