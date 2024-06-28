import './SegundaTela.css';
import { useTranslation } from 'react-i18next';
import gif from '../../images/buildar_hall.gif'
import '../../../../i18n';

export default function SegundaTela() {
  const { t } = useTranslation();
  
  return (
    <div className='frames' id="segundaTela">
      <article>
        <h2>{t('trainSoftSkills')}</h2>
        <p>{t('simulationDescription')} <span className='destaqAzul'>{t('easy')}</span> {t('and')} <span className='highlightBlue'>{t('fun')}</span>.</p>
      </article>
      <section>
        <div className='monitor'>
        <img src={gif} alt='Monitor'/>
        </div>
      </section>
    </div>
  );
}