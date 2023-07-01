import { useContext } from 'react';
import styles from './Complemento.module.css';
import { UsuarioContext } from '../../Context/usuario';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../../components/Checkbox';

const Complementos = () => {
  const { anual } = useContext(UsuarioContext);

  const navigate = useNavigate();
  function jogaParaPlano(e) {
    e.preventDefault();
    return navigate('/plano');
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
      />

      <Checkbox
        titulo="Armazenamento maior"
        legenda="1 TB extra de armazenamento na nuvem"
        valor={anual ? '+R$20,00/ano' : '+R$2,00/ano'}
      />

      <Checkbox
        titulo="Perfil personalizável"
        legenda="Tema personalizado em seu perfil"
        valor={anual ? '+R$20,00/ano' : '+R$2,00/ano'}
      />

      <div className={styles.botoes}>
        <button onClick={e => jogaParaPlano(e)}>Back</button>

        <button>Next</button>
      </div>
    </div>
  );
};

export default Complementos;
