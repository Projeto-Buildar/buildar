import React, { useState } from 'react';
import './Quiz.css';
import HeaderHome from "../home/HeaderHome";

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
      { answerText: 'Verdadeiro', isCorrect: true, color: '#FF486D' },
      { answerText: 'Falso', isCorrect: false, color: '#C6EC3E' },
    ],
  },
  {
    questionText: 'Multitarefa aumenta a eficiência e a qualidade do trabalho.',
    answerOptions: [
      { answerText: 'Falso', isCorrect: true, color: '#FFB412' },
      { answerText: 'Verdadeiro', isCorrect: false, color: '#9B33FD' },
    ],
  },
  {
    questionText: 'Definir prazos realistas ajuda a evitar estresse desnecessário.',
    answerOptions: [
      { answerText: 'Verdadeiro', isCorrect: true, color: '#FF486D' },
      { answerText: 'Falso', isCorrect: false, color: '#C6EC3E' },
    ],
  },
  {
    questionText: 'Ter momentos de pausa durante o dia é essencial para manter a produtividade.',
    answerOptions: [
      { answerText: 'Verdadeiro', isCorrect: true, color: '#FFB412' },
      { answerText: 'Falso', isCorrect: false, color: '#9B33FD' },
    ],
  },
  {
    questionText: 'Trabalhar mais horas resulta diretamente em mais produtividade.',
    answerOptions: [
      { answerText: 'Verdadeiro', isCorrect: false, color: '#C6EC3E' },
      { answerText: 'Falso', isCorrect: true, color: '#FF486D' },
    ],
  },
  {
    questionText: 'A criatividade é apenas necessária para trabalhos artísticos.',
    answerOptions: [
      { answerText: 'Falso', isCorrect: true, color: '#9B33FD' },
      { answerText: 'Verdadeiro', isCorrect: false, color: '#FFB412' },
    ],
  },
  {
    questionText: 'A empatia é uma habilidade importante na liderança.',
    answerOptions: [
      { answerText: 'Falso', isCorrect: false, color: '#C6EC3E' },
      { answerText: 'Verdadeiro', isCorrect: true, color: '#FF486D' },
    ],
  },
  {
    questionText: 'A comunicação não-verbal não afeta a eficácia da comunicação.',
    answerOptions: [
      { answerText: 'Falso', isCorrect: true, color: '#9B33FD' },
      { answerText: 'Verdadeiro', isCorrect: false, color: '#FFB412' },
    ],
  },
  {
    questionText: 'A leitura diária é benéfica apenas para melhorar as habilidades de escrita.',
    answerOptions: [
      { answerText: 'Falso', isCorrect: true, color: '#C6EC3E' },
      { answerText: 'Verdadeiro', isCorrect: false, color: '#FF486D' },
    ],
  },
  {
    questionText: 'A inteligência emocional tem impacto na eficácia da liderança.',
    answerOptions: [
      { answerText: 'Falso', isCorrect: false, color: '#9B33FD' },
      { answerText: 'Verdadeiro', isCorrect: true, color: '#FFB412' },
    ],
  }
];

// Função para embaralhar o array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Embaralha as perguntas antes de iniciar o jogo
shuffleArray(questions);

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < 5) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    // Embaralha as perguntas novamente
    shuffleArray(questions);
    // Redefine o estado
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <main id='containerQuiz'>
      <HeaderHome className="quizHeader"/>
      <div className="quiz">
        {showScore ? (
          <div className="score-section">
            Parabéns! Você pontuou {score} de 5
            <button onClick={restartQuiz} className="restart-button">Recomeçar</button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Pergunta {currentQuestion + 1}</span>/5
              </div>
              <div className="question-text">{questions[currentQuestion]?.questionText}</div>
              </div>
            <div className="answer-section">
              <div className="answer-options">
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                    style={{ backgroundColor: answerOption.color }}
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
