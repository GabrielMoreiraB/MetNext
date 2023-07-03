import { useContext } from "react";
import { UsuarioContext } from "../../Context/usuario";
import styles from './Resumo.module.css';
import { useNavigate } from "react-router-dom";


const Resumo = () => {
    const {valorPlano, 
           plano, 
           anual, 
           servcoOnline, 
           armazenamentoMaior, 
           perfilPersonalizavel,
            } = useContext(UsuarioContext);
            console.log(valorPlano)
            
    let temServico = servcoOnline ? ( anual ? '10': '1'): '0';

    let temArmazenamento = armazenamentoMaior ? ( anual ? '20': '2'): '0';

    let temPerfil = perfilPersonalizavel ? ( anual ? '20': '2'): '0';

    let valorTot = Number(valorPlano) + Number(temServico) + Number(temArmazenamento) + Number(temPerfil);

    const navigate = useNavigate();
  function jogaParaComple(e) {
    e.preventDefault();
    return navigate('/complemento');
  }


  function finalizacao(e) {
    e.preventDefault();
    return navigate('/fim');
  }
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

            <div className={styles.tot}>
            <h1>Total</h1>
            <h2>{anual? `R$${valorTot},00/ano`:`R$${valorTot},00/mes`}</h2>
            </div>

            <div className={styles.botoes}>
                <button onClick={e => jogaParaComple(e)}>Back</button>

                <button onClick={e => finalizacao(e)}>Finalizar</button>
      </div>
        </div>
     );
}
 
export default Resumo;