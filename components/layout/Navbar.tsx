
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['hero', 'about', 'projects'];
      
      // Ajuste do offset para considerar a navbar
      const scrollPosition = window.scrollY + 150; 
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Atualiza a URL sem pular a página
      window.history.pushState(null, '', href);
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled || isMobileMenuOpen ? 'bg-neutral-950/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-tech text-white font-bold tracking-tighter text-xl z-50">
            mt<span className="font-light">dev</span>
          </a>
          <div className="hidden md:flex gap-8 text-xs font-tech tracking-widest uppercase items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`transition-all duration-300 hover:text-white ${
                   activeSection === link.href.replace('#', '') ? 'text-accent-400 font-bold' : 'text-neutral-400'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="px-6 py-2 border border-white/10 hover:border-accent-500/50 transition-all bg-white/5 hover:bg-accent-950/20 rounded-full text-white">Contato</a>
          </div>
          <button className="md:hidden z-50 text-white p-2 hover:bg-white/10 rounded-full transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      <div className={`fixed inset-0 z-30 bg-neutral-950 transition-transform duration-300 md:hidden flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={(e) => handleScrollTo(e, link.href)} 
            className={`text-2xl font-tech font-bold transition-colors uppercase tracking-widest ${activeSection === link.href.replace('#', '') ? 'text-accent-400' : 'text-white hover:text-accent-400'}`}
          >
            {link.name}
          </a>
        ))}
        <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="px-8 py-3 mt-4 border border-white/20 rounded-full text-accent-400 text-sm font-tech uppercase tracking-widest">Entre em Contato</a>
      </div>
    </>
  );
};
