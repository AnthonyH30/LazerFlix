import React,{ useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import './login.css';
import { ToastContainer } from 'react-toastify';

function Login() {

  const { authUser, setName, setEmail, setPassword } = useContext(AuthContext);

  return (
    <div className='login'>
        <form>
            <h2 className='login-title'>Login</h2>
            <input type='text' placeholder='Nome' required onChange={(e)=> setName(e.target.value)} />
            <input type='email' placeholder='E-Mail' required onChange={(e)=> setEmail(e.target.value)} />
            <input type='password' placeholder='Senha' required onChange={(e)=> setPassword(e.target.value)} />
            <button className='loginBtn' onClick={authUser}>Entrar</button>
            <p>Não sabe como entrar? <a target='_blank' href='https://github.com/AnthonyH30/LazerFlix'>Documentação</a></p>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Login;