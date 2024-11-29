import { Outlet, Link } from "react-router-dom";

import useControleDeTraducao from '../../../../shared/useControleDeTraducao';

import image from '../../images/primeiraTela_img.webp';

import './PrimeiraTela.css';

export default function PrimeiraTela() {
  const { t, tFormatado, chaveComPrefixo } = useControleDeTraducao("section1");

  return (
    <section className='frames' id="primeiraTela">


      <article className="section1">

        <div className="blocoDeTexto">
          <h1>{tFormatado(chaveComPrefixo("titulo"))}</h1>

          <nav>

            <Link to="/cadastro">
              <div className='buttonCadastro'><span>{t("cadastrar")}</span></div>
            </Link>

            <Link to='/login'>
              <div className='buttonLogin'>{t(chaveComPrefixo("login"))} </div>
            </Link>
          </nav>
        </div>

        <figure>
          <img alt='' src={image} />
        </figure>

      </article>
      <Outlet />
      <div className='backgroundLeft'/>
    </section>
  );
}