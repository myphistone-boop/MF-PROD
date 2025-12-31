
import React, { useEffect, useState } from 'react';
import { View } from '../../types';
import { ASSETS } from '../../assets';
import { Mic2, Music, Star, ChevronRight, Zap, Tv, Headphones } from 'lucide-react';

interface DiscoverSectionProps {
    onNavigate: (view: View) => void;
}

const DiscoverSection: React.FC<DiscoverSectionProps> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const approaches = [
        {
            id: View.PRODUCTION_SPECTACLES,
            icon: <Zap className="w-8 h-8" />,
            image: ASSETS.PRESTATIONS.SPECTACLES,
            title: "Spectacles",
            subtitle: "Création & Production",
            desc: "Direction artistique complète pour vos événements.",
            accent: "brand-magenta"
        },
        {
            id: View.COACHING_VOCAL,
            icon: <Mic2 className="w-8 h-8" />,
            image: ASSETS.PRESTATIONS.COACHING,
            title: "Coaching Vocal",
            subtitle: "Voix & Instruments",
            desc: "Coaching Vocal, Voix et Instruments à Cornas.",
            accent: "brand-cyan"
        },
        {
            id: View.ATELIER_SPECTACLE,
            icon: <Star className="w-8 h-8" />,
            image: ASSETS.PRESTATIONS.ATELIER,
            title: "Atelier Scénique",
            subtitle: "Création de Spectacles",
            desc: "Rejoignez notre troupe pour monter un show pro. Chant, danse et théâtre.",
            accent: "brand-orange"
        },
        {
            id: View.ANIMATION_TV,
            icon: <Tv className="w-8 h-8" />,
            image: ASSETS.PRESTATIONS.ANIMATION,
            title: "Animation TV",
            subtitle: "Médias & Festivals",
            desc: "Maîtrise de l'image et du micro pour vos projets média.",
            accent: "brand-magenta"
        },
        {
            id: View.VOIX_OFF,
            icon: <Headphones className="w-8 h-8" />,
            image: ASSETS.PRESTATIONS.VOIX_OFF,
            title: "Voix Off",
            subtitle: "Signature Vocale",
            desc: "Studio d'enregistrement pour publicités et doublages.",
            accent: "brand-cyan"
        },
        {
            id: View.STAGES_PERFECTIONNEMENT,
            icon: <Music className="w-8 h-8" />,
            image: ASSETS.PRESTATIONS.STAGES,
            title: "Stages Pro",
            subtitle: "Immersion Intensive",
            desc: "Boostez votre niveau en une semaine intensive.",
            accent: "brand-orange"
        }
    ];

    return (
        <section id="prestations" className="w-full py-32 lg:py-64 px-6 lg:px-12 relative dark:bg-brand-dark transition-colors duration-500 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className={`text-center mb-24 lg:mb-40 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="h-px w-12 bg-brand-magenta"></div>
                        <span className="text-brand-magenta uppercase tracking-[0.5em] font-black text-[10px] block">L'EXCELLENCE ARTISTIQUE</span>
                        <div className="h-px w-12 bg-brand-magenta"></div>
                    </div>
                    <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-9xl text-brand-dark dark:text-white mb-6 tracking-tighter uppercase leading-none">
                        NOS <span className="gradient-text italic">PRESTATIONS</span>
                    </h2>
                    <p className="text-brand-dark/30 dark:text-brand-light/30 text-lg lg:text-2xl font-light max-w-2xl mx-auto uppercase tracking-widest">
                        De la scène à l'écran, l'expertise MF PROD.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {approaches.map((item, index) => (
                        <div 
                            key={index}
                            onClick={() => onNavigate(item.id)}
                            className={`
                                group relative h-[550px] lg:h-[700px] cursor-pointer rounded-[4rem] overflow-hidden transition-all duration-700 
                                ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} 
                                hover:shadow-[0_60px_100px_-30px_rgba(0,0,0,0.8)]
                            `}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Background Image with Ken Burns effect on hover */}
                            <div className="absolute inset-0 overflow-hidden">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-[4s] ease-out" 
                                />
                            </div>

                            {/* Multiple Overlays for Depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent group-hover:from-brand-dark/90 transition-all duration-700"></div>
                            <div className={`absolute inset-0 bg-${item.accent}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                            {/* Content */}
                            <div className="relative h-full p-12 lg:p-16 flex flex-col items-start justify-end z-10">
                                <div className={`
                                    w-20 h-20 rounded-3xl flex items-center justify-center mb-10 
                                    bg-white/10 backdrop-blur-2xl border border-white/20 text-white 
                                    group-hover:bg-${item.accent} group-hover:border-${item.accent} group-hover:scale-110 group-hover:rotate-3
                                    transition-all duration-500 shadow-2xl
                                `}>
                                    {item.icon}
                                </div>
                                
                                <h3 className="font-sans font-black text-4xl lg:text-5xl text-white mb-3 leading-tight uppercase tracking-tighter">
                                    {item.title}
                                </h3>
                                
                                <span className={`uppercase tracking-[0.4em] text-[11px] font-black mb-8 block text-white/50 group-hover:text-${item.accent} transition-colors`}>
                                    {item.subtitle}
                                </span>
                                
                                <p className="font-sans text-base text-brand-light/60 leading-relaxed font-light mb-12 max-w-[320px] opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700 delay-100">
                                    {item.desc}
                                </p>
                                
                                <div className={`
                                    w-full flex items-center justify-between text-[11px] font-black uppercase tracking-[0.3em] 
                                    text-brand-cyan group-hover:text-${item.accent} transition-colors pt-6 border-t border-white/10
                                `}>
                                    <span>EN SAVOIR PLUS</span>
                                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-brand-dark transition-all duration-500">
                                        <ChevronRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>

                            {/* Side Accent Line */}
                            <div className={`absolute top-0 right-0 w-1 h-0 group-hover:h-full bg-${item.accent} transition-all duration-1000 delay-300`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiscoverSection;
