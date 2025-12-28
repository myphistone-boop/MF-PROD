
import React, { useState, useEffect } from 'react';
import { View, NavItem } from '../types';
import { NAV_ITEMS, LOGO_URL } from '../constants';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  };

  return (
    <>
      <nav 
        className={`fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-in-out
          ${scrolled ? 'w-[95%] max-w-[1200px] py-2' : 'w-[95%] max-w-[1600px] py-4'}
        `}
      >
        <div className={`
          relative w-full h-full rounded-full flex items-center justify-between px-6 lg:px-10 transition-all duration-700
          backdrop-blur-2xl border border-white/10 shadow-2xl
          ${scrolled ? 'bg-brand-dark-soft/90' : 'bg-brand-dark/40'}
        `}>
          
          <div 
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => onNavigate(View.HOME)}
          >
            <div className={`
                relative z-50 flex items-center justify-center bg-brand-dark rounded-full 
                border-2 border-white/10 shadow-lg transition-all duration-500 group-hover:border-brand-magenta
                ${scrolled ? 'w-10 h-10 lg:w-14 lg:h-14' : 'w-14 h-14 lg:w-20 lg:h-20'}
            `}>
              <img 
                src={LOGO_URL} 
                alt="MF" 
                className="w-full h-full object-contain p-2" 
              />
            </div>
            <span className="font-sans font-black tracking-tighter text-white text-lg lg:text-xl hidden md:block">
              MF <span className="text-brand-cyan">PROD</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`
                  uppercase tracking-[0.3em] text-[10px] xl:text-[11px] font-black transition-all duration-300 relative py-2
                  hover:text-brand-magenta
                  ${currentView === item.view && !item.sectionId ? 'text-brand-cyan' : 'text-brand-light/60'}
                `}
              >
                {item.label}
                {currentView === item.view && !item.sectionId && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-cyan"></div>
                )}
              </button>
            ))}
          </div>

          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-dark/98 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 lg:hidden animate-fade-in-up">
           {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="text-4xl font-sans font-black text-white hover:text-brand-magenta transition-colors"
              >
                {item.label}
              </button>
            ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
