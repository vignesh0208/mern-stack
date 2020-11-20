import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss"

import AdminRegister from "./template/Admin/register";
import AdminLogin from "./template/Admin/login";

import MainContent from "./template/main-content"
import Register from "./template/User/register";
import Login from "./template/User/login";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/admin/register" component={AdminRegister} />
                        <Route path="/admin/login" component={AdminLogin} />
                        <Route path="/main" component={MainContent} />
                        <Route path="/register" component={Register} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;