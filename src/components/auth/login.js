import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../../scss/auth.scss"
import Logo from "../../image/logo.png"
import classnames from "classnames";
import config from "../../config"

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post(config.serverUrl + "/api/users/login", userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            this.props.history.push("/");
        })
        .catch(err => 
            this.setState({
                errors: err.response.data
            })
        );
    };
    render() {
        const { errors } = this.state;
        return (
            <section className="auth login">
                <div className="auth-card">
                    <img src={ Logo } alt="logo" className="auth-logo" />
                    <div className="auth-title">Artificial Intelligence Powered Hiring</div>
                    <div className="register-form">
                        <h4>Login</h4>
                        <form className="mt-4" noValidate onSubmit={this.onSubmit}>
                            <div className="input-field">
                                <input onChange={this.onChange} value={this.state.email} className={classnames("", {invalid: errors.email || errors.emailnotfound})} id="email" type="email" placeholder="Work Email Address" />
                                <span className="red-text">{errors.email}{errors.emailnotfound}</span>
                            </div>
                            <div className="input-field">
                                <input onChange={this.onChange} value={this.state.password} className={classnames("", {invalid: errors.password || errors.passwordincorrect})} id="password" type="password" placeholder="Password" />
                                <span className="red-text">{errors.password} {errors.passwordincorrect}</span>
                            </div>
                            <div className="button-submit">
                                <button type="submit" className="w-100">Login</button>
                            </div>
                        </form>
                        <p className="grey-text">Create new account <Link to="/register">Register</Link></p>
                    </div>
                </div>
            </section>
        );
    }
}
export default Login;