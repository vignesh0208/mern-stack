import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../../scss/auth.scss"
import Logo from "../../image/logo.png"
import config from "../../config"
import Input from "../input/input"
import Button from "../button/button"

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
    
    handleInputChange = ({ name, value }) => {
        this.setState({[name]: value});
    };
    
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser);
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
                            <Input type="text" placeholder="Full Name" helperText={errors.name} name="name" className="input-field" onChange={this.handleInputChange} />

                            <Input type="text" placeholder="Work Email Address" helperText={errors.email} name="email" className="input-field" onChange={this.handleInputChange} />

                            <Input type="password" placeholder="Password" helperText={errors.password} name="password" className="input-field" onChange={this.handleInputChange} />

                            <Input type="password" placeholder="Confirm Password" helperText={ errors.password2} name="password2" className="input-field" onChange={this.handleInputChange} />

                            <Button type="submit" className="button-submit" buttonClassName="w-100" label="Create Account" />

                        </form>
                        <p className="grey-text">Already have an account? <Link to="/login">Log in</Link></p>
                    </div>
                </div>
            </section>
        );
    }
}
export default Register;