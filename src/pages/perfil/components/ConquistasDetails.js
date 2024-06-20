import '../Perfil.css';
import ConquistaDetailed from './ConquistaDetailed';
import achievImage from '../images/achievement_img.png';
import achievImage1 from '../images/achievement_img1.png';
import achievImage2 from '../images/achievement_img2.png';

const achievDetails = [
    {
        url: achievImage,
        color: '#58D2FF',
        title: 'Gestão de Eras',
        description: 'Texto de descrição da conquista',
    },
    {
        url: achievImage1,
        color: '#FF486D',
        title: 'A Hora da Verdade',
        description: 'Texto de descrição da conquista',
    },
    {
        url: achievImage2,
        color: '#C6EC3E',
        title: 'Aprendendo a Buildar',
        description: 'Texto de descrição da conquista',
    },
    {
        url: achievImage2,
        color: '#D3CED7',
        title: 'Ainda Aprendendo',
        description: 'Texto de descrição da conquista',
    },
    {
        url: achievImage2,
        color: '#D3CED7',
        title: 'Ainda Aprendendo',
        description: 'Texto de descrição da conquista',
    }
]

export default function ConquistasDetails() {
    return (
        <ul>
            {achievDetails.map((item) => {
                return <ConquistaDetailed url={item.url} color={item.color} title={item.title} description={item.description}/>
            })}
        </ul>
    )
}