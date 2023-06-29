import styles from './BoxPlano.module.css';

const BoxPlano = ({ icon, name, valor, anual }) => {
  return (
    <div className={styles.container}>
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
