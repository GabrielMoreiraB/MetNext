

import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({children}) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [anual, setAnual]= useState(false);
    const [valorPlano, setValorPlano] = useState('');

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
                anual, 
                setAnual,
                valorPlano, 
                setValorPlano
            }
        }>
            {children}
        </UsuarioContext.Provider>
    )
}