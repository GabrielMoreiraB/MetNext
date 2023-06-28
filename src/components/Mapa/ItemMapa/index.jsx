import styles from './ItemMapa.module.css';

const ItemMapa = ({num, info}) => {
    return ( 
        <div className={styles.itemMapa}>
            <div className={styles.num}>{num}</div>
            <div className={styles.etapa}>Etapa {num}</div>
            <div className={styles.info}>{info}</div>


        </div>
     );
}
 
export default ItemMapa;