const swaggerAutogen = require('swagger-autogen')()
const outputFile = './docs/swagger.json'
const endpointsFiles = ['./index.js']
const data = {
    info: {
        title: "Fisiotech",
        description: "REST API desenvolvida com MongoDB, NodeJs, JavaScript, Mongoose, Express, dotenv, JWT" +
            "\n[github.com/demetrioatra/fisiotech](https://github.com/demetrioatra/fisiotech)",
        version: "1.8.1"
    },
    host: "localhost:3500",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json', 'application/xml'],
    produces: ['application/json', 'application/xml'],
    tags: [{
        "name": "/",
        "description": "Desafios propostos pelo case"
    },{
        "name": "/pacientes",
        "description": "Funções relativas aos pacientes da clínica"
    },{
        "name": "/planos",
        "description": "Funções relativas aos planos dos pacientes"
    },{
        "name": "/origens",
        "description": "Funções relativas às origens"
    },{
        "name": "/patologias",
        "description": "Funções relativas às patologias"
    },{
        "name": "/usuarios",
        "description": "Funções relativas aos usuários da clínica"
    },{
        "name": "/auth",
        "description": "Funções relativas aos processos de autenticação de token"
    }],
    securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "header"
        },
        fisiotech_auth: {
            type: "oauth2",
            authorizationUrl: "http://localhost:3500/auth",
            flow: 'implicit'
        }
    },
    definitions: {
        Pacientes: {
            nome: 'Marina',
            telefone: '11 99999-2346',
            idade: '29',
            email: 'marina@gmail.com',
            origemId: '62c35da7c93782ae93bf361f',
        },
        Planos: {
            pacienteId: '62b090279a71c675df1b7f19',
            ficha: [{
                patologiaId: '62c35f97c93782ae93bf3632',
                atencao: 'media',
                qtd_sessoes: '10',
                vl_sessao: '124.9',
                evolucao: '-',
                pagamento: '499.99',
                sessoes: [{
                    data: '2023-01-05',
                    hora: '10:00h',
                    fisioterapeuta: 'Renato',
                    pago: true,
                    compareceu: true
                }]
            }]
        },
        Origens: {
            descricao: "Indicação"
        },
        Patologias: {
            descricao: "Fraturas"
        },
        Usuarios: {
            email: "fisio1@fisiotech.com",
            password: "iloveortopedia"
        },
        Auth: {
            email: "fisio1@fisiotech.com",
            password: "iloveortopedia"
        }
    }
}

// Chamada do método autoGenerate
generateDoc()

// Método autoGenerate
async function generateDoc() {
    try {
        await swaggerAutogen(outputFile, endpointsFiles, data)
        console.log('Documento swagger gerado com sucesso!')
    } catch (err) {
        console.log('Falha ao gerar documento swagger...')
        console.log(err)
    }
}