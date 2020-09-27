import React, { Component } from 'react'

export default class Signupform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            signupList: []
        }
    }

    handleInputChange = event => {
        const { value } = event.target;
        this.setState({ email: value });
    };

    signup = () => {
        if (this.state.email === "") {
            return;
        }
        let newSignupList = []
        this.state.signupList.forEach((e) => {
            newSignupList.push(e);
        });
        newSignupList.push(this.state.email)
        this.setState({
            email: "",
            signupList: newSignupList
        })
    }

    render() {
        return (
            <div className="signup-form">
                <input
                    className="signup-input"
                    onChange={this.handleInputChange}
                    placeholder="Enter your email..."
                    value={this.state.email}
                />
                <button className="signup-button" onClick={this.signup}>Sign up!</button>
            </div>
        );
    }
}