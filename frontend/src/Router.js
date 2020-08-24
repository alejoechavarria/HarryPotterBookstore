import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './containers/Login';
import Books from './containers/Books';
import AboutUsView from './components/AboutUs';
import HelpView from './components/Help';
import ShoppingCart from './containers/ShoppingCart';
import SignUp from './containers/SignUp';

class Router extends Component {

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Books} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/nosotros' component={AboutUsView} />
                    <Route exact path='/ayuda' component={HelpView} />
                    <Route exact path='/carrito' component={ShoppingCart} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;