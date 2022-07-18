const HomeController = require('./controllers/HomeController')
const PacienteController = require('./controllers/PacienteController')
const PlanoController = require('./controllers/PlanoController')
const OrigemController = require('./controllers/OrigemController')
const PatologiaController = require('./controllers/PatologiaController')
const UsuarioController = require('./controllers/UsuarioController')
const AuthController = require('./controllers/AuthController')
const swaggerFile = require('./docs/swagger.json')
const swaggerUI = require('swagger-ui-express')
const { Router } = require('express')
const routes = Router()

// Rota para desafios
routes.get('/', HomeController.countOrigins)

//Google Authenticate Oauth2
require('dotenv').config()
const session = require('express-session');
const passport = require('passport');
require('./controllers/AuthController');

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
  }
  
  routes.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
  routes.use(passport.initialize());
  routes.use(passport.session());
  
  routes.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
  ));
  
  routes.get('/google/callback',
  passport.authenticate( 'google', {
    successRedirect: 'http://localhost:3000/dashboard',
    failureRedirect: '/auth/google/failure'
  })
  );
  
  routes.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Goodbye!');
  });
  
  routes.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
  });

// Rotas para paciente
routes.post('/pacientes', PacienteController.createPaciente)
routes.get('/pacientes', PacienteController.getPacientes)
routes.get('/pacientes/:paciente_id', PacienteController.getPacienteById)
routes.put('/pacientes/:paciente_id', PacienteController.updatePaciente)
routes.delete('/pacientes/:paciente_id', PacienteController.deletePaciente)

// Rotas para plano
routes.post('/planos', PlanoController.createPlano)
routes.get('/planos', PlanoController.getPlanos)
routes.get('/planos/:plano_id', PlanoController.getPlanoById)
routes.put('/planos/:plano_id', PlanoController.updatePlano)
routes.delete('/planos/:plano_id', PlanoController.deletePlano)

// Rotas para origem
routes.post('/origens', OrigemController.createOrigem)
routes.get('/origens', OrigemController.getOrigens)
routes.get('/origens/:origem_id', OrigemController.getOrigemById)
routes.put('/origens/:origem_id', OrigemController.updateOrigem)
routes.delete('/origens/:origem_id', OrigemController.deleteOrigem)

// Rotas para patologia
routes.post('/patologias', PatologiaController.createPatologia)
routes.get('/patologias', PatologiaController.getPatologias)
routes.get('/patologias/:patologia_id', PatologiaController.getPatologiaById)
routes.put('/patologias/:patologia_id', PatologiaController.updatePatologia)
routes.delete('/patologias/:patologia_id', PatologiaController.deletePatologia)

// Rotas para usuário
routes.post('/usuarios', UsuarioController.createUsuario)
routes.get('/usuarios', UsuarioController.getUsuarios)
routes.get('/usuarios/:usuario_id', UsuarioController.getUsuarioById)
routes.put('/usuarios/:usuario_id', UsuarioController.updateUsuario)
routes.delete('/usuarios/:usuario_id', UsuarioController.deleteUsuario)

// Rota para autenticação
routes.post('/auth', AuthController.createToken)

// Configuração da rota do swagger
routes.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))

// Export das rotas
module.exports = routes