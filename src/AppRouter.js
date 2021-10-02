import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateProof from "./components/createProof/CreateProof";
import ValidateIsbn from "./components/validateisbn/ValidateIsbn";

export default function AppRouter() {
    return <>
        <Router>
            <Switch>
                <Route path="/validateIsbn">
                    <ValidateIsbn />
                </Route>
                <Route path="/createProof">
                    <CreateProof />
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