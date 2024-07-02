import './QuartaTela.css';
import image from '../../images/quartaTela_img.webp';
import useControleDeTraducao from '../../../../useControleDeTraducao';

export default function QuartaTela() {

  const { t, tComControleDeLinha } = useControleDeTraducao();
  return(
    <div className='frames' id="quartaTela">
      <div className='backgroundLeft'></div>
      <article>
        <h2>{t('accessiblePlatform')}</h2>
        <p>{t('learningOption')} <span className='destaqAzul'>{t('free')}</span> {tComControleDeLinha(t('ifInterested'))}.</p>
      </article>
      <figure>
        <img src={image}/>
      </figure>
      <div className='backgroundRight'></div>
    </div>
  );
}