import './SegundaTela.css';
import gif from '../../images/buildar_hall.gif'
import useControleDeTraducao from '../../../../shared/useControleDeTraducao';
import { TranslationTagsComPrefixo as TComTag } from '../../../../shared/TranslationTagsComPrefixo';  // Assumindo que TransComPrefixo está exportado

export default function SegundaTela() {
  const { chaveComPrefixo } = useControleDeTraducao("section2");
  // // Função que aplica o prefixo automaticamente
  // const chaveComPrefixo = usePrefixo("Section2")

  return (
    <section className='frames' id="segundaTela">
      <article className='section2'>
        <div className='blocoDeTexto'>
          <h2>
            <TComTag
              i18nKey={chaveComPrefixo("subtitulo")}
              components={{ span: <span className='destaqueRoxo' /> }}
            />
          </h2>
          <p>
            <TComTag
              i18nKey={chaveComPrefixo("descricao")}
              components={{ span: <span className='destaqVermelho' /> }}
            />
          </p>
        </div>

        <figure>
          <div className='monitor'>
            <img src={gif} alt='Monitor' />
          </div>
        </figure>
      </article>
    </section>
  );
}