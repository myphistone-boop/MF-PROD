
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { View } from '../../types';
import { Mic2, Music, Tv, Volume2, Users, Compass, Zap } from 'lucide-react';

interface DiscoverProps {
    onNavigate: (view: View) => void;
}

const Discover: React.FC<DiscoverProps> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setTimeout(() => setMounted(true), 100);
        window.scrollTo(0, 0);
    }, []);

    const approaches = [
        {
            icon: <Mic2 className="w-10 h-10 lg:w-12 lg:h-12" />,
            title: "Coaching Vocal",
            subtitle: "Expertise Technique",
            color: "brand-cyan",
            desc: "Développez votre signature vocale unique avec un accompagnement personnalisé de haut niveau."
        },
        {
            icon: <Music className="w-10 h-10 lg:w-12 lg:h-12" />,
            title: "Création Musicale",
            subtitle: "Direction Artistique",
            color: "brand-magenta",
            desc: "De l'arrangement à la production finale, nous donnons vie à vos compositions musicales."
        },
        {
            icon: <Tv className="w-10 h-10 lg:w-12 lg:h-12" />,
            title: "Animation TV",
            subtitle: "Présentation Médias",
            color: "brand-orange",
            desc: "Une animation professionnelle pour vos contenus audiovisuels, culturels et artistiques."
        },
        {
            icon: <Volume2 className="w-10 h-10 lg:w-12 lg:h-12" />,
            title: "Voix Off Pro",
            subtitle: "Narration Studio",
            color: "brand-cyan",
            desc: "Studio pro pour vos publicités, documentaires et habillages antenne avec Mikael Ferreira."
        },
        {
            icon: <Users className="w-10 h-10 lg:w-12 lg:h-12" />,
            title: "Ateliers Scéniques",
            subtitle: "Travail de Groupe",
            color: "brand-magenta",
            desc: "Maîtrisez l'espace scénique et la présence face au public à travers nos ateliers intensifs."
        },
        {
            icon: <Compass className="w-10 h-10 lg:w-12 lg:h-12" />,
            title: "Conseil Artistique",
            subtitle: "Stratégie de Carrière",
            color: "brand-orange",
            desc: "Orientation et stratégie pour les artistes souhaitant professionnaliser leur projet créatif."
        }
    ];

    return (
        <div className="w-full pt-32 lg:pt-40 pb-24 px-6 lg:px-12 min-h-screen bg-brand-dark">
            <div className="max-w-[1400px] mx-auto">
                <div className={`text-center mb-24 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl text-white mb-8 tracking-tighter leading-none">NOS EXPERTISES <br/><span className="gradient-text uppercase italic">ARTISTIQUES</span></h1>
                    <p className="text-brand-light/60 max-w-4xl mx-auto font-sans text-xl md:text-3xl font-light leading-relaxed">
                        MF Prod déploie un éventail complet de services dédiés à l'excellence artistique et médiatique.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
                    {approaches.map((item, index) => (
                        <div key={index} className={`group relative h-[500px] perspective-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-2xl rounded-[3rem]">
                                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-brand-dark-soft border-2 border-white/5 backdrop-blur-3xl rounded-[3rem] p-12 flex flex-col items-center justify-center text-center overflow-hidden">
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-brand-magenta/10 transition-colors"></div>
                                    <div className="w-28 h-28 rounded-[2rem] bg-brand-dark border-2 border-white/10 flex items-center justify-center text-brand-cyan mb-10 shadow-lg group-hover:scale-110 transition-all duration-500">{item.icon}</div>
                                    <h3 className="font-sans font-black text-3xl md:text-4xl text-white mb-4 tracking-tight">{item.title}</h3>
                                    <span className="text-brand-magenta uppercase tracking-[0.4em] text-[10px] font-black">{item.subtitle}</span>
                                    <div className="mt-10 opacity-30 text-[9px] uppercase tracking-[0.5em] text-white font-black animate-pulse">Explorer</div>
                                </div>
                                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-brand-dark border-4 border-brand-cyan/20 rounded-[3rem] p-12 flex flex-col items-center justify-center text-center">
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-brand-magenta/5 pointer-events-none rounded-[3rem]"></div>
                                    <h3 className="font-sans font-black text-3xl text-brand-cyan mb-8 tracking-tight">{item.title}</h3>
                                    <p className="font-sans text-xl text-brand-light/80 leading-relaxed font-light mb-10">{item.desc}</p>
                                    <Button onClick={() => onNavigate(View.BOOKING)} className="w-full">Prendre RDV</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 lg:mt-32 text-center animate-fade-in-up">
                    <div className="p-16 lg:p-24 rounded-[4rem] bg-brand-dark-soft border-2 border-white/10 backdrop-blur-3xl max-w-5xl mx-auto shadow-2xl relative overflow-hidden group">
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-[100px] group-hover:bg-brand-orange/20 transition-all"></div>
                        <h2 className="font-sans font-black text-4xl md:text-6xl text-white mb-10 tracking-tighter relative z-10 leading-tight">UN PROJET <br/><span className="gradient-text italic">SUR MESURE ?</span></h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                            <Button onClick={() => onNavigate(View.BOOKING)} className="py-6 px-12">Réserver un Appel Conseil</Button>
                            <Button variant="secondary" className="py-6 px-12" onClick={() => window.location.href='mailto:mikmarc@hotmail.fr'}>Nous écrire</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;
