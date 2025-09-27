const db = require('../config/database')

class UserModel {
  static async listagem() {
    const [rows] = await db.query('SELECT * FROM events')
    return rows
  }
}

module.exports = UserModel
