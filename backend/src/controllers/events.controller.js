const EventsService = require('../services/EventsService')

class EventsController {
  static async createEvent(req, res) {
    try {
      const result = await EventsService.createEvent(req.body)
      return res.status(200).json(result)
    } catch (error) {
      const status = 404
      return res.status(status).json({ message: error.message })
    }
  }

  static async events(req, res) {
    try {
      const result = await EventsService.listagem()
      return res.status(200).json(result)
    } catch (error) {
      return res.status(404).json({ message: error.message }).id
    }
  }

  static async deleteEvents(req, res) {
    try {
      const result = await EventsService.deleteEvent(req.params.id)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(404).json({ message: error.message })
    }
  }

  static async updateEvent(req, res) {
    try {
      const { id } = req.params
      const { evento, data } = req.body
      const result = await EventsService.updateEvent(id, evento, data)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(404).json({ message: error.message })
    }
  }

  static async getSubscribes(req, res) {
    try {
      const result = await EventsService.getSubscribes()
      return res.status(200).json(result)
    } catch (error) {
      return res.status(404).json({ message: error.message })
    }
  }

  static async subscribeEvent(req, res) {
    try {
      const { idEvent, idUser } = req.params
      const result = await EventsService.subscribeEvent(idEvent, idUser)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(404).json({ message: error.message })
    }
  }

  static async unsubscribeEvent(req, res) {
    try {
      const { idEvent, idUser } = req.params
      const result = await EventsService.unsubscribeEvent(idEvent, idUser)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(404).json({ message: error.message })
    }
  }
}

module.exports = EventsController
