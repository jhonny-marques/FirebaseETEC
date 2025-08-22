//IMPORTAÇÕES USADAS VINDAS DO FIREBASE
import { auth } from '../firebase/config.js';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth"


function LoginPage() {
    //VARIÁVEIS
    const [loginType, setLoginType] = useState('login'); //INPUT LOGIN
    const [userCredentials, setUserCredentials] = useState({}) 
    const [error, setError] = useState(''); //ERROR

    console.log(auth)

    function handleCredenciais(e){
        setUserCredentials({...userCredentials,[e.target.name]:e.target.value})

    }

//FUNÇÃO PARA CRIAR CONTA
    function handleCriarConta(e) {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            //const errorCode = error.code;
            const errorMessage = error.message;

            setError(errorMessage);
            // ..
        });
    }

//FUNÇÃO PARA REALIZAR UM LOGIN NA PÁGINA
    function handleLogin(e) {
        e.preventDefault()

        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            //const errorCode = error.code;
            const errorMessage = error.message;

            setError(errorMessage);
            // ..
        });
}

//VARIÁVEL RESPONSÁVEL POR EFETUAR UM LOGIN ATRÁVES DO GOOGLE
const handleGoogleLogin = async(e) => {
    e.preventDefault()

    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);

        const user = result.user;

        console.log('Usuário logado com sucesso: ', user )
    } catch (error) {
        console.error('Erro ao logar usuário: ', error)
    }
}

    return (
        <>
            <div className="container login-page">
                <section>
                    <h1>Etec Albert Einstein</h1>
                    <p>Entre ou crie uma conta para continuar.</p>
                    <div className="login-type">
                        <button
                            className={`btn ${loginType === 'login' ? 'selected' : ''}`}
                            onClick={() => setLoginType('login')}>
                            Entrar
                        </button>
                        <button
                            className={`btn ${loginType === 'signup' ? 'selected' : ''}`}
                            onClick={() => setLoginType('signup')}>
                            Criar Conta
                        </button>
                    </div>
                    <form className="add-form login">
                        <div className="form-control">
                            <label>E-mail *</label>
                            <input onChange={(e) =>{handleCredenciais(e)}} type="text" name="email" placeholder="Informe seu email" />
                        </div>
                        <div className="form-control">
                            <label>Senha *</label>
                            <input onChange={(e) =>{handleCredenciais(e)}} type="password" name="password" placeholder="Informe a senha" />
                        </div>
                        {
                            loginType === 'login' ?
                            <button onClick={(e)=>{handleLogin(e)}} className="active btn btn-block">Entrar</button>
                            :
                            <button onClick={(e)=>{handleCriarConta(e)}} className="active btn btn-block">Criar Conta</button>
                        }
                        <button onClick={(e)=>{{handleGoogleLogin(e)}}} className="active btn btn-block">Login com Google</button>
                        <p className="forgot-password">Esqueci minha senha.</p>

                        {<div>{error}</div>}
                    </form>
                </section>
            </div>
        </>
    );
}

export default LoginPage;
