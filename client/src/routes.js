import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Dash from './pages/Dashboard'
import Doc from './pages/Doc'
import Paciente from './pages/Paciente'
import Plano from './pages/Plano'
import Usuario from './pages/Usuario'
import Login from './pages/Login'
import Error from './pages/Error'
import pacientePost from './pages/Paciente/pacientePost'
import planoPost from './pages/Plano/planoPost'

export default function RoutesAp() {
    return (
        <Routes>
            <Route path = '/' element = { <Layout /> } >
                <Route path = '/dashboard' element = { <Dash /> } />
                <Route path = '/doc' element = { <Doc /> } />
                <Route path = '/paciente' element = { <Paciente /> } />
                <Route path = '/plano' element = { <Plano /> } />
                <Route path = '/usuario' element = { <Usuario /> } />
                <Route path = '/pacientepost' element = { <pacientePost /> } />
                <Route path = '/planopost' element = { <planoPost /> } />
            </Route>
            <Route path = '/login'  element = { <Login /> } />
            <Route path = '*' element = { <Error /> } />
        </Routes>
    )
}
