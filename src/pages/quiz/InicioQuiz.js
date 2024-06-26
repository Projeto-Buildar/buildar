import React from 'react'
import { Link } from 'react-router-dom'
import './Quiz.css';

const InicioQuiz = () => {
  return (
    <div >
    <h2>Escolha o seu Quiz!</h2>
  
     <div className='container'>
      <Link to="/quiz1">
        <button className="quiz1">Múltipla Escolha</button>
      </Link>

      <Link to="/quiz2">
        <button className="quiz2">Verdadeiro ou Falso</button>
      </Link>
      </div>
      </div>
  )
}

export default InicioQuiz