import './SetimaTela.css';
import logo from '../../images/setimaTela_img.png';
import { useTranslation } from 'react-i18next';
import "../../../../i18n";

export default function SetimaTela() {
  
  const {t, i18n } = useTranslation();

  return(
    <div className='frames' id="setimaTela">
      <figure>
        <img src={logo}/>
      </figure>
      <article>
        <h2>{t('moreThanInclusion')} <span className='destaqRoxo'>{t('integration')}</span></h2>
        <p>{t('wantMore')} Buildar {t('hasSystem')} <span className='destaqAzul'>{t('events')}</span> {t('and')} <span className='destaqAzul'>{t('workshops')}</span> {t('forExchange')}.</p>
      </article>
    </div>
  );
}
