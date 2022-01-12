import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import FAQList from "./FAQList";
import LauncherList from "./LauncherList";
import ShowLauncher from "./ShowLauncher";
import StarwarsShow from "./StarwarsShow"

const App = (props) => {
    return (

        <BrowserRouter>

        <div className="links">
            <Link to="/launchers">Launchers</Link>
            <Link to="/launchers/space">Launchers from the stars</Link>
            <Link to="/">FAQs</Link>
        </div>

        <Switch>
        <Route exact path="/" component={FAQList} />
        <Route exact path="/launchers" component={LauncherList} />
        <Route exact path="/launchers/space" component={StarwarsShow} />
        <Route exact path="/launchers/:id" component={ShowLauncher} />
        </Switch>

        </BrowserRouter>
    )
}

export default hot(App)