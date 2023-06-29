import { useContext } from 'react';
import BoxPlano from '../../components/BoxPlano';
import { UsuarioContext } from '../../Context/usuario';
import styles from './Plano.module.css';
import { useNavigate } from 'react-router-dom';

const Plano = () => {
  const { anual, setAnual, jogaPara } = useContext(UsuarioContext);


  const navigate = useNavigate()
  function jogaParaCom(e) {
    e.preventDefault();
    return navigate('/complemento')
}

function jogaParaInfo(e){
    e.preventDefault();
    return navigate('/')
}


  return (
    <div className={styles.plano}>
      <h2>Selecione um Plano para você!</h2>
      <p className={styles.subtitulo}>
        Você pode efetuar o pagamento de forma mensal ou anual com desconto 😉
      </p>
      <div className={styles.container}>
        <BoxPlano
          icon={'icon-arcade.svg'}
          name="Arcade"
          anual={anual}
          valor={anual ? 'R$90,00/ano' : 'R$9,00/mês'}
        />

        <BoxPlano
          icon={'icon-advanced.svg'}
          name="Advanced"
          anual={anual}
          valor={anual ? 'R$120,00/ano' : 'R$12,00/mês'}
        />

        <BoxPlano
          icon={'icon-pro.svg'}
          name="Pro"
          anual={anual}
          valor={anual ? 'R$150,00/ano' : 'R$15,00/mês'}
        />
      </div>

      <div className={styles.checkbox}>
        <h2>Mensal</h2>
        <label className={styles.switch}>
            <input type="checkbox" onChange={()=>setAnual(!anual) }/>
            <span className={styles.slider}></span>
        </label>
        <h2>Anual</h2>
      </div>

      <div className={styles.botoes}>

      <button
       onClick={(e)=> jogaParaInfo(e)}
       >Back
       </button>

      <button
       onClick={(e)=> jogaParaCom(e)}
       >Next 
       </button>

      </div>
    </div>
  );
};

export default Plano;
