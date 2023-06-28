import { useForm } from "react-hook-form";

const Informacoes = () => {

    const { register, unregister, handleSubmit, reset} = useForm();
    
    return ( 
        <div>
            <h1>Informações</h1>
        </div>
     );
}
 
export default Informacoes;

