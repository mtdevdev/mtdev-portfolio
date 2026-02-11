
import React, { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.2 });
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("mtdevdev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer ref={footerRef} className="py-20 border-t border-basalt bg-neutral-900/10">
      <div className={`max-w-7xl mx-auto px-6 text-center space-y-12 reveal ${isVisible ? 'active' : ''}`}>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter">Vamos construir o próximo nível?</h2>
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <a href="mailto:mtdevdev@gmail.com" className="flex items-center gap-4 group px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-accent-500/30 transition-all">
                    <Mail className="w-5 h-5 text-neutral-400 group-hover:text-accent-400 transition-colors" />
                    <span className="text-sm font-tech tracking-widest text-neutral-300 group-hover:text-white uppercase">Enviar Email</span>
                </a>
                <button onClick={handleCopyEmail} className="flex items-center gap-3 px-6 py-4 bg-neutral-900 border border-white/10 rounded-2xl hover:bg-neutral-800 hover:border-accent-500/30 transition-all group relative overflow-hidden">
                    {copied ? <Check className="w-5 h-5 text-accent-400" /> : <Copy className="w-5 h-5 text-neutral-400 group-hover:text-white" />}
                    <span className={`text-sm font-tech tracking-widest uppercase transition-colors ${copied ? 'text-accent-400' : 'text-neutral-400 group-hover:text-white'}`}>
                        {copied ? 'Copiado!' : 'Copiar Email'}
                    </span>
                </button>
            </div>
            <p className="text-xs text-neutral-600 font-tech">mtdevdev@gmail.com</p>
        </div>
        <div className="pt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5">
          <p className="text-[10px] font-tech tracking-[0.3em] text-neutral-600 uppercase">© 2026 MTDev. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="https://github.com/mtdevdev" className="text-neutral-600 hover:text-white transition-colors hover:-translate-y-1"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/matheus-mar%C3%A7al-mtdev/" className="text-neutral-600 hover:text-white transition-colors hover:-translate-y-1"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
