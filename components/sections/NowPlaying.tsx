
import React, { useEffect, useState, useRef } from 'react';
import { Button } from '../ui/Button';
import { View } from '../../types';
import { Sparkles, Zap, ArrowRight, Music } from 'lucide-react';

interface NowPlayingProps {
  onNavigate: (view: View) => void;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

const NowPlaying: React.FC<NowPlayingProps> = ({ onNavigate }) => {
  const [mounted, setMounted] = useState(false);
  const playerRef = useRef<any>(null);

  const videoId = "fgPhvsmNK3E";
  const startTime = 62; // 1min 02s
  const endTime = 77;   // 1min 02s + 15s = 1min 17s

  useEffect(() => {
    setMounted(true);

    const initPlayer = () => {
      if (playerRef.current) return;
      
      // On s'assure que l'objet YT est disponible avant d'initialiser
      if (window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player('youtube-player-container', {
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            iv_load_policy: 3,
            disablekb: 1,
            playsinline: 1,
            start: startTime,
            end: endTime,
            showinfo: 0,
            fs: 0,
          },
          events: {
            onReady: (event: any) => {
              event.target.mute(); // Double sécurité pour l'autoplay
              event.target.playVideo();
            },
            onStateChange: (event: any) => {
              // État 0 = YT.PlayerState.ENDED (Atteint la fin définie par 'end')
              if (event.data === 0) {
                event.target.seekTo(startTime);
                event.target.playVideo();
              }
            },
          },
        });
      }
    };

    // Si l'API est déjà prête (chargée dans index.html)
    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      // Sinon on attend le callback global de l'API YouTube
      const originalCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (originalCallback) originalCallback();
        initPlayer();
      };
    }

    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          console.debug("Player already destroyed");
        }
      }
    };
  }, []);

  return (
    <section className="relative py-24 lg:py-32 bg-brand-light dark:bg-brand-dark transition-colors duration-500 overflow-hidden">
      {/* Ornements de fond */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-magenta/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 opacity-50" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Carte Descriptive */}
          <div className="w-full lg:w-2/5 order-1">
            <div className="relative p-10 lg:p-14 bg-white dark:bg-brand-dark-soft border border-black/5 dark:border-white/10 rounded-[3.5rem] shadow-2xl transition-all duration-500 hover:border-brand-magenta/30 group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-orange rounded-t-full"></div>
              
              <div className="mb-10">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-brand-magenta/30 bg-brand-magenta/10 mb-8">
                  <Sparkles size={14} className="text-brand-magenta animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-brand-magenta font-black">Actuellement à l'affiche</span>
                </div>
                
                <h2 className="font-sans font-black text-5xl lg:text-7xl text-brand-dark dark:text-white leading-[0.85] tracking-tighter mb-8 uppercase">
                  SUPER<br/><span className="gradient-text italic">STARS</span>
                </h2>
                
                <p className="text-lg lg:text-xl text-brand-dark/60 dark:text-brand-light/60 font-light leading-relaxed mb-10">
                  Le spectacle événement qui redéfinit les codes de la scène. Une immersion totale rendant hommage aux plus grandes icônes mondiales.
                </p>
                
                <div className="space-y-4 mb-12">
                   <div className="flex items-center gap-4 text-brand-dark/40 dark:text-white/40">
                      <div className="w-8 h-8 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                        <Zap size={16} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest">Performances 100% Live</span>
                   </div>
                   <div className="flex items-center gap-4 text-brand-dark/40 dark:text-white/40">
                      <div className="w-8 h-8 rounded-full bg-brand-magenta/10 flex items-center justify-center text-brand-magenta">
                        <Zap size={16} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest">Scénographie Immersive</span>
                   </div>
                </div>

                <Button 
                  onClick={() => onNavigate(View.SPECTACLES)} 
                  className="w-full justify-between group/btn py-6 shadow-xl"
                >
                  Découvrir le spectacle
                  <ArrowRight size={18} className="transform group-hover/btn:translate-x-2 transition-transform" />
                </Button>
              </div>
              
              <div className="flex items-center justify-between pt-8 border-t border-black/5 dark:border-white/5">
                <span className="text-[9px] uppercase tracking-[0.4em] text-brand-dark/20 dark:text-white/20 font-black">
                  PROD EXCLUSIVE MF PROD
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-magenta/20"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vidéo YouTube Loop */}
          <div className="w-full lg:w-3/5 order-2">
            <div className="relative group rounded-[4rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-[0_40px_100px_rgba(0,0,0,0.3)] aspect-video bg-black transform transition-transform duration-700 hover:scale-[1.02]">
              
              {/* Overlay d'interception des événements souris */}
              <div className="absolute inset-0 z-30 cursor-default"></div>

              {/* Conteneur pour l'IFrame YouTube API */}
              <div className="absolute inset-0 w-full h-full pointer-events-none bg-brand-dark">
                <div id="youtube-player-container" className="w-full h-full scale-[1.05]"></div>
              </div>

              {/* Overlay Glass pour la profondeur */}
              <div className="absolute inset-0 z-10 pointer-events-none border-[1px] border-white/10 rounded-[4rem]"></div>
              
              {/* Badges sur la vidéo */}
              <div className="absolute top-8 left-8 z-20 flex items-center gap-3 px-5 py-2.5 rounded-full backdrop-blur-xl bg-brand-dark/30 border border-white/20">
                <div className="relative flex items-center justify-center">
                   <div className="absolute inset-0 bg-brand-magenta rounded-full animate-ping opacity-75"></div>
                   <div className="relative w-2.5 h-2.5 rounded-full bg-brand-magenta"></div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Extrait SuperStar</span>
              </div>

              <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3 px-5 py-2.5 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Music size={14} className="text-white" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Performance Live</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NowPlaying;
