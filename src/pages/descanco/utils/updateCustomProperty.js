// Define funções utilitárias para manipulação de propriedades customizadas em elementos DOM

// Função para definir uma propriedade customizada em um elemento DOM
export function setCustomProperty(elem, prop, value) {
  elem.style.setProperty(prop, value); // Define a propriedade customizada no estilo do elemento
}

// Função para incrementar uma propriedade customizada em um elemento DOM
export function incrementCustomProperty(elem, prop, inc) {
  const current = getCustomProperty(elem, prop); // Obtém o valor atual da propriedade customizada
  setCustomProperty(elem, prop, current + inc); // Define a propriedade customizada com o valor atual mais o incremento
}

// Função para obter o valor de uma propriedade customizada em um elemento DOM
export function getCustomProperty(elem, prop) {
  return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0; // Obtém o valor da propriedade customizada
}
