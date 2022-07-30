import { StylesProvider } from "@material-ui/core";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Pricing from '../components/Pricing'
import Landing from '../components/Landing'

function App({history}) {
    return (
        <StylesProvider>
            <Router history={history}>
                <Switch>
                    <Route exact path='/pricing' component={Pricing}/>
                    <Route exact path='/' component={Landing}/>
                </Switch>
            </Router>
        </StylesProvider>
    )
}
export default App