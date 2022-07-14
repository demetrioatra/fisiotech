import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Plano from './pages/Plano'
import SignIn from './pages/SignIn'
import Error from './pages/Error'

function RoutesApp () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = '/home' component = { Home } />
                <Route exact path = '/plano' component = { Plano } />
                <Route exact path = '/login'  component = { SignIn } />
                <Route exact path = '*' component = { Error } />
            </Switch>
        </BrowserRouter>
    )
}

export default RoutesApp