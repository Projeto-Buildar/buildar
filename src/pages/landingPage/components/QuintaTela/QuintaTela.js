import './QuintaTela.css';

import { useTranslation } from 'react-i18next';
import "../../../../i18n"

export default function QuintaTela() {
    const {t, i18n } = useTranslation();
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
                <p>{t("Events")}</p>
                <div>{t("More")}</div>
            </article>
        </div>
    )
}