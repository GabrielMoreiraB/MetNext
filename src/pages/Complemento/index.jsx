import { useContext } from 'react';
import styles from './Complemento.module.css';
import { UsuarioContext } from '../../Context/usuario';
import { useNavigate } from 'react-router-dom';

const Complementos = () => {

    const { anual } = useContext(UsuarioContext);

    const navigate = useNavigate()
    function jogaParaPlano(e){
        e.preventDefault();
        return navigate('/plano')
    }

  return (
    <div className={styles.complementos}>
      <h1>Acrescente Complementos</h1>
      <p className={styles.subtitulo}>
        Os complementos ajudam a aprimorar sua experiência de jogo.
      </p>

      <div className={styles.container}>
        <input type="checkbox" name="a" id="a" className={styles.checkbox} />
        <div className={styles.info}>
          <p>Serviço on-line</p>
          <span className={styles.span}>Acesso a jogos multiplayer</span>
        </div>
        <span className={styles.span}>{anual? '+R$10,00/ano':'+R$1,00/ano'}</span>

      </div>

      <div className={styles.botoes}>

      <button
       onClick={(e)=> jogaParaPlano(e)}
       >Back
       </button>

       <button
       >Next 
       </button>

      </div>
    </div>
  );
};

export default Complementos;
