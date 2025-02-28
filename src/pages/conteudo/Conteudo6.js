import { Link } from 'react-router-dom';
import './Conteudo6.css';
import Vivi from './imagem/vivi.png';
import DroppableArea from './DroppableArea';
import { ItemProvider } from './Itens'; 
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// import { useEffect } from 'react';

// const listaHorarios = ['9h', '10h', '11h', '12h', '13h', '14h', '15h']

export default function Conteudo() {

  // const navigate = useNavigate();


  //  let tagsInicias = [];
  //   useEffect(() => {
  //     tagsInicias = listaHorarios.map((horario, index) => 
  //       {
  //         console.log(index)
  //         return <DroppableArea id={index +1} className={`droppable-area-${index+1} droppable-area`} />
  //       });
  //   }, []);

  return (
    <ItemProvider> {}
      <DndProvider backend={HTML5Backend}>
        <div className='container_conteudo6'>

          <div className="message-container-miniGame">

            <div className='vivi'>
              <img src={Vivi} alt="Capi Professor" className="vivi_img" />
            </div>

            <div className="message-box">
              <p>
                Como você organizará seu tempo para cumprir todas as tarefas?<br />
                Não se esqueça que a reunião e o seu horário de almoço são compromissos fixos e
                você pode dividir as outras atividades em 2 blocos de tempo.
              </p>
            </div>

          </div>

          {/* <Link to="/corredor/GestaoDeTempo">
          <button className="corredor">Voltar para o corredor</button>
        <Link to="/corredor/GestaoDeTempo">
          <button className="voltarCorredor">Voltar para o corredor</button>
        </Link>

        <Link to="/conteudo5">
          <button className="anterior">Voltar</button>
        </Link>

        <Link to="/conteudo7">
          <button className="proximo">Próximo</button>
        </Link> */}

          <div className='bgAtividade'>
            <div id='buttonsWhiteboard'>
              <Link to="/corredor/GestaoDeTempo">
                <button className="anteriorGame">Voltar pro corredor</button>
              </Link>
              <button className='eraser'
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Limpar planilha
                <div></div>
              </button>
              <Link to="/conteudos/GestaoDeTempo1/Conteudo7">
                <button className="Testar">Testar</button>
              </Link>
            </div>
            <p>Planejamento das tarefas</p>
            <div className='atividade'>
              {/* <div className='alinhamento_drop3'> */}
              <div className='drop1'>
                {/* {tagsInicias} */}
                <DroppableArea id="1" className="droppable-area-1" />
                <DroppableArea id="2" className="droppable-area-2" />
                <DroppableArea id="3" className="droppable-area-3" />
                <DroppableArea id="4" className="droppable-area-4" />
                <DroppableArea id="5" className="droppable-area-5" />
                <DroppableArea id="6" className="droppable-area-6" />
                <DroppableArea id="7" className="droppable-area-7" />
              </div>
              <div className='drop3'>

                {/* {listaHorarios.map((horario, index) => (
                  <div>
                    <p className='horarios' style={{ textAlign: "center" }} key={index}>{horario}</p>
                    <DroppableArea id={index + listaHorarios.length + 1} className={`droppable-area-${index + listaHorarios.length + 1} droppable-area`} />

                  </div>

                ))} */}

                <div className='drop_final'><DroppableArea id="8" className="droppable-area-8" />
                  <p className='horarios' style={{ textAlign: "center" }}>9h</p>
                </div>

                <div className='drop_final'><DroppableArea id="9" className="droppable-area-8" />
                  <p className='horarios' style={{ textAlign: "center" }}>10h</p>
                </div>
                <div className='drop_final'><DroppableArea id="10" className="droppable-area-8" />
                  <p className='horarios' style={{ textAlign: "center" }}>11h</p>
                </div>
                <div className='drop_final'><DroppableArea id="11" className="droppable-area-8" />
                  <p className='horarios' style={{ textAlign: "center" }}>12h</p>
                </div>
                <div className='drop_final'><DroppableArea id="12" className="droppable-area-8" />
                  <p className='horarios' style={{ textAlign: "center" }}>13h</p>
                </div>
                <div className='drop_final'><DroppableArea id="13" className="droppable-area-8" />
                  <p className='horarios' style={{ textAlign: "center" }}>14h</p>
                </div>
                <div className='drop_final'><DroppableArea id="14" className="droppable-area-8" />
                  <p className='horarios' style={{ textAlign: "center" }}>15h</p>
                </div>
              </div>

              {/* </div> */}
              {/* 
          <div className='buttonreset'> */}
              {/* <div className='alinhamento_drop'> */}

            </div>


            {/* </div> */}
            {/* </div> */}
          </div>



        </div>
      </DndProvider>
    </ItemProvider>
  );
}
