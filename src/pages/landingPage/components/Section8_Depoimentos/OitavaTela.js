import Depoiments from './Depoiments';
import './OitavaTela.css';
import useControleDeTraducao from '../../../../shared/useControleDeTraducao';
import { TranslationTagsComPrefixo as TComTag } from '../../../../shared/TranslationTagsComPrefixo';

export default function OitavaTela() {
  // eslint-disable-next-line no-unused-vars
  const { chaveComPrefixo } = useControleDeTraducao("section8");
  return (
    <div className='frames' id="oitavaTela">
      <h2>
        <TComTag
          i18nKey={chaveComPrefixo("subtitulo")}
          components={{ span: <span className='destaqueRoxo' /> }}
        />
      </h2>
      <section>
        <Depoiments />
      </section>
      <div id='landingFooter'></div>
    </div>
  );
}