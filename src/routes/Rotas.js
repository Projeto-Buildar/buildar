/* imports dos componentes funcionais da biblioteca React-Router-Dom 
usado para definir rotas de navegação entre páginas*/
//
// - BrowserRouter: Envolve a aplicação inteira e fornece o contexto para o roteamento.
// - Routes: Contém um conjunto de rotas definidas para a aplicação.
// - Route: Define uma rota individual, especificando o caminho (path) e o componente a ser renderizado
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Imports dos components funcionais das páginas
//---------------------------------------------------------------|

// Components acessiveis da landingPage
import LandingPage from '../pages/landingPage/LandingPage.js';
import Login from '../pages/entrada/Login.js';
import Cadastro from '../pages/entrada/Cadastro.js';
import SobreNosTentativa from '../pages/sobreTentativa/SobreNos.js';
import FaleConosco from '../pages/faleConosco/FaleConosco.js';
import Termos from '../pages/termos/Termos.js';

// Components acessiveis do Home
import Home from '../pages/home/Home.js';
import Corredor from '../pages/corredor/Corredor.js';
import Pratica from '../pages/conteudo/Pratica.js';
import Conteudos from '../pages/conteudo/Conteudos.js';
import Conteudo6 from '../pages/conteudo/Conteudo6.js';
import Conteudo7 from '../pages/conteudo/Conteudo7.js';

// Components acessiveis de Conexoes
import Conexoes from '../pages/conexoes/Conexoes.js';
import Voluntario from '../pages/inscricaoVoluntario/Voluntario.js';

// Components acessiveis da Loja
import Loja from '../pages/loja/Loja.js';
import Pagamento from '../pages/pagamento/Pagamento.js';

// Componente do Perfil
import Perfil from '../pages/perfil/Perfil.js';

// Components acessiveis da Area de Descanso
import AreaDescanso from '../pages/areaDescanso/AreaDescanso.js';
import GameDescanso from '../GameDescanso.js';
import InicioQuiz from '../pages/quiz/InicioQuiz.js'
import Quiz from '../pages/quiz/Quiz1.js';
import Quiz2 from '../pages/quiz/Quiz2.js';

//---------------------------------------------------------------|

export default function Rotas() {

    const propriedadesRotas = [
        {
            path: "/",
            element: < LandingPage />
        },
        {
            path: "login",
            element: < Login />
        },
        {
            path: "cadastro",
            element: < Cadastro />
        },
        {
            path: "sobre",
            element: < SobreNosTentativa />
        },
        {
            path: "faleConosco",
            element: < FaleConosco />
        },
        {
            path: "termos",
            element: < Termos />
        },
        {
            path: "home",
            element: < Home />
        },
        {
            path: "corredor/:mapaNome",
            element: < Corredor />
        },
        {
            path: "pratica",
            element: < Pratica />
        },
        {
            path: "conteudo6",
            element: < Conteudo6 />
        },
        {
            path: "conteudos/:miniGame/conteudo6",
            element: < Conteudo6 />
        },
        {
            path: "conteudos/:miniGame/conteudo7",
            element: < Conteudo7 />
        },
        {
            path: "conteudos/:indice",
            element: < Conteudos />
        },
        {
            path: "conexoes",
            element: < Conexoes />
        },
        {
            path: "inscricaoVoluntario",
            element: < Voluntario />
        },
        {
            path: "loja",
            element: < Loja />
        },
        {
            path: "pagamento",
            element: < Pagamento />
        },
        {
            path: "perfil",
            element: < Perfil />
        },
        {
            path: "game_descanso",
            element: < GameDescanso />
        },
        {
            path: "descanso",
            element: < AreaDescanso />
        },
        {
            path: "quiz",
            element: < InicioQuiz />
        },
        {
            path: "quiz1",
            element: < Quiz />
        },
        {
            path: "quiz2",
            element: < Quiz2 />
        },
    ]

    return (
        <BrowserRouter>
            <Routes>
                {propriedadesRotas.map((propriedade) => {
                    return <Route key={propriedade.path} {...propriedade} />
                })}
            </Routes>
        </BrowserRouter>
    );

}