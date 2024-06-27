export default function Contexto(props) {
    return (
        <div>
            <div className='cabecalho'>
                <div className='vivi'>
                    <img src={props.vivi} alt="Capi Professor" className="capi" />
                </div>
            </div>
            <button className="corredor" onClick={props.retornaGame}>Voltar para o corredor</button>
            <div className="message-container">
                <div className={`${props.messageBox}`}>
                    <p>
                        {props.recepcao &&
                            <h2 className='recepcao'> Olá Jovem, seja bem-vindo(a)!</h2>
                        }
                        {props.textoVivi}
                    </p>
                </div>
            </div>
        </div>
    );
}