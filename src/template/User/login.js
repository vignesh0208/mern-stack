import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../../scss/auth.scss"
import Logo from "../../image/logo.png"
import config from "../../config"
import Input from "../../components/input/input"
import Button from "../../components/button/button"

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    handleInputChange = ({ name, value }) => {
        this.setState({[name]: value});
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
            this.props.history.push("/main/dashboard")
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
                            <Input type="email" placeholder="Work Email Address" helperText={errors.email || errors.emailnotfound} name="email" className="input-field" onChange={this.handleInputChange} />

                            <Input type="password" placeholder="Password" helperText={errors.password || errors.passwordincorrect} name="password" className="input-field" onChange={this.handleInputChange} />

                            <Button type="submit" className="button-submit" buttonClassName="w-100" label="Login" />

                        </form>
                        <p className="grey-text">Create new account <Link to="/register">Register</Link></p>
                    </div>
                </div>
            </section>
        );
    }
}
export default Login;