import { Link } from "react-router-dom";
import HeaderHome from "../home/HeaderHome";
import'./Conteudo.css';
import Capi from './imagem/Capi_Professor.png';


export default function Conteudo () {
  return (
    <div>
    <HeaderHome />
    
    <div className="cabecalho">
        
    <Link to="/corredor">
          <button className="corredor">Voltar para o corredor</button>
        </Link>
          
          <h2>Sala Gestão de Tempo 1</h2>
    
    </div>
          
            <img src= {Capi} alt="Capi Profesoor " className="capi"/>             
            
            <div className="message-container_c2">
            
             <div className="message-box">
                                             
                     <p> Quando você domina a gestão do tempo, consegue equilibrar 
                  melhor suas responsabilidades, tanto pessoais quanto profissionais, 
                  evitando sobrecargas e melhorando a qualidade do seu trabalho. </p>
                                                     
                    </div>
                                                     
                  </div>
                  
                  <Link to="/conteudo">
                 <button className="anterior">Voltar</button>
                 </Link>
                
                  <Link to="/conteudo3">
                 <button className="proximo">Proximo</button>
                 </Link>
                
                                                        
                                                         </div>
  )
}

