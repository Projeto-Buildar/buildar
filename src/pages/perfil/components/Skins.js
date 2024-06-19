import '../Perfil.css';
import Skin from './Skin';
import skinPic from '../images/image_filler_square.png';

var skinData = [
    {
        url: skinPic
    },
    {
        url: skinPic
    },
    {
        url: skinPic
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