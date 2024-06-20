const utils = {
  // Converte um valor para coordenada de grade (16 pixels por unidade)
  withGrid(n) {
      return n * 16;
  },

  // Converte coordenadas (x, y) para formato de grade (ex: "x,y")
  asGridCoord(x, y) {
      return `${x * 16},${y * 16}`;
  },

  // Calcula a próxima posição baseada na direção e na posição inicial
  nextPosition(initialX, initialY, direction) {
      let x = initialX;
      let y = initialY;
      const size = 16; // Tamanho de cada unidade da grade

      // Atualiza as coordenadas baseado na direção especificada
      if (direction === "left") {
          x -= size;
      } else if (direction === "right") {
          x += size;
      } else if (direction === "up") {
          y -= size;
      } else if (direction === "down") {
          y += size;
      }

      return { x, y }; // Retorna as novas coordenadas
  },

  // Retorna a direção oposta à especificada
  oppositeDirection(direction) {
      if (direction === "left") {
          return "right";
      } else if (direction === "right") {
          return "left";
      } else if (direction === "up") {
          return "down";
      } else {
          return "up";
      }
  },

  // Espera a quantidade de milissegundos especificada
  wait(ms) {
      return new Promise(resolve => {
          setTimeout(() => {
              resolve();
          }, ms);
      });
  },

  // Retorna um elemento aleatório de um array
  randomFromArray(array) {
      return array[Math.floor(Math.random() * array.length)];
  },

  // Emite um evento personalizado com um nome e detalhes associados
  emitEvent(name, detail) {
      const event = new CustomEvent(name, {
          detail
      });
      document.dispatchEvent(event);
  }
};

export default utils;
