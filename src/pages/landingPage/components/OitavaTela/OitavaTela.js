import Depoiments from './Depoiments';
import './OitavaTela.css';
import { useTranslation } from 'react-i18next';
import "../../../../i18n"

export default function OitavaTela() {
  const {t, i18n } = useTranslation();
  return(
    <div className='frames' id="oitavaTela">
      <h2>{t('whatPeopleThink')} <span className='destaqRoxo'>Buildar</span>?</h2>
      <section>
        <Depoiments/>
      </section>
      <div id='landingFooter'></div>
    </div>
  );
}
