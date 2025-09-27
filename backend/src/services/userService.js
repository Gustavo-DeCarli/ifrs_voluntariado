const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')

class UserService {
  static async loginUser({ email, password }) {
    const user = await UserModel.findByEmail(email)
    if (!user) {
      throw new Error('Usuário não encontrado')
    }
    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Senha inválida')
    }
    const token = jwt.sign(
      { email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
    )
    return { token, user: { email: user.email, role: user.role } }
  }
}

module.exports = UserService
