import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom/cjs/react-router-dom";
import Home from "./pages";

function Routes() {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
            
        </div>

    );
}

export default Routes;