import './QuartaTela.css';
import image from '../../images/quartaTela_img.webp';
import { useTranslation } from 'react-i18next';
import "../../../../i18n"

export default function QuartaTela() {

  const {t, i18n } = useTranslation();
  return(
    <div className='frames' id="quartaTela">
      <div className='backgroundLeft'></div>
      <article>
        <h2>{t('accessiblePlatform')}</h2>
        <p>{t('learningOption')} <span className='destaqAzul'>{t('free')}</span> {t('ifInterested')}.</p>
      </article>
      <figure>
        <img src={image}/>
      </figure>
      <div className='backgroundRight'></div>
    </div>
  );
}