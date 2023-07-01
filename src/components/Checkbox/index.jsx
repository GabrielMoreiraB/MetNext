import styles from './Checkbox.module.css';


const Checkbox = ({titulo, legenda, valor, boolean, alAlterado}) => {
    return ( 
        <div className={`${styles.container} ${boolean ? styles.selected : ''}`}>
        <input 
        type="checkbox" 
        name="a" 
        id="a" 
        className={styles.checkbox} 
        onClick={()=>alAlterado(!boolean)
        }/>
        <div className={styles.info}>
          <h3>{titulo}</h3>
          <span className={styles.span}>{legenda}</span>
        </div>
        <span className={styles.span}>{valor}</span>

      </div>
     );
}
 
export default Checkbox;