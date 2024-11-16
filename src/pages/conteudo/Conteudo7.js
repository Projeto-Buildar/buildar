import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { ItemContext } from './Itens';
import Vivi from './imagem/vivi.png';
// import Tela4 from './imagem/Tela4.jpg';
import './Conteudo7.css';
import email from './imagem/Email.png';
import reniao from './imagem/Reunião-removebg-preview.png';
// import reniao2 from './imagem/equipe-removebg-preview.png';
import organizaçao from './imagem/Organizaçao.png';
import almoço from './imagem/Almoço.png'
import DroppableArea from './DroppableArea';



export default function Conteudo() {
  // const { items, handleDrop } = useContext(ItemContext);

  useEffect(() => {
    const hasReloaded = localStorage.getItem('hasReloaded');

    if (!hasReloaded) {
      localStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    } else {
      localStorage.removeItem('hasReloaded');
    }
  }, []);

  // const handleDragOver = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div className='container_conteudo7'>


      <div className="message-container-miniGame7">

        <div className='vivi7'>
          <img src={Vivi} alt="Capi Professor" className="vivi_img7" />
        </div>

        <div className="message-box7">
          <p>
            Aqui estão seus resultados... Uau, parabéns por realizar essa atividade!
          </p>
        </div>

      </div>

      <Link to="/corredor/GestaoDeTempo">
        <button className="anterior">Voltar para o corredor</button>
      </Link>

      <Link to="/conteudo6">
        <button className="anterior">Voltar</button>
      </Link>

      <div className='drop3_7'>

        <div className='area_drop'>

        <div className='drop_final7'><DroppableArea id="8" className="droppable-area-8" />
          <p className='horarios' style={{ textAlign: "center" }}>9h</p>
        </div>

        <div className='drop_final7'><DroppableArea id="9" className="droppable-area-8" />
          <p className='horarios7' style={{ textAlign: "center" }}>10h</p>
        </div>
        <div className='drop_final7'><DroppableArea id="10" className="droppable-area-8" />
          <p className='horarios7' style={{ textAlign: "center" }}>11h</p>
        </div>
        <div className='drop_final7'><DroppableArea id="11" className="droppable-area-8" />
          <p className='horarios7' style={{ textAlign: "center" }}>12h</p>
        </div>
        <div className='drop_final7'><DroppableArea id="12" className="droppable-area-8" />
          <p className='horarios7' style={{ textAlign: "center" }}>13h</p>
        </div>
        <div className='drop_final7'><DroppableArea id="13" className="droppable-area-8" />
          <p className='horarios7' style={{ textAlign: "center" }}>14h</p>
        </div>
        <div className='drop_final7'><DroppableArea id="14" className="droppable-area-8" />
          <p className='horarios7' style={{ textAlign: "center" }}>15h</p>
        </div>

        </div>

        <div className='rightAnswer'>
          <h3>Você foi bem! Aqui um jeito otimizado para usar de insipiração</h3>
          <div className='buildar_test'>

          <div className='itens_buildar'>
          <img src={organizaçao} alt="perfil" className='img_buildar' style={{width: "150px", height: "120px"}} /> 
          <p className='horarios7' style={{ textAlign: "center" }}>9h</p>
          </div>

          <div className='itens_buildar'>
          <img src={email} alt="perfil" className='img_buildar' style={{width: "150px", height: "120px"}} /> 
          <p className='horarios7' style={{ textAlign: "center" }}>10h</p>
          </div>

          <div className='itens_buildar'>
          <img src={email} alt="perfil" className='img_buildar' style={{width: "150px", height: "120px"}} /> 
          <p className='horarios7' style={{ textAlign: "center" }}>11h</p>
          </div>

          <div className='itens_buildar'>
          <img src={almoço} alt="perfil" className='img_buildar' style={{width: "150px", height: "120px"}} /> 
          <p className='horarios7' style={{ textAlign: "center" }}>12h</p>
          </div>

          <div className='itens_buildar'>
          <img src={almoço} alt="perfil" className='img_buildar' style={{width: "150px", height: "120px"}} /> 
          <p className='horarios7' style={{ textAlign: "center" }}>13h</p>
          </div>

          <div className='itens_buildar'>
          <img src={reniao} alt="perfil" className='reuniao' style={{width: "160px", height: "150px"}} /> 
          <p className='horarios7' style={{ textAlign: "center" }}>14h</p>
          </div>

          <div className='itens_buildar'>
          <img src={reniao} alt="perfil" className='reuniao' style={{width: "160px", height: "150px"}} /> 
          <p className='horarios7' style={{ textAlign: "center" }}>15h</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
