import '../sections/cadastro.css';
import logo from '../img/logo_on.png';
import GroupFormas from '../img/Group-formas.png';
import formaCadastro1 from '../img/forma-cadastro1.png';
import formaCadastro2 from '../img/forma-cadastro2.png';

export default function Cadastro() {
    return (
        <main id="Cadastro">
            <div className='formas'>
                <img src={formaCadastro1} alt="formaCadastro1" className='formaCadastro1' /> 
            </div>
            <header>
                <img src={logo} alt="Logo" className="logo" />
                <img src={formaCadastro2} alt="formaCadastro2" className='formaCadastro2'/> 
            </header>
            
            <article>
                <div className='caixa-esquerda-cadastro'>
                    <h1>Vamos Buildar juntos o seu Futuro!</h1>
                </div>
                <div className='caixa-direita-cadastro'>
                    <h1>Cadastro</h1>
                    <form action="">
                        <h3>Nome</h3>
                        <input type="text" name="nome" placeholder="Nome" required/>
                        <h3>Email/Telefone</h3>
                        <input type="email" name="email" id="email" placeholder="e-mail / telefone" required />
                        <h3>Senha</h3>
                        <input type="password" name="password" id="password" placeholder="Informe sua senha" required />
                        <h3>Confirme a senha</h3>
                        <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirme sua senha" required />
                        <div className="checkbox-group">
                            <input type="checkbox" name="aceitar_politicas" id="aceitar_politicas" required />
                            <label htmlFor="aceitar_politicas">
                                Eu aceito as <a href="/politicas-de-privacidade" target="_blank">políticas de privacidade</a>
                            </label>
                        </div>

                        <input type="submit" id="submit" name="submit" value="Cadastre-se" />
                    </form>
                    
                    <p>Tem uma conta? <button><strong>Conecte-se</strong></button></p>
                </div>
            </article>
        </main>
    );
}
