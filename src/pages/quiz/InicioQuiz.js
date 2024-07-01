import { Link } from 'react-router-dom';
import './Quiz.css';
import HeaderHome from "../home/HeaderHome";
import { useTranslation } from 'react-i18next';


const InicioQuiz = () => {
  const { t } = useTranslation();

  return (
    <div className='conteudo'>
      <main id='containerQuiz'>
        <HeaderHome className="quizHeader"/>
        <div id='TelaInicial-Quiz'>
          <h2>{t('chooseYourQuiz')}</h2>
          <div className='containerQuiz'>
            <Link to="/quiz1">
              <button className="quiz1">{t('multipleChoice')}</button>
            </Link>
            <Link to="/quiz2">
              <button className="quiz2">{t('trueOrFalse')}</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InicioQuiz;
