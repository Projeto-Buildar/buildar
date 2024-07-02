import './PrimeiraTela.css';
import image from '../../images/primeiraTela_img.webp';
import { Outlet, Link } from "react-router-dom";
import useControleDeTraducao from '../../../../useControleDeTraducao';

export default function PrimeiraTela() {
  const { t, tComControleDeLinha } = useControleDeTraducao();
  
  return (
    <div className='frames' id="primeiraTela">
      <div className='backgroundLeft'></div>
      <article>
        <h1>{tComControleDeLinha(t("Guide"))}</h1>
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
      <Outlet />
    </div>
  );
}