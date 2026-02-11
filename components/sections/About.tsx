
import React, { useEffect, useRef, useState } from 'react';
import { Code2, Layers, Cpu, Terminal, GraduationCap, Award, FileText, Globe } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 bg-neutral-900/20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* Top Section: Bio & Stack */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className={`md:col-span-7 space-y-8 reveal ${isVisible ? 'active' : ''}`}>
            <h2 className="text-sm font-tech tracking-[0.3em] text-emerald-500/80 uppercase flex items-center gap-2"><Terminal className="w-4 h-4" /> Perfil Profissional</h2>
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="shrink-0 group">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-neutral-800 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden relative shadow-2xl">
                  <img 
                    src={PORTFOLIO_DATA.bio.profileImage} 
                    alt={PORTFOLIO_DATA.name} 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl font-medium leading-relaxed text-neutral-200">{PORTFOLIO_DATA.bio.intro}</p>
                <div className="h-px w-20 bg-emerald-500/30"></div>
                <p className="text-neutral-400 leading-loose text-lg">{PORTFOLIO_DATA.bio.description}</p>
                <div className="pt-4">
                  <a href={PORTFOLIO_DATA.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 bg-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/30 text-emerald-400 font-tech text-xs tracking-widest uppercase rounded-xl transition-all"><FileText className="w-4 h-4" /> Visualizar Currículo</a>
                </div>
              </div>
            </div>
          </div>
          <div className={`md:col-span-5 space-y-8 reveal delay-200 ${isVisible ? 'active' : ''}`}>
            <h2 className="text-sm font-tech tracking-[0.3em] text-white/40 uppercase flex items-center gap-2"><Cpu className="w-4 h-4" /> Tech Stack</h2>
            <div className="grid grid-cols-1 gap-4">
              {PORTFOLIO_DATA.stack.map((item) => (
                <div key={item.category} className="group p-6 border border-basalt bg-neutral-900/40 flex items-center gap-4 hover:border-emerald-500/20 hover:bg-emerald-950/5 transition-all duration-300 rounded-2xl">
                  <div className="p-3 bg-white/5 border border-white/10 text-emerald-400 rounded-xl">{item.icon === 'code' ? <Code2 className="w-5 h-5" /> : <Layers className="w-5 h-5" />}</div>
                  <div>
                    <h3 className="font-tech text-xs tracking-widest text-white uppercase mb-1">{item.category}</h3>
                    <p className="text-sm text-neutral-400">{item.items}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Education, Certs, Languages */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/5 reveal delay-300 ${isVisible ? 'active' : ''}`}>
            
            {/* Education Column */}
            <div className="space-y-8">
                <h3 className="text-sm font-tech tracking-[0.2em] text-neutral-500 uppercase flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-500" /> Formação Acadêmica
                </h3>
                <div className="space-y-8 pl-2">
                    {PORTFOLIO_DATA.education.map((edu, idx) => (
                        <div key={idx} className="relative pl-6 border-l border-white/10 hover:border-emerald-500/50 transition-colors group">
                            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-800 border border-white/20 group-hover:border-emerald-500 group-hover:bg-emerald-500/20 transition-all" />
                            <h4 className="text-white font-bold text-lg">{edu.degree}</h4>
                            <p className="text-emerald-400 text-sm mt-1">{edu.school}</p>
                            <p className="text-neutral-500 text-xs font-mono mt-2 uppercase tracking-wide">{edu.date}</p>
                            
                            {edu.achievements && edu.achievements.length > 0 && (
                                <ul className="mt-4 space-y-1">
                                    {edu.achievements.map((ach, i) => (
                                        <li key={i} className="text-neutral-400 text-xs flex items-start gap-2">
                                            <span className="text-emerald-500/50 mt-1">›</span> {ach}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Certificates Column */}
            <div className="space-y-8">
                <h3 className="text-sm font-tech tracking-[0.2em] text-neutral-500 uppercase flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-500" /> Certificações & Cursos
                </h3>
                <div className="space-y-3">
                    {PORTFOLIO_DATA.certificates.map((cert, idx) => (
                        <div 
                          key={idx} 
                          className="block p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-emerald-500/30 transition-all group cursor-default"
                        >
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <h4 className="text-white text-sm font-bold group-hover:text-emerald-400 transition-colors">{cert.name}</h4>
                                    <p className="text-neutral-500 text-xs mt-1">{cert.issuer}</p>
                                </div>
                                <span className="text-neutral-600 text-[10px] font-mono whitespace-nowrap bg-black/20 px-2 py-1 rounded">{cert.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Languages Column */}
            <div className="space-y-8">
                <h3 className="text-sm font-tech tracking-[0.2em] text-neutral-500 uppercase flex items-center gap-2">
                    <Globe className="w-4 h-4 text-emerald-500" /> Idiomas
                </h3>
                <div className="space-y-4">
                    {PORTFOLIO_DATA.languages.map((lang, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-neutral-900/30 border border-white/5 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-emerald-900/20 flex items-center justify-center text-emerald-500 font-bold text-xs border border-emerald-500/20">
                                    {lang.name.substring(0, 2).toUpperCase()}
                                </div>
                                <span className="text-white font-medium text-sm">{lang.name}</span>
                            </div>
                            <span className="px-2 py-1 bg-white/5 border border-white/10 text-neutral-400 text-[10px] uppercase tracking-wider rounded">
                                {lang.level}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
