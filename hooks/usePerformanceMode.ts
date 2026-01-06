
import { useState, useEffect } from 'react';

export interface PerformanceMode {
  isLowPerf: boolean;
  connectionType: string;
  saveData: boolean;
  isMobile: boolean;
}

export const usePerformanceMode = (): PerformanceMode => {
  const [mode, setMode] = useState<PerformanceMode>({
    isLowPerf: false,
    connectionType: '4g',
    saveData: false,
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 1024 : false,
  });

  useEffect(() => {
    const checkPerformance = () => {
      // @ts-ignore - Network Information API n'est pas encore standard partout
      const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      
      const saveData = conn?.saveData || false;
      const connectionType = conn?.effectiveType || '4g';
      const isMobile = window.innerWidth < 1024;
      
      // On considère "Low Perf" si connexion < 4g ou mode économie activé
      const isLowPerf = saveData || ['slow-2g', '2g', '3g'].includes(connectionType);

      setMode({
        isLowPerf,
        connectionType,
        saveData,
        isMobile
      });
    };

    checkPerformance();

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
