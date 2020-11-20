import React from 'react';

export class App extends React.Component { 
    signIn() {
        localStorage.setItem("jwtToken", "");
        this.props.history.push("/login");
    }
    componentDidMount() {
        if (localStorage.getItem("jwtToken") === "") {
            this.props.history.push("/login");
        }
    }
    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <div className="button-submit">
                    <div onClick={() => this.signIn()}>Log out</div>
                </div>
            </div>
        )
    }
}

export default App