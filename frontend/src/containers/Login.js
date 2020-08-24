import React, { Component } from 'react';
import axios from 'axios';

import LoginView from '../components/Login';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    onChangeInput = (input, value) => {
        this.setState({ [input]: value });
    }

    onLogin = (e) => {
        e.preventDefault();

        var axios = require("axios");

        axios.request({
            method: 'post',
            baseURL: 'http://localhost:9050',
            url: '/oauth/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa('react_front_end_app' + ':' + '12345')
            },
            data: ("grant_type=password&username="+this.state.username+"&password="+this.state.password)
        })
        .then(response => {
            //console.log(response.data.access_token);
            localStorage.setItem("token", response.data.access_token);
            localStorage.setItem("session", this.state.username);
            this.props.history.push("/");
        })
        .catch(err => {
            console.log(err);
        })

    }

    render() {
        const { username, password } = this.props
        return(
            
            <LoginView
                username={username}
                password={password}
                onChangeInput={this.onChangeInput}
                onLogin={this.onLogin} 
            />
            
        );
    }
    
}

export default Login;