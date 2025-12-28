
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { View } from '../../types';
import { Mic2, Music, Tv, Volume2, Users, Star, X, ChevronRight } from 'lucide-react';

interface DiscoverSectionProps {
    onNavigate: (view: View) => void;
}

const DiscoverSection: React.FC<DiscoverSectionProps> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    const [selectedMobileCard, setSelectedMobileCard] = useState<number | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const approaches = [
        {
            icon: <Mic2 className="w-8 h-8" />,
            title: "Coaching Vocal",
            subtitle: "Chant & Voix",
            color: "brand-cyan",
            desc: "Accompagnement vocal pour amateurs et professionnels : technique, interprétation et confiance scénique."
        },
        {
            icon: <Music className="w-8 h-8" />,
            title: "Spectacles Musicaux",
            subtitle: "Direction Artistique",
            color: "brand-magenta",
            desc: "Conception et direction de spectacles originaux mêlant musique, scénographie et émotion pure."
        },
        {
            icon: <Tv className="w-8 h-8" />,
            title: "Animation TV",
            subtitle: "Présentation & Médias",
            color: "brand-orange",
            desc: "Animation de contenus culturels et artistiques avec une forte dimension narrative."
        },
        {
            icon: <Volume2 className="w-8 h-8" />,
            title: "Voix Off",
            subtitle: "Narration Pro",
            color: "brand-cyan",
            desc: "Voix professionnelle pour publicités, documentaires, radios et projets institutionnels."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Chorale & Ateliers",
            subtitle: "Expression Collective",
            color: "brand-magenta",
            desc: "Ateliers scéniques et chorales pour partager le plaisir de la scène en groupe."
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Événementiel",
            subtitle: "Prestations Sur Mesure",
            color: "brand-orange",
            desc: "Animation et création artistique pour vos événements d'entreprise ou privés."
        }
    ];

    return (
        <section id="prestations" className="w-full py-24 lg:py-32 px-6 lg:px-12 relative bg-brand-dark">
            <div className="max-w-[1400px] mx-auto">
                <div className={`text-center mb-16 lg:mb-24 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="font-sans font-black text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tighter">NOS <span className="gradient-text uppercase">PRESTATIONS</span></h2>
                    <p className="text-brand-light/60 max-w-3xl mx-auto font-sans text-lg md:text-xl font-light leading-relaxed">
                        Expertise artistique pluridisciplinaire pour une présence scénique et médiatique inoubliable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {approaches.map((item, index) => (
                        <div 
                            key={index}
                            className={`group gradient-border h-[450px] transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="w-full h-full bg-brand-dark-soft rounded-[2rem] p-10 flex flex-col items-start justify-end relative overflow-hidden group">
                                <div className="absolute top-10 right-10 text-brand-light/10 group-hover:text-white/20 transition-colors duration-500 scale-[2.5] transform rotate-12">
                                    {item.icon}
                                </div>
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="font-sans font-black text-2xl lg:text-3xl text-white mb-2">{item.title}</h3>
                                <span className={`uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block text-brand-cyan`}>{item.subtitle}</span>
                                <p className="font-sans text-sm text-brand-light/50 leading-relaxed font-light mb-8 group-hover:text-brand-light/80 transition-colors">
                                    {item.desc}
                                </p>
                                <Button variant="secondary" className="w-full !px-4 !py-3 !text-[9px]">En savoir plus</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiscoverSection;
