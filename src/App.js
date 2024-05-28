import './App.css';
import PrimeiraTela from './landing_page/sections/PrimeiraTela/PrimeiraTela';
import SegundaTela from './landing_page/sections/SegundaTela/SegundaTela';
import TerceiraTela from './landing_page/sections/TerceiraTela/TerceiraTela';
import QuartaTela from './landing_page/sections/QuartaTela/QuartaTela';
import QuintaTela from './landing_page/sections/QuintaTela/QuintaTela';
import SextaTela from './landing_page/sections/SextaTela/SextaTela';
import SetimaTela from './landing_page/sections/SetimaTela/SetimaTela';
import OitavaTela from './landing_page/sections/OitavaTela/OitavaTela';
import Footer from './landing_page/sections/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <PrimeiraTela/>
      <SegundaTela/>
      <TerceiraTela/>
      <QuartaTela/>
      <QuintaTela/>
      <SextaTela/>
      <SetimaTela/>
      <OitavaTela/>
      <Footer/>
    </div>
  );
}