import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function BtnsNav(props) {

    const location = useLocation();
    const isActive = location.pathname === props.link;
    const [isMediumScreen, setIsMediumScreen] = useState(() => {
        const saved = localStorage.getItem('isMediumScreen');
        const initialValue = saved ? JSON.parse(saved) : window.innerWidth > 700 && window.innerWidth < 1000;
        return initialValue;
    });

    useEffect(() => {
        const checkScreenSize = () => {
            const newSize = window.innerWidth > 700 && window.innerWidth <= 1000;
            setIsMediumScreen(newSize);
            localStorage.setItem('isMediumScreen', JSON.stringify(newSize));
        };

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const texto = isMediumScreen ? props.icon : props.texto;


    return (
        <Link to={props.link} className="btnsNav">
            <p className={`btnContainer ${isActive ? 'active' : ''} ${isMediumScreen ? 'icon' : ''}`}>
                {texto}
            </p>
            {isActive && <div className='after-element'></div>}
        </Link>
    );
}