import Depoiments from './Depoiments';
import './OitavaTela.css';

export default function OitavaTela() {
  return(
    <div className='frame' id="oitavaTela">
      <h2>E o que a galera ta achando da <span className='destaqRoxo'>Buildar</span>?</h2>
      <section>
        <Depoiments/>
      </section>
    </div>
  );
}