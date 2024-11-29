import useControleDeTraducao from '../../../../shared/useControleDeTraducao';

import './OitavaTela.css';

export default function Depoiment(props) {
    // Codigo para o ESLint não detectar um alerta do tFormatado não ser usado
    // eslint-disable-next-line no-unused-vars
    const { t, chaveComPrefixo } = useControleDeTraducao('section8');

    return (
        <div className=" depoiment" >
            
            <img alt='' src={props.image} />
            <h3 style={{ background: props.color }}>{props.name}</h3>
            <h3 style={{ background: props.color }}>{props.age} {t(chaveComPrefixo("idade"))}</h3>
            <div>
                <p>{props.text}</p>
            </div>

        </div>

    )
}