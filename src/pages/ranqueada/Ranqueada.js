import HeaderHome from "../home/HeaderHome";
import './ranqueada.css';
import Gold from './images/Gold.png';

export default function Ranqueada() {
    return (
        <div className="ranqueada-page">
            <HeaderHome />
            <div className="ranqueada-content">
                <div className="ranking-info">
                    <div className="ranking-icons">
                        <img src="path/to/silver-icon.png" alt="Silver" />
                        <img src={Gold} alt="Trofeu Gold" className="Gold" />
                        <img src="path/to/bronze-icon.png" alt="Bronze" />
                    </div>
                    <p>Desbloqueie as Ligas!</p>
                    <p>Conclua 10 lições antes de competir pela primeira vez.</p>
                    <button>Bora Buildar?</button>
                </div>
                <div className="user-list">
                    {Array(5).fill().map((_, index) => (
                        <div className="user-item" key={index}>
                            <div className="user-icon"></div>
                            <div className="user-info">
                                <p>Usuário {index + 1}</p>
                                <p>Info adicional</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="sidebar">
                    <div className="user-stats">
                        <p>3000 B</p>
                        <p>5 ❤️</p>
                    </div>
                    <div className="extra-info">
                        <p>Participe das lições, acumule XP e junte-se à competição.</p>
                        <p>Acumule XP e evolua de nível!</p>
                        <p>A competição será reiniciada em breve. Jogue agora e suba no ranking.</p>
                    </div>
                    <div className="footer-links">
                        <p>Sobre | Blog | Loja | Privacidade | Termos de uso</p>
                    </div>
                    <p>© Brunner | Todos os direitos reservados</p>
                </div>
            </div>
        </div>
    );
}
