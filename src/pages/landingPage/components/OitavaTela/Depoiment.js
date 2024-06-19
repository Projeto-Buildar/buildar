import './OitavaTela.css';
import { useTranslation } from 'react-i18next';
import "../../../../i18n"

export default function Depoiment(props) {
    const {t, i18n } = useTranslation();
    
    return (
        <div className=" depoiment" >
            <img src={props.image}/>
            <h3 style={{background: props.color}}>{props.name}</h3>
            <h3 style={{background: props.color}}>{props.age} {t('age')}</h3>
            <p>{props.text}</p>
        </div>
        
    )
}