import './SegundaTela.css';
import gif from '../../images/buildar_hall.gif'
import useControleDeTraducao from '../../../../useControleDeTraducao';


export default function SegundaTela() {
  const { t, tComControleDeLinha } = useControleDeTraducao();
  
  return (
    <div className='frames' id="segundaTela">
      <article>
        <h2>{t('trainSoftSkills')}</h2>
        <p>{t('simulationDescription')} <span className='destaqAzul'>{tComControleDeLinha(t('easy'))}</span></p>
      </article>
      <section>
        <div className='monitor'>
        <img src={gif} alt='Monitor'/>
        </div>
      </section>
    </div>
  );
}