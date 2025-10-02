const db = require('../config/database')

class UserModel {
  static async findByEmail(email) {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [
      email,
    ])
    return rows[0]
  }
  
  static async listagem() {
    const [rows] = await db.query('SELECT * FROM events')
    return rows
  }
}

module.exports = UserModel
