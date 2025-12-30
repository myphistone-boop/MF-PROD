
import React, { useEffect, useState } from 'react';
import { View } from '../../types';
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
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
            title: "Spectacles",
            subtitle: "Création & Production",
            desc: "Direction artistique complète pour vos événements."
        },
        {
            id: View.COACHING_VOCAL,
            icon: <Mic2 className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
            title: "Coaching",
            subtitle: "Voix & Instruments",
            desc: "Coaching Vocal, Voix et Instruments à Cornas."
        },
        {
            id: View.ATELIER_SPECTACLE,
            icon: <Star className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1514525253361-bee8a4874aad?auto=format&fit=crop&w=1200&q=80",
            title: "Création de Spectacles",
            subtitle: "Atelier Scénique",
            desc: "Rejoignez notre troupe pour monter un show pro. Chant, danse et théâtre."
        },
        {
            id: View.ANIMATION_TV,
            icon: <Tv className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1200&q=80",
            title: "Animation",
            subtitle: "TV & Événements",
            desc: "Maîtrise de l'image et du micro pour vos projets média."
        },
        {
            id: View.VOIX_OFF,
            icon: <Headphones className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80",
            title: "Voix Off",
            subtitle: "Narration Sonore",
            desc: "Studio d'enregistrement pour publicités et doublages."
        },
        {
            id: View.STAGES_PERFECTIONNEMENT,
            icon: <Music className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80",
            title: "Stages",
            subtitle: "Immersion Totale",
            desc: "Boostez votre niveau en une semaine intensive."
        }
    ];

    return (
        <section id="prestations" className="w-full py-24 lg:py-48 px-6 lg:px-12 relative dark:bg-brand-dark transition-colors duration-500 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className={`text-center mb-16 lg:mb-32 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="text-brand-magenta uppercase tracking-[0.5em] font-black text-xs block mb-8">NOS SERVICES</span>
                    <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl text-brand-dark dark:text-white mb-6 tracking-tighter uppercase">L'ART DE <span className="gradient-text italic">DIVERTIR</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {approaches.map((item, index) => (
                        <div 
                            key={index}
                            onClick={() => onNavigate(item.id)}
                            className={`group relative h-[600px] cursor-pointer rounded-[3.5rem] overflow-hidden transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-[0_40px_80px_-20px_rgba(255,0,122,0.3)] hover:-translate-y-4 shadow-xl dark:shadow-none`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[2s]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent group-hover:via-brand-dark/20 transition-colors duration-500"></div>

                            <div className="relative h-full p-12 flex flex-col items-start justify-end z-10">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-white/10 backdrop-blur-md border border-white/20 text-white group-hover:bg-brand-magenta group-hover:text-white group-hover:border-brand-magenta transition-all duration-500 shadow-xl">
                                    {item.icon}
                                </div>
                                <h3 className="font-sans font-black text-3xl text-white mb-2 leading-tight uppercase tracking-tight">{item.title}</h3>
                                <span className="uppercase tracking-[0.3em] text-[10px] font-black mb-6 block text-brand-cyan group-hover:text-brand-magenta transition-colors">{item.subtitle}</span>
                                <p className="font-sans text-sm text-brand-light/70 leading-relaxed font-light mb-10 max-w-[280px] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    {item.desc}
                                </p>
                                <div className="w-full flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-brand-cyan group-hover:text-brand-magenta transition-colors">
                                    <span>Explorer</span>
                                    <ChevronRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiscoverSection;
