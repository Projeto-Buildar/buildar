import '../Perfil.css';
import Skin from './Skin';

import Avatar1 from '../../landingPage/images/Rogerio_avatar.png';
import Avatar2 from '../../landingPage/images/Malu_avatar.png';
import Avatar3 from '../../landingPage/images/Tobias_avatar.png';

var skinData = [
    {
        url: Avatar1
    },
    {
        url: Avatar2
    },
    {
        url: Avatar3
    }
];

export default function Conquistas(){
    return (
        <ul className='skinScroll'>
            {skinData.map((item) => {
                return <Skin url={item.url}/> 
            })}
        </ul>
    )
}