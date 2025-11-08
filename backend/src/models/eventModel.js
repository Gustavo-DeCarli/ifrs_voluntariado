const prisma = require("../.././prismaClient");


class EventModel {

  static async listagem() {
    const rows = await prisma.events.findMany();
    return rows
  }

  static async createEvent(evento, data) {
    const results = await prisma.events.create({
      data: {
        nome: evento,
        data: new Date(data + 'T00:00:00')
      }
    });
    return results
  }

  static async deleteEvents(id) {
    const results = await prisma.events.delete({
      where: { id: parseInt(id) }
    });
    return results
  }

  static async updateEvent(id, evento, data) {
    const results = await prisma.events.update({
      where: { id: parseInt(id) }, 
      data: { nome: evento, data: new Date(data + 'T00:00:00') }
    });
    return results
  }

  static async subscribeEvent(idEvento, idUser) {
    const results = await prisma.subsevents.create({
      data: {
        idEvent: parseInt(idEvento),
        idUser: parseInt(idUser)
      }
    });
    return results
  }

  static async unsubscribeEvent(idEvento, idUser) {
    const results = await prisma.subsevents.deleteMany({
      where: { idEvent: parseInt(idEvento), idUser: parseInt(idUser) }
    });
    return results
  }

  static async getSubscribes() {
    const results = await prisma.subsevents.findMany();
    return results
  }
}

module.exports = EventModel
