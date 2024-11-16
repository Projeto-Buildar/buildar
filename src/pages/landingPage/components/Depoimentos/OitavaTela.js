import Depoiments from './Depoiments';
import './OitavaTela.css';
import useControleDeTraducao from '../../../../shared/useControleDeTraducao';

export default function OitavaTela() {
  // eslint-disable-next-line no-unused-vars
  const { t, tFormatado } = useControleDeTraducao();
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
