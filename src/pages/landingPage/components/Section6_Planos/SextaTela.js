import { Link } from 'react-router-dom';
import { TranslationTagsComPrefixo as TComTag } from '../../../../shared/TranslationTagsComPrefixo';

import useControleDeTraducao from '../../../../shared/useControleDeTraducao';

import TPrecos from '../../../../shared/TPrecos';

import event from '../../images/ticket.webp';
import addBlock from '../../images/add_block.webp';
import skinAvatar from '../../images/skin_avatar.webp';
import previous from '../../images/arrow_back.webp';
import skinScenary from '../../images/skin_scenary.webp';
import energy from '../../images/energy.webp';
import calendar from '../../images/calendar.webp';

import './SextaTela.css';

const precosPlanos = 
{
  plano1: 12.90,
  plano2: 16.90,
  plano3: 14.90
}
export default function SextaTela() {
  // eslint-disable-next-line no-unused-vars
  const { t, tFormatado, chaveComPrefixo } = useControleDeTraducao("planos");

  // Atenção ⚠: possibilidade de restruturar codigo usando props e array.map
  // Isso em questão de a estrutura dos planos é praticamente a mesma

  return(
    <section id="sextaTela" className='frames'>
      <div className='backgroundLeft'></div>
      <div className='backgroundMid'></div>
      <article>
        <h2>{tFormatado("section6.subtitulo")}</h2>
        <p>
        <TComTag
            i18nKey={"section6.descricao"}
            components={{ span: <span className='destaqPreto' /> }}
          />
        </p>
      </article>

      <section  id="Planos">
        <div className='offers'> 

          <div className='titleCard'>
            <h3>{t(chaveComPrefixo("plano1.nome"),"")}</h3>
            <h4>{t(chaveComPrefixo("tipoPlano.mensal"),"")}</h4>
          </div>

          <div>

            <span>
              <img alt='' src={event}/>
              <p>{t(chaveComPrefixo("plano1.beneficio1"),"")}</p>
            </span>

            <span>
              <img alt='' src={addBlock}/>
              <p>{t(chaveComPrefixo("plano1.beneficio2"),"")}</p>
            </span>

            <span>
              <img alt='' src={skinAvatar}/>
              <p>{t(chaveComPrefixo("plano1.beneficio3"),"")}</p>
            </span>

          </div>

          <div className='breakBar'></div>
          <p>{t(chaveComPrefixo("valor"),"", { preco: TPrecos(precosPlanos.plano1) })}</p>

          <div className='offerButton'>
            <Link to="/pagamento">{t(chaveComPrefixo("botoes"),"")}</Link>
          </div>

        </div>

        <div className='offers'>

          <div className='titleCard'>
            <h3>{t(chaveComPrefixo("plano2.nome"),"")}</h3>
            <h4>{t(chaveComPrefixo("tipoPlano.mensal"),"")}</h4>
          </div>

          <div>

            <span>
              <img alt='' src={previous}/>
              <p>{t(chaveComPrefixo("beneficiosIguais"),"")}</p>
            </span>

            <span>
              <img alt='' src={skinScenary}/>
              <p>{t(chaveComPrefixo("plano2.beneficio1"),"")}</p>
            </span>

            <span>
              <img alt='' src={energy}/>
              <p>{t(chaveComPrefixo("plano2.beneficio2"),"")}</p>
            </span>

          </div>

          <div className='breakBar'></div>
          <p>{t(chaveComPrefixo("valor"),"", { preco: TPrecos(precosPlanos.plano2) })}</p>

          {/* LINKARRR */}
          <div className='offerButton'>
            <Link to="/pagamento">{t(chaveComPrefixo("botoes"),"")}</Link>
          </div>

        </div>

        <div className='offers'>

          <div className='titleCard'>
            <h3>CEO</h3>
            <h4>{t(chaveComPrefixo("tipoPlano.anual"),"")}</h4>
          </div>

          <div>

            <span>
              <img alt='' src={previous}/>
              <p>{t(chaveComPrefixo("beneficiosIguais"),"")}</p>
            </span>

            <span>
              <img alt='' src={calendar}/>
              <p>{t(chaveComPrefixo("plano3.beneficio"),"")}</p>
            </span>
            
          </div>

          <div className='breakBar'></div>
          <p>{t(chaveComPrefixo("valor"),"", { preco: TPrecos(precosPlanos.plano3) })}</p>

          <div className='offerButton'>
            <Link to="/pagamento">{t(chaveComPrefixo("botoes"),"")}</Link>
          </div>

        </div>

      </section>

      <div className='backgroundRight'></div>
    </section>
  );
}