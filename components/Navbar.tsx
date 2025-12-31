
import React, { useState, useEffect } from 'react';
import { View, NavItem } from '../types';
import { NAV_ITEMS, LOGO_URL } from '../constants';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobilePrestationsOpen, setMobilePrestationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prestationsLinks = [
    { label: 'Spectacles', view: View.PRODUCTION_SPECTACLES },
    { label: 'Coaching Vocal', view: View.COACHING_VOCAL },
    { label: 'Création de Spectacles', view: View.ATELIER_SPECTACLE },
    { label: 'Animation Télévisuelle', view: View.ANIMATION_TV },
    { label: 'Voix Off', view: View.VOIX_OFF },
    { label: 'Stages Perfectionnement', view: View.STAGES_PERFECTIONNEMENT },
  ];

  const handleNavClick = (item: NavItem) => {
    if (item.view !== currentView) {
        onNavigate(item.view);
        if (item.sectionId) {
            setTimeout(() => {
                const element = document.getElementById(item.sectionId!);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    } else {
        if (item.sectionId) {
            const element = document.getElementById(item.sectionId);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  const handlePrestationClick = (view: View) => {
    onNavigate(view);
    window.scrollTo(0, 0);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-in-out
          ${scrolled ? 'w-[95%] max-w-[1500px] py-2' : 'w-[98%] max-w-[1800px] py-4'}
        `}
      >
        <div className={`
          relative w-full h-full rounded-full flex items-center justify-between px-8 lg:px-14 transition-all duration-700
          backdrop-blur-2xl border border-white/10 shadow-2xl
          ${scrolled ? 'bg-brand-dark-soft/95' : 'bg-brand-dark/60'}
        `}>
          
          {/* Logo Section */}
          <div 
            className="flex items-center gap-4 lg:gap-6 cursor-pointer group flex-shrink-0"
            onClick={() => onNavigate(View.HOME)}
          >
            <div className={`
                relative z-50 flex items-center justify-center bg-brand-dark rounded-full 
                border-2 border-white/10 shadow-lg transition-all duration-500 group-hover:border-brand-magenta
                ${scrolled ? 'w-12 h-12 lg:w-14 lg:h-14' : 'w-14 h-14 lg:w-20 lg:h-20'}
            `}>
              <img 
                src={LOGO_URL} 
                alt="MF" 
                className="w-full h-full object-contain p-2" 
              />
            </div>
            <span className="font-sans font-black tracking-tighter text-white text-lg lg:text-xl xl:text-2xl hidden sm:block uppercase">
              MF <span className="text-brand-cyan">PROD</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-12 flex-grow justify-center">
            {NAV_ITEMS.map((item) => {
              const isPrestations = item.label === 'Prestations';
              
              return (
                <div 
                  key={item.label} 
                  className="relative h-full flex items-center"
                  onMouseEnter={() => isPrestations && setDropdownOpen(true)}
                  onMouseLeave={() => isPrestations && setDropdownOpen(false)}
                >
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`
                      uppercase tracking-[0.2em] text-[13px] xl:text-[16px] font-black transition-all duration-300 relative py-4 flex items-center gap-3
                      hover:text-brand-magenta whitespace-nowrap
                      ${currentView === item.view && !item.sectionId 
                        ? 'text-brand-cyan' 
                        : 'text-white'}
                    `}
                  >
                    {item.label}
                    {isPrestations && (
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-brand-magenta' : ''}`} 
                      />
                    )}
                  </button>

                  {isPrestations && (
                    <div className={`
                      absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 transform
                      ${dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
                    `}>
                      <div className={`
                        backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 w-[360px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]
                        ${scrolled ? 'bg-brand-dark-soft' : 'bg-brand-dark'}
                      `}>
                        <div className="flex flex-col gap-2">
                          {prestationsLinks.map((link) => (
                            <button
                              key={link.label}
                              onClick={() => handlePrestationClick(link.view)}
                              className="text-left px-5 py-3.5 rounded-2xl hover:bg-white/5 text-[12px] uppercase tracking-[0.25em] font-black text-white hover:text-brand-magenta transition-all"
                            >
                              {link.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-5 flex-shrink-0">
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-brand-dark/98 backdrop-blur-3xl flex flex-col items-center justify-center p-12 lg:hidden animate-fade-in-up overflow-y-auto">
           <button 
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-10 right-10 w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-white shadow-lg"
            >
                <X size={40} />
            </button>

           <div className="flex flex-col items-center gap-10 w-full py-10">
            {NAV_ITEMS.map((item) => {
                const isPrestations = item.label === 'Prestations';
                
                return (
                  <div key={item.label} className="w-full flex flex-col items-center">
                    <button
                      onClick={() => !isPrestations ? handleNavClick(item) : setMobilePrestationsOpen(!mobilePrestationsOpen)}
                      className={`text-5xl sm:text-6xl font-sans font-black uppercase tracking-tighter transition-colors ${currentView === item.view ? 'text-brand-cyan' : 'text-white'}`}
                    >
                      {item.label}
                    </button>
                    
                    {isPrestations && mobilePrestationsOpen && (
                      <div className="flex flex-col items-center gap-6 mt-8 animate-fade-in-up bg-white/5 rounded-[3rem] p-10 w-full max-w-md">
                        {prestationsLinks.map((link) => (
                          <button
                            key={link.label}
                            onClick={() => handlePrestationClick(link.view)}
                            className="text-lg font-black text-white hover:text-brand-magenta uppercase tracking-widest text-center"
                          >
                            {link.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
           </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
