import { useContext } from "react";
import { UsuarioContext } from "../../Context/usuario";
import styles from './Resumo.module.css';

const Resumo = () => {
    const {valorPlano, 
           plano, anual, servcoOnline, armazenamentoMaior, perfilPersonalizavel } = useContext(UsuarioContext);
    return ( 
        <div className={styles.resumo}>
            <h1>Terminando...</h1>
            <p className={styles.subtitulo}>Verifique se tudo está ok antes de confirmar.</p>
            <div className={styles.container}>
                <h2>{plano} ({anual? 'Anual': 'Mensal'})</h2>
                <h2>R${valorPlano},00/{ anual ?'ano':'mes'}</h2>
            </div>

           {servcoOnline && <div className={styles.adicao}>
                <h3>Serviço Online</h3>
                <p>{anual? 'R$10,00/ano':'R$1,00/mes'}</p>
            </div>}

            {armazenamentoMaior && <div className={styles.adicao}>
                <h3>Armazenamento Maior</h3>
                <p>{anual? 'R$20,00/ano':'R$2,00/mes'}</p>
            </div>}

            {perfilPersonalizavel && <div className={styles.adicao}>
                <h3>Perfil Personalizável</h3>
                <p>{anual? 'R$20,00/ano':'R$2,00/mes'}</p>
            </div>}
        </div>
     );
}
 
export default Resumo;