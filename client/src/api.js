import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3500/'
})

// Origem
export const getOrigem = async () => {
    return api.get('/origens');
}

// paciente
export const getPaciente = async () => {
    return api.get('/pacientes');
}

// paciente
export const getPatologia = async () => {
    return api.get('/patologias');
}