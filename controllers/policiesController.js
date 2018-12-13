const Client = require('../models/Client');
const Policie = require('../models/Policie');


exports.getPoliciesByUserName = async (req, res) => {
  const { name } = req.params;
  try {
    const client = await Client.findByField({ name }, true);
    if (!client) {
      throw new Error('Client not found by name');
    }
    const policies = await Policie.findByClientId(client.id);
    res.send({ policies });
  } catch (error) {
    res.status(404).send();
  }
}

exports.getUserByPolicieId = async (req, res) => {
  const { id } = req.params;
  try {
    const policie = await Policie.findById(id);
    const client = await Client.findById(policie.clientId);
    if (!policie) {
      throw new Error('Policie not found by id');
    }
    res.send({ client });
  } catch (error) {
    res.status(404).send();
  }
}