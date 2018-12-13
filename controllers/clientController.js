const Client = require('../models/Client');

exports.getClient = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Client.findById(id);
    if (!client) {
      throw new Error();
    }
    res.send({ client });
  } catch (error) {
    res.status(404).send();
  }
}

exports.getClientByQuery = async (req, res) => {debugger;
  const { name } = req.query;
  try {
    const client = await Client.findByField({ name }, true);
    if (!client) {
      throw new Error();
    }
    res.send({ client });
  } catch (error) {
    res.status(404).send();
  }
}