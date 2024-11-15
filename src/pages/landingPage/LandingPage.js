import './LandingPage.css';
import Header from '../headersEfooters/Header/Header';
import PrimeiraTela from './components/Section1_Inicio/PrimeiraTela';
import SegundaTela from './components/Section2_Demonstracao/SegundaTela';
import TerceiraTela from './components/Section3_Avatares/TerceiraTela';
import QuartaTela from './components/Section4_Acessivel/QuartaTela';
import QuintaTela from './components/VejaMais/QuintaTela';
import SextaTela from './components/Planos/SextaTela';
import SetimaTela from './components/Eventos/SetimaTela';
import OitavaTela from './components/Depoimentos/OitavaTela';
// import Footer from './components/Footer/Footer';
import Footer from '../headersEfooters/footerPreLogin/Footer';
import footerImage from './images/quartaTela_bg.webp';

import { TranslationProvider } from '../../shared/TranslationContext';

export default function LandingPage (){
    return (
<TranslationProvider prefixo="landingPage">
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
</TranslationProvider>
    )
}