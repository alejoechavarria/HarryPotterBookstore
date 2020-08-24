import React, { Component } from 'react';
import axios from 'axios';

import AccessButtonsView from '../components/AccessButtons';
import Login from './Login'

class AccessButtons extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return(
            <AccessButtonsView />
        );
    }
    
}

export default AccessButtons;