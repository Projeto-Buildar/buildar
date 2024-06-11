import logo from "./images/Logomarca_Oficial.png";
import HeaderHome from "../home/HeaderHome";
import './Voluntario.css';

export default function Voluntario() {
    return (
        <main id='voluntario'>
            <HeaderHome/>

                <div id="titulo">
                    <h1>Seja um(a) Voluntário(a)</h1>
                    <p>Você tem experiência no mercado de trabalho e deseja fazer a diferença na vida dos jovens? Junte-se a nós como voluntário e compartilhe seus conhecimentos sobre carreiras e habilidades profissionais!<br/> Inspire a próxima geração com suas histórias e conselhos práticos. Sua contribuição pode ajudar a Buildar o futuro dos jovens!

                    </p>
                </div>
            
            <div class="containerVoluntario">


                <form action="/submit" method="post" class="form">
                    <div class="form-group">
                        <label for="name">Nome:</label>
                        <input type="text" id="name" name="name" required></input>
                    </div>

                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required></input>
                    </div>

                    <div class="form-group">
                        <label for="message">Assunto que deseja abordar:</label>
                        <textarea id="message" name="message" rows="4" cols="50" required></textarea>
                    </div>

                    <div class="form-group">
                        <label for="message">Data de disponibilidade para palestrar:</label>
                        <input type="date" id="disponibilidade" name="disponibilidade"></input>
                    </div>

                    <div class="form-group">
                        <input type="checkbox" id="terms" name="terms" required></input>
                        <label for="terms">Eu concordo com os <a href="/terms">termos de uso</a> e a <a href="/privacy">política de privacidade</a>.</label>
                    </div>

                    <button type="submit">Enviar</button>
                </form>

            </div>

        </main>
    )

}



