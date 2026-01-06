
import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import { View, BookingContext } from '../../../types';
import { ASSETS } from '../../../assets';
import { 
  Star, ArrowLeft, Zap, Sparkles, CheckCircle2, 
  Layout, Palette, Users, Settings, Briefcase, 
  ArrowRight, History, Calendar, MousePointer2
} from 'lucide-react';

interface Props { onNavigate: (view: View, context?: BookingContext) => void; }

const AtelierSpectacle: React.FC<Props> = ({ onNavigate }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); window.scrollTo(0, 0); }, []);

    const SHOW_ASSET_BASE = "https://storage.googleapis.com/novelec_assets/MF%20PROD/SPETACLES/";
    const getShowAsset = (name: string) => `${SHOW_ASSET_BASE}${encodeURIComponent(name)}`;

    const handleContact = (serviceName: string) => {
        onNavigate(View.BOOKING, {
            serviceId: View.ATELIER_SPECTACLE,
            serviceName: serviceName,
            type: 'CONTACT'
        });
    };

    const navigateToShow = (sectionId: string) => {
        onNavigate(View.PRODUCTION_SPECTACLES, { sectionId } as any);
    };

    // --- DATA ---
    const shows2026 = ASSETS.SHOWS_2026; 
    
    const historicalCreations = [
        { title: "GROUPE FEVER", id: "fever", url: getShowAsset("_coaching-vocal-drome-ardeche__Affiche-groupe-fever-1.webp") },
        { title: "SUPER 60 & TOP 90", id: "super60", url: getShowAsset("_spectacles__Affiche_spectacle_super_60_TOP_90_MF_PROD-e1745354500563.webp") },
        { title: "SUPERSTARS", id: "superstars", url: getShowAsset("affiche__superstars-1-768x1086.webp") },
        { title: "LOLA DISCO", id: "lola-disco", url: getShowAsset("_spectacles__Affiche-lola-disco-724x1024.webp") },
        { title: "LE LIVRE BRISÉ DE NOËL", id: "livre-brise", url: getShowAsset("_spectacles__Affiche-livre-brise-de-noel-724x1024.webp") },
        { title: "MAGIC CABARET", id: "magic-cabaret", url: getShowAsset("_creation-spectacle__Affiche-Magic-Cabaret-.webp") },
        { title: "LES SUPERS HEROÏNES", id: "super-heroines", url: getShowAsset("_spectacles__Affiche-les-supers-heroines-et-la-potion-de-noel-1-731x1024.webp") },
        { title: "LE VOLEUR DE NOËL", id: "voleur-noel", url: getShowAsset("_spectacles__Affiche_Le_voleur_de_Noel_MF_PROD-724x1024.webp") }
    ];

    const coDirectedShows = [
        { title: "MUSIQUE JE VOUS AIME 2", url: getShowAsset("_creation-spectacle__Affiche-Musique-je-vous-aime-2-.webp"), sectionId: "musique-aime" },
        { title: "ZAPPING FOLIES", url: getShowAsset("_creation-spectacle__Affiche-Zapping-Folies.webp"), sectionId: "zapping" }
    ];

    return (
        <div className="w-full pt-32 lg:pt-48 pb-24 px-6 lg:px-12 bg-brand-light dark:bg-brand-dark transition-colors duration-500 min-h-screen overflow-x-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10">
                
                {/* BACK BUTTON */}
                <button onClick={() => onNavigate(View.SERVICES)} className="flex items-center gap-3 text-brand-dark/40 dark:text-brand-light/40 hover:text-brand-magenta dark:hover:text-white transition-colors mb-16 uppercase text-xs font-black tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Retour Prestations
                </button>

                {/* --- SECTION 1: CRÉATION SUR MESURE --- */}
                <section className={`mb-20 lg:mb-64 transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 mb-8">
                                <Zap size={14} className="text-brand-orange" />
                                <span className="text-[10px] uppercase tracking-[0.4em] text-brand-orange font-black">Prestation 1</span>
                            </div>
                            
                            <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl text-brand-dark dark:text-white mb-10 tracking-tighter leading-[0.85] uppercase">
                                CRÉATION DE <br/><span className="gradient-text italic">SPECTACLE SUR MESURE</span>
                            </h1>

                            <div className="space-y-8 mb-12">
                                <p className="text-xl lg:text-3xl font-light text-brand-dark/80 dark:text-brand-light/90 leading-relaxed font-serif italic border-l-4 border-brand-orange/30 pl-8">
                                    "MF Prod vous apporte une vision artistique unique à sa création, imaginant l’ensemble de l’expérience, y comprenant la mise en scène, la scénographie, l’éclairage, le son et tout autre élément."
                                </p>
                                
                                {/* MOBILE ONLY IMAGE PLACEMENT */}
                                <div className="lg:hidden my-8">
                                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-xl">
                                        <img 
                                            src="https://storage.googleapis.com/novelec_assets/MF%20PROD/SPETACLES/_creation-spectacle__A46944A0-B734-4A0F-94F9-1DD6CA57F91E-e1704213502250-795x1024.webp" 
                                            className="w-full h-full object-cover" 
                                            alt="Création de Spectacle"
                                        />
                                    </div>
                                </div>

                                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                                    {[
                                        { icon: Layout, title: "Conception Artistique", desc: "Vision distinctive, scénographie, narration et style." },
                                        { icon: Palette, title: "Créativité", desc: "Concepts originaux, scénarios captivants et ambiances uniques." },
                                        { icon: Settings, title: "Technique", desc: "Équipements de pointe (Lumière, Son, Vidéo) pour du sur-mesure." },
                                        { icon: Briefcase, title: "Gestion Pro", desc: "Ressources, budgets et délais maîtrisés de A à Z." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-6 rounded-3xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 group/item hover:border-brand-orange/40 transition-all">
                                            <div className="mt-1"><item.icon size={20} className="text-brand-orange" /></div>
                                            <div>
                                                <h4 className="text-sm font-black uppercase text-brand-dark dark:text-white mb-2">{item.title}</h4>
                                                <p className="text-xs font-light text-brand-dark/50 dark:text-brand-light/50 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 lg:p-12 rounded-[3rem] bg-brand-orange/5 border border-brand-orange/20 mb-12">
                                <p className="text-xl lg:text-2xl font-black text-brand-dark dark:text-white uppercase tracking-tight leading-tight">
                                    Une expertise pour faire de votre projet un spectacle sur mesure <span className="text-brand-orange">clef en main</span>.
                                </p>
                            </div>

                            <Button onClick={() => handleContact("Création de Spectacle sur mesure")} className="w-full lg:w-auto py-3 lg:py-6 px-12 text-lg shadow-[0_20px_40px_rgba(255,138,0,0.2)]">
                                Nous contacter <ArrowRight className="ml-2" />
                            </Button>
                        </div>

                        {/* DESKTOP ONLY IMAGE PLACEMENT */}
                        <div className="hidden lg:block lg:col-span-5">
                            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-2xl group">
                                <img 
                                    src="https://storage.googleapis.com/novelec_assets/MF%20PROD/SPETACLES/_creation-spectacle__A46944A0-B734-4A0F-94F9-1DD6CA57F91E-e1704213502250-795x1024.webp" 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[3s]" 
                                    alt="Création de Spectacle"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* POSTERS PART 1: A VENIR 2026 */}
                    <div className="mb-24">
                        <div className="flex items-center gap-6 mb-12">
                            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-brand-cyan">À VENIR 2026</h3>
                            <div className="h-px flex-1 bg-gradient-to-r from-brand-cyan/30 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
                            {shows2026.map((show, i) => (
                                <div key={i} onClick={() => navigateToShow(show.id)} className="group cursor-pointer">
                                    <div className="relative aspect-[2/3] rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/10 bg-brand-dark-soft shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-cyan-900/20">
                                        <img src={show.url} alt={show.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                                            <ArrowRight size={24} className="text-white" />
                                        </div>
                                        <div className="absolute top-4 right-4"><Sparkles size={16} className="text-brand-cyan animate-pulse" /></div>
                                    </div>
                                    <p className="mt-4 text-[9px] font-black uppercase tracking-widest text-center opacity-40 group-hover:opacity-100 group-hover:text-brand-cyan transition-all">{show.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* POSTERS PART 1: SPECTACLES CRÉÉS */}
                    <div>
                        <div className="flex items-center gap-6 mb-12">
                            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-brand-orange">SPECTACLES CRÉÉS</h3>
                            <div className="h-px flex-1 bg-gradient-to-r from-brand-orange/30 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                            {historicalCreations.map((show, i) => (
                                <div key={i} onClick={() => navigateToShow(show.id)} className="group cursor-pointer">
                                    <div className="relative aspect-[2/3] rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 bg-brand-dark-soft shadow-lg transition-all duration-500 hover:-translate-y-2">
                                        <img src={show.url} alt={show.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                                            <ArrowRight size={20} className="text-white" />
                                        </div>
                                    </div>
                                    <p className="mt-3 text-[8px] font-black uppercase tracking-tighter text-center opacity-30 group-hover:opacity-100 transition-all leading-tight">{show.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION 2: SPECTACLE EXISTANT --- */}
                <section className={`mb-32 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-24">
                        {/* LEFT COLUMN: ALL CONTENT PULLED UP */}
                        <div className="lg:col-span-5 lg:order-2 flex flex-col justify-between self-stretch">
                            <div>
                                <h2 className="font-sans font-black text-5xl md:text-5xl lg:text-7xl text-brand-dark dark:text-white mb-6 tracking-tighter leading-[0.85] uppercase">
                                    SPECTACLE <br/><span className="gradient-text italic text-brand-magenta">EXISTANT</span>
                                </h2>

                                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-magenta/30 bg-brand-magenta/10 mb-8">
                                    <Sparkles size={14} className="text-brand-magenta" />
                                    <span className="text-[10px] uppercase tracking-[0.4em] text-brand-magenta font-black">Prestation 2</span>
                                </div>

                                <div className="space-y-6 mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="h-px w-12 bg-brand-magenta"></div>
                                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-magenta">Notre savoir-faire</h3>
                                    </div>

                                    <div className="p-8 lg:p-10 bg-white/50 dark:bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-magenta/5 rounded-full blur-3xl" />
                                        <p className="text-base lg:text-lg font-light text-brand-dark/70 dark:text-brand-light/70 leading-relaxed mb-6 italic">
                                            "MF Prod vous propose de prendre la direction artistique de votre spectacle à travers l’expertise de notre fondateur, Mikaël FERREIRA."
                                        </p>
                                        <div className="flex items-start gap-4 pt-6 border-t border-black/5 dark:border-white/10">
                                            <CheckCircle2 className="text-brand-magenta shrink-0 mt-0.5" size={16} />
                                            <p className="text-[11px] font-bold text-brand-dark/60 dark:text-brand-light/60 leading-relaxed uppercase tracking-tight">
                                                Préserver l’intégrité de la vision artistique tout en s’adaptant aux contraintes.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* MINI POSTERS INTEGRATED & REDIRECTING */}
                                <div className="mb-10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <History size={14} className="text-brand-magenta" />
                                        <h4 className="text-[9px] font-black uppercase tracking-widest text-brand-magenta">Productions co-dirigées</h4>
                                    </div>
                                    <div className="flex gap-4">
                                        {coDirectedShows.map((show, i) => (
                                            <div 
                                                key={i} 
                                                onClick={() => navigateToShow(show.sectionId)}
                                                className="group relative w-24 lg:w-32 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                                            >
                                                <div className="relative aspect-[2/3] rounded-xl overflow-hidden border border-black/5 dark:border-white/10 shadow-lg bg-brand-dark-soft group-hover:border-brand-magenta transition-colors">
                                                    <img src={show.url} alt={show.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                    <div className="absolute inset-0 bg-brand-magenta/10 opacity-20 group-hover:opacity-0 transition-opacity"></div>
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-dark/40 backdrop-blur-[2px]">
                                                        <ArrowRight size={20} className="text-white" />
                                                    </div>
                                                </div>
                                                <p className="mt-2 text-[7px] font-black uppercase tracking-tighter text-center opacity-40 group-hover:opacity-100 transition-opacity leading-tight">{show.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Button variant="secondary" onClick={() => handleContact("Direction Artistique Spectacle Existant")} className="w-full lg:w-max py-3 lg:py-5 px-12 text-base shadow-xl border-brand-magenta/30">
                                Nous contacter <ArrowRight className="ml-2" size={18} />
                            </Button>
                        </div>

                        {/* RIGHT COLUMN: IMAGE HEIGHT LIMITS THE LEFT CONTENT */}
                        <div className="lg:col-span-7 lg:order-1 self-center">
                            <div className="relative aspect-[16/10] rounded-[3.5rem] overflow-hidden border-4 border-white dark:border-brand-dark-soft shadow-2xl group">
                                <img 
                                    src="https://storage.googleapis.com/novelec_assets/MF%20PROD/SPETACLES/_creation-spectacle__creation-spectacle-1024x768.webp" 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[3s]" 
                                    alt="Expertise Production"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/30 via-transparent to-transparent"></div>
                                <div className="absolute top-8 left-8 p-5 rounded-2xl bg-brand-magenta text-white shadow-2xl scale-75 lg:scale-100">
                                    <History size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA - HIDDEN ON MOBILE */}
                <div className="hidden lg:block p-20 lg:p-32 rounded-[5rem] bg-brand-dark text-white border-2 border-white/10 relative overflow-hidden shadow-2xl text-center group mt-64">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-transparent to-brand-magenta/5 pointer-events-none" />
                    <Star className="mx-auto mb-12 text-brand-orange animate-pulse" size={56} />
                    <h3 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-12 leading-tight">VOTRE VISION <br/><span className="text-brand-magenta italic underline decoration-brand-magenta/30 underline-offset-8">NOTRE RÉALITÉ</span></h3>
                    <p className="text-xl lg:text-2xl font-light text-white/50 max-w-4xl mx-auto mb-16 leading-relaxed">
                        Que vous partiez d'une feuille blanche ou d'un projet existant, MF Prod insuffle l'étincelle qui transformera votre événement en un souvenir impérissable.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        <Button className="py-8 px-20 text-xl shadow-[0_30px_60px_-15px_rgba(255,138,0,0.3)] bg-brand-orange text-brand-dark font-black hover:bg-white transition-all uppercase tracking-widest" onClick={() => handleContact("Demande de Collaboration Globale")}>Lancer votre projet</Button>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />
        </div>
    );
};

export default AtelierSpectacle;
