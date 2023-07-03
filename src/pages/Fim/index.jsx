import ClipLoader from 'react-spinners/ClipLoader';
import styles from './Fim.module.css';
import { useContext, useEffect } from 'react';
import { UsuarioContext } from '../../Context/usuario';
import { useNavigate } from 'react-router-dom';

const Fim = () => {
  const { nome, 
        setNome,
        email, 
        setEmail,
        tel, 
        setTel,
        anual, 
        setAnual,
        plano, 
        setPlano,
        valorPlano, 
        setValorPlano,
        servcoOnline, 
        setServcoOnline,
        armazenamentoMaior, 
        setArmazenamentoMaior,
        perfilPersonalizavel,
        setPerfilPersonalizavel,
        showLoad, 
        setShowLoad,
        formEnviado, 
        setFormEnviado } = useContext(UsuarioContext);

        const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  console.log(formEnviado)
  
  useEffect(() => {
    const enviarFormulario = async () => {
      try {
        setFormEnviado({
          nome,
          email,
          tel,
          anual,
          plano,
          valorPlano,
          servcoOnline,
          armazenamentoMaior,
          perfilPersonalizavel
        });

        const response = await fetch(
          'https://api.sheetmonkey.io/form/k5HJh6gfzmqCWd2sy9VcB7',
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formEnviado)
          }
        );

      } catch (error) {
        console.log(error);
      }
    };

    enviarFormulario();
  }, []);

  function jogaParaInfo(e) {

    setNome('')
    setEmail('')
    setTel('')
    setAnual(false)
    setPlano('')
    setValorPlano('')
    setServcoOnline(false)
    setArmazenamentoMaior(false)
    setPerfilPersonalizavel(false)
    
    return navigate('/');
  }

  return (
    <div className={styles.fim}>
      <div>
        {showLoad && <ClipLoader color="#483EFF" size={100} />}
        {!showLoad && (
          <img src="check.png" alt="check" className={styles.img} />
        )}
        <h1>Obrigado!</h1>
        <p className={styles.info}>
          Obrigado por confirmar sua inscrição! Esperamos que você se divirta
          usando nossa plataforma. Se você precisar de suporte, sinta-se à
          vontade para nos enviar um e-mail em support@loremgaming.com.
        </p>
      </div>
      <button onClick={e => jogaParaInfo(e)}>Refazer? </button>
    </div>
  );
};

export default Fim;
