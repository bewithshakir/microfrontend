import { StylesProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Pricing from '../components/Pricing'
import Landing from '../components/Landing'

function App() {
    return (
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/pricing' component={Pricing}/>
                    <Route exact path='/' component={Landing}/>
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    )
}
export default App