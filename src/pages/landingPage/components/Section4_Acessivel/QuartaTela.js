import './QuartaTela.css';
// import image from '../../images/quartaTela_img.webp';
import image from '../../images/Vivi_VectorAzul.webp'

import useControleDeTraducao from '../../../../shared/useControleDeTraducao';
import { TranslationTagsComPrefixo as TComTag } from '../../../../shared/TranslationTagsComPrefixo';

export default function QuartaTela() {

  const { chaveComPrefixo } = useControleDeTraducao("section4");
  return (
    <div className='frames' id="quartaTela">

      <div className='backgroundLeft'></div>

      <article>
        <h2>
          <TComTag
            i18nKey={chaveComPrefixo("subtitulo")}
            components={{ span: <span className='destaqueRoxo' /> }}
          />
        </h2>
        <p>
          <TComTag
            i18nKey={chaveComPrefixo("descricao")}
            components={{ span: <span className='destaqAzul' /> }}
          />
        </p>
      </article>

      <figure className='figuraVivi'>
        <img alt='mascote da Buildar "Vivi", fazendo uma pose de apresentação' src={image} className='ViviApresenta' />
      </figure>


      <div className='backgroundRight'></div>

    </div>
  );
}