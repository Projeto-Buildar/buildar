import { Link } from 'react-router-dom';
import './Quiz.css';
import Header from '../landingPage/components/Header/Header';

const InicioQuiz = () => {
  return (
    <div className='conteudo'>
    <main id='containerQuiz'>
      <Header className="quizHeader" />
      <div id='TelaInicial-Quiz'>
        <h2>Escolha o seu Quiz!</h2>
        <div className='containerQuiz'>
          <Link to="/quiz1">
            <button className="quiz1">Múltipla Escolha</button>
          </Link>
          <Link to="/quiz2">
            <button className="quiz2">Verdadeiro ou Falso</button>
          </Link>
        </div>
      </div>
    </main>
    </div>
  );
};

export default InicioQuiz;
