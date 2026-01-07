
import React from 'react';
import { Phone, Mail, MapPin, Send, Zap } from 'lucide-react';
import { View } from '../../types';

interface ContactProps {
  onNavigate?: (view: View) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  return (
       <section id="contact" className="py-12 lg:py-24 px-6 relative overflow-hidden bg-brand-light dark:bg-brand-dark lg:transition-colors lg:duration-500">
         <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="text-center mb-10 lg:mb-20">
                <h2 className="font-sans font-black text-4xl lg:text-7xl text-brand-dark dark:text-white tracking-tighter mb-4">
                    ENTRER EN <br/><span className="gradient-text uppercase italic">CONTACT</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
                <div className="bg-white dark:bg-brand-dark-soft/60 p-6 lg:p-10 rounded-2xl lg:rounded-[3.5rem] flex flex-col items-center text-center shadow-xl">
                    <MapPin size={20} className="text-brand-cyan mb-4 lg:mb-8" />
                    <span className="text-[8px] lg:text-[10px] font-black opacity-30 mb-2">SIÈGE SOCIAL</span>
                    <h3 className="text-lg lg:text-3xl font-black uppercase">MF PROD FRANCE</h3>
                    <p className="text-xs lg:text-lg opacity-60">Valence - Cornas (07)</p>
                </div>

                <a href="tel:0606578951" className="bg-white dark:bg-brand-dark-soft/60 p-6 lg:p-10 rounded-2xl lg:rounded-[3.5rem] flex flex-col items-center text-center shadow-xl group">
                    <Phone size={20} className="text-brand-magenta mb-4 lg:mb-8 group-hover:scale-110 transition-transform" />
                    <span className="text-[8px] lg:text-[10px] font-black opacity-30 mb-2">LIGNE DIRECTE</span>
                    <h3 className="text-xl lg:text-4xl font-black">06 06 57 89 51</h3>
                </a>

                <a href="mailto:mikmarc@hotmail.fr" className="bg-white dark:bg-brand-dark-soft/60 p-6 lg:p-10 rounded-2xl lg:rounded-[3.5rem] flex flex-col items-center text-center shadow-xl group">
                    <Mail size={20} className="text-brand-orange mb-4 lg:mb-8 group-hover:scale-110 transition-transform" />
                    <span className="text-[8px] lg:text-[10px] font-black opacity-30 mb-2">EMAIL PRO</span>
                    <h3 className="text-base lg:text-2xl font-black break-all">mikmarc@hotmail.fr</h3>
                </a>
            </div>
         </div>
       </section>
  );
};

export default Contact;
