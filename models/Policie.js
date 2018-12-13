const axios = require('axios');

class Policie {
  static async getPolicies() {
    try {
      const resp = await axios.get(process.env.POLICIES_API);
      return resp.data.policies;
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  static async findById(id) {
    const policies = await this.getPolicies();
    return policies.find((policie) => policie.id === id);
  }

  static async findByClientId(id) {
    const policies = await this.getPolicies();
    return policies.filter((policie) => policie.clientId === id);
  }

  static async findByField(field, strict = false) {
    const policies = await this.getPolicies();
    const [ key ] = Object.keys(field);
    if (strict) {
      return policies.find((policie) => policie.hasOwnProperty(key) && policie[key].toLowerCase() === field[key].toLowerCase());
    }
    return policies.find((policie) => policie.hasOwnProperty(key) && policie[key] === field[key]);
  }
}

module.exports = Policie;