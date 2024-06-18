import { useEffect } from 'react';

export default function useTypewriter(elementId, text, typingSpeed = 100, delayBeforeDisappear = 2000, pauseBeforeRestart = 1000) {
    useEffect(() => {
        // Obtém o elemento do DOM com o ID especificado
        const titleElement = document.getElementById(elementId);
        let charIndex = 0;
        let timeout;

        // Função responsável por simular o efeito de digitação
        function typeWriter() {
            // Verifica se ainda há caracteres para digitar
            if (charIndex < text.length) {
                // Adiciona o próximo caractere ao elemento do título
                titleElement.textContent += text.charAt(charIndex);
                charIndex++;
                // Configura um timeout para chamar a função novamente após o tempo de digitação
                timeout = setTimeout(typeWriter, typingSpeed);
            } else {
                // Quando todos os caracteres foram digitados
                setTimeout(() => {
                    // Desaparece gradualmente o texto digitado
                    titleElement.style.opacity = 0;
                    // Configura um timeout para reexibir o texto após um intervalo
                    setTimeout(() => {
                        // Reexibe o elemento do título e limpa o texto digitado
                        titleElement.style.opacity = 1;
                        titleElement.textContent = "";
                        charIndex = 0;
                        // Reinicia o efeito de digitação
                        typeWriter();
                    }, pauseBeforeRestart);
                }, delayBeforeDisappear);
            }
        }

        // Inicializa o elemento do título
        titleElement.style.opacity = 1;
        titleElement.textContent = "";
        // Inicia o efeito de digitação
        typeWriter();

        // Limpa o timeout quando o componente é desmontado
        return () => clearTimeout(timeout);
    }, [elementId, text, typingSpeed, delayBeforeDisappear, pauseBeforeRestart]); // Dependências do useEffect
}
