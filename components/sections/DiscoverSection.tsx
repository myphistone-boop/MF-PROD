
import React from 'react';
import { View } from '../../types';
import { ASSETS } from '../../assets';
import { Mic2, Music, Star, ChevronRight, Zap, Tv, Headphones } from 'lucide-react';

interface DiscoverSectionProps {
    onNavigate: (view: View, context?: any) => void;
}

const DiscoverSection: React.FC<DiscoverSectionProps> = ({ onNavigate }) => {

    const approaches = [
        {
            id: View.PRODUCTION_SPECTACLES,
            icon: <Zap className="w-4 h-4 lg:w-6 lg:h-6" />,
            image: ASSETS.PRESTATIONS.SPECTACLES,
            title: "Spectacles",
            subtitle: "Production",
            accent: "brand-magenta"
        },
        {
            id: View.COACHING_VOCAL,
            icon: <Mic2 className="w-4 h-4 lg:w-6 lg:h-6" />,
            image: ASSETS.PRESTATIONS.COACHING,
            title: "Coaching",
            subtitle: "Voix & Piano",
            accent: "brand-cyan"
        },
        {
            id: View.ATELIER_SPECTACLE,
            icon: <Star className="w-4 h-4 lg:w-6 lg:h-6" />,
            image: ASSETS.PRESTATIONS.ATELIER,
            title: "Atelier",
            subtitle: "Troupe Scénique",
            accent: "brand-orange"
        },
        {
            id: View.ANIMATION_TV,
            icon: <Tv className="w-4 h-4 lg:w-6 lg:h-6" />,
            image: ASSETS.PRESTATIONS.ANIMATION,
            title: "Média TV",
            subtitle: "Festivals",
            accent: "brand-magenta"
        },
        {
            id: View.VOIX_OFF,
            icon: <Headphones className="w-4 h-4 lg:w-6 lg:h-6" />,
            image: ASSETS.PRESTATIONS.VOIX_OFF,
            title: "Voix Off",
            subtitle: "Studio Pro",
            accent: "brand-cyan"
        },
        {
            id: View.COACHING_VOCAL,
            sectionId: 'formations',
            icon: <Music className="w-4 h-4 lg:w-6 lg:h-6" />,
            image: ASSETS.PRESTATIONS.STAGES,
            title: "Stages",
            subtitle: "Perfectionnement",
            accent: "brand-orange"
        }
    ];

    return (
        <section id="prestations" className="w-full py-10 lg:py-16 px-6 lg:px-12 relative dark:bg-brand-dark lg:transition-colors lg:duration-500 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-10 lg:mb-12 lg:opacity-0 lg:translate-y-10 lg:animate-fade-in-up">
                    <h2 className="font-sans font-black text-3xl lg:text-7xl text-brand-dark dark:text-white mb-3 tracking-tighter uppercase leading-none">
                        NOS <span className="gradient-text italic">PRESTATIONS</span>
                    </h2>
                </div>

                {/* Mobile: Grid 3x2 | Tablet/Desktop: 2/3 cols */}
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
                    {approaches.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => onNavigate(item.id, item.sectionId ? { sectionId: item.sectionId } : undefined)}
                            className="group relative h-[120px] sm:h-[280px] lg:h-[340px] cursor-pointer rounded-2xl lg:rounded-[3rem] overflow-hidden hover:shadow-2xl lg:opacity-0 lg:translate-y-20 lg:animate-fade-in-up"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="absolute inset-0">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transform lg:transition-transform lg:duration-700 group-hover:scale-110" loading="eager" />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/20 to-transparent"></div>
                            </div>

                            <div className="relative h-full p-2 lg:p-7 flex flex-col items-center lg:items-start justify-end z-10 text-center lg:text-left">
                                <div className={`w-6 h-6 lg:w-12 lg:h-12 rounded-lg lg:rounded-2xl flex items-center justify-center mb-1 lg:mb-3 bg-${item.accent}/20 backdrop-blur-xl border border-white/10 text-white`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-[9px] lg:text-2xl font-black text-white uppercase tracking-tighter leading-tight">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiscoverSection;
