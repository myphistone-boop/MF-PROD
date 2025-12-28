
import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { View } from '../../types';
import BookingView from '../views/BookingView';

interface ContactProps {
  onNavigate?: (view: View) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  return (
       <section id="contact" className="py-32 px-6 relative overflow-hidden bg-brand-dark border-t border-white/10">
         <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-magenta/30 to-transparent"></div>
         <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="text-center mb-24">
                <span className="uppercase text-xs tracking-[0.5em] text-brand-cyan font-black block mb-6">VOTRE PROJET AVEC MF PROD</span>
                <h2 className="font-sans font-black text-5xl lg:text-8xl text-white tracking-tighter">ENTRER EN <span className="gradient-text uppercase italic">CONTACT</span></h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
                <div className="flex flex-col h-full">
                    <div className="bg-brand-dark-soft/60 backdrop-blur-3xl border border-white/10 p-12 lg:p-20 rounded-[3rem] h-full flex flex-col justify-between relative overflow-hidden group shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
                        <div>
                            <h3 className="font-sans font-black text-4xl text-white mb-12 tracking-tight">COORDONNÉES</h3>
                            <div className="space-y-12">
                                <div className="flex items-start gap-8 group/item">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan group-hover/item:bg-brand-cyan group-hover/item:text-brand-dark transition-all duration-300 shadow-lg"><MapPin size={24} /></div>
                                    <div><span className="text-[10px] uppercase tracking-[0.3em] text-brand-light/40 font-black block mb-2">SIÈGE SOCIAL</span><p className="text-3xl font-black text-white font-sans tracking-tight">MF PROD FRANCE</p><p className="text-brand-light/60 font-light text-xl">Paris, France</p></div>
                                </div>
                                <div className="flex items-start gap-8 group/item">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-magenta group-hover/item:bg-brand-magenta group-hover/item:text-white transition-all duration-300 shadow-lg"><Phone size={24} /></div>
                                    <div><span className="text-[10px] uppercase tracking-[0.3em] text-brand-light/40 font-black block mb-2">DIRECT</span><p className="text-3xl font-black text-white font-sans tracking-tight">06 06 57 89 51</p><p className="text-brand-light/60 font-light text-xl">Mikael Ferreira</p></div>
                                </div>
                                <div className="flex items-start gap-8 group/item">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover/item:bg-brand-orange group-hover/item:text-white transition-all duration-300 shadow-lg"><Mail size={24} /></div>
                                    <div><span className="text-[10px] uppercase tracking-[0.3em] text-brand-light/40 font-black block mb-2">EMAIL</span><p className="text-3xl font-black text-white font-sans tracking-tight text-break">mikmarc@hotmail.fr</p><p className="text-brand-light/60 font-light text-xl">Réponse sous 48h</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 pt-8 border-t border-white/10 flex items-center gap-4 text-brand-cyan/60 text-xs font-black uppercase tracking-widest">
                            <Send size={14} />
                            <span>Projets artistiques uniquement</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full">
                    <div className="bg-gradient-to-br from-brand-magenta/10 to-brand-dark-soft backdrop-blur-3xl border border-white/20 p-10 rounded-[3rem] h-full relative overflow-hidden flex flex-col shadow-2xl">
                        <div className="relative z-10 w-full h-full flex flex-col">
                            <h3 className="font-sans font-black text-3xl text-white mb-8 text-center tracking-tight">INSCRIPTIONS & CASTING</h3>
                            <div className="flex-grow"><BookingView mode="widget" theme="dark" onNavigate={onNavigate} /></div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
       </section>
  );
};

export default Contact;
