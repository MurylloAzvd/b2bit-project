import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Login from './Login'
import Home from './Home'
import { isAuthenticated } from "./auth"

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