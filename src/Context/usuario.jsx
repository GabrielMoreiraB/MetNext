

import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({children}) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [anual, setAnual]= useState(false);
    const [plano, setPlano]= useState('');
    const [valorPlano, setValorPlano] = useState('');
    const [servcoOnline, setServcoOnline] = useState(false);
    const [armazenamentoMaior, setArmazenamentoMaior] = useState(false);
    const[perfilPersonalizavel, setPerfilPersonalizavel] = useState(false);

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
                plano, 
                setPlano,
                valorPlano, 
                setValorPlano,
                servcoOnline, 
                setServcoOnline,
                armazenamentoMaior, 
                setArmazenamentoMaior,
                perfilPersonalizavel,
                setPerfilPersonalizavel

            }
        }>
            {children}
        </UsuarioContext.Provider>
    )
}