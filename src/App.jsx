import { Routes, Route } from 'react-router-dom';

import NavbarComp from './comp/NavbarComp';
import FooterComp from './comp/FooterComp';

import Home from './pages/Home';
import Kelas from './pages/Kelas';
import Ketentuan from './pages/Ketentuan';
import Testimoni from './pages/Testimoni';
import Faq from './pages/Faq';

function App() {
  return (
    <div>
      <NavbarComp />

        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/kelas' Component={Kelas} />
          <Route path='/ketentuan' Component={Ketentuan} />
          <Route path='/testimoni' Component={Testimoni} />
          <Route path='/faq' Component={Faq} />
        </Routes>

      <FooterComp />
    </div>
  ); 
}

export default App
