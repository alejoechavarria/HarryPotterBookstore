import React from 'react';
import Main from '../layouts/main';

function LoginView(props)  {

    const { name, username, password, onChangeInput, onLogin} = props;

    return(
        <Main >
            <form className="mid-form" onSubmit={onLogin} >
                <div>
                    <label htmlFor="username" >Nombre de usuario</label>
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        onChange={e => onChangeInput('username', e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password" >Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        value={password} 
                        onChange={e => onChangeInput('password', e.target.value)}
                    />
                </div>
                <input className="btn btn-success" type="submit" value="Ingresar" />
            </form>
        </Main>
    );
}

export default LoginView;