
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Mic2, Music, Tv, Sparkles, Check, ChevronDown } from 'lucide-react';
import { View } from '../../types';

interface MetamorphosisProps {
  onNavigate: (view: View) => void;
}

const Metamorphosis: React.FC<MetamorphosisProps> = ({ onNavigate }) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [mobileExpandedId, setMobileExpandedId] = useState<number | null>(null);

  const features = [
    {
        id: 0,
        title: "Coaching Vocal",
        subtitle: "Expertise Scénique",
        description: "Un accompagnement sur mesure pour libérer votre plein potentiel vocal. De la technique respiratoire à l'interprétation émotionnelle, nous travaillons sur la signature unique de votre voix.",
        detail: "Dominez la scène avec une voix assurée, puissante et nuancée.",
        icon: <Mic2 className="w-8 h-8 lg:w-10 lg:h-10" />,
        steps: ["Diagnostic Vocal", "Technique & Respiration", "Interprétation", "Mise en Situation"],
        duration: "1h00",
        science: "Physiologie Vocale",
        color: "brand-cyan"
    },
    {
        id: 1,
        title: "Spectacles Musicaux",
        subtitle: "Production MF Prod",
        description: "Nous créons des univers immersifs où la musique rencontre la narration. MF Prod assure la direction artistique complète, du casting à la mise en scène, pour des productions inoubliables.",
        detail: "Des créations originales qui marquent l'esprit des spectateurs.",
        icon: <Music className="w-8 h-8 lg:w-10 lg:h-10" />,
        steps: ["Concept Créatif", "Direction Musicale", "Scénographie", "Première Scène"],
        duration: "Sur Projet",
        science: "Scénographie",
        color: "brand-magenta"
    },
    {
        id: 2,
        title: "Animation & TV",
        subtitle: "Présence Médiatique",
        description: "Donnez du relief à vos émissions et événements. Mikael Ferreira apporte son expertise de l'image et du micro pour une animation fluide, rythmée et professionnelle devant la caméra.",
        detail: "Une maîtrise totale de l'antenne et du direct.",
        icon: <Tv className="w-8 h-8 lg:w-10 lg:h-10" />,
        steps: ["Écriture Script", "Maîtrise du Direct", "Interactivité", "Bilan Média"],
        duration: "Journalier",
        science: "Communication TV",
        color: "brand-orange"
    }
  ];

  const toggleMobile = (id: number) => {
    setMobileExpandedId(mobileExpandedId === id ? null : id);
  };

  return (
      <section className="py-24 px-6 relative z-10 overflow-hidden bg-brand-dark/50">
        <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16 lg:mb-20">
                <h2 className="font-sans font-black text-4xl lg:text-7xl text-white mb-4 tracking-tighter">L'EXIGENCE DE LA <span className="gradient-text uppercase">CRÉATION</span></h2>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-orange mx-auto rounded-full"></div>
            </div>
            
            <div className="lg:hidden flex flex-col gap-4">
                {features.map((feature, idx) => {
                    const isExpanded = mobileExpandedId === idx;
                    return (
                         <div key={idx} className={`rounded-[2rem] border overflow-hidden transition-all duration-500 ${isExpanded ? 'bg-brand-dark-soft border-brand-magenta shadow-2xl' : 'bg-white/5 border-white/10'}`}>
                            <div onClick={() => toggleMobile(idx)} className="p-6 cursor-pointer flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`scale-75 ${isExpanded ? 'text-brand-magenta' : 'text-white/40'}`}>{feature.icon}</div>
                                    <div>
                                        <h3 className={`font-sans font-black text-lg leading-none ${isExpanded ? 'text-brand-magenta' : 'text-white'}`}>{feature.title}</h3>
                                        <span className="text-[10px] uppercase tracking-widest opacity-60 mt-1 block font-sans font-bold">{feature.subtitle}</span>
                                    </div>
                                </div>
                                <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-brand-magenta' : 'text-white/30'}`}><ChevronDown size={20} /></div>
                            </div>
                            {isExpanded && (
                                <div className="px-6 pb-8 animate-fade-in-up">
                                    <p className="font-sans text-sm text-brand-light/70 leading-relaxed mb-6 font-light border-l-2 border-brand-magenta/40 pl-4">{feature.description}</p>
                                    <div className="bg-brand-dark rounded-2xl p-6 border border-white/10">
                                        <h4 className="font-sans font-black text-white mb-4">LE PROCESSUS</h4>
                                        <div className="space-y-4">
                                            {feature.steps.map((step, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className="w-6 h-6 rounded-full border border-brand-cyan/40 bg-brand-dark flex items-center justify-center text-brand-cyan text-xs font-bold">{i + 1}</div>
                                                    <span className="text-sm text-brand-light/80 font-light">{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <Button variant="outline" onClick={() => onNavigate(View.SERVICES)} className="w-full text-xs py-3">Voir Détails</Button>
                                    </div>
                                </div>
                            )}
                         </div>
                    );
                })}
            </div>

            <div className="hidden lg:flex flex-col lg:flex-row gap-8 items-stretch h-[600px]">
                <div className="lg:w-1/4 flex flex-col gap-4 justify-center">
                    {features.map((feature, idx) => (
                        <div key={idx} onClick={() => setActiveFeature(idx)} className={`p-6 rounded-[2rem] cursor-pointer transition-all duration-500 border relative overflow-hidden group ${activeFeature === idx ? 'bg-white text-brand-dark border-white shadow-2xl scale-110 z-20' : 'bg-white/5 border-white/5 hover:bg-white/10 opacity-50'}`}>
                            <div className="flex items-center gap-6 relative z-10">
                                <div className="transition-transform duration-500 group-hover:scale-110">{feature.icon}</div>
                                <div><h3 className="font-sans font-black text-xl">{feature.title}</h3><span className="text-[10px] uppercase tracking-widest opacity-60 block font-bold">{feature.subtitle}</span></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="lg:w-3/4 relative">
                    <div key={activeFeature} className="animate-fade-in-up w-full h-full bg-brand-dark-soft/80 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-12 relative overflow-hidden shadow-2xl group">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-magenta/5 rounded-full blur-[120px] pointer-events-none" />
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 bg-white/5 rounded-2xl text-brand-cyan border border-white/10">{features[activeFeature].icon}</div>
                                        <div className="text-brand-cyan uppercase tracking-[0.4em] text-xs font-black">Studio Expertise</div>
                                    </div>
                                    <h3 className="font-sans font-black text-6xl text-white mb-8 leading-[0.9] tracking-tighter">{features[activeFeature].title}</h3>
                                    <p className="font-sans text-xl text-brand-light/70 leading-relaxed mb-10 font-light border-l-4 border-brand-magenta/50 pl-8">{features[activeFeature].description}</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                                            <div className="text-[10px] uppercase font-black text-brand-orange mb-2">Domaine</div>
                                            <span className="text-white text-lg font-medium">{features[activeFeature].science}</span>
                                        </div>
                                        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                                            <div className="text-[10px] uppercase font-black text-brand-cyan mb-2">Disponibilité</div>
                                            <span className="text-white text-lg font-medium">{features[activeFeature].duration}</span>
                                        </div>
                                    </div>
                                </div>
                                <Button className="w-max" onClick={() => onNavigate(View.SERVICES)}>Explorer les réalisations</Button>
                            </div>
                            <div className="bg-brand-dark rounded-[2.5rem] p-10 border border-white/10 flex flex-col justify-center shadow-inner">
                                <h4 className="font-sans font-black text-2xl text-white mb-10 tracking-tight">LA MÉTHODE MF PROD</h4>
                                <div className="space-y-8">
                                    {features[activeFeature].steps.map((step, i) => (
                                        <div key={i} className="flex items-center gap-6 group/step">
                                            <div className="w-12 h-12 rounded-2xl border-2 border-brand-magenta/30 bg-brand-dark flex items-center justify-center text-brand-magenta text-xl font-black shadow-lg group-hover/step:scale-110 transition-transform">{i + 1}</div>
                                            <div className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/5 group-hover/step:border-brand-magenta/30 transition-colors"><span className="text-lg text-brand-light/90 font-light">{step}</span></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
  );
};

export default Metamorphosis;
