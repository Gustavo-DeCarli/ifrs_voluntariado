const db = require('../config/database')

class UserModel {
  static async findByEmail(email) {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [
      email,
    ])
    return rows[0]
  }
  
  static async listagem() {
    const [rows] = await db.query('SELECT * FROM users')
    return rows
  }

  static async createUser(email, password, role) {
    const [results] = await db.query(`INSERT INTO users VALUES (NULL, ?, ?, ?, NULL)`, [
      email,
      password,
      role,
    ])
    return results
  }

  static async updateUser(id, email, password, role) {
    const [results] = await db.query(
      'UPDATE users SET email = ?, password = ?, password = ? WHERE id = ?',
      [email, password, role, id],
    )
    return results
  }

  static async deleteUsers(id) {
    const [results] = await db.query('DELETE FROM users WHERE id = ?', [id])
    return results
  }
}

module.exports = UserModel
