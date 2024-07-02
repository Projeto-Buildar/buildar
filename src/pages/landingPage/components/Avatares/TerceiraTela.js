import './TerceiraTela.css';

import "react-multi-carousel/lib/styles.css";
// import Carousel from "react-multi-carousel";
import Carrosel from "./Carrosel"

import Avatar1 from '../../images/Rogerio_avatar.png';
import Avatar2 from '../../images/Malu_avatar.png';
import Avatar3 from '../../images/Tobias_avatar.png';
import useControleDeTraducao from '../../../../useControleDeTraducao';

const test = [Avatar1, Avatar2, Avatar3]

export default function TerceiraTela() {
  const { t, tComControleDeLinha } = useControleDeTraducao();
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
            conteudo={test.map(obj => { return <div className='carroselAvatarL'><img src={obj}></img></div> })}>
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
        <h2>{t("Best")}</h2>
        <p>{t("Avatar1")}<span className='destaqAzul'>{t("Avatar2")}</span>{tComControleDeLinha(t("Avatar3"))}</p>
      </article>
    </div>
  );
}