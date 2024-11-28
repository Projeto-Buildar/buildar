import { Link } from 'react-router-dom';

import useControleDeTraducao from '../../../../shared/useControleDeTraducao';

import TPrecos from '../../../../shared/TPrecos';

import event from '../../images/ticket.webp';
import addBlock from '../../images/add_block.webp';
import skinAvatar from '../../images/skin_avatar.webp';
import previous from '../../images/arrow_back.webp';
import skinScenary from '../../images/skin_scenary.webp';
import energy from '../../images/energy.webp';
import calendar from '../../images/calendar.webp';

const planos = [
    {
        tipo: ".mensal",
        beneficios: {
            imagens: [event, addBlock, skinAvatar],
            temIgual: false,
        },
        preco: 12.90,
    },
    {
        tipo: ".mensal",
        beneficios: {
            imagens: [previous, skinScenary, energy],
            temIgual: true,
        },
        preco: 16.90,
    },
    {
        nome: "CEO",
        tipo: ".anual",
        beneficios: {
            imagens: [previous, calendar],
            temIgual: true,
        },
        preco: 14.90,
    },
];

export default function Planos() {
    const { t, chaveComPrefixo } = useControleDeTraducao("planos");

    return (
        <section id="Planos">
            {planos.map((plano, index) => {
                const planoIndex = `plano${index + 1}`;

                const nomePlano = plano.nome || t(chaveComPrefixo(`${planoIndex}.nome`), "");
                const tipoPlano = t(chaveComPrefixo(`tipoPlano${plano.tipo}`), "");
                const { imagens, temIgual } = plano.beneficios;

                return (
                    <article key={index} className="offers">
                        <div className="titleCard">
                            <h3>{nomePlano}</h3>
                            <h4>{tipoPlano}</h4>
                        </div>

                        <ul>
                            {imagens.map((beneficio, index) => {
                                const indexChave = temIgual ? index : index + 1;
                                const chaveBeneficio = temIgual && index === 0
                                    ? "beneficiosIguais"
                                    : `${planoIndex}.beneficio${indexChave}`;

                                return (
                                    <li key={index}>
                                        <img alt="icone" src={beneficio} />
                                        <p>{t(chaveComPrefixo(chaveBeneficio), "")}</p>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="breakBar"></div>

                        <p>{t(chaveComPrefixo("valor"), "", { preco: TPrecos(plano.preco) })}</p>

                        <div className="offerButton">
                            <Link to="/pagamento">{t(chaveComPrefixo("botoes"), "")}</Link>
                        </div>
                    </article>
                );
            })}
        </section>
    );
}
