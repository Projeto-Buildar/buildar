import './PrimeiraTela.css';
import image from '../../images/primeiraTela_img.png';
import { Outlet, Link } from "react-router-dom";

export default function PrimeiraTela() {
  return (
    <div className='frames' id="primeiraTela">
      <div className='backgroundLeft'></div>
      <article>
        <h1>TENHA UM GUIA PARA MOLDAR SUAS SOFT SKILLS</h1>
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