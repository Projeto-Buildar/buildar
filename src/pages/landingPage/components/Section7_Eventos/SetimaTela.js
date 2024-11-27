import './SetimaTela.css';
import logo from '../../images/setimaTela_img.webp';
import useControleDeTraducao from '../../../../shared/useControleDeTraducao';
import { TranslationTagsComPrefixo as TComTag } from '../../../../shared/TranslationTagsComPrefixo';

export default function SetimaTela() {

  const { chaveComPrefixo } = useControleDeTraducao("section7");

  return (
    <div className='frames' id="setimaTela">
      <figure>
        <img alt='Logo da Buildar' src={logo} />
      </figure>
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
            components={{ span: <span className='destaqVermelho' /> }}
          />
        </p>
      </article>
    </div>
  );
}
