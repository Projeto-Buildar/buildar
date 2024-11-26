import './LandingPage.css';
import Header from '../headersEfooters/Header/Header';
import PrimeiraTela from './components/Section1_Inicio/PrimeiraTela';
import SegundaTela from './components/Section2_Demonstracao/SegundaTela';
import TerceiraTela from './components/Section3_Avatares/TerceiraTela';
import QuartaTela from './components/Section4_Acessivel/QuartaTela';
import QuintaTela from './components/Section5_VejaMais/QuintaTela';
import SextaTela from './components/Section6_Planos/SextaTela';
import SetimaTela from './components/Section7_Eventos/SetimaTela';
import OitavaTela from './components/Section8_Depoimentos/OitavaTela';
// import Footer from './components/Footer/Footer';
import Footer from '../headersEfooters/footerPreLogin/Footer';
// import footerImage from './images/quartaTela_bg.webp';

import { TranslationProvider } from '../../shared/TranslationContext';

export default function LandingPage() {
    return (

        <main id='landingPage'>
            <TranslationProvider prefixo="landingPage">
                <Header />
                <PrimeiraTela />
                <SegundaTela />
                <TerceiraTela />
                <QuartaTela />
                <QuintaTela />
                <SextaTela />
                <SetimaTela />
                <OitavaTela />
            </TranslationProvider>
            <Footer />
        </main>

    )
}