import './TerceiraTela.css';
import skin from '../../images/terceiraTela_img.png';

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

import Carrosel from "./Carrosel"
import { useTranslation } from 'react-i18next';
import "../../../../i18n"

const test = [skin,skin,skin]


export default function TerceiraTela() {
  const {t, i18n } = useTranslation();
  return (
    <div className='frames' id="terceiraTela">
      <section>
        <figure className='skinContainer'>

            <Carrosel 
            showDots={true} 
            arrows={false}
            infinite={true}
            qntItensDesk={1}
            autoPlay={true}
            pauseOnHover={true}
            draggable={false}
            conteudo={test.map(obj => {return <div><img src={obj}></img></div>})}
            >
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
        <p>{t("Avatar1")}<span className='destaqAzul'>{t("Avatar2")}</span>{t("Avatar3")}</p>
      </article>
    </div>
  );
}