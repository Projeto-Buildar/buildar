import useControleDeTraducao from '../../../../shared/useControleDeTraducao';

import './QuintaTela.css';

export default function QuintaTela() {
    const { t, tFormatado, chaveComPrefixo } = useControleDeTraducao("section5");

    return (
        <section className='frames' id='quintaTela'>
            <div className='backgroundLeft'></div>
            <section className='imagemContainer'>
                <div></div>
                <div></div>
                <div></div>
            </section>
            <article>
                <h2>{t(chaveComPrefixo("subtitulo"))}</h2>
                <p>{tFormatado(chaveComPrefixo("descricao"))}</p>
                <div>{tFormatado(chaveComPrefixo("mais"))}</div>
            </article>
        </section>
    )
}