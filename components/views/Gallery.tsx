
import React, { useEffect, useState } from 'react';
import { View } from '../../types';
import { Calendar, Sparkles, X, ChevronLeft, ChevronRight, ZoomIn, Zap, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

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

  const upcomingEvents = [
    { 
        title: "Stage Comédie Musicale", 
        date: "Juillet 2026", 
        img: "https://storage.googleapis.com/novelec_assets/MF PROD/SPETACLES/_spectacles__groupe-fever-mf-prod-avril-2024-4-scaled-e1715108546748-1024x851.webp" 
    },
    { 
        title: "Concert de Printemps", 
        date: "Avril 2026", 
        img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80" 
    },
    { title: "Auditions MF Prod", date: "Mars 2026", img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80" },
    { title: "Soirée Cabaret", date: "Février 2026", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80" },
    { title: "Masterclass Voix", date: "Janvier 2026", img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80" }
  ];

  const historicalEvents = [
    // 2025
    { id: 1, year: 2025, date: "21 – 25 JUILLET 2025", type: "STAGE", title: "Stage Comédie Musicale", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%201_evenements__stage-comedie-musicale-21-au25-juillet-2025-mfprod-724x1024.webp" },
    { id: 2, year: 2025, date: "18 AVRIL 2025", type: "CONCERT", title: "Grand Concert Chorale", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%202_evenements__Affiche-grand-concert-chorale-18-avril-2025-mfprod-724x1024.webp" },
    { id: 3, year: 2025, date: "15 MARS 2025", type: "CONCERT", title: "Concert Marine Laure", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%203_evenements__concert-marine-laure-15-Mars-2025-mfprod-724x1024.webp" },
    { id: 4, year: 2025, date: "15 FÉVRIER 2025", type: "CONCERT", title: "Karaoké St Valentin", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%204_evenements__karaoke-saint-valentin-15-fevrier-mfprod-724x1024.webp" },
    
    // 2024
    { id: 5, year: 2024, date: "23 NOVEMBRE 2024", type: "SOIRÉE", title: "Blind Test Fou", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%205_evenements__soiree-blind-test-fou-mfprod-23-novembre-2024-724x1024.webp" },
    { id: 6, year: 2024, date: "19 OCTOBRE 2024", type: "SOIRÉE", title: "Karaoké Halloween", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%206_evenements__soiree-karaoke-HALLOWEEN-mfprod-19octobre2024--731x1024.webp" },
    { id: 7, year: 2024, date: "22 – 26 JUILLET 2024", type: "STAGE", title: "Stage Comédie Musicale", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%207_evenements__Stage-comedie-musicale-Juillet-2024-724x1024.webp" },
    { id: 8, year: 2024, date: "23 JUIN 2024", type: "CONCERT", title: "Concert Bistingo", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%208_evenements__concert-bistingo-23-JUIN-2024-819x1024.webp" },
    { id: 9, year: 2024, date: "21 JUIN 2024", type: "CONCERT", title: "Portes en Fête", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%209_evenements__affiche-concert-portes-en-fete-21-Juin-2024-731x1024.webp" },
    { id: 10, year: 2024, date: "15 JUIN 2024", type: "CONCERT", title: "Concert Mamao", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%2010_evenements__concert-mamao-15-juin-2024-mf-prod-891x1024.webp" },
    { id: 11, year: 2024, date: "14 JUIN 2024", type: "CONCERT", title: "Chorale Voixsi Voixla", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%2011_evenements__affiche-concert-chorale-voixsivoixla-14-juin-2024-e1717004979884.webp" },
    { id: 12, year: 2024, date: "7 JUIN 2024", type: "SPECTACLE", title: "Starmania", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%2012_evenements__Spectacle-starmania-Juin-2024-MF-Prod-724x1024.webp" },
    { id: 13, year: 2024, date: "31 MAI 2024", type: "CONCERT", title: "Cours Collectif Live", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%2013_evenements__concert-cours-collectif-31-mai-MF-PROD-724x1024.webp" },
    { id: 14, year: 2024, date: "17 MAI 2024", type: "CONCERT", title: "Concert Cours Co", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%2014_evenements__CONCERT-COURS-CO-copie-724x1024.webp" },
    { id: 15, year: 2024, date: "14 / 25 MAI 2024", type: "FESTIVAL", title: "Festival de Cannes", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%2015_evenements__AFFICHE-Festival-cannes-2024-pour-site-MF-Prod-1-e1708089792909-719x1024.webp" },
    { id: 16, year: 2024, date: "14 – 21 AVRIL 2024", type: "CONCERT", title: "Club Med Live", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%2018_evenements__Affiche-Concert-club-med-live-Avril-2024-724x1024.webp" },
    { id: 17, year: 2024, date: "13 AVRIL 2024", type: "CASTING", title: "Audition Superstars", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%2017_evenements__castingspectaclethekingsandthequeensofpopmikaelferreiramfprod-724x1024.webp" },
    { id: 18, year: 2024, date: "29 MARS 2024", type: "CONCERT", title: "Les Halles Valence", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%2016_evenements__concert-les-halles-valence-mikael-ferreira-29-mars-2024.webp" },
    { id: 19, year: 2024, date: "10 FÉVRIER 2024", type: "SOIRÉE", title: "Valentine's Party", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%2019_evenements__Red-Valentines-Day-Party-Invitation-2-732x1024.webp" },
    { id: 20, year: 2024, date: "9 FÉVRIER 2024", type: "CONCERT", title: "Bistingo Superstars", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%2020_evenements__concertBistingoLivesuperstars-9Fevrier2024-1024x1024.webp" },

    // 2023
    { id: 21, year: 2023, date: "17 NOVEMBRE 2023", type: "CONCERT", title: "Concert Mathuzar", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%2021_evenements__affiche-concert-mathuzar-brenda-mika.webp" },
    { id: 22, year: 2023, date: "28 OCTOBRE 2023", type: "CONCERT", title: "Halloween Karaoke", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%2022_evenements__Affiche-Halloween-Karaoke-Costume-Party-28-Octobre-2023-763x1024.webp" },
    { id: 23, year: 2023, date: "5 MARS 2023", type: "CONCERT", title: "Concert Le Sylver", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%2023_evenements__Affiche-Mikael-Concert-le-sylver-Novembre-2022.webp" },
    { id: 24, year: 2023, date: "20 FÉVRIER 2023", type: "CONCERT", title: "Divas & Gentlemen", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%2024_evenements__affiche-divas-et-gentlement-Fevrier-2022.webp" },

    // 2022
    { id: 25, year: 2022, date: "19 FÉVRIER 2022", type: "CONCERT", title: "Concert en Visio", url: "https://storage.googleapis.com/novelec_assets/MF%20PROD/EVE/EVENEMENT%2025_evenements__Affiche-Concert-Mikael-ferreira-20-Fevrier-2021-en-visio-681x1024.webp" },
  ];

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
      setSelectedImg((selectedImg + 1) % historicalEvents.length);
    }
  };

  const prevImg = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImg !== null) {
      setSelectedImg((selectedImg - 1 + historicalEvents.length) % historicalEvents.length);
    }
  };

  const years = [2025, 2024, 2023, 2022];

  return (
    <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-magenta/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[1600px] mx-auto">
        
        {/* --- SECTION 1: ÉVÈNEMENTS À VENIR --- */}
        <div className={`mb-32 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-8">
              <Calendar size={14} className="text-brand-cyan" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan font-black">Timeline 2026</span>
            </div>
            <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl text-brand-dark dark:text-white mb-8 tracking-tighter leading-none uppercase">
                ÉVÈNEMENTS <br/><span className="gradient-text italic">À VENIR</span>
            </h1>
            <p className="text-brand-dark/40 dark:text-brand-light/40 text-lg lg:text-2xl font-black uppercase tracking-widest">
                Découvrir et s'inscrire
            </p>
          </div>

          {/* Grille Mobile: 3 colonnes (ligne 1) puis 2 colonnes (ligne 2) via grid-cols-6 et col-span conditionnel */}
          <div className="grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index} 
                className={`
                  group relative aspect-[3/4] rounded-2xl sm:rounded-[3rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:border-brand-magenta/50
                  ${index < 3 ? 'col-span-2' : 'col-span-3'}
                  sm:col-span-1
                `}
              >
                <img src={event.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt={event.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent flex flex-col justify-end p-4 sm:p-8">
                  <span className="text-[8px] sm:text-[10px] font-black text-brand-cyan uppercase tracking-widest mb-1 sm:mb-2">{event.date}</span>
                  <h3 className="text-xs sm:text-xl font-black text-white uppercase leading-tight mb-3 sm:mb-6 line-clamp-2">{event.title}</h3>
                  <Button variant="primary" className="w-full py-2 sm:py-4 text-[8px] sm:text-[10px] min-h-0" onClick={() => onNavigate(View.BOOKING)}>S'inscrire</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: HISTORIQUE --- */}
        <div className="mt-48">
          <div className="flex items-center gap-6 mb-20 px-4">
            <h2 className="text-xs font-black uppercase tracking-[0.6em] text-brand-magenta whitespace-nowrap">HISTORIQUE DES ÉVÈNEMENTS</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-brand-magenta/30 to-transparent"></div>
          </div>

          {years.map((year) => (
            <div key={year} className="mb-32">
                <div className="flex items-center gap-10 mb-16">
                    <span className="text-8xl lg:text-9xl font-black opacity-40 select-none text-white">{year}</span>
                    <div className="h-px flex-1 bg-white/10"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-16 gap-x-8">
                    {historicalEvents
                        .filter(e => e.year === year)
                        .map((event, index) => (
                            <div 
                                key={event.id}
                                className={`
                                    flex flex-col group
                                    ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                                `}
                                style={{ transitionDelay: `${(index % 6) * 100}ms` }}
                            >
                                <div 
                                    onClick={() => openLightbox(historicalEvents.findIndex(h => h.id === event.id))}
                                    className="relative aspect-[2/3] rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10 cursor-pointer bg-white dark:bg-brand-dark-soft transition-all duration-700 hover:border-brand-magenta/40 hover:-translate-y-2 shadow-xl"
                                >
                                    <img 
                                        src={event.url} 
                                        alt={event.title} 
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s]"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center backdrop-blur-sm p-6 text-center">
                                        <div className="w-14 h-14 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white mb-6 scale-50 group-hover:scale-100 transition-transform duration-500">
                                            <ZoomIn size={28} />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Etiquette Date */}
                                <div className="mt-8 px-2">
                                    <div className="inline-block px-6 py-2 rounded-full bg-brand-magenta/10 border border-brand-magenta/20 text-[11px] font-black text-brand-magenta uppercase tracking-[0.2em] mb-4">
                                        {event.date.split(' 20')[0]}
                                    </div>
                                    <h4 className="text-base font-black text-white uppercase tracking-tighter leading-tight opacity-90 group-hover:text-brand-cyan transition-colors">
                                        {event.title}
                                    </h4>
                                    <span className="text-[10px] font-black uppercase text-brand-dark/40 dark:text-white/40 tracking-[0.3em] mt-2 block">
                                        {event.type}
                                    </span>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox - Fixed Positioning and Scaling */}
      {selectedImg !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-brand-dark/98 backdrop-blur-2xl flex flex-col items-center justify-center p-4 lg:p-10 animate-fade-in-up"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 lg:top-10 lg:right-10 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-magenta transition-all z-[110] shadow-2xl active:scale-90"
            onClick={closeLightbox}
          >
            <X size={28} />
          </button>

          <button 
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-magenta transition-all z-[110] shadow-2xl active:scale-90"
            onClick={prevImg}
          >
            <ChevronLeft size={32} />
          </button>

          <button 
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-magenta transition-all z-[110] shadow-2xl active:scale-90"
            onClick={nextImg}
          >
            <ChevronRight size={32} />
          </button>

          <div 
            className="relative w-full h-full flex flex-col items-center justify-center max-w-[90vw] max-h-[85vh] lg:max-h-[75vh]" 
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-full w-full flex items-center justify-center">
                <img 
                  src={historicalEvents[selectedImg].url} 
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.9)] border border-white/10"
                  alt="Fullscreen view"
                />
            </div>
            
            <div className="w-full max-w-4xl mt-8 lg:mt-12 px-6 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6">
               <div className="flex flex-col items-center lg:items-start gap-2">
                <span className="text-brand-cyan text-sm lg:text-base font-black tracking-[0.3em] uppercase">{historicalEvents[selectedImg].date}</span>
                <span className="text-white text-3xl lg:text-5xl font-black tracking-tighter uppercase text-center lg:text-left leading-none">{historicalEvents[selectedImg].title}</span>
               </div>
               <div className="flex items-center gap-6">
                 <span className="text-brand-dark/40 dark:text-white/40 uppercase tracking-widest text-[10px] font-black">{historicalEvents[selectedImg].type}</span>
                 <span className="bg-brand-magenta/20 text-brand-magenta border border-brand-magenta/30 px-6 py-2 rounded-full text-xs font-black">{selectedImg + 1} / {historicalEvents.length}</span>
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
