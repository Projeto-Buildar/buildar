import React, { useState } from 'react';
import './Quiz.css';
import HeaderHome from "../home/HeaderHome";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import "../../i18n";

// Função para embaralhar o array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function Quiz() {
  const { t } = useTranslation();

  const questions = [
    {
      questionText: t('procrastinationGoodStrategy'),
      answerOptions: [
        { answerText: `${t("true")}`, isCorrect: false, color: '#9B33FD' },
        { answerText: t('false'), isCorrect: true, color: '#FFB412' },
      ],
    },
    {
      questionText: t('planDayNightBefore'),
      answerOptions: [
        { answerText: t('true'), isCorrect: true, color: '#FF486D' },
        { answerText: t('false'), isCorrect: false, color: '#C6EC3E' },
      ],
    },
    // ...
    {
      questionText: t('multitaskingIncreasesEfficiency'),
      answerOptions: [
        { answerText: t('false'), isCorrect: true, color: '#FFB412' },
        { answerText: t('true'), isCorrect: false, color: '#9B33FD' },
      ],
    },
    {
      questionText: t('settingRealisticDeadlines'),
      answerOptions: [
        { answerText: t('true'), isCorrect: true, color: '#FF486D' },
        { answerText: t('false'), isCorrect: false, color: '#C6EC3E' },
      ],
    },
    {
      questionText: t('breaksDuringDayEssential'),
      answerOptions: [
        { answerText: t('true'), isCorrect: true, color: '#FFB412' },
        { answerText: t('false'), isCorrect: false, color: '#9B33FD' },
      ],
    },
    {
      questionText: t('workingMoreHours'),
      answerOptions: [
        { answerText: t('true'), isCorrect: false, color: '#C6EC3E' },
        { answerText: t('false'), isCorrect: true, color: '#FF486D' },
      ],
    },
    {
      questionText: t('creativityOnlyForArtisticJobs'),
      answerOptions: [
        { answerText: t('false'), isCorrect: true, color: '#9B33FD' },
        { answerText: t('true'), isCorrect: false, color: '#FFB412' },
      ],
    },
    {
      questionText: t('empathyImportantInLeadership'),
      answerOptions: [
        { answerText: t('false'), isCorrect: false, color: '#C6EC3E' },
        { answerText: t('true'), isCorrect: true, color: '#FF486D' },
      ],
    },
    {
      questionText: t('nonVerbalCommunication'),
      answerOptions: [
        { answerText: t('false'), isCorrect: true, color: '#9B33FD' },
        { answerText: t('true'), isCorrect: false, color: '#FFB412' },
      ],
    },
    {
      questionText: t('dailyReadingBeneficial'),
      answerOptions: [
        { answerText: t('false'), isCorrect: true, color: '#C6EC3E' },
        { answerText: t('true'), isCorrect: false, color: '#FF486D' },
      ],
    },
    {
      questionText: t('emotionalIntelligenceImpact'),
      answerOptions: [
        { answerText: t('false'), isCorrect: false, color: '#9B33FD' },
        { answerText: t('true'), isCorrect: true, color: '#FFB412' },
      ],
    }
  ];

  // Embaralha as perguntas antes de iniciar o jogo
  shuffleArray(questions);

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
