import './PrimeiraTela.css';
import image from '../../images/primeiraTela_img.webp';
import { Outlet, Link } from "react-router-dom";
import useControleDeTraducao from '../../../../shared/useControleDeTraducao';

export default function PrimeiraTela() {
  const { t, tFormatado, chaveComPrefixo} = useControleDeTraducao("section1");

  // Obtenha a tradução original, manipule o texto e passe para o Trans
  // const textoManipulado = tFormatado(t('fraseComSpan', { g: 'gostoso' }));

  return (
    // Atenção ⚠: para fazer alterações, primeiro ver o impacto que geraria no CSS do component

    // Possivel alteração ⚠: alterar "div" principal das paginas por "section"
    <div className='frames' id="primeiraTela">

      <div className='backgroundLeft'></div>

      <article>

        <h1>{tFormatado(chaveComPrefixo("titulo"))}</h1>

        <div className='textBar'></div>

        {/* Possivel alteração ⚠: alterar esta "section" por "nav" */}
        <section>

          <Link to="/cadastro">
            <div className='buttonCadastro'><span>{t("cadastrar")}</span></div>
          </Link>
          
          <Link to='/login'>
          
            <div className='buttonLogin'>{t(chaveComPrefixo("login"))} </div>

            {/* <TransComPrefixo
              i18nKey="Section2.fraseComSpan"
              components={{ span: <span className='hohoho' /> }}
              values={{g: "alguma coisa"}}
              usarControleDeLinha={true}  // Controlando quando aplicar o controle de linha
            /> */}
          </Link>
        </section>

      </article>

      <figure>
        <img alt='' src={image} />
      </figure>

      <Outlet />

    </div>
  );
}