
import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { View, BookingContext } from '../../../types';
import { 
  Mic2, Check, ArrowLeft, Clock, MapPin, Music, Star, 
  Users, Compass, Phone, Mail, Sparkles, ChevronRight, 
  User, Guitar, LayoutPanelLeft, PlayCircle, Info, Calendar,
  Zap
} from 'lucide-react';

interface Props { onNavigate: (view: View, context?: BookingContext) => void; }

const CoachingVocal: React.FC<Props> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); window.scrollTo(0, 0); }, []);

    const handleBooking = (serviceName: string, price?: string, type: 'APPOINTMENT' | 'RESERVATION' | 'CONTACT' = 'RESERVATION') => {
        onNavigate(View.BOOKING, {
            serviceId: View.COACHING_VOCAL,
            serviceName: serviceName,
            type: type,
            price: price
        });
    };

    const InfoBadge = ({ icon: Icon, label, value, colorClass = "text-brand-cyan" }: any) => (
        <div className="flex items-center gap-4 p-5 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
            <div className={`p-3 rounded-2xl bg-white dark:bg-brand-dark shadow-sm ${colorClass}`}>
                <Icon size={20} />
            </div>
            <div>
                <span className="block text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">{label}</span>
                <span className="text-sm font-bold text-brand-dark dark:text-white uppercase leading-none">{value}</span>
            </div>
        </div>
    );

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen">
            <div className="max-w-[1400px] mx-auto">
                <button onClick={() => onNavigate(View.SERVICES)} className="flex items-center gap-3 text-brand-dark/40 dark:text-brand-light/40 hover:text-brand-magenta dark:hover:text-white transition-colors mb-16 uppercase text-xs font-black tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Retour Prestations
                </button>

                {/* HERO SECTION */}
                <div className={`mb-32 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-8">
                        <Sparkles size={14} className="text-brand-cyan" />
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan font-black">Inscriptions 2025 / 2026</span>
                    </div>
                    <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl text-brand-dark dark:text-white mb-12 tracking-tighter leading-[0.85] uppercase">
                        COACHING VOCAL <br/><span className="gradient-text italic">VOIX & INSTRUMENTS</span>
                    </h1>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-10">
                            <p className="text-2xl lg:text-3xl font-light text-brand-dark/80 dark:text-brand-light/80 leading-tight">
                                Que vous soyez débutant ou que vous souhaitiez perfectionner vos compétences vocales, nous avons le cours adapté à vos objectifs.
                            </p>
                            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-black/5 dark:border-white/10 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-brand-magenta" />
                                <p className="text-xl text-brand-dark/60 dark:text-brand-light/70 font-serif italic leading-relaxed">
                                    "La magie de la musique vous attend, il est temps de la libérer. Notre volonté est de vous aider à découvrir le potentiel caché de votre voix."
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-6">
                                <Button onClick={() => document.getElementById('disciplines')?.scrollIntoView({behavior:'smooth'})}>Explorer les cours</Button>
                                <Button variant="outline" onClick={() => handleBooking("Inscription Saison 25/26")}>S’inscrire – Année 2025 / 2026</Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square rounded-[3rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Chant" />
                            </div>
                            <div className="aspect-square rounded-[3rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl mt-12">
                                <img src="https://images.unsplash.com/photo-1520529688554-539066601f0a?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Piano" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* DISCIPLINE MENU SECTION */}
                <div id="disciplines" className="mb-40 scroll-mt-32">
                    <div className="text-center mb-16">
                        <h3 className="text-xs font-black tracking-[0.5em] text-brand-magenta uppercase mb-4">NOS DISCIPLINES</h3>
                        <div className="w-20 h-1 bg-brand-magenta mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                        {[
                            { name: "Particuliers", target: "particuliers", icon: <User /> },
                            { name: "Collectifs", target: "collectifs", icon: <Users /> },
                            { name: "Chorale", target: "chorale", icon: <Mic2 /> },
                            { name: "Création de Spectacles", target: "atelier", icon: <Star /> },
                            { name: "Danse", target: "danse", icon: <LayoutPanelLeft /> },
                            { name: "Instrument", target: "instrument", icon: <Guitar /> },
                            { name: "Stages", target: "stages", icon: <Zap className="w-4 h-4" /> }
                        ].map((d, i) => (
                            <button 
                                key={i}
                                onClick={() => document.getElementById(d.target)?.scrollIntoView({ behavior: 'smooth' })}
                                className="group p-6 rounded-[2.5rem] bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-brand-magenta transition-all duration-500 text-center flex flex-col items-center gap-4 hover:-translate-y-2"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-brand-magenta/10 text-brand-magenta flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {d.icon}
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark dark:text-white leading-tight">{d.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* 1. COURS PARTICULIERS */}
                <section id="particuliers" className="mb-48 scroll-mt-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-5">
                            <span className="text-brand-cyan font-black text-[10px] tracking-[0.5em] uppercase block mb-6">ACCOMPAGNEMENT ÉLITE</span>
                            <h3 className="text-6xl lg:text-7xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-10 leading-[0.85]">COURS <br/><span className="text-brand-cyan">PARTICULIERS</span></h3>
                            <p className="text-xl font-light text-brand-dark/70 dark:text-brand-light/70 mb-10 leading-relaxed">
                                Un accompagnement sur mesure, adapté à vos objectifs et à votre rythme, avec une attention entièrement personnalisée. Pour tous niveaux.
                            </p>
                            <div className="bg-brand-cyan/10 border border-brand-cyan/30 p-6 rounded-3xl mb-8 flex items-center gap-4">
                                <Info className="text-brand-cyan" size={24} />
                                <span className="text-sm font-black uppercase tracking-widest text-brand-cyan">Tous les tarifs mentionnés sont ANNUELS</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <InfoBadge icon={User} label="Professeur" value="Mikaël Ferreira" colorClass="text-brand-cyan" />
                                <InfoBadge icon={Clock} label="Format Mensuel" value="2H à 4H" colorClass="text-brand-cyan" />
                            </div>
                        </div>
                        <div className="lg:col-span-7 flex flex-col gap-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { qty: "2H / mois", price: "570 €" },
                                    { qty: "3H / mois", price: "850 €" },
                                    { qty: "4H / mois", price: "960 €" }
                                ].map((t, i) => (
                                    <div key={i} className="group p-10 rounded-[3rem] bg-white dark:bg-brand-dark-soft border border-black/5 dark:border-white/10 hover:border-brand-cyan hover:-translate-y-2 transition-all duration-500 shadow-xl text-center">
                                        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-magenta mb-4 block underline decoration-brand-magenta/30 underline-offset-4">TARIF ANNUEL</span>
                                        <div className="text-4xl font-black text-brand-dark dark:text-white mb-2 tracking-tighter">{t.price}</div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-cyan block mb-8">{t.qty}</span>
                                        <Button variant="outline" className="w-full text-[10px]" onClick={() => handleBooking(`Cours Particuliers ${t.qty}`, t.price, 'APPOINTMENT')}>S'inscrire</Button>
                                    </div>
                                ))}
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-brand-cyan/5 border border-brand-cyan/20 flex flex-wrap gap-8 justify-center">
                                {["Travail individualisé", "Technique vocale", "Interprétation", "Confiance en soi"].map((tag, i) => (
                                    <div key={i} className="flex items-center gap-3"><Check className="text-brand-cyan" size={14} /><span className="text-[10px] font-black uppercase tracking-widest">{tag}</span></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2 & 3. COLLECTIFS & CHORALE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-48">
                    {/* COLLECTIFS */}
                    <section id="collectifs" className="bg-white dark:bg-brand-dark-soft rounded-[4rem] p-12 lg:p-20 border-2 border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden group scroll-mt-32">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-magenta/5 rounded-full blur-[100px] pointer-events-none" />
                        <span className="text-brand-magenta font-black text-[10px] tracking-[0.5em] uppercase block mb-8">PARTAGE & ÉNERGIE</span>
                        <h3 className="text-5xl lg:text-7xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-10 leading-[0.85]">COURS <br/><span className="text-brand-magenta">COLLECTIFS</span></h3>
                        <p className="text-xl font-light text-brand-dark/60 dark:text-brand-light/60 mb-12">Chanter en groupe, partager l’énergie collective et progresser ensemble dans une ambiance conviviale.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                            <InfoBadge icon={Clock} label="Quand" value="Mar & Mer (1H / Hebdo)" colorClass="text-brand-magenta" />
                            <InfoBadge icon={MapPin} label="Lieu" value="Cornas - L'Atelier" colorClass="text-brand-magenta" />
                        </div>

                        <div className="flex items-center justify-between pt-12 border-t border-black/5 dark:border-white/10">
                            <div><span className="block text-[10px] font-black opacity-30 uppercase tracking-[0.4em] mb-2">TARIF ANNUEL</span><span className="text-5xl font-black text-brand-dark dark:text-white tracking-tighter">310 €</span></div>
                            <Button onClick={() => handleBooking("Cours Collectifs", "310 €")}>Rejoindre</Button>
                        </div>
                    </section>

                    {/* CHORALE */}
                    <section id="chorale" className="bg-brand-dark text-white rounded-[4rem] p-12 lg:p-20 border-2 border-white/5 shadow-2xl relative overflow-hidden group scroll-mt-32">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />
                        <span className="text-brand-cyan font-black text-[10px] tracking-[0.5em] uppercase block mb-8">PUISSANCE COLLECTIVE</span>
                        <h3 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-10 leading-[0.85]">LA <br/><span className="text-brand-cyan">CHORALE</span></h3>
                        <p className="text-xl font-light text-white/60 mb-12">Vivez la puissance de la voix collective au sein d'un groupe dynamique et passionné.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                            <InfoBadge icon={Clock} label="Quand" value="Mercredi 20H30 (1H30)" colorClass="text-brand-cyan" />
                            <InfoBadge icon={MapPin} label="Lieu" value="Cornas - L'Atelier" colorClass="text-brand-cyan" />
                        </div>

                        <div className="flex items-center justify-between pt-12 border-t border-white/10">
                            <div><span className="block text-[10px] font-black opacity-30 uppercase tracking-[0.4em] mb-2">TARIF ANNUEL</span><span className="text-5xl font-black text-brand-cyan tracking-tighter">280 €</span></div>
                            <Button onClick={() => handleBooking("Chorale", "280 €")}>S'inscrire</Button>
                        </div>
                    </section>
                </div>

                {/* 4. CREATION DE SPECTACLES */}
                <section id="atelier" className="mb-48 scroll-mt-32">
                    <div className="bg-white dark:bg-brand-dark-soft rounded-[5rem] p-12 lg:p-24 border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden transition-colors duration-500">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-magenta/5 rounded-full blur-[150px] pointer-events-none" />
                        
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
                            <div className="lg:col-span-7">
                                <span className="text-brand-magenta font-black text-[10px] tracking-[0.5em] uppercase block mb-8">CRÉATION SUR MESURE</span>
                                <h3 className="text-6xl lg:text-8xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-10 leading-none">CRÉATION DE <br/><span className="gradient-text italic">SPECTACLES</span></h3>
                                <p className="text-2xl font-light text-brand-dark/70 dark:text-brand-light/70 mb-12 leading-relaxed">
                                    Participez à une création de spectacle sur mesure mêlant chant, danse et jeu scénique, présentée en conditions professionnelles.
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="p-10 rounded-[3rem] bg-brand-light dark:bg-brand-dark shadow-inner border border-black/5 dark:border-white/10">
                                        <h4 className="text-xl font-black uppercase mb-8 text-brand-magenta flex items-center gap-3"><LayoutPanelLeft size={20}/> CRÉATIONS 25/26</h4>
                                        <div className="space-y-6">
                                            {[
                                                { title: "COCO", type: "Adulte" },
                                                { title: "Marie Curie", type: "Adulte" },
                                                { title: "Boogie Wonderland", type: "Adulte" },
                                                { title: "En cours...", type: "Enfant" }
                                            ].map((show, i) => (
                                                <div key={i} className="flex items-center justify-between group">
                                                    <div className="flex items-center gap-4 text-lg font-bold uppercase tracking-tight group-hover:text-brand-magenta transition-colors">
                                                        <div className="w-6 h-6 rounded-lg bg-brand-magenta/10 text-brand-magenta flex items-center justify-center group-hover:scale-110 transition-transform"><Star size={12} /></div>
                                                        {show.title}
                                                    </div>
                                                    <span className="text-[9px] font-black uppercase px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full opacity-40">{show.type}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="text-xl font-black uppercase mb-6 text-brand-cyan">SHOW ANNUEL</h4>
                                        <p className="text-base font-light text-brand-dark/60 dark:text-brand-light/60 leading-relaxed mb-6">
                                            Une création originale avec son, lumières, décors et costumes pro.
                                        </p>
                                        <div className="bg-black/5 dark:bg-white/5 p-6 rounded-3xl border border-black/5 dark:border-white/10">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-orange mb-2">Historique Public</p>
                                            <p className="text-sm font-bold opacity-80">CEP Saint-Péray : 420 spec.</p>
                                            <p className="text-sm font-bold opacity-80">Agora Guilherand : 520 spec.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="lg:col-span-5">
                                <div className="bg-brand-light dark:bg-brand-dark p-12 lg:p-16 rounded-[4rem] border border-black/5 dark:border-white/10 shadow-2xl">
                                    <div className="space-y-12">
                                        <div>
                                            <h5 className="text-brand-magenta font-black text-xs uppercase tracking-[0.3em] mb-6">ADULTES (1H15)</h5>
                                            <div className="space-y-4 text-sm font-bold opacity-80 border-l-2 border-brand-magenta/30 pl-6">
                                                <p>Jeudi : 19H00 / 20H30</p>
                                                <p>Vendredi : 18H30</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="text-brand-cyan font-black text-xs uppercase tracking-[0.3em] mb-6">ENFANTS (1H30)</h5>
                                            <p className="text-sm font-bold opacity-80 border-l-2 border-brand-cyan/30 pl-6">Samedi : 10H30 – 12H00</p>
                                        </div>
                                        <div className="pt-12 border-t border-black/5 dark:border-white/10 flex justify-between items-center">
                                            <div><span className="block text-[10px] font-black opacity-30 uppercase tracking-widest mb-1">ANNUEL</span><span className="text-5xl font-black tracking-tighter">360 €</span></div>
                                            <Button onClick={() => handleBooking("Création de Spectacles", "360 €")}>Inscription</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5 & 6. DANSE & INSTRUMENTS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
                    {/* DANSE */}
                    <section id="danse" className="bg-white dark:bg-brand-dark-soft rounded-[4rem] p-12 lg:p-20 border-2 border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden group scroll-mt-32">
                        <span className="text-brand-cyan font-black text-[10px] tracking-[0.5em] uppercase block mb-8">EXPRESSION CORPORELLE</span>
                        <h3 className="text-5xl lg:text-7xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-10 leading-[0.85]">COURS DE <br/><span className="text-brand-cyan">DANSE</span></h3>
                        <p className="text-xl font-light text-brand-dark/60 dark:text-brand-light/60 mb-12">Un cours dynamique où passion, technique et créativité se rencontrent. Pour tous niveaux.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                            <InfoBadge icon={Clock} label="Quand" value="Mardi 20H00 (1H30)" colorClass="text-brand-cyan" />
                            <InfoBadge icon={User} label="Professeure" value="Alexandra Garcia Alvarez" colorClass="text-brand-cyan" />
                        </div>

                        <div className="flex items-center justify-between pt-12 border-t border-black/5 dark:border-white/10">
                            <div><span className="block text-[10px] font-black opacity-30 uppercase tracking-[0.4em] mb-2">TARIF ANNUEL</span><span className="text-5xl font-black text-brand-dark dark:text-white tracking-tighter">250 €</span></div>
                            <Button onClick={() => handleBooking("Cours de Danse", "250 €")}>Rejoindre</Button>
                        </div>
                    </section>

                    {/* INSTRUMENTS */}
                    <section id="instrument" className="bg-white dark:bg-brand-dark-soft rounded-[4rem] p-12 lg:p-20 border-2 border-brand-orange/20 dark:border-white/10 shadow-2xl relative overflow-hidden group scroll-mt-32">
                        <span className="text-brand-orange font-black text-[10px] tracking-[0.5em] uppercase block mb-8">INITIATION & MAÎTRISE</span>
                        <h3 className="text-5xl lg:text-7xl font-black text-brand-dark dark:text-white uppercase tracking-tighter mb-10 leading-[0.85]">PIANO & <br/><span className="text-brand-orange">GUITARE</span></h3>
                        <p className="text-xl font-light text-brand-dark/60 dark:text-brand-light/60 mb-12">Des cours adaptés à tous les âges pour progresser avec plaisir et confiance.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                            <InfoBadge icon={Clock} label="Quand" value="Lundi (1H / Hebdo)" colorClass="text-brand-orange" />
                            <InfoBadge icon={User} label="Professeur" value="David Souclier" colorClass="text-brand-orange" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12 border-t border-black/5 dark:border-white/10">
                            <a href="tel:0668302177" className="flex items-center justify-center gap-4 py-6 rounded-[2rem] bg-brand-light dark:bg-brand-dark border border-black/10 dark:border-white/10 hover:border-brand-orange text-xs font-black tracking-widest transition-all shadow-lg text-brand-dark dark:text-white uppercase">
                                <Phone size={18} /> 06 68 30 21 77
                            </a>
                            <div className="flex items-center justify-center py-6 px-10 rounded-[2rem] bg-brand-orange text-white text-[10px] font-black uppercase tracking-widest">
                                30 € / HEURE
                            </div>
                        </div>
                    </section>
                </div>

                {/* 7. STAGES / FORMATION */}
                <section id="stages" className="mb-24 scroll-mt-32">
                    <div className="p-16 lg:p-24 rounded-[4rem] bg-brand-dark text-white border-2 border-white/10 relative overflow-hidden shadow-2xl text-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 via-brand-magenta/10 to-brand-orange/10 pointer-events-none" />
                        <span className="text-brand-orange font-black text-[10px] tracking-[0.5em] uppercase block mb-8">IMMERSION</span>
                        <h3 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-10 leading-none">FORMATION & <br/><span className="gradient-text italic">STAGES</span></h3>
                        <p className="text-xl lg:text-2xl font-light text-white/60 max-w-4xl mx-auto mb-16 leading-relaxed">
                            Pour Entreprises ou Particuliers. Des formats intensifs pour booster vos compétences artistiques ou professionnelles en un temps record.
                        </p>
                        <Button className="py-8 px-20 text-xl" onClick={() => onNavigate(View.STAGES_PERFECTIONNEMENT)}>Explorer les Stages</Button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CoachingVocal;
