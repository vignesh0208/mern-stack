import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss"

import Home from "./components/home"
import Register from "./components/auth/register";
import Login from "./components/auth/login";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                </div>
            </Router>
        );
    }
}
export default App;