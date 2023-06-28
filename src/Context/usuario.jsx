

import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({children}) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');


    return (
        <UsuarioContext.Provider
        value={
            {
                nome, 
                setNome,
                email, 
                setEmail,
                tel, 
                setTel,
            }
        }>
            {children}
        </UsuarioContext.Provider>
    )
}