const mongoose = require('mongoose')

// Schema de usuário
const Schema = new mongoose.Schema ({
    email: String,
    password: String
})

// Export do schema de usuário
module.exports = mongoose.model('Usuario', Schema)