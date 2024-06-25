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
        description: 'Concluiu o módulo de Rotina em Gestão de Tempo numa sequência inquebrável de 7 dias.',
    },
    {
        url: achievImage1,
        color: '#FF486D',
        title: 'A Hora da Verdade',
        description: 'Concluiu o modo Desafio: Sem Tempo Irmão sem passar do tempo durante um módulo inteiro.',
    },
    {
        url: achievImage2,
        color: '#C6EC3E',
        title: 'Aprendendo a Buildar',
        description: 'Concluiu todas as portas de um módulo pela primeira vez.',
    },
    {
        url: achievImage2,
        color: '#D3CED7',
        title: 'Ainda Aprendendo',
        description: 'Conquistas sendo desenvolvidas.',
    },
    {
        url: achievImage2,
        color: '#D3CED7',
        title: 'Ainda Aprendendo',
        description: 'Conquistas sendo desenvolvidas.',
    }
]

export default function ConquistasDetails() {
    return (
        <ul>
            {achievDetails.map((item, index) => {
                return <ConquistaDetailed key={index} url={item.url} color={item.color} title={item.title} description={item.description}/>
            })}
        </ul>
    )
}