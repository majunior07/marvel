import { BrowserRouter, Switch, Route, Link } from "react-router-dom/cjs/react-router-dom";
import Home from "./src/component/Home";

function Routes() {
    return(
        

        <main> 
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </main>

    )
}

export default Routes;