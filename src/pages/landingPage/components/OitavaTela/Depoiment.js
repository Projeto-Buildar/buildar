import './OitavaTela.css';

export default function Depoiment(props) {
    return (
        <div className=" depoiment" >
            <img src={props.image}/>
            <h3 style={{background: props.color}}>{props.name}</h3>
            <h3 style={{background: props.color}}>{props.age} anos</h3>
            <p>{props.text}</p>
        </div>
        
    )
}