import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import ShoppingCart from '../assets/images/ShoppingCart.png'
import AccessHeader from '../containers/AccessHeader';

function HeaderView(props)  {

    const history = useHistory();

   let itemOnCart = JSON.parse(localStorage.getItem("shoppingCartStore"));

    return(
        
        <header id="header">
            <div className="center">
                { /*LOGO*/}
                <div id="logo">
                    <img src={logo} className="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong>Harry</strong>Books
                    </span>
                </div>
                { /*MENU*/}
                <nav id="menu">
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="active">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/nosotros" activeClassName="active">Nosotros</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ayuda" activeClassName="active">Ayuda</NavLink>
                        </li>
                    </ul>
                    <div className="shopping-cart" >
                        <button name="shopping-cart" id="cart" onClick={()=>history.push("/carrito")} >
                            <img src={ShoppingCart} alt="ShoppingCart" />
                            {itemOnCart.length > 0 &&
                                <p>{itemOnCart.length}</p>
                            }                  
                        </button>
                    </div>
                    <div className="vertical-line"></div>
                    <AccessHeader />
                </nav>
            </div>

            
        </header>
        
    );
}

export default HeaderView;