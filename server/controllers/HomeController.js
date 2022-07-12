const Pacientes = require('../models/PacienteModel')

// Controlador Home
// Contém o método gerador dos indicadores
const HomeController = {

    // Método 
    // 
    async countOrigins(req, res) {
        // Guarda a lógica para agrupar patologias
        const group = {
            $group: {
                _id: '$origemId',
                count: { $sum: 1 }
        }}

        try {
            let indicadorOrigens = await Pacientes.aggregate([group])
            console.log('')
            return res.status(200).json(indicadorOrigens)
        } catch (err) {
            console.log('Patologias ')
            return res.status(400).json(err)
        }
    }
}

// Export do controlador home
module.exports = HomeController