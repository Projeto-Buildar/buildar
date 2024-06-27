import './SobreNos.css';
import HeaderHome from "../home/HeaderHome";
import Footer from '../landingPage/components/Footer/Footer';
import mascot from './images/mascot.png';
import targetIcon from './images/target.png';
import careerIcon from './images/career.png';
import skillsIcon from './images/skills.png';
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

const SobreNos = () => {
  return (
    <>
      <HeaderHome />
      <section className="SobreNos">
        <h1>Sobre Nós</h1>
        <div className="content">
          <div className="text-section">
            <h2>Mas afinal... De onde surgiu a Buildar?</h2>
            <p>Fundada por um grupo de adolescentes, estudantes de <strong>desenvolvimento web</strong>, a Buildar toma forma como um projeto de conclusão de curso. Forjada nos pilares de <strong>companheirismo</strong>, e <strong>determinação</strong>, a Buildar segue para moldar o <strong>futuro</strong> de outros jovens como seus fundadores.</p>
            <a href="#" className="ver-mais">ver mais</a>
          </div>
          <img src={mascot} alt="Mascote buildar" className="mascot" />
        </div>
      </section>

      <section className="OurWork">
        <h2>E o que viemos fazer aqui?</h2>
        <p className="intro">A Buildar não tá aqui atoa! Temos um grande comprometimento em fazer você conquistar seu futuro.</p>
        <div className="work-items">
          <div className="work-item">
            <img src={targetIcon} alt="Nosso trabalho" />
            <h3>Nosso trabalho</h3>
            <p>Orientar o jovem a entrar no mercado de trabalho por meio da prática de soft skills.</p>
          </div>
          <div className="work-item">
            <img src={careerIcon} alt="Plano de Carreira" />
            <h3>Plano de Carreira</h3>
            <p>Ser a plataforma web nº 1 na prática e desenvolvimento de soft skills entre os jovens.</p>
          </div>
          <div className="work-item">
            <img src={skillsIcon} alt="Soft skills da Buildar" />
            <h3>Soft skills da Buildar</h3>
            <p>Determinação ● Inovação ● Acolhimento</p>
          </div>
        </div>
      </section>

      <section className="Goals">
        <div className='text-goals'>
          <h2>A Buildar também tem suas metas!</h2>
          <p>Planos pro futuro?<br />A Buildar é mestre nisso.<br />Confira apenas algumas das nossas metas<br />mais próximas</p>
        </div>
        <div className="goal-items">
          <div className="goal-item">Adição de aplicativo mobile</div>
          <div className="goal-item">Atendimento especializado</div>
          <div className="goal-item">Machine learning particular</div>
          <div className="goal-item">Eventos perto de você</div>
        </div>
      </section>

      <section className="OurCause">
        <h2>Nossa causa é com você</h2>
        <p className="intro">As pesquisas apontam... É pra lá que vamos! A Buildar existe<br /> para solucionar a dura realidade dos jovens no mercado.</p>
        <div className="cause-items">
          <div className="cause-item">
            <img src={peopleIcon} alt="Falta de soft skills" />
            <p>3 a 4 jovens não conseguem entrar no mercado de trabalho por falta de soft skills.</p>
          </div>
          <div className="cause-item">
            <img src={schoolIcon} alt="Educação em soft skills" />
            <p>Em pesquisas autorais, 89% dos jovens não aprenderam sobre soft skills mais cedo.</p>
          </div>
          <div className="cause-item">
            <img src={environmentIcon} alt="Ambientes acessíveis" />
            <p>Existem poucos ambientes acessíveis para o jovem praticar soft skills.</p>
          </div>
        </div>
      </section>

      <section className="OurTeam">
        <h2>Os rostos por trás da marca</h2>
        <div className="team-members">
          <div className="team-member 1">
            <img src={teamMember1} alt="Christian William" />
            <p><strong>Christian William</strong><br />Desenvolvedor Fullstack</p>
          </div>
          <div className="team-member">
            <img src={teamMember2} alt="Daniel Fernandes" />
            <p><strong>Daniel Fernandes</strong><br />Product Owner & Desenvolvedor Fullstack</p>
          </div>
          <div className="team-member">
            <img src={teamMember3} alt="Erik Paulino" />
            <p><strong>Erik Paulino</strong><br />Scrum Master & Desenvolvedor Front-end</p>
          </div>
          <div className="team-member">
            <img src={teamMember4} alt="Eduardo Gomes" />
            <p><strong>Eduardo Gomes</strong><br />Desenvolvedor Back-end</p>
          </div>
          </div>
          <div className='team-members 2'>
          <div className="team-member">
            <img src={teamMember5} alt="Isaque Barbosa" />
            <p><strong>Isaque Barbosa</strong><br />Desenvolvedor Back-end</p>
          </div>
          <div className="team-member">
            <img src={teamMember6} alt="Gretzel Penaloza" />
            <p><strong>Gretzel Penaloza</strong><br />Desenvolvedor Fullstack</p>
          </div>
          <div className="team-member">
            <img src={teamMember7} alt="Gustavo Bosak" />
            <p><strong>Gustavo Bosak</strong><br />Financeiro & Desenvolvedor Front-end</p>
          </div>
          <div className="team-member">
            <img src={teamMember8} alt="Letícia Nascimento" />
            <p><strong>Letícia Nascimento</strong><br />Administradora de Banco de Dados</p>
        </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SobreNos;
