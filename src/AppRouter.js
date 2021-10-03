import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateIsbn from "./components/createIsbn/CreateIsbn";
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
                    <CreateIsbn />
                </Route>
                <Route path="*">
                    <ValidateIsbn />
                </Route>
            </Switch>
        </Router>
    </>;
}