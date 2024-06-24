import utils from "./Utils";
// import TextMessage from './TextMessage'

class OverworldEvent {
    constructor({ map, event, recebeTextoMensagem, navegarParaPagina }) {
        this.map = map;
        this.event = event;
        this.recebeTextoMensagem = recebeTextoMensagem;
        this.navegarParaPagina = navegarParaPagina
    }
  
    stand(resolve) {
      const who = this.map.gameObjects[this.event.who];
  
      who.startBehavior({
        map: this.map
      }, {
        type: "stand",
        direction: this.event.direction,
        time: this.event.time
      });
  
      const completeHandler = e => {
        if (e.detail.whoId === this.event.who) {
          document.removeEventListener("PersonStandComplete", completeHandler);
          resolve();
        }
      };
      document.addEventListener("PersonStandComplete", completeHandler);
    }
  
    walk(resolve) {
      const who = this.map.gameObjects[this.event.who];
  
      who.startBehavior({
        map: this.map
      }, {
        type: "walk",
        direction: this.event.direction,
        retry: true
      });
  
      const completeHandler = e => {
        if (e.detail.whoId === this.event.who) {
          document.removeEventListener("PersonWalkingComplete", completeHandler);
          resolve();
        }
      };
      document.addEventListener("PersonWalkingComplete", completeHandler);
    }
  
    textMessage(resolve) {
        if (this.event.faceHero) {
            const obj = this.map.gameObjects[this.event.faceHero];
            obj.direction = utils.oppositeDirection(this.map.gameObjects["player"].direction);
        }

        this.recebeTextoMensagem(this.event.text, resolve);
    }

    redirecionarPagina(resolve) {
      this.navegarParaPagina(this.event.text);
      resolve();
  }
  
    init() {
      return new Promise(resolve => {
        this[this.event.type](resolve);
      });
    }
  }

  export default OverworldEvent;