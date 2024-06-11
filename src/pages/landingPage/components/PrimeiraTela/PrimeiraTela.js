import './PrimeiraTela.css';
import image from '../../images/primeiraTela_img.png';
import { Outlet, Link } from "react-router-dom";

import { useTranslation } from 'react-i18next';
import "../../../../i18n"

export default function PrimeiraTela() {
  const {t, i18n } = useTranslation();
  return (
    <div className='frames' id="primeiraTela">
      {/* <button onClick={() => changeLanguage('en')}> English</button>
      <button onClick={() => changeLanguage('pt')}> Português</button> */}
      <div className='backgroundLeft'></div>
      <article>
        <h1>{t("Guide")}</h1>
        <div className='textBar'></div>
        <section>
        <Link to="/cadastro">
          <div className='buttonCadastro'><span></span>{t("Play")}</div>
        </Link>
        <Link to='/login'>
          <div className='buttonLogin'>{t("Account")}</div>
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