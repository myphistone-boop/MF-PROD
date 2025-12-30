
import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { View, BookingContext } from '../../../types';
import { 
  Mic, ArrowLeft, Headphones, Radio, Volume2, Sparkles, 
  Zap, CheckCircle2, Award, PlayCircle, ExternalLink, 
  MessageSquare, Clock, Star, Film, AudioLines
} from 'lucide-react';

interface Props { onNavigate: (view: View, context?: BookingContext) => void; }

const VoixOff: React.FC<Props> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); window.scrollTo(0, 0); }, []);

    const handleBooking = (subject: string = "Projet Voix Off") => {
        onNavigate(View.BOOKING, {
            serviceId: View.VOIX_OFF,
            serviceName: subject,
            type: 'CONTACT'
        });
    };

    const knowHow = [
        {
            title: "Voix Polyvalente",
            icon: <Mic className="text-brand-magenta" />,
            desc: "Une voix s'adaptant à une gamme de styles, du narratif au publicitaire, du sérieux au ludique en ajustant la bonne tonalité pour faire passer votre message."
        },
        {
            title: "Qualité du son",
            icon: <Radio className="text-brand-cyan" />,
            desc: "Équipement professionnel de studio adapté pour vous offrir un son clair, pur et de haute fidélité (Broadcast ready)."
        },
        {
            title: "Expérience diversifiée",
            icon: <Award className="text-brand-orange" />,
            desc: "Publicités radio, livres audio, vidéos d'entreprise et présentations. Une adaptabilité totale à vos besoins spécifiques."
        },
        {
            title: "Livraison rapide",
            icon: <Zap className="text-brand-magenta" />,
            desc: "Enregistrement de haute qualité livré dans des délais records pour que votre projet puisse avancer sans aucune difficulté."
        },
        {
            title: "Collaboration aisée",
            icon: <MessageSquare className="text-brand-cyan" />,
            desc: "Votre satisfaction est la priorité. Ouvert à la communication et aux retours pour assurer un résultat qui dépasse vos attentes."
        }
    ];

    const references = [
        { name: "France Bleu", detail: "Lancement Foire du Dauphiné - Voix d'annonce", category: "Radio" },
        { name: "Disneyland Paris", detail: "Voix de lancement pour le parc (Dir. Olivier Klementieff)", category: "Parc Attractif" },
        { name: "Folimage", detail: "Doublage Film d'animation 'Mon papi s'est caché' (Anne HUYN)", category: "Cinéma" },
        { name: "Amazon", detail: "Campagne Publicitaire Radio Nationale", category: "Publicité" },
        { name: "Studio Pierre Benite", detail: "Voix d’accompagnement reportage animalier", category: "Documentaire" },
        { name: "Radio BLV", detail: "Chronique cinéma et lancement d'antenne", category: "Radio" },
        { name: "Youtube", detail: "Journal-whills - Narration digitale", category: "Web" }
    ];

    const audioClips = [
        { title: "Annonce promotionnelle I", detail: "Radio du cinéma", type: "Promo" },
        { title: "Annonce promotionnelle II", detail: "Radio du cinéma", type: "Promo" }
    ];

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen">
            <div className="max-w-[1400px] mx-auto">
                <button onClick={() => onNavigate(View.SERVICES)} className="flex items-center gap-3 text-brand-dark/40 dark:text-brand-light/40 hover:text-brand-magenta dark:hover:text-white transition-colors mb-16 uppercase text-xs font-black tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Retour Prestations
                </button>

                {/* HERO SECTION */}
                <div className={`mb-32 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-8">
                        <AudioLines size={14} className="text-brand-cyan" />
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan font-black">Narration & Signature Vocale</span>
                    </div>
                    
                    <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl text-brand-dark dark:text-white mb-12 tracking-tighter leading-[0.85] uppercase">
                        VOIX <br/><span className="gradient-text italic text-brand-cyan">OFF</span>
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-8">
                            <p className="text-2xl lg:text-3xl font-light text-brand-dark/80 dark:text-brand-light/80 leading-relaxed italic font-serif border-l-4 border-brand-cyan/30 pl-8 mb-12">
                                "Donnez vie à votre projet audio ou vidéo avec une voix off professionnelle captivante."
                            </p>
                            <p className="text-lg lg:text-xl text-brand-dark/60 dark:text-brand-light/60 font-light leading-relaxed max-w-4xl">
                                <span className="text-brand-cyan font-black">Mikaël FERREIRA</span> transforme vos idées en émotions sonores. N'hésitez pas à nous contacter pour discuter de votre projet et découvrir comment sa voix peut incarner votre vision !
                            </p>
                            <div className="mt-12">
                                <Button onClick={() => handleBooking()} className="shadow-xl px-16">Démarrer un projet</Button>
                            </div>
                        </div>
                        <div className="lg:col-span-4 relative group">
                            <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden border-2 border-black/5 dark:border-white/10 shadow-2xl relative">
                                <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80" alt="Studio Voix Off" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-cyan/40 to-transparent opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SAVOIR-FAIRE SECTION */}
                <section className="mb-48">
                    <div className="flex items-center gap-4 mb-20">
                        <h3 className="text-xs font-black uppercase tracking-[0.5em] text-brand-cyan">Notre Savoir-Faire</h3>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-brand-cyan/30 to-transparent"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {knowHow.map((item, i) => (
                            <div key={i} className="p-10 rounded-[3rem] bg-white dark:bg-brand-dark-soft border border-black/5 dark:border-white/10 shadow-xl group hover:border-brand-cyan/40 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
                                <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    {React.cloneElement(item.icon as any, { size: 28 })}
                                </div>
                                <h4 className="text-2xl font-black text-brand-dark dark:text-white uppercase tracking-tight mb-4">{item.title}</h4>
                                <p className="text-sm font-light text-brand-dark/50 dark:text-brand-light/50 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* REFERENCES SECTION */}
                <section className="mb-48 p-12 lg:p-24 bg-brand-dark rounded-[5rem] border border-white/10 relative overflow-hidden text-white shadow-2xl">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-magenta/5 rounded-full blur-[150px] pointer-events-none" />
                    
                    <div className="relative z-10">
                        <div className="flex flex-col items-center text-center mb-20">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-magenta mb-4">Ils nous font confiance</span>
                            <h3 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-4">RÉFÉRENCES <br/><span className="text-brand-magenta italic">PRESTIGE</span></h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {references.map((ref, i) => (
                                <div key={i} className="flex items-start gap-6 p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-magenta/40 transition-all group">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-magenta/10 flex items-center justify-center text-brand-magenta group-hover:scale-110 transition-transform">
                                        <Star size={20} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h4 className="text-xl font-black uppercase tracking-tight">{ref.name}</h4>
                                            <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-brand-magenta text-white uppercase tracking-widest">{ref.category}</span>
                                        </div>
                                        <p className="text-sm font-light text-white/50">{ref.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* AUDIO GALLERY */}
                <section className="mb-48">
                    <div className="text-center mb-20">
                        <h3 className="text-4xl lg:text-6xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-4">AUDIO – <span className="gradient-text italic">ANNONCES</span></h3>
                        <p className="text-brand-dark/40 dark:text-brand-light/40 font-black uppercase text-[10px] tracking-[0.4em]">Démo Voix Off par Mikaël Ferreira</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {audioClips.map((clip, i) => (
                            <div key={i} className="group flex flex-col items-center p-12 rounded-[3.5rem] bg-white dark:bg-brand-dark-soft border border-black/5 dark:border-white/10 shadow-xl hover:border-brand-cyan/40 transition-all">
                                <div className="w-20 h-20 rounded-full bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg">
                                    <PlayCircle size={32} />
                                </div>
                                <h4 className="text-xl font-black text-brand-dark dark:text-white uppercase tracking-tight mb-2 text-center">{clip.title}</h4>
                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-cyan/60 mb-10">{clip.detail}</span>
                                <Button variant="secondary" className="w-full text-[10px] group-hover:bg-brand-cyan group-hover:text-white transition-colors">
                                    Lire l'extrait <ExternalLink size={12} className="ml-2" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FINAL CTA */}
                <div className="p-16 lg:p-24 rounded-[4rem] bg-brand-magenta text-white relative overflow-hidden shadow-2xl text-center group">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-[3s]" />
                    
                    <h3 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-10 leading-tight">DONNER VIE À <br/><span className="italic underline decoration-white/30 underline-offset-8">VOTRE PROJET</span></h3>
                    <p className="text-xl font-light text-white/80 max-w-3xl mx-auto mb-16 leading-relaxed">
                        Chaque voix a une histoire. La nôtre est de raconter la vôtre avec la puissance et l'émotion qu'elle mérite.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button className="py-8 px-20 text-xl bg-white text-brand-magenta hover:text-white border-transparent" onClick={() => handleBooking("Demande Devis Voix Off")}>Nous Contacter</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VoixOff;
