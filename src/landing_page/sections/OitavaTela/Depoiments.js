import './OitavaTela.css';
import Depoiment from './Depoiment';
import logo from '../../images/image_filler_square.png';

var userInfo = [
    {
        image: logo,
        name: 'Nome Nomeador',
        age: '19',
        text: 'Minha experiência na Buildar foi transformadora. Várias vez, enquanto estava no trabalho, lembrei de uma atividade que treinei na plataforma.'
    },
    {
        image: logo,
        name: 'Nome Nomeira',
        age: '23',
        text: 'Minha experiência na Buildar foi transformadora. Várias vez, enquanto estava no trabalho, lembrei de uma atividade que treinei na plataforma.'
    },
    {
        image: logo,
        name: 'Nome Nomenta da N',
        age: '23',
        text: 'Minha experiência na Buildar foi transformadora. Várias vez, enquanto estava no trabalho, lembrei de uma atividade que treinei na plataforma.'
    }
]

export default function Depoiments() {
    return (
        <section>
            {userInfo.map((depoiments) => {
                return <Depoiment image={depoiments.image} name={depoiments.name} age={depoiments.age} text={depoiments.text}/> 
            })}
        </section>
    )
};

