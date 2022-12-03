const mongoose = require('mongoose')
const opts = { toJSON: { virtuals: true } };

// Schema do paciente
const Schema = new mongoose.Schema ({
    nome: String,
    telefone: String,
    dataNascimento: Date,
    email: String,
    origemId: {
      type: mongoose.Schema.Types.ObjectId
    }
}, opts)

// Export do schema do paciente
module.exports = mongoose.model('Paciente', Schema)