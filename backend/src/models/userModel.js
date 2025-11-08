const prisma = require("../.././prismaClient");

class UserModel {
  static async findByEmail(email) {
    const rows = await prisma.users.findUnique({
      where: { email: email }
    });

    return rows
  }

  static async listagem() {
    const rows = await prisma.users.findMany();
    return rows
  }

  static async createUser(email, password, role) {
    const results = await prisma.users.create({
      data: {
        email: email,
        password: password,
        role: role
      }
    });
    return results
  }

  static async updateUser(id, email, password, role) {
    const results = await prisma.users.update({
      where: { id: parseInt(id) }, 
      data: { email: email, password: password, role: role }
    });
    return results
  }

  static async deleteUsers(id) {
    const results = await prisma.users.delete({
      where: { id: parseInt(id) }
    });
    return results
  }
}

module.exports = UserModel
