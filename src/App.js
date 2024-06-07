import './App.css';
import LandingPage from './pages/landingPage/LandingPage';
import Login from './pages/entrada/Login';
import Corredor from './pages/corredor/Corredor';

export default function App() {
  return (
    <div className="App">
      {/* <LandingPage/> */}
      {/* <Login/> */}
      <Corredor/>
    </div>
  );
}