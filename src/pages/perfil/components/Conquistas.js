import '../Perfil.css';
import Conquista from './Conquista';
import achievPic0 from '../images/achievement_img0.png'
import achievPic1 from '../images/achievement_img.png';
import achievPic2 from '../images/achievement_img1.png';
import achievPic3 from '../images/achievement_img2.png';
import achievPic4 from '../images/achievement_img3.png';
import achievPicBuildar from '../images/achievement_img-Buildar.png';


const achievData = [
    {
        url: achievPic0,
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
        url: achievPic3,
        color: '#FFD600'
    },
    {
        url: achievPic4,
        color: '#9B33FD'
    },
    {
        url: achievPicBuildar,
        color: '#D3CED7'
    },
    {
        url: achievPicBuildar,
        color: '#D3CED7'
    }
];

export default function Conquistas(){
    return (
        <ul className='achievScroll'>
            {achievData.map((item, index) => {
                return <Conquista url={item.url} color={item.color} key={index}/> 
                
            })}
        </ul>
    )
}