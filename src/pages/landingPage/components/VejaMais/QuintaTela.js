import './QuintaTela.css';

import useControleDeTraducao from '../../../../useControleDeTraducao';

export default function QuintaTela() {
    const { t, tComControleDeLinha } = useControleDeTraducao();

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
                <p>{tComControleDeLinha(t("Events"))}</p>
                <div>{t("More")}</div>
            </article>
        </div>
    )
}