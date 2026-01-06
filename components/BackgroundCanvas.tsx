
import React, { useEffect, useRef } from 'react';
import { usePerformanceMode } from '../hooks/usePerformanceMode';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
}

interface Orb {
  x: number;
  y: number;
  radius: number;
  color: string;
  angle: number;
  speed: number;
  range: number;
}

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const orbsRef = useRef<Orb[]>([]);
  const { isLowPerf } = usePerformanceMode();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Couleurs du logo optimisées pour fond sombre
    const brandColors = [
      'rgba(0, 210, 255, 0.12)',   // Cyan
      'rgba(255, 0, 122, 0.12)',   // Magenta
      'rgba(255, 138, 0, 0.08)',   // Orange
    ];

    const initOrbs = () => {
      // Moins d'orbes en mode dégradé
      const count = isLowPerf ? 2 : 4;
      orbsRef.current = [
        { x: width * 0.1, y: height * 0.2, radius: width * 0.5, color: brandColors[0], angle: Math.random() * Math.PI, speed: 0.001, range: 100 },
        { x: width * 0.8, y: height * 0.7, radius: width * 0.6, color: brandColors[1], angle: Math.random() * Math.PI, speed: 0.0008, range: 150 },
      ].slice(0, count);
      
      if (!isLowPerf) {
        orbsRef.current.push(
            { x: width * 0.4, y: height * 0.5, radius: width * 0.4, color: brandColors[2], angle: Math.random() * Math.PI, speed: 0.0012, range: 80 },
            { x: width * 0.9, y: height * 0.1, radius: width * 0.3, color: brandColors[0], angle: Math.random() * Math.PI, speed: 0.0015, range: 50 },
        );
      }
    };

    const initParticles = () => {
      // Divise le nombre de particules par 5 en mode Low Perf
      const density = isLowPerf ? 60000 : 12000;
      const count = Math.floor((width * height) / density);
      
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 2 + 0.5,
        color: '#FFFFFF',
        opacity: Math.random() * 0.3 + 0.05
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initOrbs();
      initParticles();
    };

    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      const time = Date.now() * 0.001;
      
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'screen';
      orbsRef.current.forEach(orb => {
        // Ralentissement ou arrêt des orbes
        if (!isLowPerf) {
            orb.angle += orb.speed;
        }
        const currentX = orb.x + Math.sin(orb.angle) * orb.range;
        const currentY = orb.y + Math.cos(orb.angle * 0.8) * orb.range;
        
        const g = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, orb.radius);
        g.addColorStop(0, orb.color);
        g.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(currentX, currentY, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';
      particlesRef.current.forEach(p => {
        if (!isLowPerf) {
            p.x += p.vx;
            p.y += p.vy;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const twinkle = isLowPerf ? 1 : Math.sin(time + p.x * 0.1) * 0.5 + 0.5;
        ctx.globalAlpha = p.opacity * twinkle;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!isLowPerf) {
          ctx.globalAlpha = 0.02;
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 1;
          for (let i = 0; i < 3; i++) {
              const xOffset = Math.sin(time * 0.1 + i) * 100;
              ctx.beginPath();
              ctx.moveTo(width * (0.2 + i * 0.3) + xOffset, 0);
              ctx.lineTo(width * (0.1 + i * 0.3) + xOffset, height);
              ctx.stroke();
          }
      }

      ctx.globalAlpha = 1.0;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationId);
    };
  }, [isLowPerf]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
};

export default BackgroundCanvas;
