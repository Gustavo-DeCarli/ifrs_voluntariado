const db = require("../config/database");

class UserModel {

    static async listagem() {
    const [rows] = await db.query("SELECT * FROM events");
    return rows;
  }

  static async create(user) {
    const { email, password, role } = user;
    const [result] = await db.query(
      "INSERT INTO users (email, password, role) VALUES (?, ?, ?)",
      [email, password, role]
    );
    return result.insertId;
  }
}

module.exports = UserModel;