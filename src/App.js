import './App.css';
import PrimeiraTela from './sections/PrimeiraTela/PrimeiraTela';
import SegundaTela from './sections/SegundaTela/SegundaTela';
import TerceiraTela from './sections/TerceiraTela/TerceiraTela';
import QuartaTela from './sections/QuartaTela/QuartaTela';
import QuintaTela from './sections/QuintaTela/QuintaTela';
import SextaTela from './sections/SextaTela/SextaTela';
import OitavaTela from './sections/OitavaTela/OitavaTela';
import React from 'react';
import CAPoiador from './sections/SetimaTela/SetimaTela';




export default function App() {
  return (
    <div className="App">
      <PrimeiraTela/>
      <SegundaTela/>
      <TerceiraTela/>
      <QuartaTela/>
      <QuintaTela/>
      <SextaTela/>
      <CAPoiador />
      <OitavaTela/>
    </div>
  );
}