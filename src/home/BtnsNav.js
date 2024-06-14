import { Link, useLocation } from 'react-router-dom';

export default function BtnsNav(props) {

    const location = useLocation();
    const isActive = location.pathname === props.link;

    return (
        <Link to={props.link} className="btnsNav">
            <p className={`btnContainer ${isActive ? 'active' : ''}`}>
                {props.texto}
            </p>
            {isActive && <div className='after-element'></div>}
        </Link>
    );
}