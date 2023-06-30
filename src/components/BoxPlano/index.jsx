import { useContext } from 'react';
import styles from './BoxPlano.module.css';
import { UsuarioContext } from '../../Context/usuario';

const BoxPlano = ({ icon, name, valor, anual }) => {

  const { valorPlano, 
          setValorPlano } = useContext(UsuarioContext);

  return (
    <div className={`${styles.container} ${(valorPlano == valor) ? styles.selected : ''}`} onClick={()=> setValorPlano(valor)}>
      <img src={icon} alt="" />
      <div className={styles.containerText}>
        <h3>{name}</h3>
        <p className={styles.valor}>{valor}</p>
        {anual && <p className={styles.anual}> 2 meses grátis </p>}
      </div>
    </div>
  );
};

export default BoxPlano;
