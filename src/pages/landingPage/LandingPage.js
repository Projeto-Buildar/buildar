import './LandingPage.css';
import Header from '../headersEfooters/Header/Header';
import PrimeiraTela from './components/PrimeiraTela/PrimeiraTela';
import SegundaTela from './components/SegundaTela/SegundaTela';
import TerceiraTela from './components/TerceiraTela/TerceiraTela';
import QuartaTela from './components/QuartaTela/QuartaTela';
import QuintaTela from './components/QuintaTela/QuintaTela';
import SextaTela from './components/SextaTela/SextaTela';
import SetimaTela from './components/SetimaTela/SetimaTela';
import OitavaTela from './components/OitavaTela/OitavaTela';
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