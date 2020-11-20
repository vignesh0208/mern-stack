import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss"

import AdminHome from "./template/Admin/home"
import AdminRegister from "./template/Admin/auth/register";
import AdminLogin from "./template/Admin/auth/login";

import Home from "./template/User/home"
import Register from "./template/User/auth/register";
import Login from "./template/User/auth/login";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/admin" component={AdminHome} />
                    <Route exact path="/admin/register" component={AdminRegister} />
                    <Route exact path="/admin/login" component={AdminLogin} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                </div>
            </Router>
        );
    }
}
export default App;