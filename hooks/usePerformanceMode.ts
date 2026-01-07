
import { useState, useEffect } from 'react';

export interface PerformanceMode {
  isLowPerf: boolean;
  connectionType: string;
  saveData: boolean;
  isMobile: boolean;
}

// Calcul synchrone du mode initial AVANT le premier render
const getInitialPerformanceMode = (): PerformanceMode => {
  if (typeof window === 'undefined') {
    return {
      isLowPerf: false,
      connectionType: '4g',
      saveData: false,
      isMobile: false,
    };
  }

  // @ts-ignore
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const saveData = conn?.saveData || false;
  const connectionType = conn?.effectiveType || '4g';
  const isMobile = window.innerWidth < 1024;
  const isLowPerf = saveData || ['slow-2g', '2g', '3g'].includes(connectionType);

  return {
    isLowPerf,
    connectionType,
    saveData,
    isMobile,
  };
};

export const usePerformanceMode = (): PerformanceMode => {
  // Détection immédiate et complète AVANT le premier render
  const [mode, setMode] = useState<PerformanceMode>(getInitialPerformanceMode());

  useEffect(() => {
    const checkPerformance = () => {
      // @ts-ignore
      const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

      const saveData = conn?.saveData || false;
      const connectionType = conn?.effectiveType || '4g';
      const isMobile = window.innerWidth < 1024;
      const isLowPerf = saveData || ['slow-2g', '2g', '3g'].includes(connectionType);

      // Optimisation : ne met à jour que si les valeurs ont changé
      setMode((prevMode) => {
        if (
          prevMode.isMobile === isMobile &&
          prevMode.isLowPerf === isLowPerf &&
          prevMode.connectionType === connectionType &&
          prevMode.saveData === saveData
        ) {
          return prevMode; // Pas de changement, évite le re-render
        }

        return {
          isLowPerf,
          connectionType,
          saveData,
          isMobile,
        };
      });
    };

    // Écoute les changements de taille et de connexion
    window.addEventListener('resize', checkPerformance);

    // @ts-ignore
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn) {
      conn.addEventListener('change', checkPerformance);
      return () => {
        conn.removeEventListener('change', checkPerformance);
        window.removeEventListener('resize', checkPerformance);
      };
    }

    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  return mode;
};
