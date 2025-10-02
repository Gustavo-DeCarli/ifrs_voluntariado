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

  /**
   * Insere novo evento.
   * @param {Array} form - Array com nome e data do evento
   * @returns {Array} Array de resultado do DB
   * @throws {Error} Se acontecer erro ao adicionar evento ou data inválida
   */
  static async createEvent(form) {
    if (form.evento == null || form.data == null) {
      throw new Error('Dados incorretos, verifique e tente novamente!')
    }

    const dataInformada = new Date(form.data)
    const dataHoje = new Date()
    dataHoje.setHours(0, 0, 0, 0)
    if (dataInformada <= dataHoje) {
      throw new Error('Data inválida')
    }

    const result = await EventModel.createEvent(form.evento, form.data)
    if (result.affectedRows == 0) {
      throw new Error('Erro ao adicionar evento!')
    }

    return { result }
  }

  /**
   * Deleta evento.
   * @param {Number} id - ID do evento
   * @returns {Array} result com dados de resultado do DB
   * @throws {Error} Se acontecer erro ao excluir evento ou quando não encontrado nenhum evento com o ID informado
   */
  static async deleteEvent(id) {
    try {
      const result = await EventModel.deleteEvents(id)

      if (result.affectedRows === 0) {
        throw new Error('Evento não encontrado')
      }

      return result
    } catch (error) {
      console.error(error)
      throw new Error('Erro ao excluir o evento')
    }
  }

  /**
   * Deleta evento.
   * @param {Number} id - ID do evento
   * @param {String} evento - Nome do evento
   * @param {String} data - Data do evento
   * @returns {Array} Result com dados de resultado do DB
   * @throws {Error} Se acontecer erro ao alterar evento ou quando não encontrado nenhum evento com o ID informado
   */
  static async updateEvent(id, evento, data) {
    try {
      const result = await EventModel.updateEvent(id, evento, data)

      if (result.affectedRows === 0) {
        throw new Error('Evento não encontrado')
      }

      return result
    } catch (error) {
      console.error(error)
      throw new Error('Erro ao alterar o evento')
    }
  }
}
module.exports = EventsService
