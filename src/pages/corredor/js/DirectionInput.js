export default class DirectionInput {
    constructor() {
        // Array para armazenar direções pressionadas pelo usuário
        this.heldDirections = [];

        // Mapa que associa códigos de tecla a direções correspondentes
        this.map = {
            "ArrowUp": "up",
            "ArrowDown": "down",
            "ArrowLeft": "left",
            "ArrowRight": "right",
            "KeyW": "up",
            "KeyS": "down",
            "KeyA": "left",
            "KeyD": "right",
        };
    }

    // Propriedade de leitura que retorna a primeira direção na lista de direções pressionadas
    get direction() {
        return this.heldDirections[0];
    }

    // Método para inicializar a captura de eventos de teclado
    init() {
        // Adiciona um ouvinte de evento para capturar pressionamentos de tecla
        document.addEventListener("keydown", e => {
            // Obtém a direção correspondente ao código da tecla pressionada
            const dir = this.map[e.code];
            // Verifica se a direção obtida é válida e não está atualmente na lista de direções pressionadas
            if (dir && this.heldDirections.indexOf(dir) === -1) {
                // Insere a direção no início da lista de direções pressionadas
                this.heldDirections.unshift(dir);
            }
        });

        // Adiciona um ouvinte de evento para capturar liberações de tecla
        document.addEventListener("keyup", e => {
            // Obtém a direção correspondente ao código da tecla liberada
            const dir = this.map[e.code];
            // Encontra o índice da direção na lista de direções pressionadas
            const index = this.heldDirections.indexOf(dir);
            // Se a direção estiver na lista, remove-a
            if (index > -1) {
                this.heldDirections.splice(index, 1);
            }
        });
    }
}
