import React from 'react';
import Main from '../layouts/main';

function SignUpView(props) {

    const { name, lastname, username, email, password, onChangeInput, onSignUp } = props;
    return (
        <Main>
            <form className="mid-form" onSubmit={onSignUp} >
                <div>
                    <label htmlFor="name" >Nombre</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => onChangeInput('name', e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="last-name" >Apellido</label>
                    <input 
                        type="text"
                        name="last-name"
                        value={lastname}
                        onChange={e => onChangeInput('lastname', e.target.value)}
                    />
                </div>
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
                    <label htmlFor="email" >Correo Electrónico</label>
                    <input 
                        type="text"
                        name="email"
                        value={email}
                        onChange={e => onChangeInput('email', e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password" >Contraseña</label>
                    <input
                        type="text"
                        name="password"
                        value={password}
                        onChange={e => onChangeInput('password', e.target.value)}
                    />
                </div>
                <input className="btn btn-success" type="submit" value="Registrarse" />
            </form>
        </Main>
    );
}

export default SignUpView;