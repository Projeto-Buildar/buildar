import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado do componente
import './Quiz.css'; // Importa o arquivo de estilos CSS
import Header from '../landingPage/components/Header/Header';


// Array de perguntas e respostas
const questions = [
  {
    questionText: 'Qual é a definição de gestão de tempo?',
    answerOptions: [
      { answerText: 'A capacidade de realizar várias tarefas ao mesmo tempo.', isCorrect: false, color: '#9B33FD' },
      { answerText: 'A prática de delegar todas as suas tarefas a outras pessoas.', isCorrect: false, color: '#C6EC3E' },
      { answerText: 'A habilidade de planejar e controlar como as horas do seu dia são gastas.', isCorrect: true, color: '#FFB412' },
      { answerText: 'A capacidade de trabalhar sem pausas', isCorrect: false, color: '#FF486D' },
    ],
  },
  {
    questionText: 'Qual destas ferramentas é mais comumente usada para gestão de tempo?',
    answerOptions: [
      { answerText: 'Calculadora', isCorrect: false, color: '#9B33FD' },
      { answerText: 'Agenda/Calendário', isCorrect: true, color: '#C6EC3E' },
      { answerText: 'Redes Sociais', isCorrect: false, color: '#FFB412' },
      { answerText: 'Editor de texto', isCorrect: false, color: '#FF486D' },
    ],
  },
  {
    questionText: 'Qual das seguintes estratégias pode ajudar na priorização de tarefas?',
    answerOptions: [
      { answerText: 'Usar a Matriz de Eisenhower.', isCorrect: true, color: '#9B33FD' },
      { answerText: 'Fazer todas as tarefas mais fáceis primeiro.', isCorrect: false, color: '#C6EC3E' },
      { answerText: 'Evitar fazer uma lista de tarefas.', isCorrect: false, color: '#FFB412' },
      { answerText: 'Trabalhar apenas nas tarefas que gosta.', isCorrect: false, color: '#FF486D' },
    ],
  },
  {
    questionText: 'O que significa a técnica Pomodoro?',
    answerOptions: [
      { answerText: 'Trabalhar por 2 horas e depois fazer uma pausa de 30 minutos.', isCorrect: false, color: '#9B33FD' },
      { answerText: 'Trabalhar apenas pela manhã e descansar à tarde.', isCorrect: false, color: '#C6EC3E' },
      { answerText: 'Trabalhar por 25 minutos e depois fazer uma pausa de 5 minutos.', isCorrect: true, color: '#FFB412' },
      { answerText: 'O que significa a técnica Pomodoro?', isCorrect: false, color: '#FF486D' },
    ],
  },
  {
    questionText: 'Qual é o principal benefício de delegar tarefas?',
    answerOptions: [
      { answerText: 'Aumentar o controle sobre todas as atividades', isCorrect: false, color: '#9B33FD' },
      { answerText: 'Diminuir a carga de trabalho e aumentar a eficiência.', isCorrect: true, color: '#C6EC3E' },
      { answerText: 'Ter mais tempo para procrastinar.', isCorrect: false, color: '#FFB412' },
      { answerText: 'Evitar o trabalho em equipe.', isCorrect: false, color: '#FF486D' },
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