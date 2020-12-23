import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "../pages/Home";
import Presentation from "../pages/Presentation";
import MediaCollection from "../pages/MediaCollection";
import ScriptEditor from "../pages/ScriptEditor";

export default function Routes() {
    return (
        <Switch>
            <Route path="/present">
                <Presentation />
            </Route>
            <Route path="/media">
                <MediaCollection />
            </Route>
            <Route path="/edit">
                <ScriptEditor />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}