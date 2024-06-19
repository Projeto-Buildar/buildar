import Sprite from './Sprite'; // Importa a classe Sprite
import playerV1 from "../images/personagens/pessoa/hero.png"; // Importa a imagem do jogador

class GameObject {
    constructor(config) {
        // Inicializa as propriedades do objeto com os valores do objeto config ou padrões
        this.x = config.x || 0; // Posição horizontal inicial ou 0 se não especificado
        this.y = config.y || 0; // Posição vertical inicial ou 0 se não especificado
        this.direction = config.direction || "down"; // Direção inicial ou "down" se não especificado

        // Cria um novo objeto Sprite com base nas configurações fornecidas
        this.sprite = new Sprite({
            gameObject: this, // Referência ao próprio objeto GameObject
            src: config.src || playerV1, // Fonte da imagem, padrão é playerV1 (hero.png) se não especificado
            numeroDeFrames: config.numeroDeFrames, // Número de frames da animação
            colunaY: config.colunaY, // Coluna Y da sprite sheet
            distanciaX: config.distanciaX, // Distância X entre os frames da sprite sheet
            distanciaY: config.distanciaY, // Distância Y entre os frames da sprite sheet
            width: config.width, // Largura da sprite
            height: config.height, // Altura da sprite
            animationFrameLimit: config.animationFrameLimit // Limite de frames para animação
        });
    }

    // Método para montar o objeto no mapa
    mount(map) {
        console.log("Montando");
        this.isMounted = true; // Marca o objeto como montado
        if (map) {
            map.addWall(this.x, this.y); // Adiciona uma parede ao mapa nas coordenadas (x, y)
        }
    }

    // Método de atualização do objeto (pode ser implementado posteriormente)
    update() {
        // Este método pode ser usado para atualizar o estado do objeto
        // Exemplo: atualização da posição, verificação de colisões, etc.
    }
}

export default GameObject; // Exporta a classe GameObject como padrão
