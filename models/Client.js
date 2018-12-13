const axios = require('axios');

class Client {
  static async getClients() {
    try {
      const resp = await axios.get(process.env.CLIENTS_API);
      return resp.data.clients;
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  static async findById(id) {
    const clients = await this.getClients();
    return clients.find((client) => client.id === id);
  }

  static async findByField(field, strict = false) {
    const clients = await this.getClients();
    const [ key ] = Object.keys(field);
    if (strict) {
      return clients.find((client) => client.hasOwnProperty(key) && client[key] === field[key]);
    }
    return clients.find((client) => client.hasOwnProperty(key) && client[key].toLowerCase() === field[key].toLowerCase());
  }
}

module.exports = Client;