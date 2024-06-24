import React from 'react';
import Footer from '../landingPage/components/Footer/Footer';
import './Termos.css';
import HeaderTermos from './components/headertermos';

export default function Termos() {
    return (
        <>
            <HeaderTermos />
            <main className="termos-container">
                <section className="termos-content">
                    <h2>Termos de uso</h2>
                    <p><em>Última atualização: 06/2024</em></p>
                    
                    <h3>1. Aceitação dos Termos</h3>
                    <p>Ao acessar e usar a nossa plataforma, você concorda em cumprir e ficar vinculado a estes Termos de Uso e a todas as leis e regulamentos aplicáveis. Se você não concorda com algum destes termos, não use a plataforma.</p>
                    
                    <h3>2. Descrição dos Serviços</h3>
                    <p>Nossa plataforma oferece ferramentas e recursos para ajudar os jovens a desenvolverem suas soft skills através da gamificação. Os usuários podem participar de atividades, jogos e desafios projetados para melhorar habilidades como comunicação, trabalho em equipe, liderança, resolução de problemas, entre outras.</p>
                    
                    <h3>3. Cadastro e Conta do Usuário</h3>
                    <p>Para acessar certas funcionalidades da plataforma, você pode precisar criar uma conta. Ao criar uma conta, você concorda em fornecer informações verdadeiras, precisas, atualizadas e completas sobre si mesmo conforme solicitado pelo formulário de registro.</p>
                    
                    <h3>4. Uso da Plataforma</h3>
                    <p>Você concorda em usar a plataforma apenas para os fins permitidos por (a) estes Termos de Uso e (b) quaisquer leis, regulamentos ou práticas geralmente aceitas nas jurisdições relevantes. Você concorda em não acessar (ou tentar acessar) qualquer um dos Serviços por qualquer meio que não seja através da interface fornecida pela plataforma, a menos que você tenha sido especificamente autorizado a fazê-lo em um acordo separado.</p>
                    
                    <h3>5. Conteúdo do Usuário</h3>
                    <p>Ao enviar conteúdo para a plataforma, você concede à nossa plataforma uma licença mundial, não exclusiva, sem royalties, sublicenciável e transferível para usar, reproduzir, distribuir, preparar trabalhos derivados, exibir e executar esse conteúdo em conexão com a prestação dos serviços.</p>
                    
                    <h3>6. Privacidade</h3>
                    <p>A sua privacidade é importante para nós. Leia nossa Política de Privacidade para entender como coletamos, usamos e protegemos suas informações pessoais.</p>
                    
                    <h3>7. Modificações nos Termos</h3>
                    <p>Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações serão efetivas a partir da publicação na plataforma. É sua responsabilidade revisar periodicamente os Termos de Uso para estar ciente de quaisquer modificações.</p>
                    
                    <h3>8. Limitação de Responsabilidade</h3>
                    <p>Na medida máxima permitida pela lei aplicável, em nenhum caso a nossa plataforma será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, ou qualquer perda de lucros ou receitas, incorridos direta ou indiretamente, ou qualquer perda de dados, uso, boa vontade ou outras perdas intangíveis.</p>
                    
                    <h3>9. Rescisão</h3>
                    <p>Podemos encerrar ou suspender seu acesso à nossa plataforma imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar os Termos de Uso.</p>
                    
                    <h3>10. Disposições Gerais</h3>
                    <p>Estes Termos de Uso constituem o acordo integral entre você e nossa plataforma e regem o uso dos Serviços, substituindo quaisquer acordos anteriores entre você e nossa plataforma. Se qualquer disposição destes Termos de Uso for considerada inválida, as demais disposições permanecerão em pleno vigor e efeito.</p>
                    
                    <h3>11. Contato</h3>
                    <p>Se você tiver alguma dúvida sobre estes Termos de Uso, por favor, entre em contato conosco através do e-mail: suporte@buildarsoftskills.com.</p>

                    <p>Ao usar nossa plataforma, você concorda com estes Termos de Uso. Se você não concorda com algum dos termos mencionados, por favor, não utilize nossa plataforma.</p>
                </section>
            </main>
            <Footer />
        </>
    );
}
