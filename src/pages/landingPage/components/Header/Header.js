import './Header.css';
import logo from '../../images/logo_on.png';
import language from '../../images/language.png';

export default function Header() {
  return(
        <header>
          <nav>
            <a href='./index.html'><img src={logo} className='logo'/></a>
            <div>
              <div className='button'>Dê O PLAY</div>
              <div className='languageButton'>
                <img src={language}/>
                <select name="language" id="language" aria-placeholder='Idioma'>
                  <option value="Português">Português</option>
                  <option value="Inglês">Inglês</option>
                  <option value="Espanhol">Espanhol</option>
                </select>
              </div>
            </div>
          </nav>
        </header>
  );
}

// {position: window.scrollY >= 300 ? 'fixed' : 'absolute'}