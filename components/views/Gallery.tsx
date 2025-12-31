
import React, { useEffect, useState } from 'react';
import { ASSETS } from '../../assets';
import { View } from '../../types';
import { Camera, Sparkles, X, ChevronLeft, ChevronRight, Share2, ZoomIn } from 'lucide-react';

interface GalleryProps {
  onNavigate: (view: View) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onNavigate }) => {
  const [mounted, setMounted] = useState(false);
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  const photos = ASSETS.GALLERY;

  const openLightbox = (index: number) => {
    setSelectedImg(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImg(null);
    document.body.style.overflow = 'auto';
  };

  const nextImg = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImg !== null) {
      setSelectedImg((selectedImg + 1) % photos.length);
    }
  };

  const prevImg = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImg !== null) {
      setSelectedImg((selectedImg - 1 + photos.length) % photos.length);
    }
  };

  return (
    <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-magenta/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[1600px] mx-auto">
        <div className={`text-center mb-24 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-8">
            <Camera size={14} className="text-brand-cyan" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan font-black">Instants Capturés</span>
          </div>
          <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl text-brand-dark dark:text-white mb-8 tracking-tighter leading-none uppercase">
            LA <span className="gradient-text italic">GALERIE</span>
          </h1>
          <p className="text-brand-dark/40 dark:text-brand-light/40 text-lg lg:text-2xl font-light max-w-2xl mx-auto">
            Immersion dans les coulisses et les moments forts de nos productions.
          </p>
        </div>

        {/* Masonry Grid Simulation */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
          {photos.map((url, index) => (
            <div 
              key={index}
              onClick={() => openLightbox(index)}
              className={`
                break-inside-avoid relative rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10 group cursor-pointer bg-white dark:bg-brand-dark-soft transition-all duration-700
                ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
              `}
              style={{ transitionDelay: `${(index % 10) * 100}ms` }}
            >
              <img 
                src={url} 
                alt={`Photo MF Prod ${index + 1}`} 
                className="w-full h-auto object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s]"
                loading="lazy"
                onError={(e) => (e.currentTarget.parentElement!.style.display = 'none')}
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-500">
                  <ZoomIn size={32} />
                </div>
              </div>

              <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0">
                 <div className="bg-brand-magenta text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">
                    #{String(index + 1).padStart(2, '0')}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-brand-dark/98 backdrop-blur-2xl flex items-center justify-center p-4 lg:p-12 animate-fade-in-up"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-magenta transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button 
            className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-magenta transition-colors z-20"
            onClick={prevImg}
          >
            <ChevronLeft size={40} />
          </button>

          <button 
            className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-magenta transition-colors z-20"
            onClick={nextImg}
          >
            <ChevronRight size={40} />
          </button>

          <div className="relative max-w-5xl max-h-[85vh] group" onClick={e => e.stopPropagation()}>
            <img 
              src={photos[selectedImg]} 
              className="w-full h-full object-contain rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
              alt="Fullscreen view"
            />
            
            <div className="absolute -bottom-16 left-0 right-0 flex justify-between items-center text-white/40 text-xs font-black uppercase tracking-widest px-4">
               <span>Photo {selectedImg + 1} / {photos.length}</span>
               <div className="flex gap-6">
                 <button className="hover:text-brand-magenta transition-colors flex items-center gap-2"><Share2 size={14} /> Partager</button>
                 <a href={photos[selectedImg]} download className="hover:text-brand-cyan transition-colors">Enregistrer</a>
               </div>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default Gallery;
