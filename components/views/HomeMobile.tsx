import React, { useState } from 'react';
import { View } from '../../types';
import { LOGO_URL } from '../../constants';
import { ASSETS } from '../../assets';
import { Zap, Play, Calendar, Star, Mic2, Handshake, Phone, Mail, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface HomeMobileProps {
  onNavigate: (view: View) => void;
}

const HomeMobile: React.FC<HomeMobileProps> = ({ onNavigate }) => {
  const [currentShowIndex, setCurrentShowIndex] = useState(0);
  const shows = ASSETS.SHOWS_2026;

  const scrollToPrestations = () => {
    const element = document.getElementById('prestations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextShow = () => {
    setCurrentShowIndex((prev) => (prev + 1) % shows.length);
  };

  const prevShow = () => {
    setCurrentShowIndex((prev) => (prev - 1 + shows.length) % shows.length);
  };

  return (
    <div className="w-full relative bg-brand-dark">

      {/* HERO - Version mobile ultra-simple */}
      <section className="min-h-[50vh] w-full flex flex-col items-center justify-center px-6 pt-24 pb-12">
        <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-3">
          <Zap size={12} className="text-brand-cyan" />
          <span className="text-[8px] uppercase tracking-[0.3em] text-brand-light font-bold">MF Prod - Creative Studio</span>
        </div>

        <h1 className="mt-4 font-sans font-extrabold text-4xl text-white leading-[0.9] tracking-tighter mb-3 uppercase text-center">
          L'ART DE <br />
          <span className="gradient-text">CRÉER</span>
        </h1>

        <p className="font-sans text-brand-light/70 text-sm leading-relaxed mb-8 max-w-xl font-light text-center">
          De la scène à l'écran, nous donnons vie à vos visions. Spectacles immersifs et coaching vocal d'élite.
        </p>

        <div className="flex flex-col gap-3 w-full">
          <Button onClick={scrollToPrestations} className="py-2 px-6 text-[10px] w-full text-white">
            Explorer
          </Button>
          <Button variant="secondary" onClick={() => onNavigate(View.SPECTACLES)} className="py-2 px-6 bg-brand-dark-soft border-white/10 text-[10px] w-full text-white">
            Découvrir
          </Button>
        </div>
      </section>

      {/* NOW PLAYING - Version mobile simple */}
      <section className="relative pt-4 pb-12 bg-brand-dark px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand-magenta/30 bg-brand-magenta/10 mb-4">
                <Play size={12} className="text-brand-magenta" />
                <span className="text-[8px] uppercase tracking-[0.3em] text-brand-magenta font-bold">À l'affiche</span>
              </div>

              <h2 className="font-sans font-black text-3xl text-white mb-3 tracking-tighter uppercase leading-none">
                SUPERSTARS
              </h2>

              <p className="text-sm text-brand-light/60 mb-6 leading-relaxed">
                Plongez dans un spectacle explosif qui célèbre les plus grandes stars de la musique internationale.
              </p>

              <Button onClick={() => onNavigate(View.PRODUCTION_SPECTACLES, { sectionId: 'superstars' })} size="sm" className="text-[10px] py-2 px-6 text-white">
                Découvrir
              </Button>
            </div>

            <div className="flex-1">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-brand-dark-soft">
                <video
                  src="https://storage.googleapis.com/novelec_assets/MF%20PROD/SUPERSTAR-VIDEO-ACCUEIL.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="https://storage.googleapis.com/novelec_assets/MF%20PROD/SPETACLES/affiche__superstars-1-768x1086.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING SHOWS - Carrousel mobile avec flèches */}
      <section className="py-16 relative bg-brand-dark px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 mb-4">
              <Calendar size={12} className="text-brand-orange" />
              <span className="text-[8px] uppercase tracking-[0.3em] text-brand-orange font-bold">Agenda 2026</span>
            </div>

            <h2 className="font-sans font-black text-3xl text-white mb-3 tracking-tighter uppercase leading-none">
              LES PROCHAINES <span className="gradient-text">PRODUCTIONS</span>
            </h2>
          </div>

          {/* Carrousel avec flèches */}
          <div className="relative">
            <button
              onClick={prevShow}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-brand-dark-soft/80 border border-white/20 text-white flex items-center justify-center backdrop-blur-xl"
              aria-label="Précédent"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextShow}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-brand-dark-soft/80 border border-white/20 text-white flex items-center justify-center backdrop-blur-xl"
              aria-label="Suivant"
            >
              <ChevronRight size={20} />
            </button>

            <div className="mx-12">
              {/* Titre au-dessus */}
              <h3 className="font-black text-2xl text-white uppercase mb-4 text-center">{shows[currentShowIndex].title}</h3>

              {/* Image sans overlay */}
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden">
                <img src={shows[currentShowIndex].url} className="w-full h-full object-cover" alt={shows[currentShowIndex].title} loading="eager" />
              </div>

              {/* Texte en dessous */}
              <p className="text-sm text-brand-light/60 mt-4 text-center">Production 2026 MF Prod</p>
            </div>

            {/* Indicateurs de pagination */}
            <div className="flex justify-center gap-2 mt-6">
              {shows.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === currentShowIndex ? 'w-8 bg-brand-magenta' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVER SECTION - Version mobile simple */}
      <section id="prestations" className="w-full py-10 px-6 relative bg-brand-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-sans font-black text-3xl text-white mb-3 tracking-tighter uppercase leading-none">
              NOS <span className="gradient-text italic">PRESTATIONS</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { title: 'Production de Spectacles', image: ASSETS.PRESTATIONS.SPECTACLES, view: View.PRODUCTION_SPECTACLES },
              { title: 'Coaching Vocal', image: ASSETS.PRESTATIONS.COACHING, view: View.COACHING_VOCAL },
              { title: 'Animation TV', image: ASSETS.PRESTATIONS.ANIMATION, view: View.ANIMATION_TV },
              { title: 'Voix Off', image: ASSETS.PRESTATIONS.VOIX_OFF, view: View.VOIX_OFF },
              { title: 'Direction de Chorale', image: ASSETS.PRESTATIONS.STAGES, view: View.CHORALE },
              { title: 'Atelier Spectacle', image: ASSETS.PRESTATIONS.ATELIER, view: View.ATELIER_SPECTACLE },
            ].map((item, index) => (
              <div
                key={index}
                onClick={() => onNavigate(item.view)}
                className="relative h-[120px] cursor-pointer rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/20 to-transparent"></div>
                </div>
                <div className="relative h-full p-2 flex flex-col items-center justify-end z-10 text-center">
                  <h3 className="font-black text-[10px] text-white uppercase leading-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT - Version mobile simple */}
      <section id="about" className="py-12 px-6 relative bg-brand-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-6">
              <Zap size={14} className="text-brand-cyan" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan font-black">L'Esprit MF Prod</span>
            </div>
            <h2 className="font-sans font-black text-4xl text-white mb-10 tracking-tighter leading-none uppercase">
              BIENVENUE DANS <br/><span className="gradient-text italic">NOTRE UNIVERS</span>
            </h2>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] text-left">
              <p className="text-lg font-light text-brand-light/90 leading-relaxed italic font-serif">
                "Chez MF Prod, nous sommes plus qu'une entreprise, nous sommes des créateurs de rêves et des maîtres de l'art de divertir. Avec une expérience unique dans le domaine de la création de spectacles, de la voix off, du coaching vocal et de l'animation télévisuelle, nous donnons vie à vos idées avec passion, innovation et excellence."
              </p>
            </div>
          </div>

          <div className="mb-12">
            <div className="relative aspect-[4/5] w-full max-w-[300px] mx-auto rounded-[2rem] overflow-hidden bg-brand-dark">
              <img src={ASSETS.BIO.MIKAEL_PORTRAIT} className="w-full h-full object-cover" alt="Mikaël Ferreira" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="font-sans font-black text-2xl tracking-tighter uppercase leading-none mb-2">MIKAËL <br/>FERREIRA</div>
                <div className="text-brand-magenta uppercase tracking-[0.4em] text-[8px] font-black">Fondateur MF Prod</div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <h3 className="text-3xl font-black text-white tracking-tighter uppercase mb-6 leading-tight text-center">
              L'EXCELLENCE AU SERVICE <br/>DE VOTRE <span className="gradient-text italic">VISION</span>
            </h3>

            <div className="space-y-10">
              <div className="border-l-2 border-brand-cyan/20 pl-8">
                <div className="flex items-center gap-3 mb-4">
                  <Mic2 size={18} className="text-brand-cyan" />
                  <h4 className="text-lg font-black text-white uppercase tracking-tight">Artiste Musical</h4>
                </div>
                <p className="text-sm text-brand-light/60 font-light leading-relaxed">
                  Auteur-Compositeur accompli avec <strong className="text-brand-cyan font-bold">4 albums studio</strong> à son actif.
                </p>
              </div>

              <div className="border-l-2 border-brand-magenta/20 pl-8">
                <div className="flex items-center gap-3 mb-4">
                  <Star size={18} className="text-brand-magenta" />
                  <h4 className="text-lg font-black text-white uppercase tracking-tight">Direction Artistique</h4>
                </div>
                <p className="text-sm text-brand-light/60 font-light leading-relaxed">
                  Architecte de l'imaginaire fort de plus de <strong className="text-brand-magenta font-bold">20 spectacles originaux</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS - Version mobile simple */}
      <section className="py-12 relative bg-brand-dark px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-6">
              <Handshake size={14} className="text-brand-cyan" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-cyan font-black">Ils nous font confiance</span>
            </div>
            <h2 className="font-sans font-black text-3xl text-white mb-3 tracking-tighter uppercase leading-none">
              NOS <span className="gradient-text italic">PARTENAIRES</span>
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {ASSETS.PARTNERS.slice(0, 6).map((logoUrl, index) => (
              <div key={index} className="aspect-square flex items-center justify-center bg-white rounded-2xl p-4">
                <img src={logoUrl} alt="Partenaire" className="max-w-full max-h-full object-contain" loading="eager" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT - Version mobile simple */}
      <section id="contact" className="py-12 px-6 relative bg-brand-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-sans font-black text-4xl text-white tracking-tighter mb-4">
              ENTRER EN <br/><span className="gradient-text uppercase italic">CONTACT</span>
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-brand-dark-soft/60 p-6 rounded-2xl flex flex-col items-center text-center">
              <MapPin size={20} className="text-brand-cyan mb-4" />
              <span className="text-[8px] font-black opacity-30 mb-2">SIÈGE SOCIAL</span>
              <h3 className="text-lg font-black uppercase">MF PROD FRANCE</h3>
              <p className="text-xs opacity-60">Valence - Cornas (07)</p>
            </div>

            <a href="tel:0606578951" className="bg-brand-dark-soft/60 p-6 rounded-2xl flex flex-col items-center text-center">
              <Phone size={20} className="text-brand-magenta mb-4" />
              <span className="text-[8px] font-black opacity-30 mb-2">LIGNE DIRECTE</span>
              <h3 className="text-xl font-black">06 06 57 89 51</h3>
            </a>

            <a href="mailto:mikmarc@hotmail.fr" className="bg-brand-dark-soft/60 p-6 rounded-2xl flex flex-col items-center text-center">
              <Mail size={20} className="text-brand-orange mb-4" />
              <span className="text-[8px] font-black opacity-30 mb-2">EMAIL PRO</span>
              <h3 className="text-base font-black break-all">mikmarc@hotmail.fr</h3>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER - Version mobile simple */}
      <footer className="border-t border-white/10 bg-brand-dark py-16 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <img src={LOGO_URL} className="w-12 h-12" alt="logo" />
              <span className="font-sans font-black tracking-tighter text-white text-2xl uppercase">MF <span className="text-brand-cyan">PROD</span></span>
            </div>
            <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-black font-sans">© 2025 MF PROD</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <span onClick={() => onNavigate(View.SERVICES)} className="text-xs uppercase tracking-[0.3em] text-white/50 font-black">Prestations</span>
            <span onClick={() => onNavigate(View.SPECTACLES)} className="text-xs uppercase tracking-[0.3em] text-white/50 font-black">Spectacles</span>
          </div>

          <div className="text-center">
            <span className="text-[10px] uppercase tracking-widest text-white/20 block mb-2 font-black">WEBDESIGNER</span>
            <span className="text-sm text-brand-cyan/60 font-black tracking-tight">Damien Devaux</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeMobile;
