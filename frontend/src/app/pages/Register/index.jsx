import React, { useContext, useEffect, useRef } from 'react'
import * as L from './RegisterStyles'
import { Topbar } from '../../components/Topbar';
import { Header } from '../../components/Header';
import { loginStart } from '../../sharing/api'
import { AuthContext } from '../../sharing/context/auth';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

export const Register = () => {

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                scope: 'email',
            });
        }
        gapi.load('client:auth2', start);
    }, []);

    const onSuccess = response => {
        console.log('SUCCESS', response);
      };
      const onFailure = response => {
        console.log('FAILED', response);
      };
      const onLogoutSuccess = () => {
        console.log('SUCESS LOG OUT');
    };

    const { dispatch, error, user } = useContext(AuthContext)

    const email = useRef()
    const password = useRef()

    const handleSendForm = (e) => {
        e.preventDefault()
        loginStart(
            {email: email.current.value, password: password.current.value}, dispatch
        )
        window.location('/')
    }

    return (
        <L.Container>
            <Topbar/>
            <Header/>
            <L.FormContainer>
                <L.Box>
                    <h1>Cadastro</h1>
                    { error !== null ? <p className='error-login'>{error}</p> : ""}
                    <L.Form onSubmit={handleSendForm}>
                        <L.Input 
                        placeholder='email'
                        type="email" 
                        ref={email}/>
                        <L.Input 
                        placeholder='senha'
                        type="password"  
                        ref={password}/>
                        <L.ContainerCenter>
                            <L.ButtonSendForm type="submit">Enviar</L.ButtonSendForm>
                        </L.ContainerCenter>
                    </L.Form>
                    <L.ContainerCenter>
                    { user === null ? 
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        buttonText="Login com Google"
                    />
                    : 
                    <GoogleLogout
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        onLogoutSuccess={onLogoutSuccess}
                        buttonText="Logout"
                    />
                    }
                    </L.ContainerCenter>
                    <L.ContainerCenter>
                        <h4>Tem uma conta?</h4>
                        <L.ButtonRedirect to='/login'>Faça Login!</L.ButtonRedirect>
                    </L.ContainerCenter>
                </L.Box>
            </L.FormContainer>
        </L.Container>
    )
}
