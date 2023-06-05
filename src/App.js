import React from 'react';
import Header from "./components/Header";
import Home from "./components/Home.jsx";
import Work from './components/Work';
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Work />
      <Timeline/>
      <Skills/>
    </>
  );
}

export default App;