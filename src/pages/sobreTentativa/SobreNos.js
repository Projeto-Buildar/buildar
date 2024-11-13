// Imports do CSS
import './SobreNosTentativa.css';

// Imports de Bibliotecas
import { useNavigate } from 'react-router-dom';

// Imports de Hooks
import { useEffect } from 'react';

// Imports de Components
import HeaderHome from "../home/HeaderHome";
import Footer from '../headersEfooters/footerPreLogin/Footer';
import mascot from './images/mascot.png';
import targetIcon from './images/target.webp';
import careerIcon from './images/career.webp';
import skillsIcon from './images/skills.webp';
import peopleIcon from './images/people.png'; // New icons for the new section
import schoolIcon from './images/school.png';
import environmentIcon from './images/environment.png';

// Importing team images
import teamMember1 from './images/teamMember1.png';
import teamMember2 from './images/teamMember2.png';
import teamMember3 from './images/teamMember3.png';
import teamMember4 from './images/teamMember4.png';
import teamMember5 from './images/teamMember5.png';
import teamMember6 from './images/teamMember6.png';
import teamMember7 from './images/teamMember7.png';
import teamMember8 from './images/teamMember8.png';
import ods from './images/ods.png'

import useControleDeTraducao from '../../useControleDeTraducao';

// import { useTranslation } from 'react-i18next';

const SobreNos = () => {
  const { t, tComControleDeLinha } = useControleDeTraducao();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <>
      <HeaderHome />
      <section className="SobreNos1">
        <div className='bannerSobre'>
          <div className='bannerCapsula'></div>
          <h1>{t("aboutUs")}</h1>
        </div>
        <div className="content1">
          <div className="text-section1">
            <h2>{t("originBuildar")}</h2>
            <p>{t("foundedBy")}</p>
            <a href="#" className="ver-mais1">{t("seeMore")}</a>
          </div>
          <img src={mascot} alt={t("mascotBuildar")} className="mascot1" />
        </div>
      </section>
      <div className='retangulos'></div>


      <section className="OurWork1">
        <div className='bannerMVV'>
          <h2>{t("ourPurpose")}</h2>
          <p className="intro">{t("buildarCommitment")}</p>
        </div>

        <div className="work-items1">
          <div className="work-item1">
            <img src={targetIcon} alt={t("ourWork")} />
            <div>
              <h3>{t("ourWork")}</h3>
              <p>{t("orientYouth")}</p>
            </div>

          </div>
          <div className="work-item2">
            <img src={careerIcon} alt={t("careerPlan")} />
            <div>
              <h3>{t("careerPlan")}</h3>
              <p>{t("platformGoal")}</p>
            </div>

          </div>
          <div className="work-item3">
            <img src={skillsIcon} alt={t("buildarSoftSkills")} />
            <div>
              <h3>{t("buildarSoftSkills")}</h3>
              <p>{t("determination")} ● {t("innovation")} ● {t("welcome")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="Goals">
        <div className='text-goals1'>
          <h2>{t("buildarGoals")}</h2>
          <p>{t("futurePlans")}</p>
        </div>
        <div className="goal-items">
          <div className="goal-item">{t("mobileApp")}</div>
          <div className="goal-item">{t("specializedService")}</div>
          <div className="goal-item">{t("machineLearning")}</div>
          <div className="goal-item">{t("eventsNearYou")}</div>
        </div>
      </section>

      <section className="OurCause">
        <h2>{t("ourCause")}</h2>
        <p className="intro">{t("researchPoints")}</p>
        <div className="cause-items">
          <div className="cause-item">
            <img src={peopleIcon} alt={t("lackSoftSkills")} />
            <p>{tComControleDeLinha(t("youthMarketEntry"))}</p>
          </div>
          <div className="cause-item">
            <img src={schoolIcon} alt={t("educationSoftSkills")} />
            <p>{t("youthSurvey")}</p>
          </div>
          <div className="cause-item">
            <img src={environmentIcon} alt={t("accessibleEnvironments")} />
            <p>{t("fewEnvironments")}</p>
          </div>
        </div>
      </section>
      <img className='odsClasse' src={ods}></img>
      <section className="OurTeam">
        <h2>{t("facesBehindBrand")}</h2>
        <div className="team-members">
          <div className="team-member 1">
            <img src={teamMember1} alt="Christian William" />
            <p><strong>Christian William</strong><br />{t("fullstackDeveloper")}</p>
          </div>
          <div className="team-member">
            <img src={teamMember2} alt="Daniel Fernandes" />
            <p><strong>Daniel Fernandes</strong><br />{t("productOwnerFullstack")}</p>
          </div>
          <div className="team-member">
            <img src={teamMember3} alt="Erik Paulino" />
            <p><strong>Erik Paulino</strong><br />{tComControleDeLinha(t("scrumMasterFrontend"))}</p>
          </div>
          <div className="team-member">
            <img src={teamMember4} alt="Eduardo Gomes" />
            <p><strong>Eduardo Gomes</strong><br />{tComControleDeLinha(t("backendDeveloper"))}</p>
          </div>
        </div>
        <div className='team-members 2'>
          <div className="team-member">
            <img src={teamMember5} alt="Isaque Barbosa" />
            <p><strong>Isaque Barbosa</strong><br />{tComControleDeLinha(t("backendDeveloper"))}</p>
          </div>
          <div className="team-member">
            <img src={teamMember6} alt="Gretzel Penaloza" />
            <p><strong>Gretzel Penaloza</strong><br />{t("fullstackDeveloper")}</p>
          </div>
          <div className="team-member">
            <img src={teamMember7} alt="Gustavo Bosak" />
            <p><strong>Gustavo Bosak</strong><br />{tComControleDeLinha(t("financeFrontend"))}</p>
          </div>
          <div className="team-member">
            <img src={teamMember8} alt="Letícia Nascimento" />
            <p><strong>Letícia Nascimento</strong><br />{t("databaseAdministrator")}</p>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
};

export default SobreNos;
