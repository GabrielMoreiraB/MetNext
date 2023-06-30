import styles from './Campo.module.css';

const Campo = ({label, type, placeholder, valor, aoAlterado}) => {

    const aoDigitado = (e)=> {
        aoAlterado(e.target.value)
    }
    return ( 
        <div className={styles.campo}>
        <label >{label}</label>
        <input 
        type={type}
        value={valor}
        placeholder={placeholder}
        onChange={aoDigitado} 
        required= {true}  
        />
        </div>
     );
}
 
export default Campo;