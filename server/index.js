require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const AuthController = require('./controllers/AuthController')
// Mongoose
const mongoose = require('mongoose')
// Express
const express = require('express')
const app = express()
const routes = require('./routes')
// Requires necessários para o oauth
const passport = require('passport')
const session = require('express-session')
const GoogleStrategy = require('passport-google-oauth2').Strategy

app.use(express.json())
app.use(cors())
app.use(routes)
app.use(bodyParser.urlencoded({ extended: false }))
// Configuração do oauth
app.use(session({ secret: 'cats' }))
app.use(passport.initialize(), passport.session())

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3500/google/callback',
    passReqToCallback: true
    },
    function(req, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
))

passport.serializeUser(function(user, done) {
    done(null, user)
})

passport.deserializeUser(function(user, done) {
    done(null, user)
})


// Chamada do método de conexão
connection()
startServer()

// Método connection
// Faz a conexão com o banco de dados MongoDB
async function connection () {
    try {
        mongoose.connect
            (process.env.DB_FISIOTECH, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Conexão com mongodb realizada com sucesso!')
    } catch (err) {
        console.log('Falha ao realizar conexão com mongodb...')
        console.log(err)
    }
}

async function startServer () {
    try {
        app.listen(3500)
        console.log('Servidor inciado com sucesso!')
    } catch (err) {
        console.log('Falha ao iniciar servidor...')
        console.log(err)
    }
}

// Rotas
app.get('/google', AuthController.google)

app.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] })
)

app.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/protected',
        failureRedirect: '/auth/failure',
    })
)

app.get('/auth/failure', AuthController.authFailure)
app.get('/logout', AuthController.logout)
app.get('/protected', AuthController.isLoggedIn, AuthController.protected)