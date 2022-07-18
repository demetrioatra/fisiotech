const Planos = require('../models/PlanoModel')

// Controlador Home
const HomeController = {

    // Método
    async countPatologias(req, res) {
        // Guarda a lógica para agrupar patologias
        const group = {
            $group: {
                _id: '$ficha.patologiaId',
                count: { $sum: 1 }
        }}

        try {
            let indicadorPatologias = await Planos.aggregate([group])
            console.log('Sucesso!')
            return res.status(200).json(indicadorPatologias)
        } catch (err) {
            console.log('Falha...')
            return res.status(400).json(err)
        }
    }
}

// Export do controlador home
module.exports = HomeController
