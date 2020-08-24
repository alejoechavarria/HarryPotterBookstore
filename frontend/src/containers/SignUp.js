import React, { Component } from 'react';
import axios from 'axios';

import SignUpView from '../components/SignUp';

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            lastName: '',
            username: '',
            email: '',
            password: ''
        };
    }

    onChangeInput = (input, value) => {
        this.setState({ [input]: value });
    }

    onSignUp = (e) => {
        e.preventDefault();
        let newUser = this.state;
        axios.post('http://localhost:9000/users/signup', newUser)
        .then(response => {
            if(response.status===200) {
                alert("Usuario registrado correctamente");
                this.props.history.push("/login");
            }
            
            //console.log(response)
        }).catch(err => {
            console.log(err);
        });
        //console.log(newUser);
    }

    render() {
        const { name, lastname, username, email, password } = this.props
        return(
            
            <SignUpView
                name={name}
                lastname={lastname}
                username={username}
                email={email}
                password={password}
                onChangeInput={this.onChangeInput}
                onSignUp={this.onSignUp} 
            />
            
        );
    }
    
}

export default SignUp;