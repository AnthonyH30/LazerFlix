import React,{ createContext } from 'react';
import { useState } from 'react';
import useLocalStorage from '../CustomHooks/useLocalStorage';
import { toast } from 'react-toastify';

export const AuthContext = createContext()

function AuthProvider({children}){

    const [auth, setAuth] = useLocalStorage('Auth', false);
    const [name, setName] = useLocalStorage('name', '');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function authUser(e){
        e.preventDefault()
        if(name.length > 0 && email === 'user@gmail.com' && password === 'user123'){
            setAuth(true);
        }else{
            toast.error('informações incorretas', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }
    function LogOut(){
        setAuth(false)
    }

    return(
        <AuthContext.Provider value={{authUser, auth, LogOut, setName, setEmail, setPassword, name}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
