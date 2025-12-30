
import React from 'react';
import { Phone, Mail, MapPin, Send, Zap } from 'lucide-react';
import { View } from '../../types';

interface ContactProps {
  onNavigate?: (view: View) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  return (
       <section id="contact" className="py-32 lg:py-48 px-6 relative overflow-hidden bg-brand-light dark:bg-brand-dark border-t border-black/5 dark:border-white/10 transition-colors duration-500">
         {/* Background Glows */}
         <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-magenta/30 to-transparent"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-magenta/5 rounded-full blur-[150px] pointer-events-none opacity-50" />
         
         <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="text-center mb-24 lg:mb-32">
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-8">
                    <Zap size={14} className="text-brand-cyan animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan font-black">Direct Production</span>
                </div>
                <h2 className="font-sans font-black text-6xl lg:text-9xl text-brand-dark dark:text-white tracking-tighter leading-none mb-6">
                    ENTRER EN <br/><span className="gradient-text uppercase italic">CONTACT</span>
                </h2>
                <p className="text-brand-dark/40 dark:text-brand-light/40 text-lg lg:text-2xl font-light max-w-2xl mx-auto">
                    Pour vos projets de spectacles, vos besoins en coaching ou toute demande de collaboration artistique.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {/* SIÈGE SOCIAL */}
                <div className="bg-white dark:bg-brand-dark-soft/60 backdrop-blur-3xl border border-black/5 dark:border-white/10 p-12 rounded-[3.5rem] flex flex-col items-center text-center group hover:border-brand-cyan/50 hover:-translate-y-2 transition-all duration-500 shadow-xl dark:shadow-2xl">
                    <div className="w-20 h-20 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-brand-cyan mb-10 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300 shadow-lg">
                        <MapPin size={32} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.5em] text-brand-dark/30 dark:text-brand-light/30 font-black block mb-4">SIÈGE SOCIAL</span>
                    <h3 className="text-3xl lg:text-4xl font-black text-brand-dark dark:text-white font-sans tracking-tight mb-4 uppercase">MF PROD <br/>FRANCE</h3>
                    <p className="text-brand-dark/60 dark:text-brand-light/60 font-light text-xl">Valence - Cornas<br/>Région Auvergne-Rhône-Alpes</p>
                </div>

                {/* TÉLÉPHONE DIRECT */}
                <a 
                    href="tel:0606578951" 
                    className="bg-white dark:bg-brand-dark-soft/60 backdrop-blur-3xl border border-black/5 dark:border-white/10 p-12 rounded-[3.5rem] flex flex-col items-center text-center group hover:border-brand-magenta/50 hover:-translate-y-2 transition-all duration-500 shadow-xl dark:shadow-2xl"
                >
                    <div className="w-20 h-20 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-brand-magenta mb-10 group-hover:bg-brand-magenta group-hover:text-white transition-all duration-300 shadow-lg">
                        <Phone size={32} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.5em] text-brand-dark/30 dark:text-brand-light/30 font-black block mb-4">LIGNE DIRECTE</span>
                    <h3 className="text-4xl lg:text-5xl font-black text-brand-dark dark:text-white font-sans tracking-tight mb-4">06 06 57 89 51</h3>
                    <p className="text-brand-dark/60 dark:text-brand-light/60 font-light text-xl">Mikaël Ferreira <br/>Directeur Artistique</p>
                </a>

                {/* EMAIL */}
                <a 
                    href="mailto:mikmarc@hotmail.fr" 
                    className="bg-white dark:bg-brand-dark-soft/60 backdrop-blur-3xl border border-black/5 dark:border-white/10 p-12 rounded-[3.5rem] flex flex-col items-center text-center group hover:border-brand-orange/50 hover:-translate-y-2 transition-all duration-500 shadow-xl dark:shadow-2xl"
                >
                    <div className="w-20 h-20 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-brand-orange mb-10 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg">
                        <Mail size={32} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.5em] text-brand-dark/30 dark:text-brand-light/30 font-black block mb-4">EMAIL PRO</span>
                    <h3 className="text-2xl lg:text-3xl font-black text-brand-dark dark:text-white font-sans tracking-tight mb-4 break-all">mikmarc@hotmail.fr</h3>
                    <p className="text-brand-dark/60 dark:text-brand-light/60 font-light text-xl">Réponse au plus vite</p>
                </a>
            </div>

            <div className="mt-32 flex flex-col items-center gap-6">
                <div className="flex items-center gap-4 text-brand-cyan/60 text-xs font-black uppercase tracking-[0.4em]">
                    <Send size={16} />
                    <span>Rayonnement national et international</span>
                </div>
                <div className="h-[2px] w-24 bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-orange rounded-full opacity-50"></div>
            </div>
         </div>
       </section>
  );
};

export default Contact;
