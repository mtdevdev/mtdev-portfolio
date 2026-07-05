
import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Footer } from './components/layout/Footer';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-bgDeep text-zinc-300 font-sans selection:bg-white selection:text-black">
        <div className="grain" aria-hidden="true" />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
