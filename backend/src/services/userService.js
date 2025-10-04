const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')

class UserService {
  /**
   * Serviço de usuários: regras de negócio relacionadas a usuário.
   * @module services/UserService
   */

  /**
   * Valida o nome do usuário.
   * @param {string} email - Nome informado
   * @param {string} password - Senha informado
   * @returns {boolean} true se válido
   * @throws {Error} Se senha inválida ou usuário não encontrado
   */
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
      { email: user.email, role: user.role, id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
    )
    return { token, user: { email: user.email, role: user.role, id: user.id } }
  }

  /**
   * Retorna array de usuários.
   * @returns {Array} Array de usuários
   * @throws {Error} Se nenhum usuário encontrado
   */
  static async listagem() {
    const listagem = await UserModel.listagem()
    if (listagem.length == 0) {
      throw new Error('Nenhum usuário encontrado')
    }

    return { listagem }
  }

  /**
   * Insere novo usuário.
   * @param {Array} form - Array com email, senha e role do usuário
   * @returns {Array} Array de resultado do DB
   * @throws {Error} Se acontecer erro ao adicionar usuário
   */
  static async createUser(form) {
    if (form.email == null || form.password == null || form.role == null) {
      throw new Error('Dados incorretos, verifique e tente novamente!')
    }
    const hashed = await bcrypt.hash(form.password, 10)
    form.password = hashed
    const result = await UserModel.createUser(
      form.email,
      form.password,
      form.role,
    )
    if (result.affectedRows == 0) {
      throw new Error('Erro ao adicionar usuário!')
    }

    return { result }
  }

  /**
   * Atualiza usuário.
   * @param {Number} id - ID do usuário
   * @param {String} email - Email do usuário
   * @param {String} password - Senha do usuário
   * @returns {Array} Result com dados de resultado do DB
   * @throws {Error} Se acontecer erro ao alterar usuário ou quando não encontrado nenhum usuário com o ID informado
   */
  static async updateUser(id, email, password, role) {
    try {
      const hashed = await bcrypt.hash(password, 10)
      password = hashed
      const result = await UserModel.updateUser(id, email, password, role)

      if (result.affectedRows === 0) {
        throw new Error('Usuário não encontrado')
      }

      return result
    } catch (error) {
      console.error(error)
      throw new Error('Erro ao alterar usuário')
    }
  }

  /**
   * Deleta usuário.
   * @param {Number} id - ID do usuário
   * @returns {Array} result com dados de resultado do DB
   * @throws {Error} Se acontecer erro ao excluir usuário ou quando não encontrado nenhum usuário com o ID informado
   */
  static async deleteUsers(id) {
    try {
      const result = await UserModel.deleteUsers(id)

      if (result.affectedRows === 0) {
        throw new Error('Usuário não encontrado')
      }

      return result
    } catch (error) {
      console.error(error)
      throw new Error('Erro ao excluir o usuário')
    }
  }
}

module.exports = UserService
