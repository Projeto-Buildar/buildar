import '../Perfil.css';
import Conquista from './Conquista';
import achievPic from '../images/achievement_img.png';
import achievPic1 from '../images/achievement_img1.png';
import achievPic2 from '../images/achievement_img2.png';

const achievData = [
    {
        url: achievPic,
        color: '#58D2FF'
    },
    {
        url: achievPic1,
        color: '#FF486D'
    },
    {
        url: achievPic2,
        color: '#C6EC3E'
    },
    {
        url: achievPic2,
        color: '#D3CED7'
    },
    {
        url: achievPic2,
        color: '#D3CED7'
    },
    {
        url: achievPic2,
        color: '#D3CED7'
    }
];

export default function Conquistas(){
    return (
        <ul className='achievScroll'>
            {achievData.map((item) => {
                return <Conquista url={item.url} color={item.color}/> 
            })}
        </ul>
    )
}