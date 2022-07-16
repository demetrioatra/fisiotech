import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Dashboard from './pages/Dashboard'
import Paciente from './pages/Paciente'
import Plano from './pages/Plano'
import Usuario from './pages/Usuario'
import Login from './pages/Login'
import Error from './pages/Error'

export default function RoutesAp() {
    return (
        <Routes>
            <Route path = '/' element = { <Layout /> } >
                <Route path = '/dashboard' element = { <Dashboard /> } />
                <Route path = '/paciente' element = { <Paciente /> } />
                <Route path = '/plano' element = { <Plano /> } />
                <Route path = '/usuario' element = { <Usuario /> } />
            </Route>
            <Route path = '/login'  element = { <Login /> } />
            <Route path = '*' element = { <Error /> } />
        </Routes>
    )
}
