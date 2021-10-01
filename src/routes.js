import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Login from './pages/Login'
import Home from './pages/Home'
import { isAuthenticated } from "./services/auth"

function Routes() {

    const PrivateRoute = props => isAuthenticated()
        ? <Route {...props} />
        : <Redirect to="/login" />

    const PublicRoute = props => isAuthenticated()
        ? <Redirect to="/" />
        : <Route {...props} />

    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute path="/login" component={Login} />
                <PrivateRoute path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;