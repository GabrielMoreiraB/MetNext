import { useContext } from 'react';
import styles from './ItemMapa.module.css';
import { UsuarioContext } from '../../../Context/usuario';

const ItemMapa = ({num, info}) => {
    const {  posi } =
    useContext(UsuarioContext);
    return ( 
        <div className={styles.itemMapa}>
            <div className={`${styles.num} ${(posi == num ) ? styles.selected : ''}`}>{num}</div>
            <div className={styles.etapa}>Etapa {num}</div>
            <div className={styles.info}>{info}</div>


        </div>
     );
}
 
export default ItemMapa;