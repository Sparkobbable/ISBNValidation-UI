import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateIsbn from "./components/createIsbn/CreateIsbn";
import CreateProof from "./components/createProof/CreateProof";
import ValidateIsbn from "./components/validateisbn/ValidateIsbn";
import History from "./components/history/History";

export default function AppRouter() {
    const [history, setHistory] = useState(new Map());
    return <>
        <Router>
            <Switch>
                <Route path="/validateIsbn">
                    <ValidateIsbn history={history} setHistory={setHistory}/>
                </Route>
                <Route path="/createProof">
                    <CreateProof history={history} setHistory={setHistory}/>
                </Route>
                <Route path="/createIsbn">
                    <CreateIsbn history={history} setHistory={setHistory}/>
                </Route>
                <Route path="/history">
                    <History history={history}/>
                </Route>
                <Route path="*">
                    <ValidateIsbn history={history} setHistory={setHistory}/>
                </Route>
            </Switch>
        </Router>
    </>;
}