import './TerceiraTela.css';
import skin from '../../images/terceiraTela_img.png';

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

import Carrosel from "./Carrosel"

const test = [skin,skin,skin]

export default function TerceiraTela() {
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
        <h2>Seja você do seu melhor jeito</h2>
        <p>Que tal um avatar que encaixe com sua personalidade? A Buildar oferece opções para as <span className='destaqAzul'>características únicas</span> de cada usuário.</p>
      </article>
    </div>
  );
}