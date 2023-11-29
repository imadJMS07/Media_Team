// app.js

import { useEffect } from 'react';
import Aos from 'aos';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Faq from './components/Faq';
import Politique from './components/Politique';
import Contact from './components/Contact';
import Accuile from './components/Accuile';
import Temoignages from './components/Temoignages';
import Services from './components/Services';
import Propos from './components/Propos';
import Actualites from './components/Actualites';
function App() {

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Accuile />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/politique" element={<Politique />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/temoignages" element={<Temoignages />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/actualites" element={<Actualites />} />




      </Route>
    </Routes>
  );
}

export default App;
