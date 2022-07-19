import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Dash from './pages/Dashboard'
import Paciente from './pages/Paciente'
import Plano from './pages/Plano'
import Usuario from './pages/Usuario'
import Login from './pages/Login'
import Error from './pages/Error'
import PacientePost from './pages/Paciente/pacientePost'
import PlanoPost from './pages/Plano/planoPost'
import UsuarioPost from './pages/Usuario/usuarioPost'

export default function RoutesAp() {
    return (
        <Routes>
            <Route path = '/' element = { <Layout /> } >
                <Route path = '/dashboard' element = { <Dash /> } />
                <Route path = '/paciente' element = { <Paciente /> } />
                <Route path = '/plano' element = { <Plano /> } />
                <Route path = '/usuario' element = { <Usuario /> } />
                <Route path = '/plano/post' element = { <PlanoPost /> } />
                <Route path = '/paciente/post' element = { <PacientePost /> } />
                <Route path = '/usuario/post' element = { <UsuarioPost /> } /> 
            </Route>
            <Route path = '/login'  element = { <Login /> } />
            <Route path = '*' element = { <Error /> } />
        </Routes>
    )
}
