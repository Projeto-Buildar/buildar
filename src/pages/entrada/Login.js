import './Login.css';
import forma3 from './images/Vector-3.png';
import forma from './images/Vector.png';
import logo from './images/logo_on.png';
import forma2 from './images/forma2.png'
import forma1 from './images/forma1.png';
// import formasLogin from './images/formas-login.png';

export default function Login() {
    return (
        <main id="login">
                <div className='formas'>
                    <img src={forma1} alt="forma1" className='forma1' />
                </div>
                <header>
                    <img src={logo} alt="Logo" className="logo" />
                    <img src={forma2} alt="forma2" className='forma2'/>
                </header>
                
               <article>
                    <div className='caixa-esquerda'>
                        <h1>Bem vindo de volta, CAParceiro</h1>
                    </div>
                    <div className='caixa-direita'>
                        <h1>Login</h1>
                        <form action="">
                            <h3>Email</h3>
                            <input type="email" name="email" id="email" placeholder="e-mail / telefone" required />
                            <h3>Senha</h3>
                            <input type="password" name="password" id="password" placeholder="Informe sua senha" required />
                            <input type="submit" id="submit" value='Enviar' />
                        </form>
                        
                        <p>Não tem uma conta? <button><strong>Cadastre-se</strong></button></p>
                    </div>
                </article>
        </main>
    );
}
