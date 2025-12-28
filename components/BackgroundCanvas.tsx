
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const generateStars = () => {
      const starCount = Math.floor((width * height) / 3000);
      const newStars: Star[] = [];
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 0.1,
          opacity: Math.random() * 0.7 + 0.1
        });
      }
      starsRef.current = newStars;
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      generateStars();
    };

    window.addEventListener('resize', resize);
    resize();

    const halos = [
      {
        x: width * 0.2,
        y: height * 0.3,
        radius: 800,
        color: 'rgba(0, 210, 255, 0.15)', // Cyan
        phase: 0
      },
      {
        x: width * 0.8,
        y: height * 0.7,
        radius: 900,
        color: 'rgba(255, 0, 122, 0.15)', // Magenta
        phase: 2
      },
      {
        x: width * 0.5,
        y: height * 0.5,
        radius: 1000,
        color: 'rgba(255, 138, 0, 0.08)', // Orange
        phase: 4
      }
    ];

    const animate = () => {
      const time = Date.now() * 0.0002;
      
      // Fond Deep Slate / Night
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, width, height);

      // Halos dynamiques
      halos.forEach(halo => {
        const currentX = halo.x + Math.sin(time + halo.phase) * 100;
        const currentY = halo.y + Math.cos(time * 1.5 + halo.phase) * 100;
        const currentRadius = halo.radius + Math.sin(time * 2 + halo.phase) * 50;

        const g = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, currentRadius);
        g.addColorStop(0, halo.color);
        g.addColorStop(1, 'rgba(2, 6, 23, 0)');

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(currentX, currentY, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Étoiles
      ctx.fillStyle = '#FFFFFF'; 
      starsRef.current.forEach(star => {
        const twinkle = Math.sin(time * 10 + star.x) * 0.3 + 0.7;
        ctx.globalAlpha = star.opacity * twinkle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default BackgroundCanvas;
