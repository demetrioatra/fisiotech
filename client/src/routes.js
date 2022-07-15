import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Paciente from './pages/Paciente'
import Plano from './pages/Plano'
import Usuario from './pages/Usuario'
import Error from './pages/Error'
import Dashboard from './pages/Dashboard'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = '/home' component = { Home } />
                <Route exact path = '/paciente' component = { Paciente } />
                <Route exact path = '/plano' component = { Plano } />
                <Route exact path = '/usuario' component = { Usuario } />
                <Route exact path = '/login'  component = { Login } />
                <Route exact path = '/dashboard' component = {Dashboard} />
                <Route exact path = '*' component = { Error } />
            </Switch>
        </BrowserRouter>
    )
}
