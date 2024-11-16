// Classe KeyPressListener que permite escutar eventos de pressionamento de tecla
class KeyPressListener {
    // Construtor que recebe o keyCode da tecla e uma função de callback
    constructor(keyCode, callback) {
        let keySafe = true; // Variável para controlar se a tecla está segura para ser pressionada

        // Função de callback para o evento keydown
        this.keydownFunction = function (event) {
            if (event.code === keyCode) { // Verifica se o código da tecla pressionada corresponde ao keyCode fornecido
                if (keySafe) { // Verifica se a tecla está segura para ser pressionada
                    keySafe = false; // Marca a tecla como não segura para evitar múltiplas execuções do callback
                    callback(); // Chama a função de callback passada como parâmetro
                }
            }
        };

        // Função de callback para o evento keyup
        this.keyupFunction = function (event) {
            if (event.code === keyCode) { // Verifica se o código da tecla solta corresponde ao keyCode fornecido
                keySafe = true; // Marca a tecla como segura para ser pressionada novamente
            }
        };

        // Adiciona os event listeners para keydown e keyup ao documento
        document.addEventListener("keydown", this.keydownFunction);
        document.addEventListener("keyup", this.keyupFunction);
    }

    // // Método para desvincular os event listeners do documento
    unbind() {
        document.removeEventListener("keydown", this.keydownFunction); // Remove o event listener de keydown
        document.removeEventListener("keyup", this.keyupFunction); // Remove o event listener de keyup
    }
}

export default KeyPressListener; // Exporta a classe KeyPressListener como padrão
