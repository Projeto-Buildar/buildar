import '../Perfil.css';
import ConquistaDetailed from './ConquistaDetailed';
import achievImage0 from '../images/achievement_img0.png'
import achievImage1 from '../images/achievement_img.png';
import achievImage2 from '../images/achievement_img1.png';
import achievImage3 from '../images/achievement_img2.png';
import achievImage4 from '../images/achievement_img3.png';
import achievImageBuildar from '../images/achievement_img-Buildar.png';

const achievDetails = [
    {
        url: achievImage0,
        color: '#58D2FF',
        title: 'Comunicador Exímio',
        description: 'Aprimorou habilidades de comunicação em equipe, promovendo colaboração e entendimento mútuo.',
    },
    {
        url: achievImage1,
        color: '#FF486D',
        title: 'Gestão de Eras',
        description: 'Concluiu o módulo de Rotina em Gestão de Tempo numa sequência inquebrável de 7 dias.',
    },
    {
        url: achievImage2,
        color: '#C6EC3E',
        title: 'A Hora da Verdade',
        description: 'Concluiu o modo Desafio: Sem Tempo Irmão sem passar do tempo durante um módulo inteiro.',
    },
    {
        url: achievImage3,
        color: '#FFD600',
        title: 'Aprendendo a Buildar',
        description: 'Concluiu todas as portas de um módulo pela primeira vez.',
    },
    {
        url: achievImage4,
        color: '#9B33FD',
        title: 'Líder de Sucesso',
        description: 'Liderou com êxito um projeto do início ao fim, alcançando resultados excepcionais.',
    },
    {
        url: achievImageBuildar,
        color: '#D3CED7',
        title: 'Ainda Aprendendo',
        description: 'Conquistas sendo desenvolvidas.',
    },
    {
        url: achievImageBuildar,
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