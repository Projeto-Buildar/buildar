import Overworld from './Overworld'; // Importa a classe Overworld

// Função init que inicializa o jogo e retorna uma instância de Overworld
export default function init(element, navigate) {
    // Cria uma nova instância de Overworld com o elemento fornecido
    const overworld = new Overworld({
        element: element, // Passa o elemento como configuração para o Overworld
        navigate: navigate 
    });

    overworld.init(); // Inicializa o Overworld

    return overworld; // Retorna a instância do Overworld criada
}
