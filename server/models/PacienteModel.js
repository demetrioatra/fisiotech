const mongoose = require('mongoose')
const opts = { toJSON: { virtuals: true } };


// Schema do paciente
const Schema = new mongoose.Schema ({
    nome: String,
    telefone: String,
    idade: String,
    email: String,
    origemId: String
}, opts)

// Export do schema do paciente
module.exports = mongoose.model('Paciente', Schema)