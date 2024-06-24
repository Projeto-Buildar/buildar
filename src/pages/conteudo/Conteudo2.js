import { Link } from "react-router-dom";
import'./Conteudo.css';
import Vivi from './imagem/vivi.png';
import Perfil from './imagem/perfil.png'
import Tela2 from './imagem/Tela2.png';


export default function Conteudo () {
  return (
    <div>

    
    
        
       
          
        
    
    
          
            <img src= {Vivi} alt="Capi Profesoor " className="capi"/>             
            
            <div className="message-container">
            
             <div className="message-box">
                                             
                     <p> Quando você domina a gestão do tempo, consegue equilibrar 
                  melhor suas responsabilidades, tanto pessoais quanto profissionais, 
                  evitando sobrecargas e melhorando a qualidade do seu trabalho. </p>
                                                     
                    </div>
                                                     
                  </div>

               <img src={Tela2} alt="tela2" className='tela2'/>
                  
                  <Link to="/corredor">
                 <button className="corredor">Voltar para o corredor</button>
                 </Link>
                  
                  <Link to="/conteudo">
                 <button className="anterior">Voltar</button>
                 </Link>
                
                  <Link to="/conteudo3">
                 <button className="proximo">Proximo</button>
                 </Link>

                 <div className='perfil_usuario'>
                    <img src={Perfil} alt="perfil" className='perfil' /> 
                  </div> 
                
                                                        
        </div>
  )
}

