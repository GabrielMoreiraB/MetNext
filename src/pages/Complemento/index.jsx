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
          setPerfilPersonalizavel } = useContext(UsuarioContext);

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
        valor={anual ? '+R$10,00/ano' : '+R$1,00/ano'}
        boolean={servcoOnline}
        alAlterado={setServcoOnline}
      />

      <Checkbox
        titulo="Armazenamento maior"
        legenda="1 TB extra de armazenamento na nuvem"
        valor={anual ? '+R$20,00/ano' : '+R$2,00/ano'}
        boolean={armazenamentoMaior}
        alAlterado={setArmazenamentoMaior}
      />

      <Checkbox
        titulo="Perfil personalizável"
        legenda="Tema personalizado em seu perfil"
        valor={anual ? '+R$20,00/ano' : '+R$2,00/ano'}
        boolean={perfilPersonalizavel}
        alAlterado={setPerfilPersonalizavel}
      />

      <div className={styles.botoes}>
        <button onClick={e => jogaParaPlano(e)}>Back</button>

        <button onClick={e => jogaParaResumo(e)}>Next</button>
      </div>
    </div>
  );
};

export default Complementos;
