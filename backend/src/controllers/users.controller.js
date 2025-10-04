const UsersService = require('../services/userService')

class UsersController {
  static async createUser(req, res) {
    try {
      const result = await UsersService.createUser(req.body)
      return res.status(200).json(result)
    } catch (error) {
      const status = 404
      return res.status(status).json({ message: error.message })
    }
  }

  static async users(req, res) {
    try {
      const result = await UsersService.listagem()
      return res.status(200).json(result)
    } catch (error) {
      return res.status(404).json({ message: error.message }).id
    }
  }

  static async deleteUsers(req, res) {
    try {
      const result = await UsersService.deleteUsers(req.params.id)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(404).json({ message: error.message })
    }
  }

  static async updateUser(req, res) {
    try {
      const { id } = req.params
      const { email, password, role } = req.body
      const result = await UsersService.updateUser(id, email, password, role)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(404).json({ message: error.message })
    }
  }
}

module.exports = UsersController
