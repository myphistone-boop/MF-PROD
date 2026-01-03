
import React from 'react';
import { Quote, Zap, Music, Star, Tv, Headphones, Mic2 } from 'lucide-react';
import { ASSETS } from '../../assets';

const About: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-12 relative dark:bg-brand-dark transition-colors duration-500 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-brand-magenta/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto">
        
        {/* SECTION 1: L'AGENCE MF PROD */}
        <div className="mb-20 lg:mb-32">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-8">
              <Zap size={14} className="text-brand-cyan" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan font-black">L'Esprit MF Prod</span>
            </div>
            <h2 className="font-sans font-black text-5xl lg:text-8xl text-brand-dark dark:text-white mb-10 tracking-tighter leading-none uppercase">
              BIENVENUE DANS <br/><span className="gradient-text italic">NOTRE UNIVERS</span>
            </h2>
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 p-8 lg:p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-brand-cyan via-brand-magenta to-brand-orange"></div>
              <p className="text-xl lg:text-2xl font-light text-brand-dark/80 dark:text-brand-light/90 leading-relaxed italic font-serif">
                "Chez MF Prod, nous sommes plus qu’une entreprise, nous sommes des créateurs de rêves et des maîtres de l’art de divertir. Avec une expérience unique dans le domaine de la création de spectacles, de la voix off, du coaching vocal et de l’animation télévisuelle, nous donnons vie à vos idées avec passion, innovation et excellence."
              </p>
              <p className="mt-10 text-lg lg:text-xl text-brand-dark/60 dark:text-brand-light/60 font-light leading-relaxed max-w-4xl mx-auto">
                Nous croyons que chaque instant est une opportunité pour une expérience inoubliable, que ce soit sur scène, à la télévision ou dans les médias audio. Notre vision est de repousser les limites de la créativité et de donner vie à vos rêves les plus fous.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: LE FONDATEUR - MIKAËL FERREIRA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-5 relative group">
            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-brand-magenta/20 rounded-[4rem] -z-10 transition-transform duration-700 group-hover:-top-5 group-hover:-left-5"></div>
            <div className="relative aspect-[4/5] w-full rounded-[4rem] overflow-hidden shadow-2xl filter contrast-110 transition-all duration-1000 bg-brand-dark">
              <img 
                src={ASSETS.BIO.MIKAEL_PORTRAIT} 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[2s]" 
                alt="Mikaël Ferreira" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <div className="font-sans font-black text-4xl lg:text-5xl tracking-tighter leading-none mb-3 uppercase">MIKAËL <br/>FERREIRA</div>
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-10 bg-brand-magenta"></div>
                  <div className="text-brand-magenta uppercase tracking-[0.4em] text-[10px] font-black">Fondateur MF Prod</div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-brand-magenta/5 border border-brand-magenta/10 rounded-[2.5rem] italic font-serif text-brand-magenta text-xl text-center">
              "Un artiste, porteur de la grâce du talent"
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-12">
              <div>
                <span className="text-brand-cyan uppercase tracking-[0.5em] font-black text-xs block mb-4">PORTRAIT</span>
                <h3 className="text-3xl lg:text-5xl font-black text-brand-dark dark:text-white tracking-tighter uppercase mb-6">
                  Artiste Polyvalent <br/>et <span className="gradient-text italic">Passionné</span>
                </h3>
                <p className="text-lg lg:text-xl text-brand-dark/70 dark:text-brand-light/70 font-light leading-relaxed mb-6">
                  Né à Saint-Péray, Mikaël Ferreira est un créateur dont l'engagement artistique s’exprime à travers une multitude de facettes, mariant technique et émotion.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Musique */}
                <div className="group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-4 group-hover:bg-brand-cyan group-hover:text-white transition-all">
                    <Music size={24} />
                  </div>
                  <h4 className="text-lg font-black text-brand-dark dark:text-white uppercase mb-2 tracking-tight">Artiste Musical Accompli</h4>
                  <p className="text-sm text-brand-dark/50 dark:text-brand-light/50 font-light leading-relaxed">
                    Chanteur, Auteur-Compositeur avec 4 albums et clips. Coach vocal et chef de chœur, il accompagne aujourd'hui les jeunes talents dans leur éclosion.
                  </p>
                </div>

                {/* Direction Artistique */}
                <div className="group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-magenta/10 text-brand-magenta flex items-center justify-center mb-4 group-hover:bg-brand-magenta group-hover:text-white transition-all">
                    <Star size={24} />
                  </div>
                  <h4 className="text-lg font-black text-brand-dark dark:text-white uppercase mb-2 tracking-tight">Directeur Artistique de Renom</h4>
                  <p className="text-sm text-brand-dark/50 dark:text-brand-light/50 font-light leading-relaxed">
                    Créateur de spectacles transcendants, il marie musique et scénographie pour concevoir des expériences immersives qui transportent le public.
                  </p>
                </div>

                {/* Cinéma / TV */}
                <div className="group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all">
                    <Tv size={24} />
                  </div>
                  <h4 className="text-lg font-black text-brand-dark dark:text-white uppercase mb-2 tracking-tight">Animateur Cinématographique</h4>
                  <p className="text-sm text-brand-dark/50 dark:text-brand-light/50 font-light leading-relaxed">
                    Expert cinéphile et présentateur TV, il décrypte les intrigues et dévoile les coulisses du 7ème art avec une perspective unique à l'écran.
                  </p>
                </div>

                {/* Voix Off */}
                <div className="group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-dark dark:bg-white/10 text-brand-dark dark:text-white flex items-center justify-center mb-4 group-hover:bg-brand-magenta group-hover:text-white transition-all">
                    <Headphones size={24} />
                  </div>
                  <h4 className="text-lg font-black text-brand-dark dark:text-white uppercase mb-2 tracking-tight">Narration Sonore - Voix Off</h4>
                  <p className="text-sm text-brand-dark/50 dark:text-brand-light/50 font-light leading-relaxed">
                    Il transforme les mots en émotions pour publicités, documentaires ou radio, adaptant son timbre pour créer la narration parfaite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
