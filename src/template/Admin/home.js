import React from 'react';

export class App extends React.Component { 
    signIn() {
        localStorage.setItem("adminjwtToken", "");
        this.props.history.push("/admin/login");
    }
    componentDidMount() {
        if (localStorage.getItem("adminjwtToken") === "") {
            this.props.history.push("/admin/login");
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