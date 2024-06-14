import './SextaTela.css';
import event from '../../images/ticket.webp';
import addBlock from '../../images/add_block.webp';
import skinAvatar from '../../images/skin_avatar.webp';
import previous from '../../images/arrow_back.webp';
import skinScenary from '../../images/skin_scenary.webp';
import energy from '../../images/energy.webp';
import calendar from '../../images/calendar.webp';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import "../../../../i18n"

export default function SextaTela() {
  const {t, i18n } = useTranslation();
  return(
    <div id="sextaTela" className='frames'>
      <div className='backgroundLeft'></div>
      <div className='backgroundMid'></div>
      <article>
        <h2>{t("CAP")}</h2>
        <p>{t("Paths1")}<span className='destaqBranco'>{t("Paths2")}</span>{t("Paths3")}</p>
      </article>
      <section  id="Planos">
        <div className='offers'>
          <div className='titleCard'>
            <h3>{t("Intern")}</h3>
            <h4>{t("Plan")}</h4>
          </div>
          <div>
            <span>
              <img src={event}/>
              <p>{t("Excl")}</p>
            </span>
            <span>
              <img src={addBlock}/>
              <p>{t("Ads")}</p>
            </span>
            <span>
              <img src={skinAvatar}/>
              <p>{t("Skin")}</p>
            </span>
          </div>
          <div className='breakBar'></div>
          <p>{t("Price1")}</p>
          <div className='offerButton'>
            <Link to="/pagamento">{t("Check")}</Link>
          </div>
          {/* <div className='offerButton'>Conferir</div> */}
        </div>
        <div className='offers'>
          <div className='titleCard'>
            <h3>{t("Manager")}</h3>
            <h4>{t("Plan")}</h4>
          </div>
          <div>
            <span>
              <img src={previous}/>
              <p>{t("Prev")}</p>
            </span>
            <span>
              <img src={skinScenary}/>
              <p>{t("Scene")}</p>
            </span>
            <span>
              <img src={energy}/>
              <p>{t("Energy")}</p>
            </span>
          </div>
          <div className='breakBar'></div>
          <p>{t("Price2")}</p>
          {/* LINKARRR */}
          <div className='offerButton'>
            <Link to="/pagamento">{t("Check")}</Link>
          </div>

        </div>
        <div className='offers'>
          <div className='titleCard'>
            <h3>CEO</h3>
            <h4>{t("Year")}</h4>
          </div>
          <div>
            <span>
              <img src={previous}/>
              <p>{t("Prev")}</p>
            </span>
            <span>
              <img src={calendar}/>
              <p>{t("FreeMonth")}</p>
            </span>
          </div>
          <div className='breakBar'></div>
          <p>{t("Price3")}</p>
          <div className='offerButton'>
            <Link to="/pagamento">{t("Check")}</Link>
          </div>
        </div>
      </section>
      <div className='backgroundRight'></div>
    </div>
  );
}