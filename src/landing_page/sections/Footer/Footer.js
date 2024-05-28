import './Footer.css';
import logo from './images/logo_off.png';
import instagram from './images/social_instagram.png';
import tiktok from './images/social_tiktok.png';
import linkedin from './images/social_linkedin.png';
import github from './images/social_github.png';

export default function Footer() {
  return(
    <footer>
      <article>
        <section className='linkList'>
          <ul>
            <a><li>Saiba Mais</li></a>
            <a><li>Sobre</li></a>
            <a><li>Conexões</li></a>
            <a><li>Apoie</li></a>
          </ul>
          <ul>
            <a><li>Dúvidas Frequentes</li></a>
            <a><li>Fale Conosco</li></a>
            <a><li>Ajuda</li></a>
            <a><li>Atendimento</li></a>
          </ul>
        </section>
        <section>
          <a href='./index.html'><img src={logo} className='logo'/></a>
          <p>Buildar c 2024| Todos os direitos reservados</p>
        </section>
      </article>
      <div className='breakBar'></div>
      <aside>
        <section className='linkList'>
          <a><p>Política de Privacidade</p></a>
          <a><p>Termos de Uso</p></a>
        </section>
        <section className='social'>
          <a href='https://www.instagram.com/buildar_oficial/' target="_blank"><img src={instagram}/></a>
          <a href='https://www.tiktok.com/@projeto_buildar' target="_blank"><img src={tiktok}/></a>
          <a href='https://www.linkedin.com/company/buildaroficial/' target="_blank"><img src={linkedin}/></a>
          <a href='https://github.com/projeto-buildar' target="_blank"><img src={github}/></a>
        </section>
      </aside>
    </footer>
  );
}