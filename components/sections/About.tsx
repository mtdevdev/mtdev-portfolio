
import React, { useEffect, useRef, useState } from 'react';
import { Code2, Layers, Cpu, Terminal, GraduationCap, Award, FileText, Globe, User, Plus } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import SpotlightCard from '../SpotlightCard';

export const About: React.FC = () => {
  const { portfolioData, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Extrai as iniciais para o fallback
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <section id="about" className="py-32 bg-neutral-900/20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* Top Section: Bio & Stack */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className={`md:col-span-7 space-y-8 reveal ${isVisible ? 'active' : ''}`}>
            <h2 className="text-sm font-tech tracking-[0.3em] text-accent-500/80 uppercase flex items-center gap-2"><Terminal className="w-4 h-4" /> {t.aboutTitle}</h2>
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              
              {/* Profile Image System */}
              <div className="shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-neutral-800 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden relative shadow-2xl">
                  {!imgError ? (
                    <img 
                      src={portfolioData.bio.profileImage} 
                      alt={portfolioData.name} 
                      className="absolute inset-0 w-full h-full object-cover" 
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center bg-neutral-900 w-full h-full">
                       <User className="w-10 h-10 text-neutral-600 mb-2" />
                       <span className="font-tech text-xl font-bold text-neutral-500 tracking-widest">
                         {getInitials(portfolioData.name)}
                       </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-2xl md:text-3xl font-medium leading-relaxed text-neutral-200">{portfolioData.bio.intro}</p>
                <div className="h-px w-20 bg-accent-500/30"></div>
                <p className="text-neutral-400 leading-loose text-lg">{portfolioData.bio.description}</p>
                <div className="pt-4">
                  <a href={portfolioData.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 bg-white/5 hover:bg-accent-500/10 hover:border-accent-500/30 text-accent-400 font-tech text-xs tracking-widest uppercase rounded-xl transition-all"><FileText className="w-4 h-4" /> {t.aboutViewResume}</a>
                </div>
              </div>
            </div>
          </div>
          <div className={`md:col-span-5 space-y-8 reveal delay-200 ${isVisible ? 'active' : ''}`}>
            <h2 className="text-sm font-tech tracking-[0.3em] text-white/40 uppercase flex items-center gap-2"><Cpu className="w-4 h-4" /> {t.aboutTechStack}</h2>
            <div className="grid grid-cols-1 gap-4">
              {portfolioData.stack.map((item) => (
                <SpotlightCard key={item.category} className="group p-6 border border-basalt bg-neutral-900/40 flex items-center gap-4 hover:border-accent-500/20 hover:bg-accent-950/5 transition-all duration-300 rounded-2xl">
                  <div className="p-3 bg-white/5 border border-white/10 text-accent-400 rounded-xl relative z-10">{item.icon === 'code' ? <Code2 className="w-5 h-5" /> : <Layers className="w-5 h-5" />}</div>
                  <div className="relative z-10">
                    <h3 className="font-tech text-xs tracking-widest text-white uppercase mb-1">{item.category}</h3>
                    <p className="text-sm text-neutral-400">{item.items}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Education, Certs, Languages */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/5 reveal delay-300 ${isVisible ? 'active' : ''}`}>
            
            {/* Education Column */}
            <div className="space-y-8">
                <h3 className="text-sm font-tech tracking-[0.2em] text-neutral-500 uppercase flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-accent-500" /> {t.aboutEducation}
                </h3>
                <div className="pl-2">
                    {portfolioData.education.map((edu, idx) => (
                        <div key={idx} className="relative pl-6 pb-8 border-l border-white/10 transition-colors group last:pb-0">
                            <div className="absolute -left-[5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-800 border border-white/20 group-hover:border-accent-500 group-hover:bg-accent-500/20 transition-all" />
                            <h4 className="text-white font-bold text-lg">{edu.degree}</h4>
                            <p className="text-accent-400 text-sm mt-1">{edu.school}</p>
                            <p className="text-neutral-500 text-xs font-mono mt-2 uppercase tracking-wide">{edu.date}</p>
                            
                            {edu.achievements && edu.achievements.length > 0 && (
                                <ul className="mt-4 space-y-1">
                                    {edu.achievements.map((ach, i) => (
                                        <li key={i} className="text-neutral-400 text-xs flex items-start gap-2">
                                            <span className="text-accent-500/50 mt-1">›</span> {ach}
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
                    <Award className="w-4 h-4 text-accent-500" /> {t.aboutCertificates}
                </h3>
                <div className="flex flex-col">
                    {portfolioData.certificates.map((cert, idx) => {
                        const isHidden = idx >= 3 && !showAllCertificates;
                        return (
                            <div 
                              key={idx}
                              className="transition-all duration-500 ease-out origin-top"
                              style={{
                                maxHeight: isHidden ? '0px' : '150px',
                                opacity: isHidden ? 0 : 1,
                                transform: isHidden ? 'scaleY(0.8) translateY(-10px)' : 'scaleY(1) translateY(0)',
                                marginBottom: isHidden ? '0px' : '12px',
                                pointerEvents: isHidden ? 'none' : 'auto',
                                overflow: 'hidden',
                                transitionDelay: !isHidden && showAllCertificates && idx >= 3 ? `${(idx - 3) * 80}ms` : '0ms'
                              }}
                            >
                                <SpotlightCard 
                                  className="block p-4 border border-basalt bg-neutral-900/40 hover:border-accent-500/20 hover:bg-accent-950/5 transition-all duration-300 rounded-2xl group cursor-default"
                                >
                                    <div className="flex justify-between items-start gap-4 relative z-10">
                                        <div>
                                            <h4 className="text-white text-sm font-bold group-hover:text-accent-400 transition-colors">{cert.name}</h4>
                                            <p className="text-neutral-500 text-xs mt-1">{cert.issuer}</p>
                                        </div>
                                        <span className="text-neutral-600 text-[10px] font-mono whitespace-nowrap bg-black/20 px-2 py-1 rounded">{cert.date}</span>
                                    </div>
                                </SpotlightCard>
                            </div>
                        );
                    })}
                    
                    {portfolioData.certificates.length > 3 && (
                        <SpotlightCard
                          onClick={() => setShowAllCertificates(!showAllCertificates)}
                          className="p-4 border border-dashed border-white/10 hover:border-accent-500/50 bg-neutral-900/20 hover:bg-accent-950/5 transition-all duration-300 rounded-2xl group flex items-center justify-center gap-2 cursor-pointer relative z-10"
                        >
                            <div className="flex items-center gap-2 relative z-10 text-neutral-400 group-hover:text-white transition-colors">
                                <Plus className={`w-4 h-4 text-accent-400 group-hover:scale-110 transition-all duration-500 ${showAllCertificates ? 'rotate-45 text-neutral-500' : ''}`} />
                                <span className="text-xs font-tech tracking-widest uppercase">
                                    {showAllCertificates ? t.aboutShowLess : t.aboutMoreCertificates(portfolioData.certificates.length - 3)}
                                </span>
                            </div>
                        </SpotlightCard>
                    )}
                </div>
            </div>

            {/* Languages Column */}
            <div className="space-y-8">
                <h3 className="text-sm font-tech tracking-[0.2em] text-neutral-500 uppercase flex items-center gap-2">
                    <Globe className="w-4 h-4 text-accent-500" /> {t.aboutLanguages}
                </h3>
                <div className="space-y-4">
                    {portfolioData.languages.map((lang, idx) => (
                        <SpotlightCard key={idx} className="flex items-center justify-between p-4 bg-neutral-900/30 border border-white/5 rounded-xl">
                            <div className="flex items-center gap-3 relative z-10">
                                <span className="text-white font-medium text-sm">{lang.name}</span>
                            </div>
                            <span className="px-2 py-1 bg-white/5 border border-white/10 text-neutral-400 text-[10px] uppercase tracking-wider rounded relative z-10">
                                {lang.level}
                            </span>
                        </SpotlightCard>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
