import './QuintaTela.css';

import useControleDeTraducao from '../../../../shared/useControleDeTraducao';

export default function QuintaTela() {
    const { t, tFormatado, chaveComPrefixo } = useControleDeTraducao("section5");

    return (
        <div className='frames' id='quintaTela'>
            <div className='backgroundLeft'></div>
            <section>
                <div></div>
                <div></div>
                <div></div>
            </section>
            <article>
                <h2>{t(chaveComPrefixo("subtitulo"))}</h2>
                <p>{tFormatado(chaveComPrefixo("descricao"))}</p>
                <div>{tFormatado(chaveComPrefixo("mais"))}</div>
            </article>
        </div>
    )
}