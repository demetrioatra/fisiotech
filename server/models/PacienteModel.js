const mongoose = require('mongoose')

// Schema do paciente
const Schema = new mongoose.Schema ({
    nome: String,
    telefone: String,
    idade: String,
    email: String,
    origemId: String
})

// Export do schema do paciente
module.exports = mongoose.model('Paciente', Schema)