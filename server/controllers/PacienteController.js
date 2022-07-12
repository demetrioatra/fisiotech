const Paciente = require('../models/PacienteModel')

// Controlador do paciente
const PacienteController = {
    
    // Método create
    async createPaciente(req, res) {
        // Guarda o corpo da requisição
        const bodyData = req.body

        try {
            const paciente = await Paciente.create(bodyData)
            console.log('Paciente criado com sucesso!')
            return res.status(200).json(paciente)
        } catch (err) {
            console.log('Falha ao criar paciente...')
            return res.status(400).json(err)
        }
    },

    // Método readAll
    async getPacientes(req, res) {
        try {
            const pacientes = await Paciente.find()
            console.log('Pacientes listados com sucesso!')
            return res.status(200).json(pacientes)
        } catch (err) {
            console.log('Falha ao listar pacientes...')
            return res.status(400).json(err)
        }
    },

    // Método readById
    async getPacienteById(req, res) {
        // Guarda o id passado na requisição
        const { paciente_id } = req.params
        
        try {
            const paciente =
                await Paciente.findById(paciente_id)
            console.log('Paciente listado com sucesso!')
            return res.status(200).json(paciente)
        } catch (err) {
            console.log('Falha ao listar paciente...')
            return res.status(400).json(err)
        }
    },

    // Método update
    async updatePaciente(req, res) {
        // Guarda o corpo e o id passados na requisição
        const bodyData = req.body
        const { paciente_id } = req.params

        try {
            const paciente =
                await Paciente.findByIdAndUpdate(paciente_id, bodyData, { new: true })
            console.log('Paciente alterado com sucesso!')
            return res.status(200).json(paciente)
        } catch (err) {
            console.log('Falha ao alterar paciente...')
            return res.status(400).json(err)
        }
    },

    // Método delete
    async deletePaciente(req, res) {
        // Guarda o id passado na requisição
        const { paciente_id } = req.params

        try {
            const paciente =
                await Paciente.findByIdAndDelete(paciente_id)
            console.log('Paciente removido com sucesso!')
            return res.status(200).json(paciente)
        } catch (err) {
            console.log('Falha ao remover paciente...')
            return res.status(400).json(err)
        }
    }
}

// Export do controlador do paciente
module.exports = PacienteController