import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Plano from './pages/Plano'
import SignIn from './pages/SignIn'
import Error from './pages/Error'

function RoutesApp () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' component = { Home } />
                <Route path = '/paciente/:id' />
                <Route exact path = '/plano' component = { Plano } />
                <Route path = '/plano/:id' />
                <Route path = '/origem/:id' />
                <Route path = '/patologia/:id' />
                <Route path = '/usuario/:id' />
                <Route exact path = '/signin'  component={ SignIn}/>
                <Route path = '*' element = { <Error/> } />
            </Switch>
        </BrowserRouter>
    )
}

export default RoutesApp