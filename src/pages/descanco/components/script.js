import { updateGround, setupGround } from "./Ground.js"
import { updateDino, setupDino, getDinoRect, setDinoLose } from "./Dino.js"
import { updateCactus, setupCactus, getCactusRects } from "./Cactus.js"

const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30
const SPEED_SCALE_INCREASE = 0.00001 // Aumento da velocidade com o tempo

const worldElem = document.querySelector("[data-world]") // Seleciona o elemento que representa o mundo do jogo
const scoreElem = document.querySelector("[data-score]") // Seleciona o elemento que mostra a pontuação
const startScreenElem = document.querySelector("[data-start-screen]") // Seleciona o elemento da tela inicial

setPixelToWorldScale() // Define a escala inicial do mundo do jogo
window.addEventListener("resize", setPixelToWorldScale) // Redefine a escala do mundo ao redimensionar a janela
document.addEventListener("keydown", handleStart, { once: true }) // Inicia o jogo ao pressionar qualquer tecla

let lastTime
let speedScale
let score

// Função principal de atualização do jogo
function update(time) {
  if (lastTime == null) {
    lastTime = time
    window.requestAnimationFrame(update)
    return
  }
  const delta = time - lastTime

  updateGround(delta, speedScale)
  updateDino(delta, speedScale)
  updateCactus(delta, speedScale)
  updateSpeedScale(delta)
  updateScore(delta)
  if (checkLose()) return handleLose()

  lastTime = time
  window.requestAnimationFrame(update)
}

// Função para verificar se o dinossauro colidiu com algum cacto
function checkLose() {
  const dinoRect = getDinoRect()
  return getCactusRects().some(rect => isCollision(rect, dinoRect))
}

// Função para verificar colisão entre dois retângulos
function isCollision(rect1, rect2) {
  return (
    rect1.left < rect2.right &&
    rect1.top < rect2.bottom &&
    rect1.right > rect2.left &&
    rect1.bottom > rect2.top
  )
}

// Função para aumentar a escala de velocidade com o tempo
function updateSpeedScale(delta) {
  speedScale += delta * SPEED_SCALE_INCREASE
}

// Função para atualizar a pontuação
function updateScore(delta) {
  score += delta * 0.01
  scoreElem.textContent = Math.floor(score)
}

// Função para iniciar o jogo
function handleStart() {
  lastTime = null
  speedScale = 1
  score = 0
  setupGround()
  setupDino()
  setupCactus()
  startScreenElem.classList.add("hide")
  window.requestAnimationFrame(update)
}

// Função para lidar com a perda do jogo
function handleLose() {
  setDinoLose()
  setTimeout(() => {
    document.addEventListener("keydown", handleStart, { once: true })
    startScreenElem.classList.remove("hide")
  }, 100)
}

// Função para definir a escala do mundo do jogo com base na janela
function setPixelToWorldScale() {
  let worldToPixelScale
  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    worldToPixelScale = window.innerWidth / WORLD_WIDTH
  } else {
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT
  }

  worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
  worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`
}
