import '../Perfil.css';
import Skin from './Skin';
import skinPic from '../images/skin.png';
import skinPic1 from '../images/skin2.png';
import skinPic2 from '../images/skin3.png';

var skinData = [
    {
        url: skinPic
    },
    {
        url: skinPic1
    },
    {
        url: skinPic2
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