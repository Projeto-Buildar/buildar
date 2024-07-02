import './SobreNos.css';
import HeaderHome from "../home/HeaderHome";
import Footer from '../headersEfooters/footerPreLogin/Footer';
import mascot from './images/mascot.png';
import targetIcon from './images/target.png';
import careerIcon from './images/career.png';
import skillsIcon from './images/skills.png';
import peopleIcon from './images/people.png'; // New icons for the new section
import schoolIcon from './images/school.png';
import environmentIcon from './images/environment.png';
import { useTranslation } from 'react-i18next';

// Importing team images
import teamMember1 from './images/teamMember1.png';
import teamMember2 from './images/teamMember2.png';
import teamMember3 from './images/teamMember3.png';
import teamMember4 from './images/teamMember4.png';
import teamMember5 from './images/teamMember5.png';
import teamMember6 from './images/teamMember6.png';
import teamMember7 from './images/teamMember7.png';
import teamMember8 from './images/teamMember8.png';

const SobreNos = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeaderHome />
      <section className="SobreNos">
        <h1>{t("aboutUs")}</h1>
        <div className="content">
          <div className="text-section">
            <h2>{t("originBuildar")}</h2>
            <p>{t("foundedBy")}</p>
            <a href="#" className="ver-mais">{t("seeMore")}</a>
          </div>
          <img src={mascot} alt={t("mascotBuildar")} className="mascot" />
        </div>
      </section>

      <section className="OurWork">
        <h2>{t("ourPurpose")}</h2>
        <p className="intro">{t("buildarCommitment")}</p>
        <div className="work-items">
          <div className="work-item">
            <img src={targetIcon} alt={t("ourWork")} />
            <h3>{t("ourWork")}</h3>
            <p>{t("orientYouth")}</p>
          </div>
          <div className="work-item">
            <img src={careerIcon} alt={t("careerPlan")} />
            <h3>{t("careerPlan")}</h3>
            <p>{t("platformGoal")}</p>
          </div>
          <div className="work-item">
            <img src={skillsIcon} alt={t("buildarSoftSkills")} />
            <h3>{t("buildarSoftSkills")}</h3>
            <p>{t("determination")} ● {t("innovation")} ● {t("welcome")}</p>
          </div>
        </div>
      </section>

      <section className="Goals">
        <div className='text-goals'>
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
            <p>{t("youthMarketEntry")}</p>
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
      </section>"

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
            <p><strong>Erik Paulino</strong><br />{t("scrumMasterFrontend")}</p>
          </div>
          <div className="team-member">
            <img src={teamMember4} alt="Eduardo Gomes" />
            <p><strong>Eduardo Gomes</strong><br />{t("backendDeveloper")}</p>
          </div>
        </div>
        <div className='team-members 2'>
          <div className="team-member">
            <img src={teamMember5} alt="Isaque Barbosa" />
            <p><strong>Isaque Barbosa</strong><br />{t("backendDeveloper")}</p>
          </div>
          <div className="team-member">
            <img src={teamMember6} alt="Gretzel Penaloza" />
            <p><strong>Gretzel Penaloza</strong><br />{t("fullstackDeveloper")}</p>
          </div>
          <div className="team-member">
            <img src={teamMember7} alt="Gustavo Bosak" />
            <p><strong>Gustavo Bosak</strong><br />{t("financeFrontend")}</p>
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
