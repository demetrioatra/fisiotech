const Origem = require('../models/OrigemModel')

// Controlador de origem
const OrigemController = {

    // Método create
    async createOrigem(req, res) {
        // Guarda o corpo da requisição
        const bodyData = req.body

        try {
            const origem = await Origem.create(bodyData)
            console.log('Origem criada com sucesso!')
            return res.status(200).json(origem)
        } catch (err) {
            console.log('Falha ao criar origem...')
            return res.status(400).json(err)
        }
    },

    // Método readAll
    async getOrigens(req, res) {
        try {
            const origens = await Origem.find()
            console.log('Origens listadas com sucesso!')
            return res.status(200).json(origens)
        } catch (err) {
            console.log('Falha ao listar origens...')
            return res.status(400).json(err)
        }
    },

    // Método readById
    async getOrigemById(req, res) {
        // Guarda o id passado como parâmetro
        const { origem_id } = req.params

        try {
            const origem =
                await Origem.findById(origem_id)
            console.log('Origem listada com sucesso!')
            return res.status(200).json(origem)
        } catch (err) {
            console.log('Falha ao listar origem...')
            return res.status(400).json(err)
        }
    },

    // Método update
    async updateOrigem(req, res) {
        // Guarda o corpo e id passados na requisição
        const bodyData = req.body
        const { origem_id } = req.params

        try {
            const origem =
                await Origem.findByIdAndUpdate(origem_id, bodyData, { new: true })
            console.log('Origem alterada com sucesso!')
            return res.status(200).json(origem)
        } catch (err) {
            console.log('Falha ao alterar origem...')
            return res.status(400).json(err)
        }
    },

    // Método delete
    async deleteOrigem(req, res) {
        // Guarda o id passado como parâmetro
        const { origem_id } = req.params

        try {
            const origem =
                await Origem.findByIdAndDelete(origem_id)
            console.log('Origem removida com sucesso!')
            return res.status(200).json(origem)
        } catch (err) {
            console.log('Falha ao remover origem...')
            return res.status(400).json(err)
        }
    }
}

// Export do controlador de origem
module.exports = OrigemController