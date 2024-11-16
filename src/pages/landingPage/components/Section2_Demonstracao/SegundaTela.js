import './SegundaTela.css';
import gif from '../../images/buildar_hall.gif'
import useControleDeTraducao from '../../../../shared/useControleDeTraducao';
import { TranslationTagsComPrefixo as TComTag } from '../../../../shared/TranslationTagsComPrefixo';  // Assumindo que TransComPrefixo está exportado

export default function SegundaTela() {
  const { chaveComPrefixo } = useControleDeTraducao("Section2");
  // // Função que aplica o prefixo automaticamente
  // const chaveComPrefixo = usePrefixo("Section2")
  
  return (
    <div className='frames' id="segundaTela">
      <article>
        <h2>
          <TComTag
              i18nKey={chaveComPrefixo("Subtitulo")}
              components={{ span: <span className='destaqueRoxo' /> }}
              usarControleDeLinha={true}
            />
        </h2>
        <p>
          <TComTag
              i18nKey={chaveComPrefixo("Descricao")}
              components={{ span: <span className='destaqAzul' /> }}
              usarControleDeLinha={true}
          />
        </p>
      </article>
      <section>
        <div className='monitor'>
        <img src={gif} alt='Monitor'/>
        </div>
      </section>
    </div>
  );
}