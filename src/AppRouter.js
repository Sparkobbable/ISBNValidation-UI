import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ValidateIsbn from "./components/validateisbn/ValidateIsbn";

export default function AppRouter() {
    return <>
        <Router>
            <Switch>
                <Route path="/validateIsbn">
                    <ValidateIsbn />
                </Route>
                <Route path="/createProof">
                    
                </Route>
                <Route path="/createIsbn">
                    
                </Route>
                <Route path="*">
                    <ValidateIsbn />
                </Route>
            </Switch>
        </Router>
    </>;
}