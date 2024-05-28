export default function Login (){
    return (
        <main id="login">
            <article>
                <h1>Bem vindo de volta, CAParceiro</h1>
                <form action="">
                    <input type="email" name="email" id="email" placeholder="Informe seu e-mail ou telefone" required/>
                    <input type="password" name="password" id="password" placeholder="Informe sua senha" required/>
                    <input type="submit" id="submit" value='Enviar'/>
                </form>
                <p>Não tem uma conta? Cadastre-se</p>
            </article>
        </main>
    )
}