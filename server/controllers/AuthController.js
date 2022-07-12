const Usuario = require('../models/UsuarioModel')
const jwt = require('jsonwebtoken')

// Controlador de autenticação
// Contém as funções para autenticação de usuario no sistema
const AuthController = {

    // Método create
    // Cria um token válido para operações
    async createToken(req, res) {
        // guarda o corpo da requisição
        const { email, password } = req.body
        
        try{
            const usuario = await Usuario.find({ email, password })
            const token = jwt.sign({ usuario: usuario }, process.env.JWT_SECRET)
            console.log('Token criado com sucesso!')
            return res.status(200).json(token)
        } catch(err) {
            console.log('Falha ao criar token...')
            return res.status(400).json(err)
        }
    },

    // 
    authenticate(req, res, next) {
        // 
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (token == null) return res.sendStatus(401)

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.sendStatus(403)
            req.user = user
            next()
        })
    },

    async isLoggedIn(req, res, next) {
        req.user ? next() : res.sendStatus(401)
    },

    async google(req, res) {
        return res.send('<a href="/auth/google">Authenticate with Google</a>')
    },

    async authFailure(req, res) {
        return res.send('something went wrong...')
    },

    async logout(req, res) {
        return req.logout(function (err) {
            req.session.destroy()
            res.send('Goodbye!')
          if (err) {
            return next(err)
          }
        })
    },

    async protected(req, res) {
        return res.send(`Hello ${ req.user.displayName }`)
    }
}

// Export do controlador de autenticação
module.exports = AuthController