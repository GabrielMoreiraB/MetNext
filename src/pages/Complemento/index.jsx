import { useContext } from 'react';
import styles from './Complemento.module.css';
import { UsuarioContext } from '../../Context/usuario';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../../components/Checkbox';

const Complementos = () => {
  const { anual,
          servcoOnline, 
          setServcoOnline,
          armazenamentoMaior, 
          setArmazenamentoMaior,
          perfilPersonalizavel,
          setPerfilPersonalizavel,
          setPosi } = useContext(UsuarioContext);
          setPosi(3)

  const navigate = useNavigate();
  function jogaParaPlano(e) {
    e.preventDefault();
    return navigate('/plano');
  }
  function jogaParaResumo(e) {
    e.preventDefault();
    return navigate('/resumo');
  }

  return (
    <div className={styles.complementos}>
      <h1>Acrescente Complementos</h1>
      <p className={styles.subtitulo}>
        Os complementos ajudam a aprimorar sua experiência de jogo.
      </p>

      <Checkbox
        titulo="Serviço on-line"
        legenda="Acesso a jogos multiplayer"
        valor={anual ? '10' : '1'}
        boolean={servcoOnline}
        alAlterado={setServcoOnline}
        anual={anual}
      />

      <Checkbox
        titulo="Armazenamento maior"
        legenda="1 TB extra de armazenamento na nuvem"
        valor={anual ? '20' : '2'}
        boolean={armazenamentoMaior}
        alAlterado={setArmazenamentoMaior}
        anual={anual}
      />

      <Checkbox
        titulo="Perfil personalizável"
        legenda="Tema personalizado em seu perfil"
        valor={anual ? '20' : '2'}
        boolean={perfilPersonalizavel}
        alAlterado={setPerfilPersonalizavel}
        anual={anual}
      />

      <div className={styles.botoes}>
        <button onClick={e => jogaParaPlano(e)}>Back</button>

        <button onClick={e => jogaParaResumo(e)}>Next</button>
      </div>
    </div>
  );
};

export default Complementos;
