import Depoiments from './Depoiments';
import './OitavaTela.css';
import useControleDeTraducao from '../../../../shared/useControleDeTraducao';

export default function OitavaTela() {
  const { t, tComControleDeLinha } = useControleDeTraducao();
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
