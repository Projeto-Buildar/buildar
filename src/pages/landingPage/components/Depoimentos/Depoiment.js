import './OitavaTela.css';
import useControleDeTraducao from '../../../../shared/useControleDeTraducao';

export default function Depoiment(props) {
    // Codigo para o ESLint não detectar um alerta do tFormatado não ser usado
    // eslint-disable-next-line no-unused-vars
    const { t, tFormatado } = useControleDeTraducao();

    return (
        <div className=" depoiment" >
            <img alt='' src={props.image} />
            <h3 style={{ background: props.color }}>{props.name}</h3>
            <h3 style={{ background: props.color }}>{props.age} {t('age')}</h3>
            <div>
                <p>{props.text}</p>
            </div>

        </div>

    )
}