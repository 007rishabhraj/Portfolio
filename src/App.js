import React, { useState } from 'react';
import Header,{HeaderPhone} from "./components/Header";
import Home from "./components/Home.jsx";
import Work from './components/Work';
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast';

const App = () => {

  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Skills />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;