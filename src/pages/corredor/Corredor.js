import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Inicializar from './js/Inicializar';
import Header from '../home/HeaderHome';
import TextMessage from './js/TextMessage';

import "./corredor.css";

export default function Corredor() {

    const { mapaNome } = useParams();
    /* navegarParaPagina é usado para redirecionar a pagina para uma rota informada, exemplo: navegarParaPagina('/nomeRota');
    o caminho para qual ela vai ir é: Inicializar -> Game */
    const navegarParaPagina = useNavigate();

    // pega uma referencia a div que contem a classe .game-container, dando acesso a todos seus elementos filhos
    const referenciaDoGameContainer = useRef(null);

    // recebe as informações da tag canvas atravez da função Inicializar do game, dando acesso a elementos e poder criar e manipular novos elementos
    const referenciaDoGame = useRef(null);

    // Armazena um array de mensagens que serão ditas por npcs ou interatividades com o cenário
    const [mensagens, setMensagens] = useState([]);

    const [nomeDialogo, setNomeDialogo] = useState("");

    const [hasInitialCutscenePlayed, setHasInitialCutscenePlayed] = useState(
        localStorage.getItem('hasInitialCutscenePlayed') === 'true'
    );

    // const [playerPosition, setPlayerPosition] = useState({ x: props.x || 11, y: props.y || 9 });
    // const [playerLastPosition, setPlayerLastPosition] = useState(null);


    /* "recebeTextoMensagem" é a função que recebe os textos e a chamada deles e coloca eles no array "mensagens", 
    OBS: ele segue o caminho: Inicializar -> Game -> ConfiguracaoMapaGame -> OverworldEvent
    é utilizado na função textMessage no OverworldEvent quando o Init de evento é incializado, e retorna uma função resolve/callback,
    que só acontece quando cada textMessage é finalizado */
    function recebeTextoMensagem(text, callBack, nome) {
        setMensagens((prevMessages) => [...prevMessages, { text: text, callBack: callBack }]);
        setNomeDialogo(nome);
    }

    function handleComplete(index) {
        if (index >= 0 && index < mensagens.length) {
            mensagens[index].callBack();
            setMensagens((prevMessages) => prevMessages.filter((message, i) => i !== index));
        }
    }

    /* useEffect de forma geral, é uma forma de você controlar quantas vezes você quer que uma determinada função ou algo relacionado aconteça
    isso é determinado pelos "[]" no final dele, se estiver vazio, tudo que está dentro de useEffect vai acontecer 1 unica vez quando a pagina é renderizada, agora se ele tiver alguma váriavel dentro dele, ele vai acontecer sempre que verificar alguma alteração desssa variável 
    */
    useEffect(() => {

    //     // Recuperar o nome do mapa
    // const storedMapaNome = localStorage.getItem('mapaNome');
    // // Se houver um nome de mapa armazenado e nenhum nome de mapa foi fornecido nos parâmetros da URL,
    // // use o nome do mapa armazenado. Caso contrário, use o nome do mapa dos parâmetros da URL.
    // const currentMapaNome = storedMapaNome && !mapaNome ? storedMapaNome : mapaNome;
    // // Armazenar o nome do mapa atual
    // localStorage.setItem('mapaNome', currentMapaNome);
        // limpa o localStorage do navegador para rodar a cutscene mais de uma vez
        // localStorage.clear();

        /*Verifica se .game-container foi renderizado e pego sua referência, 
        e se o ref do game ainda não foi recebido, para ai pegar o ref do game 1 unica vez, pois então if abaixo não aconteceria novamente
        current basicamente é a forma de você conseguir acessar as informação do ref atual que está na variável*/
        if (referenciaDoGameContainer.current && !referenciaDoGame.current) {

            /* referenciaDoGame recebe o inicializar do Game, e é enviado o ref do .game-container, a função para navegar para outras páginas, 
            e a função que recebe os textos dos dialogos e interações do game, e o nome do mapa que será renderizado*/
            referenciaDoGame.current = Inicializar(
                {
                    element: referenciaDoGameContainer.current,
                    navegarParaPagina,
                    recebeTextoMensagem,
                    mapas: mapaNome
                });

        }

        if(hasInitialCutscenePlayed){
            referenciaDoGame.current.comecaJogo();
        }
        


        // setPlayerLastPosition(playerPosition);

        // function handleBeforeUnload(event) {
        //     event.preventDefault();
        //     event.returnValue = '';
        // }

        // Adiciona o ouvinte de evento ao window
        // window.addEventListener('beforeunload', handleBeforeUnload);




        // console.log(hasInitialCutscenePlayed)
        if (!hasInitialCutscenePlayed) {
            referenciaDoGame.current.startInitialCutscene().then(() => {
                localStorage.setItem('hasInitialCutscenePlayed', 'true');
                setHasInitialCutscenePlayed(true);
            });
        }

        // const intervalId = setInterval(() => {
        //     // Código do intervalo aqui
        // }, 1000);

        return () => {
            if (referenciaDoGame.current) {
                referenciaDoGame.current.stopGameLoop();
                referenciaDoGame.current = null;
            }
            // window.removeEventListener('beforeunload', handleBeforeUnload);
            // clearInterval(intervalId);
        };

        // nos [] abaixo, você pode colocar variáveis que podem ter alterações dos seus estados e valores, para fazer useEffect acontecer novamente caso ocorra
    }, [mapaNome]);

    return (
        <div className="telaGame">

            <Header />
            
            {/* game-container é o container do game, e o ref={referenciaDoGameContainer} está mandando 
            para a variável "referenciaDoGameContainer" sua referência, dando acesso a suas informações */}
            <div className="game-container" ref={referenciaDoGameContainer}>

                {/* canvas é uma tag que dá a posibilidade de renderizar elementos dinamicos na tela, é onde todo o game é feito e mostrado */}
                <canvas className="game-canvas" width="496" height="192"></canvas>

                {mensagens.map((message, index) => (
                    <TextMessage key={index} text={message.text} nome={nomeDialogo} onComplete={() => handleComplete(index)} />
                ))}

            </div>
            {/* O botão está no meio */}
            <button className='resetaStorage' onClick={() => localStorage.clear()}> Clique aqui para limpar o LocalStorage</button>
        </div>
    );
}