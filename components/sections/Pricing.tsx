
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { ArrowLeft, Sparkles, CheckCircle, Clock, Music, Users, ChevronDown } from 'lucide-react';
import { View } from '../../types';

interface PricingProps {
  onNavigate: (view: View) => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  const [activePrice, setActivePrice] = useState(1);
  const [mobileExpandedId, setMobileExpandedId] = useState<number | null>(null);

  const pricingOptions = [
    {
      id: 0,
      title: "Cours Particulier",
      price: "60€",
      period: "/1 heure",
      desc: "L'excellence vocale.",
      longDesc: "Une séance intensive d'une heure dédiée exclusivement à votre voix. Idéal pour travailler la technique pure, l'interprétation d'un titre ou préparer une audition importante.",
      includes: [
        "Coach vocal dédié",
        "Technique respiratoire",
        "Travail sur micro",
        "Support audio offert"
      ],
      icon: <Clock className="w-6 h-6" />
    },
    {
      id: 1,
      title: "Atelier Collectif",
      price: "250€",
      period: "/Trimestre",
      tag: "Populaire",
      desc: "L'énergie du groupe.",
      longDesc: "Rejoignez un groupe passionné pour des ateliers hebdomadaires. Nous travaillons l'harmonie vocale, la présence scénique et le chant en ensemble.",
      includes: [
        "Séance hebdo (2h)",
        "Harmonie & Choeurs",
        "Mise en scène",
        "Accès au concert live"
      ],
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Pack Instrument",
      price: "180€",
      period: "/Mois",
      desc: "Piano & Guitare.",
      longDesc: "En collaboration avec David Souclier, nous proposons des cours d'instruments pour accompagner votre chant. Apprenez à vous accompagner seul.",
      includes: [
        "Cours instrument (45min)",
        "Théorie musicale",
        "Accompagnement chant",
        "Répertoire personnalisé"
      ],
      icon: <Music className="w-6 h-6" />
    }
  ];

  const toggleMobile = (id: number) => {
      setMobileExpandedId(mobileExpandedId === id ? null : id);
  };

