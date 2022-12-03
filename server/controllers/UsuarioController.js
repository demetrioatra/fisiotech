const Usuario = require('../models/UsuarioModel')

// Controlador do usuário
const UsuarioController = {

    // Método create
    async createUsuario(req, res) {
        // Guarda o corpo da requisição
        const { nome, email, password, status } = req.body

        try {
            const usuario = await Usuario.create({ nome, email, password, status })
            console.log('Usuário criado com sucesso!')
            return res.status(200).json(usuario)
        } catch (err) {
            console.log('Falha ao criar usuário...')
            return res.status(400).json(err)
        }
    },

    // Método readAll
    async getUsuarios(req, res) {
        try {
            const usuarios = await Usuario.find()
            console.log('Usuários listados com sucesso!')
            return res.status(200).json(usuarios)
        } catch (err) {
            console.log('Falha ao listar usuários...')
            return res.status(400).json(err)
        }
    },

    // Método readById
    async getUsuarioById(req, res) {
        // Guarda o id passado na requisição
        const { usuario_id } = req.params

        try {
            const usuario =
                await Usuario.findById(usuario_id)
            console.log('Usuário listado com sucesso!')
            return res.status(200).json(usuario)
        } catch (err) {
            console.log('Falha ao listar usuário...')
            return res.status(400).json(err)
        }
    },

    // Método update
    async updateUsuario(req, res) {
        // Guarda o corpo e o id passados na requisição
        const { nome, email, password } = req.body
        const { usuario_id } = req.params

        try {
            const usuario =
                await Usuario.findByIdAndUpdate(usuario_id, { nome, email, password }, { new: true })
            console.log('Usuário alterado com sucesso!')
            return res.status(200).json(usuario)
        } catch (err) {
            console.log('Falha ao alterar usuário...')
            return res.status(400).json(err)
        }
    },

    // Método delete
    async deleteUsuario(req, res) {
        // Guarda o id passado na requisição
        const { usuario_id } = req.params

        try {
            const usuario =
                await Usuario.findByIdAndDelete(usuario_id)
            console.log('Usuário removido com sucesso!')
            return res.status(200).json(usuario)
        } catch (err) {
            console.log('Falha ao remover usuário...')
            return res.status(400).json(err)
        }
    }
}

// Export do controlador do usuário
module.exports = UsuarioController