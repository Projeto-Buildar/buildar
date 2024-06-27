import './PerfilDialogo.css';

export default function PerfilDialogo(props){
    return(
        <div>
             <div className='perfil_usuario'>
                <img src={props.perfil} alt="perfil" className='perfil' />
            </div>
            <div className='escolha'>
                <div className='botao1'>
                    <button className='escolha1' onClick={props.botaoClicado}>{props.textoBotaoUm}</button>
                </div>
                <div className='botao2'>
                    <button className='escolha2' onClick={props.botaoClicado}>{props.textoBotaoDois}</button>
                </div>
            </div>
        </div>
    );
}