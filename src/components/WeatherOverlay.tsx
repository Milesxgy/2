import React, { useState, useEffect, useRef } from 'react';

const WeatherOverlay = ({ type }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (type === 'CLEAR' || type === 'FOG') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const particleCount = type === 'RAIN' ? 300 : 150;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        len: type === 'RAIN' ? Math.random() * 20 + 10 : Math.random() * 3 + 2,
        speed: type === 'RAIN' ? Math.random() * 10 + 15 : Math.random() * 2 + 1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = type === 'RAIN' ? 'rgba(174, 194, 224, 0.6)' : 'rgba(255, 255, 255, 0.8)';
      ctx.strokeStyle = 'rgba(174, 194, 224, 0.5)';
      ctx.lineWidth = 1;

      particles.forEach(p => {
        if (type === 'RAIN') {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x, p.y + p.len);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.len / 2, 0, Math.PI * 2);
          ctx.fill();
        }

        p.y += p.speed;
        if (type === 'SNOW') {
          p.x += Math.sin(p.y * 0.01) * 0.5;
        }

        if (p.y > canvas.height) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [type]);

  if (type === 'CLEAR') return null;

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {type === 'FOG' && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#010409] via-transparent to-transparent opacity-90 animate-pulse">
          <div className="absolute inset-0 bg-white/5 blur-3xl transform translate-y-1/2 animate-fog-flow" />
        </div>
      )}
      {(type === 'RAIN' || type === 'SNOW') && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      )}
    </div>
  );
};

export default WeatherOverlay;
