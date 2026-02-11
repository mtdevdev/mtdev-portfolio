
import React, { useEffect, useRef, useState } from 'react';
import { Image, Video, ArrowRight, Plus } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { ProjectModal } from '../projects/ProjectModal';

export const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 reveal ${isVisible ? 'active' : ''}`}>
          <div className="space-y-4">
            <h2 className="text-sm font-tech tracking-[0.3em] text-white/40 uppercase">Portfólio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Projetos Selecionados</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <button key={project.id} onClick={() => setSelectedProject(project)} className={`group text-left w-full border border-basalt bg-neutral-900/30 overflow-hidden hover:-translate-y-2 hover:border-white/20 transition-all duration-700 rounded-3xl reveal ${isVisible ? 'active' : ''}`} style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="aspect-video bg-neutral-800 overflow-hidden relative">
                {project.coverImage && <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.style.display = 'none'; }} />}
                <div className="absolute top-5 right-5 z-10"><span className="px-3 py-1 bg-black/80 font-tech text-[10px] text-white tracking-widest uppercase rounded-full">{project.engine}</span></div>
                
                {/* Overlay e Botão "Ver Detalhes" com transição suavizada */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 bg-black/20 backdrop-blur-[1px]">
                  <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full flex items-center gap-2 border border-white/10 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">Ver Detalhes</span>
                    <Plus className="w-4 h-4 text-white" />
                  </div>
                </div>

              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <div><h4 className="text-2xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">{project.title}</h4><p className="text-xs font-tech text-neutral-500 mt-1 uppercase">{project.date}</p></div>
                  <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-emerald-500 transition-all" />
                </div>
                <p className="text-neutral-400 text-sm line-clamp-2">{project.description}</p>
                <div className="pt-2 flex flex-wrap gap-2">{project.techHighlights.slice(0, 2).map((tech, i) => (<span key={i} className="text-[10px] uppercase tracking-wider text-neutral-500 bg-white/5 px-2 py-1 rounded">{tech}</span>))}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};
