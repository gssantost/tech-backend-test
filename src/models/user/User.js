const db = require('../../../config/db');
const queries = require('./queries');

class User {

  async getUsers() {
    try {
      const obj = await db.connect();
      const data = await obj.any(queries.GET_ALL);
      obj.done();
      return data;
    } catch (err) {
      throw err;
    }
  }

  async createUser({name, middlename, lastname, phone, email, address, art, cinema, music}) {
    try {
      const obj = await db.connect();
      const data = await obj.task(async t => {
        const userExists = await t.oneOrNone(queries.CHECK_USER_BY_EMAIL, email);
        if (userExists === null) {
          const data = await t.any(queries.CREATE_USER, [name, middlename, lastname, email, phone, address]);
          return await t.any(queries.ADD_USER_ADDITIONAL_INFO, [data[0].id, art, cinema, music]);
        }
        return null;
      });
      obj.done();
      return data;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = User;