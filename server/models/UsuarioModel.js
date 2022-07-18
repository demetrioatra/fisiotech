const mongoose = require('mongoose')
const opts = { toJSON: { virtuals: true } };


// Schema de usuário
const Schema = new mongoose.Schema ({
    nome: String,
    email: String,
    password: String
}, opts)

// Export do schema de usuário
module.exports = mongoose.model('Usuario', Schema)