import styles from './Informacoes.module.css';
import { useContext } from 'react';
import { UsuarioContext } from '../../Context/usuario';
import Campo from '../../components/Campo';
import { useNavigate } from 'react-router-dom';



const Informacoes = () => {
  const { nome, setNome, email, setEmail, tel, setTel, me } =
    useContext(UsuarioContext);

    const navigate = useNavigate()

    function jogaParaPlano(e) {
        e.preventDefault();
        return navigate('/plano')
    }
    console.log(nome, email, tel)
  return (
    <div className={styles.informacoes}>
      <h1>Informações Pessoais</h1>
      <p>Por favor informe seu email, nome e telefone.</p>
      <Campo
        label="nome"
        type="text"
        placeholder="Fulano de tal"
        valor={nome}
        aoAlterado={valor => setNome(valor)}
      />

      <Campo
        label="e-mail"
        type="email"
        placeholder="fulano@detal.com.br"
        valor={email}
        aoAlterado={valor => setEmail(valor)}
      />

      <Campo
        label="telefone"
        type="number"
        placeholder="31 9 9999 9999"
        valor={tel}
        aoAlterado={valor => setTel(valor)}
      />

      <button
      className={styles.botao}
      disabled={!nome || !email || !tel}
       onClick={(e)=> jogaParaPlano(e)}
       >Next 
       </button>
    </div>
  );
};

export default Informacoes;
