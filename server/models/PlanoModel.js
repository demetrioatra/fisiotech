const mongoose = require('mongoose')
const opts = { toJSON: { virtuals: true } };


// Schema de plano
const Schema = new mongoose.Schema ({
    pacienteId: String,
    ficha: [{
        patologiaId: String,
        atencao: String,
        qtd_sessoes: String,
        vl_sessao: String,
        evolucao: String,
        pagamento: String,
        sessoes: [{
            data: Date,
            hora: String,
            fisioterapeuta: String,
            pago: Boolean,
            compareceu: Boolean
        }]
    }]
}, opts)

// Export do schema de plano
module.exports = mongoose.model('Plano', Schema)