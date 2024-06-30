import "./elevador.css"
import { Link } from "react-router-dom";

export default function Elevador(props) {
    return (
        <Link to={props.softSkill !== "Em breve" ? props.link : ''}>
            <div className={`elevador ${props.softSkill === "Em breve" ? 'emBreve' : ''}`}>
                <p>{props.softSkill}</p>
            </div>
        </Link>
    );
}