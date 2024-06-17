import React from 'react';
import './Loja.css';
import HeaderHome from '../home/HeaderHome';
import Footer from '../landingPage/components/Footer/Footer';
import skin1 from './images/skin.png';
import skin2 from './images/skin2.png';
import skin3 from './images/skin3.png';
import buildolars from './images/buildolars.png';

const Loja = () => {
  return (
    <div>
      <HeaderHome />
      <main className="loja-container">
        <div className="loja-background"></div>
        <h1 className="loja-title">Personalização</h1>
        <div className="avatar-section">
          <h2 className="avatar-title">Avatares para você</h2>
          <div className="avatar-list">
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Loja;
