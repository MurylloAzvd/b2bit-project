import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Login from './Login'
import Home from './Home'

function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;