const db = require('../config/database')

class EventModel {
  static async listagem() {
    const [rows] = await db.query('SELECT * FROM events')
    return rows
  }

  static async createEvent(evento, data) {
    const [results] = await db.query(`INSERT INTO events VALUES (NULL, ?, ?)`, [evento, data])
    return results
  }

  static async deleteEvents(id) {
    const [results] = await db.query('DELETE FROM events WHERE id = ?', [id]);
    return results
  }

  static async updateEvent(id, evento, data) {
    const [results] = await db.query('UPDATE events SET nome = ?, data = ? WHERE id = ?', [evento, data, id]);
    return results
  }
}

module.exports = EventModel
