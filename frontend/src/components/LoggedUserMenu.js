import React from 'react';
import { useHistory } from 'react-router-dom';

function LoggedUserMenu(props) {

    const history = useHistory();

    const logout =  () => {
        localStorage.removeItem("token");
        localStorage.removeItem("session");
        history.push("/")
    }

    const username = localStorage.getItem("session");

    return(
        <div className="login-nav">
            <p className="text-login" >Hola {username}</p>
            <button className="btn-logout btn-acces-Register" onClick={logout}>Cerrar sesión</button>
        </div>
    );
}



export default LoggedUserMenu;