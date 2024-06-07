import './btnsNav.css'
import { Outlet, Link } from "react-router-dom";

export default function BtnsNav(props){
    return(
        <Link className='btnsNav' to={props.link}>
            {props.texto}
        </Link>
    );
}