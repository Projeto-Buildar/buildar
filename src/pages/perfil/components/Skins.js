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
        <div className='skinScroll'>
            <Skin/>
        </div>
    )
}