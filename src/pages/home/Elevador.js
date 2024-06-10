import elevadorImg from "./images/Elevador.svg"
import "./elevador.css"

export default function Elevador(props){
    return(
        <div className="elevador">
            <p>{props.softSkill}</p>
        </div>
    );
}