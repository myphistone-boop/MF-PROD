
import React, { useEffect, useRef } from 'react';
import { Theme } from '../types';

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

interface BackgroundCanvasProps {
  theme?: Theme;
}

const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({ theme = 'dark' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const orbsRef = useRef<Orb[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const isDark = theme === 'dark';
    
    // Couleurs du logo
    const colors = isDark 
      ? ['rgba(0, 210, 255, 0.08)', 'rgba(255, 0, 122, 0.08)', 'rgba(255, 138, 0, 0.05)']
      : ['rgba(0, 210, 255, 0.04)', 'rgba(255, 0, 122, 0.04)', 'rgba(255, 138, 0, 0.03)'];

    const initOrbs = () => {
      orbsRef.current = [
        { x: width * 0.2, y: height * 0.3, radius: 600, color: colors[0], angle: Math.random() * Math.PI, speed: 0.002, range: 150 },
        { x: width * 0.8, y: height * 0.7, radius: 700, color: colors[1], angle: Math.random() * Math.PI, speed: 0.0015, range: 200 },
        { x: width * 0.5, y: height * 0.5, radius: 800, color: colors[2], angle: Math.random() * Math.PI, speed: 0.001, range: 100 },
        { x: width * 0.9, y: height * 0.1, radius: 500, color: colors[0], angle: Math.random() * Math.PI, speed: 0.0025, range: 120 },
      ];
    };

    const initParticles = () => {
      const count = Math.floor((width * height) / 10000);
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.5,
        color: isDark ? '#FFFFFF' : '#64748b',
        opacity: Math.random() * 0.4 + 0.1
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
      
      // 1. Fond de base (Dégradé très subtil)
      const baseGradient = ctx.createLinearGradient(0, 0, width, height);
      if (isDark) {
        baseGradient.addColorStop(0, '#020617');
        baseGradient.addColorStop(1, '#0f172a');
      } else {
        baseGradient.addColorStop(0, '#F8FAFC');
        baseGradient.addColorStop(1, '#f1f5f9');
      }
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Orbes flottants (Mesh effect)
      orbsRef.current.forEach(orb => {
        orb.angle += orb.speed;
        const currentX = orb.x + Math.sin(orb.angle) * orb.range;
        const currentY = orb.y + Math.cos(orb.angle * 0.8) * orb.range;
        
        const g = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, orb.radius);
        g.addColorStop(0, orb.color);
        g.addColorStop(1, 'transparent');

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(currentX, currentY, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Particules (Dust effect)
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const twinkle = Math.sin(time + p.x) * 0.2 + 0.8;
        ctx.globalAlpha = p.opacity * twinkle;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1.0;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
};

export default BackgroundCanvas;
