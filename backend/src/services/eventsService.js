const EventModel = require("../models/eventModel");

class EventsService {

  static async listagem() {
    const listagem = await EventModel.listagem();
    if (listagem.length == 0) {
      throw new Error("Nenhum evento encontrado");
    }

    return { listagem };
  }

}
module.exports = EventsService;
