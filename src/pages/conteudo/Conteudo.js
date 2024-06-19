
import HeaderHome from "../home/HeaderHome";
import'./Conteudo.css';
import Capi from './imagem/Capi_Professor.png';

export default function Conteudo () {
  return (
    <div>
    <HeaderHome />
    
    <div className="cabecalho">
        
        <button className="voltar"> Voltar para o corredor </button>
          
          <h2>Sala Gestão de Tempo 1</h2>
    
    </div>
            <img src= {Capi} alt="Capi Profesoor " className="capi"/>             
            
            <div className="message-container">
            
             <div className="message-box">
                                             
                     <p> Olá Jovem, seja bem-vindo(a)! </p>
                                                     
                    </div>
                                                     
                  </div>
                
                <div className="message-container2"> 

                <div className="message-box2">  
                  <p> 
                     Nessa sala você aprenderá sobre a <b>gestão de tempo</b>, uma habilidade crucial para alcançar 
                     a eficiência e o sucesso em qualquer área de atuação</p>
                     
                     </div>
                    </div>
                                                        
                                                         </div>
  )
}

