import './Conteudos.css';

export default function Contexto(props) {
    return (
        <div className='Container'>
            <div className='cabecalho'>
                <div className='vivi'>
                    <img src={props.vivi} alt="Capi Professor" className="vivi_img" />
                </div>
            </div>
            <button className="corredor" onClick={props.retornaGame}>Voltar para o corredor</button>
            <div className="message-container">
                <div className={`${props.messageBox}`}>
                    <p>
                        {props.recepcao &&
                            <h2 className='recepcao'> Olá jovem, seja bem-vindo(a)!</h2>
                        }
                        {props.textoVivi}
                    </p>
                </div>
            </div>
        </div>
    );
}