import { useParams, useNavigate } from 'react-router-dom';
import PerfilDialogo from './PerfilDialogo';
import Contexto from './Contexto';
import Vivi from './imagem/vivi.png';
import Perfil from './imagem/perfil.png';
import { useState, useEffect } from 'react';
import './Conteudos.css';

const listaConteudos = [
    {
        indice: 'GestaoDeTempo1',
        conteudo: [
            {
                id: 1,
                messageClass: 'message-box2',
                textoVivi: 'Nessa sala você aprenderá sobre a gestão de tempo, uma habilidade crucial para alcançar a eficiência e o sucesso em qualquer área de atuação.',
                recepcao: true,
                temPerfil: true,
                textoBotaoUm: 'Estou ansioso para começar!',
                textoBotaoDois: 'Que comecem os jogos',
                temBotoesDireciona: false,
                bgImage: 'classebg1'
            },
            {
                id: 2,
                messageClass: 'message-box2',
                textoVivi: 'Quando você domina a gestão do tempo, consegue equilibrar melhor suas responsabilidades, tanto pessoais quanto profissionais, evitando sobrecargas e melhorando a qualidade do seu trabalho.',
                recepcao: false,
                temPerfil: false,
                temBotoesDireciona: true,
                bgImage: 'classebg2'
            },
            {
                id: 3,
                messageClass: 'message-box2',
                textoVivi: 'Se prepare para embarcar nessa jornada e descobrir como organizar o seu tempo, cumprir suas tarefas e atividades de forma organizada, e atender a prazos estabelecidos',
                recepcao: false,
                temPerfil: true,
                textoBotaoUm: 'Eu nasci preparado',
                textoBotaoDois: 'Pode me explicar de novo?',
                temBotoesDireciona: false,
                bgImage: 'classebg3'
            },
            {
                id: 4,
                messageClass: 'message-box2',
                textoVivi: 'Agora que você sabe a importancia dessa habilidade, bora praticar!Se prepare para embarcar nessa jornada e descobrir como organizar o seu tempo, cumprir suas tarefas e atividades de forma organizada, e atender a prazos estabelecidos. Está preparado?',
                recepcao: false,
                temPerfil: false,
                temBotoesDireciona: true,
                bgImage: 'classebg4'
            },
            {
                id: 5,
                messageClass: 'message-box2',
                textoVivi: 'Agora, imagine que você é um estagiário(a) na área de RH em uma grande empresa de tecnologia. Antes de começar seu trabalho, você precisa organizar as tarefas do seu dia. Seu horário de trabalho é das 9h às 15h e seu horário de almoço é das 12h às 13h. Sua supervisora marcou uma reunião com a equipe das 14h às 15h.',
                recepcao: false,
                temPerfil: false,
                temBotoesDireciona: true,
                bgImage: 'classebg5'
            },
        ]
    },
    {
        indice: 'GestaoDeTempo2',
        conteudo: [
            {
                id: 1,
                messageClass: 'message-box2',
                textoVivi: 'Teste conteudo 2',
                recepcao: true,
                temPerfil: true,
                textoBotaoUm: 'Estou ansioso para começar!',
                textoBotaoDois: 'Testaaaaaaando',
                temBotoesDireciona: false,
                bgImage: 'classebg1'
            },
            {
                id: 2,
                messageClass: 'message-box2',
                textoVivi: 'Teste conteudo 2 pagina 2',
                recepcao: false,
                temPerfil: false,
                temBotoesDireciona: true,
                bgImage: 'classebg2'
            },
        ]
    },
    // Outros conteúdos aqui
];

export default function Conteudos() {
    const { indice } = useParams();
    const navigate = useNavigate();

    const objetoConteudo = listaConteudos.find(objeto => objeto.indice === indice);

    const [conteudoIndex, setConteudoIndex] = useState(0);

    useEffect(() => {
        if (objetoConteudo) {
            setConteudoIndex(0);
        }
    }, [indice]);

    const BtnFunction = (increment) => {
        const newIndex = conteudoIndex + increment;
        if (newIndex >= 0 && newIndex < objetoConteudo.conteudo.length) {
            if(newIndex < objetoConteudo.conteudo.length - 1){
                setConteudoIndex(newIndex);
            }else {
                if(increment === -1){
                   setConteudoIndex(newIndex);
               } else {
                   navigate(`/conteudos/${objetoConteudo.indice}/conteudo6`)
               }
            }
            // setConteudoIndex(newIndex);      
        }
    }

    const indiceConteudo = objetoConteudo.conteudo[conteudoIndex];

    return (
        <div className={indiceConteudo.bgImage}>
            <Contexto
                vivi={Vivi}
                messageBox={indiceConteudo.messageClass}
                recepcao={indiceConteudo.recepcao}
                textoVivi={indiceConteudo.textoVivi}
                retornaGame={() => navigate(-1)}
            />

            {indiceConteudo.temBotoesDireciona && (
                <>
                    <button className="anterior" onClick={() => BtnFunction(-1)}>Voltar</button>
                    <button className="proximo" onClick={() => BtnFunction(1)}>Próximo</button>
                </>
            )}

            {indiceConteudo.temPerfil &&
                <PerfilDialogo
                    perfil={Perfil}
                    textoBotaoUm={indiceConteudo.textoBotaoUm}
                    textoBotaoDois={indiceConteudo.textoBotaoDois}
                    botaoClicado={() => BtnFunction(1)}
                />
            }


        </div>
    )
}