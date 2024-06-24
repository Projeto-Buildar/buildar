import Game from './Game';

// Função que inicializa o Game, e recebe um props (objeto) com os valores que serão enviados para a instancia do Game
export default function Inicializar(props) {
    const instanciaGame = new Game({
        element: props.element,
        navegarParaPagina: props.navegarParaPagina,
        recebeTextoMensagem: props.recebeTextoMensagem,
        mapas: props.mapas
    });

    // Faz a função init do game funcionar e carregar tudo que começa inicialmente
    instanciaGame.inicializaGame();

    return instanciaGame;
}