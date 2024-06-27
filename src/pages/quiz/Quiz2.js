import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado do componente
import './Quiz.css'; // Importa o arquivo de estilos CSS
import Header from '../landingPage/components/Header/Header';


// Array de perguntas e respostas
const questions = [
  {
    questionText: 'A procrastinação é uma boa estratégia para gerenciar o tempo.',
    answerOptions: [
      { answerText: 'Verdadeiro', isCorrect: false, color: '#9B33FD' },
      { answerText: 'Falso', isCorrect: true, color: '#FFB412' },
    ],
  },
  {
    questionText: 'Planejar o dia na noite anterior pode melhorar a produtividade.',
    answerOptions: [
      { answerText: 'Verdadeiro', isCorrect: true, color: '#C6EC3E' },
      { answerText: 'Falso', isCorrect: false, color: '#FF486D' },
    ],
  },
  {
    questionText: 'Multitarefa aumenta a eficiência e a qualidade do trabalho.',
    answerOptions: [
      { answerText: 'Falso', isCorrect: true, color: '#9B33FD' },
      { answerText: 'Verdadeiro', isCorrect: false, color: '#FFB412' },
    ],
  },
  {
    questionText: '	Definir prazos realistas ajuda a evitar estresse desnecessário.',
    answerOptions: [
      { answerText: 'Verdadeiro', isCorrect: true, color: '#FFB412' },
      { answerText: 'Falso', isCorrect: false, color: '#FF486D' },
    ],
  },
  {
    questionText: 'Ter momentos de pausa durante o dia é essencial para manter a produtividade.',
    answerOptions: [
      { answerText: 'Verdadeiro', isCorrect: true, color: '#9B33FD' },
      { answerText: 'Falso', isCorrect: true, color: '#C6EC3E' },
    ],
  },
];

function Quiz() {
  // Define o estado para a pergunta atual
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // Define o estado para a pontuação do usuário
  const [score, setScore] = useState(0);
  // Define o estado para mostrar ou não a pontuação final
  const [showScore, setShowScore] = useState(false);

  // Função que lida com a seleção de uma resposta
  const handleAnswerOptionClick = (isCorrect) => {
    // Se a resposta estiver correta, incrementa a pontuação
    if (isCorrect) {
      setScore(score + 1);
    }

    // Passa para a próxima pergunta
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Se não houver mais perguntas, mostra a pontuação final
      setShowScore(true);
    }
  };

  return (
    <main id='containerQuiz'>
    <Header mostrarSelectIdiomas={false} className="quizHeader"/>
    <div className="quiz">
      {showScore ? (
        // Se showScore for verdadeiro, mostra a pontuação final
        <div className="score-section">
          Parabéns! Você pontuou {score} de {questions.length}
        </div>
      ) : (
        // Se showScore for falso, mostra a pergunta atual e as opções de resposta
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            <div className="answer-options">
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                  style={{ backgroundColor: answerOption.color }} // Aplica a cor do array de opções
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
    </main>
  );
}

export default Quiz;