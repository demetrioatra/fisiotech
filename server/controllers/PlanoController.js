const Plano = require('../models/PlanoModel')

// Controlador de plano
const PlanoController = {

    // Método create
    async createPlano(req, res) {
        // Guarda o corpo da requisição
        const bodyData = req.body

        try {
            const plano = await Plano.create(bodyData)
            console.log('Plano criado com sucesso!')
            return res.status(200).json(plano)
        } catch (err) {
            console.log('Falha ao criar plano...')
            return res.status(400).json(err)
        }
    },

    // Método readAll
    async getPlanos(req, res) {
        const lookup = {
            $lookup: {
                from: 'pacientes',
                localField: 'pacienteId',
                foreignField: '_id',
                as: 'paciente'
            }
        }
        try {
            const planos = await Plano.aggregate([lookup])
            console.log('Planos listados com sucesso!')
            return res.status(200).json(planos)
        } catch (err) {
            console.log('Falha ao listar planos...')
            return res.status(400).json(err)
        }
    },

    // Método readById
    async getPlanoById(req, res) {
        // Guarda o id passado como parâmetro
        const { plano_id } = req.params

        try {
            const plano =
                await Plano.findById(plano_id)
            console.log('Plano listado com sucesso!')
            return res.status(200).json(plano)
        } catch (err) {
            console.log('Falha ao listar plano...')
            return res.status(400).json(err)
        }
    },

    // Método update
    async updatePlano(req, res) {
        // Guarda o corpo e o id passados na requisição
        const bodyData = req.body
        const { plano_id } = req.params

        try {
            const plano =
                await Plano.findByIdAndUpdate(plano_id, bodyData, { new: true })
            console.log('Plano alterado com sucesso!')
            return res.status(200).json(plano)
        } catch (err) {
            console.log('Falha ao alterar plano...')
            return res.status(400).json(err)
        }
    },

    // Método delete
    async deletePlano(req, res) {
        // Guarda o id passado como parâmetro
        const { plano_id } = req.params

        try {
            const plano =
                await Plano.findByIdAndDelete(plano_id)
            console.log('Plano removido com sucesso!')
            return res.status(200).json(plano)
        } catch (err) {
            console.log('Falha ao remover plano...')
            return res.status(400).json(err)
        }
    }
}

// Export do controlador de plano
module.exports = PlanoController