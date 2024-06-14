import React from 'react';
import './SobreNos.css';
import HeaderHome from "../home/HeaderHome";
import Footer from '../landingPage/components/Footer/Footer';
import mascot from './images/mascot.png';
import targetIcon from './images/target.png'; // Adicione os ícones conforme necessário
import careerIcon from './images/career.png';
import skillsIcon from './images/skills.png';

const SobreNos = () => {
  return (
    <>
      <HeaderHome />
      <section className="SobreNos">
        <h1>Sobre Nós</h1>
        <div className="content">
          <div className="text-section">
            <h2>Tá mas... De onde surgiu a Buildar?</h2>
            <p>Fundada por um grupo de adolescentes, estudantes de <strong>desenvolvimento web</strong>, a Buildar toma forma como um projeto de conclusão de curso. Forjada nos pilares de <strong>companheirismo</strong>, e <strong>determinação</strong>, a Buildar segue para moldar o <strong>futuro</strong> de outros jovens como seus fundadores.</p>
            <a href="#" className="ver-mais">ver mais</a>
          </div>
          <img src={mascot} alt="Mascote buildar" className="mascot" />
        </div>
      </section>

      <section className="OurWork">
        <h2>E o que viemos fazer aqui?</h2>
        <p className="intro">A Buildar não tá aqui atoa! Temos um grande comprometimento em fazer você conquistar seu futuro.</p>
        <div className="work-items">
          <div className="work-item">
            <img src={targetIcon} alt="Nosso trabalho" />
            <h3>Nosso trabalho</h3>
            <p>Orientar o jovem a entrar no mercado de trabalho por meio da prática de soft skills.</p>
          </div>
          <div className="work-item">
            <img src={careerIcon} alt="Plano de Carreira" />
            <h3>Plano de Carreira</h3>
            <p>Ser a plataforma web nº 1 na prática e desenvolvimento de soft skills entre os jovens.</p>
          </div>
          <div className="work-item">
            <img src={skillsIcon} alt="Soft skills da Buildar" />
            <h3>Soft skills da Buildar</h3>
            <p>Determinação ● Inovação ● Acolhimento</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SobreNos;
