
import React, { useEffect, useState } from 'react';
import { MapPin, Github, Linkedin, Gamepad2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" style={{ transform: `translate(-50%, calc(-50% + ${scrollY * 0.5}px))` }} />
      <div className="max-w-7xl w-full text-center space-y-8 relative z-10">
        <div className="space-y-4" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter">{PORTFOLIO_DATA.name}</h1>
          <p className="font-tech text-neutral-500 tracking-[0.4em] text-sm md:text-base uppercase">{PORTFOLIO_DATA.role}</p>
        </div>
        <div className="flex items-center justify-center gap-4 text-neutral-400 py-6" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
          <MapPin className="w-4 h-4" />
          <span className="text-xs tracking-widest uppercase">{PORTFOLIO_DATA.location}</span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-4" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="w-48 py-4 bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all text-center rounded-full shadow-lg shadow-white/5">Ver Projetos</a>
          <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="w-48 py-4 border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-all text-center rounded-full">Sobre Mim</a>
        </div>
        <div className="flex justify-center gap-8 pt-12" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
          {PORTFOLIO_DATA.socials.map((social) => (social.platform !== 'Email' && (
            <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
              {social.icon === 'github' && <Github />}
              {social.icon === 'linkedin' && <Linkedin />}
              {social.icon === 'gamepad' && <Gamepad2 />}
            </a>
          )))}
        </div>
      </div>
    </section>
  );
};
