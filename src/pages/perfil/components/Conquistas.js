import '../Perfil.css';
import Conquista from './Conquista';
import achievPic from '../images/image_filler_square.png';

var achievData = [
    {
        url: achievPic,
        color: '#58D2FF'
    },
    {
        url: achievPic,
        color: '#FF486D'
    },
    {
        url: achievPic,
        color: '#C6EC3E'
    },
    {
        url: achievPic,
        color: '#D3CED7'
    },
    {
        url: achievPic,
        color: '#D3CED7'
    },
    {
        url: achievPic,
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