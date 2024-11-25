import React, { useState, useEffect } from 'react';
import './Quiz.css';
import HeaderHome from "../home/HeaderHome";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import "../../i18n";

// Função para embaralhar o array
function shuffleArray(array) {
  let curId = array.length;
  // Não há necessidade de embaralhar o último elemento
  while (0 !== curId) {
    // Escolha um elemento restante
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    
    // E troque-o com o elemento atual
    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }
  return array;
}

function Quiz() {
  const { t } = useTranslation();

  

const questions = [
  {
    questionText: 'Qual é a definição de gestão de tempo?',
    answerOptions: [
      { answerText: 'A capacidade de realizar várias tarefas ao mesmo tempo.', isCorrect: false, color: '#9B33FD' },
      { answerText: 'A prática de delegar todas as suas tarefas a outras pessoas.', isCorrect: false, color: '#58D2FF' },
      { answerText: 'A habilidade de planejar e controlar como as horas do seu dia são gastas.', isCorrect: true, color: '#FFB412' },
      { answerText: 'A capacidade de trabalhar sem pausas', isCorrect: false, color: '#FF486D' },
    ],
  },
  {
    questionText: 'Qual destas ferramentas é mais comumente usada para gestão de tempo?',
    answerOptions: [
      { answerText: 'Calculadora', isCorrect: false, color: '#9B33FD' },
      { answerText: 'Agenda/Calendário', isCorrect: true, color: '#58D2FF' },
      { answerText: 'Redes Sociais', isCorrect: false, color: '#FFB412' },
      { answerText: 'Editor de texto', isCorrect: false, color: '#FF486D' },
    ],
  },
  {
    questionText: 'Qual das seguintes estratégias pode ajudar na priorização de tarefas?',
    answerOptions: [
      { answerText: 'Usar a Matriz de Eisenhower.', isCorrect: true, color: '#9B33FD' },
      { answerText: 'Fazer todas as tarefas mais fáceis primeiro.', isCorrect: false, color: '#58D2FF' },
      { answerText: 'Evitar fazer uma lista de tarefas.', isCorrect: false, color: '#FFB412' },
      { answerText: 'Trabalhar apenas nas tarefas que gosta.', isCorrect: false, color: '#FF486D' },
    ],
  },
  {
    questionText: 'O que significa a técnica Pomodoro?',
    answerOptions: [
      { answerText: 'Trabalhar por 2 horas e depois fazer uma pausa de 30 minutos.', isCorrect: false, color: '#9B33FD' },
      { answerText: 'Trabalhar apenas pela manhã e descansar à tarde.', isCorrect: false, color: '#58D2FF' },
      { answerText: 'Trabalhar por 25 minutos e depois fazer uma pausa de 5 minutos.', isCorrect: true, color: '#FFB412' },
      { answerText: 'O que significa a técnica Pomodoro?', isCorrect: false, color: '#FF486D' },
    ],
  },
  {
    questionText: 'Qual é o principal benefício de delegar tarefas?',
    answerOptions: [
      { answerText: 'Aumentar o controle sobre todas as atividades', isCorrect: false, color: '#9B33FD' },
      { answerText: 'Diminuir a carga de trabalho e aumentar a eficiência.', isCorrect: true, color: '#58D2FF' },
      { answerText: 'Ter mais tempo para procrastinar.', isCorrect: false, color: '#FFB412' },
      { answerText: 'Evitar o trabalho em equipe.', isCorrect: false, color: '#FF486D' },
    ],
  },
];

  // Embaralha as perguntas antes de iniciar o jogo
  const shuffledQuestions = shuffleArray([...questions]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    // Embaralha as perguntas novamente quando o jogo é reiniciado
    shuffleArray(shuffledQuestions);
  }, [showScore, shuffledQuestions]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
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
        {score >= 4 ? (
          <p>{t('excellentScore1')} {score} {t('excellentScore2')}</p>
        ) : score >= 1 ? (
          <p>{t('almostScore1')} {score} {t('almostScore2')}</p>
        ) : (
          <p>{t('lowScore')}</p>
        )}
        <button onClick={restartQuiz} className="restart-button">{t('restart')}</button>
        <Link to="/quiz">
              <button className="back-button">{t('backToHome')}</button>
            </Link>
      </div>
      
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>{t('question')} {currentQuestion + 1}</span>/5
            </div>
            <div className="question-text">{shuffledQuestions[currentQuestion]?.questionText}</div>
          </div>
          <div className="answer-section">
            <div className="answer-options">
              {shuffledQuestions[currentQuestion]?.answerOptions.map((answerOption, index) => (
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
