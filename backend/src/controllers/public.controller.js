const EventsService = require("../services/eventsService");

class PublicController {
  static async events(req, res) {
    try {
      const result = await EventsService.listagem();
      return res.status(200).json(result); 
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
}

module.exports = PublicController;
