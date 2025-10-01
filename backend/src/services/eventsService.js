const EventModel = require('../models/eventModel')

class EventsService {
  /**
  * Serviço de Eventos: regras de negócio relacionadas a eventos.
  * @module services/EventsService
  */

  /**
  * Valida o nome do usuário.
  * @returns {Array} Array de eventos
  * @throws {Error} Se nenhum evento encontrado
  */
  static async listagem() {
    const listagem = await EventModel.listagem()
    if (listagem.length == 0) {
      throw new Error('Nenhum evento encontrado')
    }

    return { listagem }
  }
}
module.exports = EventsService
