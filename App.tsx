
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BackgroundCanvas from './components/BackgroundCanvas';
import Home from './components/views/Home';
import Men from './components/views/Men';
import Discover from './components/views/Discover';
import BookingView from './components/views/BookingView';
import WhatsAppButton from './components/ui/WhatsAppButton';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  return (
    <div className="min-h-screen text-white font-sans selection:bg-brand-magenta selection:text-white">
      <BackgroundCanvas />
      
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="transition-opacity duration-500 ease-in-out">
        {currentView === View.HOME && <Home onNavigate={setCurrentView} />}
        {currentView === View.SPECTACLES && <Men onNavigate={setCurrentView} />}
        {currentView === View.SERVICES && <Discover onNavigate={setCurrentView} />}
        {currentView === View.BOOKING && <BookingView onNavigate={setCurrentView} />}
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default App;
