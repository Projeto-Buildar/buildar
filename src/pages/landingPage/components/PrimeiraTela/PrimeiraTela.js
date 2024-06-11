import './PrimeiraTela.css';
import image from '../../images/primeiraTela_img.png';
import { Outlet, Link } from "react-router-dom";

import { useTranslation } from 'react-i18next';
import "../../../../i18n"

export default function PrimeiraTela() {
  const {t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <div className='frames' id="primeiraTela">
      {/* <button onClick={() => changeLanguage('en')}> English</button>
      <button onClick={() => changeLanguage('pt')}> Português</button> */}
      <div className='backgroundLeft'></div>
      <article>
        <h1>TENHA UM GUIA PARA MOLDAR SUAS SOFT SKILLS {t("header.title")}</h1>
        <div className='textBar'></div>
        <section>
        <Link to="/cadastro">
          <div className='buttonCadastro'><span></span>DÊ O PLAY!</div>
        </Link>
        <Link to='/login'>
          <div className='buttonLogin'>Já tenho uma conta</div>
        </Link>
        </section>
      </article>
      <figure>
        <img src={image} />
      </figure>

      <Outlet/>
    </div>
  );
}