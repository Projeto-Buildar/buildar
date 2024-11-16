import './QuintaTela.css';

import useControleDeTraducao from '../../../../shared/useControleDeTraducao';

export default function QuintaTela() {
    const { t, tFormatado } = useControleDeTraducao();

    return (
        <div className='frames' id='quintaTela'>
            <div className='backgroundLeft'></div>
            <section>
                <div></div>
                <div></div>
                <div></div>
            </section>
            <article>
                <h2>{t("Practice")}</h2>
                <p>{tFormatado(t("Events"))}</p>
                <div>{t("More")}</div>
            </article>
        </div>
    )
}