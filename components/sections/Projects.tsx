
import React, { useEffect, useRef, useState } from 'react';
import { Image, Video, ArrowRight, Plus } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { ProjectModal } from '../projects/ProjectModal';

// Sub-componente para gerenciar a lógica individual de cada card (Hover, Video Playback, Transição)
const ProjectCard: React.FC<{ 
  project: Project; 
  index: number; 
  isVisible: boolean; 
  onClick: (project: Project) => void;
}> = ({ project, index, isVisible, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Gerencia o Play/Pause do vídeo baseado no hover para economizar recursos e sincronizar com o fade
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (isHovered) {
      // Reinicia o vídeo e toca
      videoElement.currentTime = 0;
      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Captura erros de autoplay se houver (comum em navegadores se não houver interação prévia, mas muted ajuda)
        });
      }
    } else {
      // Pausa o vídeo quando o mouse sai
      videoElement.pause();
    }
  }, [isHovered]);

  return (
    <button 
      onClick={() => onClick(project)} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group text-left w-full border border-basalt bg-neutral-900/30 overflow-hidden hover:-translate-y-2 hover:border-white/20 transition-all duration-700 rounded-3xl reveal ${isVisible ? 'active' : ''}`} 
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="aspect-video bg-neutral-800 overflow-hidden relative">
        {/* Camada 1: Imagem Estática (Sempre visível ao fundo) */}
        {project.coverImage && (
          <img 
            src={project.coverImage} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700" 
            onError={(e) => { e.currentTarget.style.display = 'none'; }} 
          />
        )}
        
        {/* Camada 2: Vídeo (Fade In/Out via Opacidade) */}
        {project.videoPreviewUrl && (
          <video
            ref={videoRef}
            src={project.videoPreviewUrl}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700 ease-in-out group-hover:scale-105 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        <div className="absolute top-5 right-5 z-20"><span className="px-3 py-1 bg-black/80 font-tech text-[10px] text-white tracking-widest uppercase rounded-full">{project.engine}</span></div>
        
        {/* Camada 3: Overlay de Ação - Movido para o Canto Inferior Esquerdo */}
        <div className="absolute inset-0 flex items-end justify-start p-6 z-30 pointer-events-none">
          {/* Botão com blur e transição suave */}
          <div className={`flex items-center gap-2 px-5 py-2 rounded-xl border border-white/10 shadow-xl
                          bg-neutral-900/80 backdrop-blur-md
                          transition-all duration-500 ease-out transform
                          ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Plus className="w-3 h-3 text-accent-400" />
            <span className="text-white text-[10px] font-bold uppercase tracking-widest">Clique para mais detalhes</span>
          </div>
        </div>

      </div>
      <div className="p-8 space-y-4">
        <div className="flex justify-between items-start">
          <div><h4 className="text-2xl font-bold tracking-tight text-white group-hover:text-accent-400 transition-colors">{project.title}</h4><p className="text-xs font-tech text-neutral-500 mt-1 uppercase">{project.date}</p></div>
          <ArrowRight className={`w-5 h-5 text-neutral-600 transition-all duration-300 ${isHovered ? 'text-accent-500 translate-x-1' : ''}`} />
        </div>
        <p className="text-neutral-400 text-sm line-clamp-2">{project.description}</p>
        <div className="pt-2 flex flex-wrap gap-2">{project.techHighlights.slice(0, 2).map((tech, i) => (<span key={i} className="text-[10px] uppercase tracking-wider text-neutral-500 bg-white/5 px-2 py-1 rounded">{tech}</span>))}</div>
      </div>
    </button>
  );
};

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
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              isVisible={isVisible} 
              onClick={setSelectedProject} 
            />
          ))}
        </div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};
