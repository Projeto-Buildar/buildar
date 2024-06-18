import React from 'react';
import './Loja.css';
import HeaderHome from '../home/HeaderHome';
import Footer from '../landingPage/components/Footer/Footer';
import skin1 from './images/skin.png';
import skin2 from './images/skin2.png';
import skin3 from './images/skin3.png';
import buildolars from './images/buildolars.png';
import energia from './images/energia.png';
import vivi from './images/vivi.png';
import fundoroxo from './images/fundoroxo.png';
import barra from './images/barra.png';
import maisbuildolars from './images/maisbuildolars.png';
import Carousel from "react-multi-carousel";
import CustomArrow from '../landingPage/components/OitavaTela/CustomArrow';
import listras from './images/listras.png';


const Loja = () => {
  return (
    <div>
      <HeaderHome />
      <main className="loja-container">
        <div className="loja-background"></div>
        <div className='barras'>
        <img src={barra} alt="barra" id='barra-energia' />
      <img src={maisbuildolars} alt="maisbuildolars" />
      </div>
        <h1 className="loja-title">Personalização</h1>

        <div className="avatar-section">
          <h2 className="avatar-title">Avatares para você</h2>
          <div className="avatar-list">
          <Carousel
          customRightArrow={<CustomArrow props={"arrow"}></CustomArrow>}
          customLeftArrow={<CustomArrow props={"arrow left"}></CustomArrow>}     
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="liCarrosel"
          keyBoardControl={false}
          minimumTouchDrag={80}
          pauseOnHover
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass="ulCarrosel"
          slidesToSlide={1}
          swipeable
          
        >
          <div className="avatar-item">
              <img src={skin1} alt="Avatar 1" />
              <img src={buildolars} alt="Buildolars" className="buildolars" />
              <p>550</p>
            </div>
            <div className="avatar-item">
              <img src={skin2} alt="Avatar 2" />
              <img src={buildolars} alt="Buildolars" className="buildolars" />
              <p>760</p>
            </div>
            <div className="avatar-item">
              <img src={skin3} alt="Avatar 3" />
              <img src={buildolars} alt="Buildolars" className="buildolars" />
              <p>990</p>
            </div>
        </Carousel>
          </div>
        </div>
        <img src={listras} alt="listras" className="listras" />

        <div className="energia-section">
        
          
          <h2 className="energia-title">Energia sem parar</h2>
          <div className="energia-list">
            <div className="energia-group">
              <div className="energia-item">
                <div className="energia-background">
                  <img src={energia} alt="Energia" className="energia-icon" />
                  <span className="energia-quantidade">x1</span>
                  <div className="energia-prices">
                    <img src={buildolars} alt="Buildolars" className="buildolars-icon" />
                    <div className="energia-price">
                      <span className="energia-old-price"></span>
                      <span className="energia-new-price">40</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="energia-item">
                <div className="energia-background">
                  <img src={energia} alt="Energia" className="energia-icon" />
                  <span className="energia-quantidade">x3</span>
                  <div className="energia-prices">
                    <img src={buildolars} alt="Buildolars" className="buildolars-icon" />
                    <div className="energia-price">
                      <span className="energia-old-price"><s>120</s></span>
                      <span className="energia-new-price">110</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="energia-item">
                <div className="energia-background">
                  <img src={energia} alt="Energia" className="energia-icon" />
                  <span className="energia-quantidade">x5</span>
                  <div className="energia-prices">
                    <img src={buildolars} alt="Buildolars" className="buildolars-icon" />
                    <div className="energia-price">
                      <span className="energia-old-price"><s>200</s></span>
                      <span className="energia-new-price">180</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="energia-group">
              <div className="energia-item">
                <div className="energia-background">
                  <img src={energia} alt="Energia" className="energia-icon" />
                  <span className="energia-quantidade">x8</span>
                  <div className="energia-prices">
                    <img src={buildolars} alt="Buildolars" className="buildolars-icon" />
                    <div className="energia-price">
                      <span className="energia-old-price"><s>320</s></span>
                      <span className="energia-new-price">280</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="energia-item">
                <div className="energia-background">
                  <img src={energia} alt="Energia" className="energia-icon" />
                  <span className="energia-quantidade">x12</span>
                  <div className="energia-prices">
                    <img src={buildolars} alt="Buildolars" className="buildolars-icon" />
                    <div className="energia-price">
                      <span className="energia-old-price"><s>480</s></span>
                      <span className="energia-new-price">400</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="energia-item">
                <div className="energia-background">
                  <img src={energia} alt="Energia" className="energia-icon" />
                  <span className="energia-quantidade">x18</span>
                  <div className="energia-prices">
                    <img src={buildolars} alt="Buildolars" className="buildolars-icon" />
                    <div className="energia-price">
                      <span className="energia-old-price"><s>720</s></span>
                      <span className="energia-new-price">600</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src={fundoroxo} alt="fundoroxo" className="fundoroxo" />

        <div className="missoes-section">
        
         
          <div className="desafio-item">
          <h2 className="missoes-title">Desafios</h2>
            
            <div className="desafio-texto">
            <h3>Sem Tempo Irmão</h3>
              <p>
                Gaste menos energia por cada atividade, a custo de um cronômetro que te acompanha durante as atividades.
                <br />
                Você está a postos de agir sobre pressão do tempo?
              </p>
            </div>
            <div className="desafio-preco">
              <img src={buildolars} alt="Buildolars" className="buildolars-icon" />
              <span>160</span>
            </div>
          </div>
          <img src={vivi} alt="vivi" className="vivi" />
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Loja;
