
import React, { useEffect } from 'react';
import { X, Github, Cpu, Users, Calendar, Gamepad2, FileCode, ImageIcon } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  // Combina a imagem de capa com a galeria de forma segura
  const allGalleryImages = [
    project.coverImage, 
    ...(project.gallery || [])
  ].filter(Boolean) as string[];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-300" onClick={onClose} />
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-[#0f0f11] border border-white/10 rounded-3xl overflow-y-auto flex flex-col animate-[fadeInUp_0.4s_ease-out]">
        
        {/* Header Fixo */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0f0f11]/90 backdrop-blur-md border-b border-white/5">
          <div className="flex items-center gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">{project.title}</h2>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-tech uppercase tracking-widest text-accent-400">{project.engine}</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-neutral-400 hover:text-white"><X className="w-6 h-6" /></button>
        </div>

        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            
            {/* Main Media Display: Video Preview or Cover Image */}
            <div className="aspect-video w-full bg-neutral-800 rounded-2xl border border-white/5 overflow-hidden relative group shadow-2xl">
              {project.videoPreviewUrl ? (
                <video 
                  src={project.videoPreviewUrl} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  controls
                  className="w-full h-full object-cover"
                />
              ) : (
                project.coverImage && <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              )}
              {/* Se não houver vídeo, mantemos o gradiente apenas para imagens estáticas para não escurecer o vídeo */}
              {!project.videoPreviewUrl && (
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11]/40 to-transparent pointer-events-none"></div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-lg font-tech text-white uppercase tracking-widest flex items-center gap-2"><span className="w-1 h-4 bg-accent-500 rounded-full"></span> Sobre o Projeto</h3>
              <p className="text-neutral-300 leading-loose text-base md:text-lg">{project.longDescription || project.description}</p>
            </div>

            {/* Code Snippet (if available) */}
            {project.codeSnippet && (
              <div className="space-y-4">
                <h3 className="text-lg font-tech text-white uppercase tracking-widest flex items-center gap-2"><span className="w-1 h-4 bg-amber-500 rounded-full"></span> Code Spotlight</h3>
                <div className="rounded-xl overflow-hidden border border-white/10 bg-[#1e1e1e] text-sm shadow-lg">
                  <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-white/5">
                    <div className="flex items-center gap-2 text-neutral-400"><FileCode className="w-4 h-4" /><span className="font-mono text-xs">{project.codeSnippet.title}</span></div>
                    <span className="text-[10px] uppercase font-bold text-accent-500">{project.codeSnippet.language}</span>
                  </div>
                  <div className="p-4 overflow-x-auto"><pre className="font-mono text-neutral-300 whitespace-pre"><code>{project.codeSnippet.code}</code></pre></div>
                </div>
              </div>
            )}

            {/* Gallery Section */}
            {allGalleryImages.length > 0 && (
              <div className="space-y-6">
                 <h3 className="text-lg font-tech text-white uppercase tracking-widest flex items-center gap-2"><ImageIcon className="w-4 h-4 text-accent-500" /> Galeria</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {allGalleryImages.map((img, idx) => (
                      <div key={idx} className="aspect-video bg-neutral-900 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors group relative">
                        <img 
                          src={img} 
                          alt={`${project.title} gallery ${idx + 1}`} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                 </div>
              </div>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex flex-col gap-3 p-6 bg-neutral-900/50 rounded-2xl border border-white/5 sticky top-24">
              {project.isAvailable && project.link && (<a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all shadow-lg"><Gamepad2 className="w-4 h-4" /> Ver Página</a>)}
              {project.repoLink && (<a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 border border-white/10 text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-white/5 transition-all"><Github className="w-4 h-4" /> Ver Repositório</a>)}
              
              <div className="mt-6 space-y-6">
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-neutral-500 text-xs font-tech uppercase tracking-widest"><Cpu className="w-4 h-4" /> Tecnologia</div>
                    <div className="flex flex-wrap gap-2">{project.techHighlights.map((tech, idx) => (<span key={idx} className="px-3 py-1.5 bg-accent-950/30 border border-accent-500/20 text-accent-400 text-xs rounded-lg">{tech}</span>))}</div>
                </div>
                <div className="h-px bg-white/5 w-full"></div>
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-neutral-500 text-xs font-tech uppercase tracking-widest"><Users className="w-4 h-4" /> Equipe</div>
                    <p className="text-white font-medium">{project.role}</p>
                    <p className="text-sm text-neutral-500">{project.teamSize}</p>
                </div>
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-neutral-500 text-xs font-tech uppercase tracking-widest"><Calendar className="w-4 h-4" /> Período</div>
                    <p className="text-white font-medium">{project.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