  return (
      <section id="pricing" className="py-24 lg:py-32 px-6 relative bg-brand-dark">
        <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16 lg:mb-24">
                <span className="text-brand-cyan uppercase tracking-[0.5em] text-xs font-black block mb-6">SAISON 2025 / 2026</span>
                <h2 className="font-sans font-black text-4xl lg:text-7xl text-white mb-6 tracking-tighter">COURS & <span className="gradient-text uppercase">ATELIERS</span></h2>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-orange mx-auto rounded-full"></div>
            </div>

            <div className="lg:hidden flex flex-col gap-4">
                {pricingOptions.map((opt) => {
                    const isExpanded = mobileExpandedId === opt.id;
                    return (
                        <div key={opt.id} className={`rounded-[2.5rem] border-2 overflow-hidden transition-all duration-500 ${isExpanded ? 'bg-brand-dark-soft border-brand-cyan shadow-2xl' : 'bg-white/5 border-white/10'}`}>
                            <div onClick={() => toggleMobile(opt.id)} className="p-8 flex items-center justify-between cursor-pointer">
                                <div className="flex items-center gap-6">
                                    <div className={`p-4 rounded-2xl ${isExpanded ? 'bg-brand-cyan text-brand-dark' : 'bg-white/10 text-brand-cyan'}`}>{opt.icon}</div>
                                    <div>
                                        <div className="flex items-center gap-3"><h4 className={`font-sans font-black text-xl ${isExpanded ? 'text-brand-cyan' : 'text-white'}`}>{opt.title}</h4>{opt.tag && !isExpanded && <span className="bg-brand-magenta text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">{opt.tag}</span>}</div>
                                        <p className="text-[10px] uppercase tracking-widest font-black mt-1 text-white/30">{opt.period}</p>
                                    </div>
                                </div>
                                <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-brand-cyan' : 'text-white/30'}`}><ChevronDown /></div>
                            </div>
                            {isExpanded && (
                                <div className="px-8 pb-8 animate-fade-in-up">
                                    <div className="border-t border-white/10 my-6 pt-6 flex justify-between items-center"><div className="text-4xl font-black text-white">{opt.price}</div>{opt.tag && <span className="text-brand-magenta text-xs font-black uppercase tracking-widest">{opt.tag}</span>}</div>
                                    <p className="text-base text-brand-light/70 font-light leading-relaxed mb-8">{opt.longDesc}</p>
                                    <div className="bg-white/5 rounded-[1.5rem] p-6 mb-8">
                                        <ul className="space-y-3">{opt.includes.map((inc, i) => (<li key={i} className="flex items-center gap-4"><CheckCircle size={16} className="text-brand-cyan" /><span className="text-brand-light/80 text-sm">{inc}</span></li>))}</ul>
                                    </div>
                                    <Button className="w-full" onClick={() => onNavigate(View.BOOKING)}>S'inscrire</Button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="hidden lg:grid grid-cols-12 gap-10 items-stretch">
                <div className="col-span-8">
                     <div key={activePrice} className="animate-fade-in-up w-full min-h-[550px] bg-brand-dark-soft border border-white/10 rounded-[3rem] p-12 relative overflow-hidden shadow-2xl flex flex-col justify-between">
                        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-10">
                                <div>
                                    <div className="flex items-center gap-6 mb-4"><h3 className="font-sans font-black text-6xl text-white tracking-tighter">{pricingOptions[activePrice].title}</h3>{pricingOptions[activePrice].tag && <span className="bg-brand-magenta text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em]">{pricingOptions[activePrice].tag}</span>}</div>
                                    <p className="text-brand-cyan/60 text-xl font-sans italic">"{pricingOptions[activePrice].desc}"</p>
                                </div>
                                <div className="text-right bg-brand-dark p-8 rounded-[2rem] border border-white/10 min-w-[200px] shadow-inner"><div className="text-5xl font-black text-white">{pricingOptions[activePrice].price}</div><div className="text-brand-light/20 uppercase tracking-widest text-xs font-black mt-2">{pricingOptions[activePrice].period}</div></div>
                            </div>
                            <div className="grid grid-cols-2 gap-12 flex-grow">
                                <div className="flex flex-col justify-between">
                                    <p className="text-xl text-brand-light/70 font-light leading-relaxed">{pricingOptions[activePrice].longDesc}</p>
                                    <div className="p-6 bg-brand-magenta/5 rounded-2xl border border-brand-magenta/20 mt-auto"><p className="text-base text-brand-magenta font-serif italic">"La musique est la langue des émotions."</p></div>
                                </div>
                                <div className="bg-white/5 rounded-[2.5rem] p-8 border border-white/10 h-full">
                                    <span className="uppercase text-xs tracking-[0.3em] text-brand-cyan font-black mb-6 block">PROGRAMME</span>
                                    <ul className="space-y-5">{pricingOptions[activePrice].includes.map((inc, i) => (<li key={i} className="flex items-center gap-5 group"><div className="w-6 h-6 rounded-lg bg-brand-cyan/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-cyan transition-all"><CheckCircle size={14} className="text-brand-cyan group-hover:text-brand-dark" /></div><span className="text-white/80 text-lg group-hover:text-white transition-colors">{inc}</span></li>))}</ul>
                                </div>
                            </div>
                            <div className="mt-12 flex justify-end"><Button className="w-max" onClick={() => onNavigate(View.BOOKING)}>S'inscrire à la session</Button></div>
                        </div>
                     </div>
                </div>
                <div className="col-span-4 flex flex-col gap-4">
                    {pricingOptions.map((opt) => (
                        <div key={opt.id} onClick={() => setActivePrice(opt.id)} className={`cursor-pointer rounded-[2.5rem] p-8 border-2 transition-all duration-500 flex items-center justify-between group relative overflow-hidden flex-1 ${activePrice === opt.id ? 'bg-white text-brand-dark border-white shadow-2xl -translate-x-4 scale-105 z-20' : 'bg-white/5 border-white/10 hover:bg-white/10 opacity-50'}`}>
                            <div className="relative z-10 flex items-center gap-6 w-full">
                                <div className={`p-4 rounded-2xl flex-shrink-0 ${activePrice === opt.id ? 'bg-brand-dark text-white' : 'bg-white/10 text-brand-cyan'}`}>{opt.icon}</div>
                                <div className="flex-grow"><h4 className="font-sans font-black text-2xl mb-1">{opt.title}</h4><p className="text-[10px] uppercase tracking-widest font-black opacity-40">{opt.period}</p></div>
                                <ArrowLeft className={`w-6 h-6 transition-transform duration-500 ${activePrice === opt.id ? 'translate-x-0' : 'text-transparent translate-x-10'}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
  );
};

export default Pricing;
