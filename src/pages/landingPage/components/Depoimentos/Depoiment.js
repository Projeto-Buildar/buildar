import './OitavaTela.css';
import useControleDeTraducao from '../../../../shared/useControleDeTraducao';

export default function Depoiment(props) {
    const { t, tComControleDeLinha } = useControleDeTraducao();

    return (
        <div className=" depoiment" >
            <img src={props.image} />
            <h3 style={{ background: props.color }}>{props.name}</h3>
            <h3 style={{ background: props.color }}>{props.age} {t('age')}</h3>
            <div>
                <p>{props.text}</p>
            </div>

        </div>

    )
}