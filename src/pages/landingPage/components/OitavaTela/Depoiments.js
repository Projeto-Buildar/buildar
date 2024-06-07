import './OitavaTela.css';
import Depoiment from './Depoiment';
import user1 from '../../images/user1.png';
import user2 from '../../images/user2.png';
import user3 from '../../images/user3.png';

var userInfo = [
    {
        image: user1,
        name: 'Nome Nomeador',
        age: '19',
        text: 'Minha experiência na Buildar foi transformadora. Várias vez, enquanto estava no trabalho, lembrei de uma atividade que treinei na plataforma.',
        color: '#FFB412'
    },
    {
        image: user2,
        name: 'Nome Nomeira',
        age: '23',
        text: 'Minha experiência na Buildar foi transformadora. Várias vez, enquanto estava no trabalho, lembrei de uma atividade que treinei na plataforma.',
        color: '#58D2FF'
    },
    {
        image: user3,
        name: 'Nome Nomenta da N',
        age: '23',
        text: 'Minha experiência na Buildar foi transformadora. Várias vez, enquanto estava no trabalho, lembrei de uma atividade que treinei na plataforma.',
        color: '#FFB412'
    }
]

export default function Depoiments() {
    return (
        <div className='depoiments'>
            {userInfo.map((depoiments) => {
                return <Depoiment image={depoiments.image} name={depoiments.name} age={depoiments.age} text={depoiments.text} color={depoiments.color}/> 
            })}
        </div>
    )
};

