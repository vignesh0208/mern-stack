import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../../scss/auth.scss"
import Logo from "../../image/logo.png"
import classnames from "classnames";
import config from "../../config"

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        axios.post(config.serverUrl + "/api/users/register", newUser)
        .then(res => this.props.history.push("/login"))
        .catch(err => 
            this.setState({
                errors: err.response.data
            })
        );
    };
    render() {
        const { errors } = this.state;
        return (
            <section className="auth register">
                <div className="auth-card">
                    <img src={ Logo } alt="logo" className="auth-logo" />
                    <div className="auth-title">Artificial Intelligence Powered Hiring</div>
                    <div className="register-form">
                        <h4>Register</h4>
                        <form className="mt-4" noValidate onSubmit={this.onSubmit}>
                            <div className="input-field">
                                <input onChange={this.onChange} value={this.state.name} className={classnames("", {invalid: errors.name})} id="name" type="text" placeholder="Full Name" />
                            </div>
                            <div className="input-field">
                                <input onChange={this.onChange} value={this.state.email} className={classnames("", {invalid: errors.email})} id="email" type="email" placeholder="Work Email Address" />
                            </div>
                            <div className="input-field">
                                <input onChange={this.onChange} value={this.state.password} className={classnames("", {invalid: errors.password})} id="password" type="password" placeholder="Password" />
                            </div>
                            <div className="input-field">
                                <input onChange={this.onChange} value={this.state.password2} className={classnames("", {invalid: errors.password2})} id="password2" type="password" placeholder="Confirm Password" />
                            </div>
                            <div className="button-submit">
                                <button type="submit" className="w-100">Create Account</button>
                            </div>
                        </form>
                        <p className="grey-text">Already have an account? <Link to="/login">Log in</Link></p>
                    </div>
                </div>
            </section>
        );
    }
}
export default Register;