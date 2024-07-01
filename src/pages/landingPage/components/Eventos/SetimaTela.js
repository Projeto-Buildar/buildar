import './SetimaTela.css';
import logo from '../../images/setimaTela_img.webp';
import useControleDeTraducao from '../../../../useControleDeTraducao';

export default function SetimaTela() {
  
  const { t, tComControleDeLinha } = useControleDeTraducao();

  return(
    <div className='frames' id="setimaTela">
      <figure>
        <img src={logo}/>
      </figure>
      <article>
        <h2>{t('moreThanInclusion')} <span className='destaqRoxo'>{t('integration')}</span></h2>
        <p>{t('wantMore')} Buildar {t('hasSystem')} <span className='destaqAzul'>{t('events')}</span> {t('and')} <span className='destaqAzul'>{t('workshops')}</span> {tComControleDeLinha(t('forExchange'))}.</p>
      </article>
    </div>
  );
}
