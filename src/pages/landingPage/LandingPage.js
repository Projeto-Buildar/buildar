import './LandingPage.css';
import Header from '../headersEfooters/Header/Header';
import PrimeiraTela from './components/Inicio/PrimeiraTela';
import SegundaTela from './components/Demonstracao/SegundaTela';
import TerceiraTela from './components/Avatares/TerceiraTela';
import QuartaTela from './components/Acessivel/QuartaTela';
import QuintaTela from './components/VejaMais/QuintaTela';
import SextaTela from './components/Planos/SextaTela';
import SetimaTela from './components/Eventos/SetimaTela';
import OitavaTela from './components/Depoimentos/OitavaTela';
// import Footer from './components/Footer/Footer';
import Footer from '../headersEfooters/footerPreLogin/Footer';
import footerImage from './images/quartaTela_bg.webp';

export default function LandingPage (){
    return (
        <main id='landingPage'>
            <Header/>
            <PrimeiraTela/>
            <SegundaTela/>
            <TerceiraTela/>
            <QuartaTela/>
            <QuintaTela/>
            <SextaTela/>
            <SetimaTela/>
            <OitavaTela/>
            <Footer/>
        </main>
    )
}