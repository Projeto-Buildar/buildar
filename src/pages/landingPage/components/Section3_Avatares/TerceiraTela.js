import './TerceiraTela.css';

import "react-multi-carousel/lib/styles.css";
// import Carousel from "react-multi-carousel";
import Carrosel from "../../../../shared/Carrosel"

import Avatar1 from '../../images/Rogerio_avatar.png';
import Avatar2 from '../../images/Malu_avatar.png';
import Avatar3 from '../../images/Tobias_avatar.png';

import useControleDeTraducao from '../../../../shared/useControleDeTraducao';
import { TranslationTagsComPrefixo as TComTag } from '../../../../shared/TranslationTagsComPrefixo';

const avatares = [Avatar1, Avatar2, Avatar3]

export default function TerceiraTela() {
  const { chaveComPrefixo } = useControleDeTraducao("Section3");
  
  return (
    <div className='frames' id="terceiraTela">
      <section>
        <figure className='skinContainer'>

          <Carrosel
            dotsLiClass="dotsLiClass"
            dotsButtonClass="dotsButtonClass"
            carroselClass="carroselAvatar"
            showDots={true}
            arrows={false}
            infinite={true}
            qntItensDesk={1}
            autoPlay={true}
            pauseOnHover={true}
            draggable={false}
            conteudo={
              avatares.map((obj, index) => {
                return <div key={index} className='carroselAvatarL'>
                  <img src={obj} alt={`Avatar ${index + 1}`} />
                </div>
              })}>
          </Carrosel>
        </figure>
        {/* <div className='scrollContainer'>
          <div className='scroller'></div>
          <div className='scroller'></div>
          <div className='scroller'></div>
          <div className='scroller'></div>
        </div> */}
      </section>
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
    </div>
  );
}