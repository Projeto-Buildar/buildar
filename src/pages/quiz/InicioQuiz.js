import React from 'react'
import { Link } from 'react-router-dom'
import './Quiz.css';
import Header from '../landingPage/components/Header/Header';


const InicioQuiz = () => {
  return (
    <main id='containerQuiz'>
    <Header mostrarSelectIdiomas={false} className="quizHeader"/>
    <div id='TelaInicial-Quiz'>
    <h2>Escolha o seu Quiz!</h2>
  
     <div className='containerQuiz' id='containerQuiz'>
      <Link to="/quiz1">
        <button className="quiz1">Múltipla Escolha</button>
      </Link>

      <Link to="/quiz2">
        <button className="quiz2">Verdadeiro ou Falso</button>
      </Link>
      </div>
      </div>
      </main>

  )
}

export default InicioQuiz