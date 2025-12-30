
import React, { useEffect, useState } from 'react';
import { View } from '../../types';
import { Sparkles, ChevronRight, Zap, Music, Mic2, Star, Tv, Mic } from 'lucide-react';

interface DiscoverProps {
    onNavigate: (view: View) => void;
}

const Discover: React.FC<DiscoverProps> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        window.scrollTo(0, 0);
    }, []);

    const categories = [
        {
            id: View.PRODUCTION_SPECTACLES,
            icon: <Zap className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
            title: "Spectacles",
            subtitle: "Direction Artistique",
            desc: "Conception, casting et production complète de shows immersifs sur-mesure.",
            color: "brand-magenta"
        },
        {
            id: View.COACHING_VOCAL,
            icon: <Mic2 className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
            title: "Coaching Vocal",
            subtitle: "Voix & Instruments",
            desc: "Cours individuels, collectifs, chorale, danse et instruments à l'Atelier de Cornas.",
            color: "brand-cyan"
        },
        {
            id: View.ATELIER_SPECTACLE,
            icon: <Star className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1514525253361-bee8a4874aad?auto=format&fit=crop&w=1200&q=80",
            title: "Création de Spectacles",
            subtitle: "Atelier Scénique",
            desc: "Rejoignez une troupe et montez sur scène. Chant, danse et jeu théâtral.",
            color: "brand-magenta"
        },
        {
            id: View.ANIMATION_TV,
            icon: <Tv className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1200&q=80",
            title: "Animation Télé",
            subtitle: "Présence Médiatique",
            desc: "Animation d'émissions et d'événements live. Maîtrise de l'image et du micro.",
            color: "brand-orange"
        },
        {
            id: View.VOIX_OFF,
            icon: <Mic className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80",
            title: "Voix Off",
            subtitle: "Studio Enregistrement",
            desc: "Doublage, publicités, documentaires. Une signature vocale unique pour vos projets.",
            color: "brand-magenta"
        },
        {
            id: View.STAGES_PERFECTIONNEMENT,
            icon: <Music className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80",
            title: "Stages Pro",
            subtitle: "Perfectionnement",
            desc: "Immersion intensive d'une semaine pour booster votre niveau artistique ou pro.",
            color: "brand-orange"
        }
    ];

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 min-h-screen bg-brand-light dark:bg-brand-dark transition-colors duration-500 overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className={`text-center mb-24 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md mb-8">
                        <Sparkles size={16} className="text-brand-magenta" />
                        <span className="text-xs uppercase tracking-[0.4em] text-brand-dark dark:text-white font-black">Expertise MF Prod</span>
                    </div>
                    <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl text-brand-dark dark:text-white mb-8 tracking-tighter leading-none">
                        NOS <br/><span className="gradient-text uppercase italic">PRESTATIONS</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {categories.map((item, index) => (
                        <div 
                            key={index} 
                            onClick={() => onNavigate(item.id)}
                            className={`group cursor-pointer relative bg-white dark:bg-brand-dark-soft border-2 border-black/5 dark:border-white/5 rounded-[3.5rem] overflow-hidden transition-all duration-700 hover:border-brand-magenta/50 hover:-translate-y-4 shadow-xl dark:shadow-none hover:shadow-2xl dark:hover:shadow-[0_40px_80px_-20px_rgba(255,0,122,0.2)] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} 
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-brand-dark-soft via-white/20 dark:via-brand-dark-soft/20 to-transparent"></div>
                                <div className="absolute top-8 left-8 w-14 h-14 rounded-2xl bg-white/80 dark:bg-brand-dark/80 backdrop-blur-md border border-black/5 dark:border-white/10 flex items-center justify-center text-brand-dark dark:text-white group-hover:bg-brand-magenta group-hover:text-white group-hover:scale-110 transition-all shadow-xl">
                                    {item.icon}
                                </div>
                            </div>

                            <div className="p-10 pt-8 flex flex-col h-full">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-sans font-black text-2xl text-brand-dark dark:text-white tracking-tight leading-none uppercase">{item.title}</h3>
                                    <div className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-brand-dark/20 dark:text-white/20 group-hover:text-brand-magenta group-hover:border-brand-magenta/40 transition-all">
                                        <ChevronRight size={16} />
                                    </div>
                                </div>
                                <span className="text-brand-magenta uppercase tracking-[0.3em] text-[9px] font-black mb-6 block">{item.subtitle}</span>
                                <p className="font-sans text-sm text-brand-dark/50 dark:text-brand-light/50 leading-relaxed font-light mb-10">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Discover;
