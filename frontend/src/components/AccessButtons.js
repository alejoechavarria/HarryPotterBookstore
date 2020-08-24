import React from 'react';
import { useHistory } from 'react-router-dom';

function AccessButtonsView(props) {

    const history = useHistory();

    return (
        <div className="login-nav">
            <button className="btn-acces btn-acces-login" onClick={()=>history.push("/login")}>Ingresar</button>
            <button className="btn-acces btn-acces-Register" onClick={()=>history.push("/signup")}>Registro</button>
        </div>
    );
}

export default AccessButtonsView;