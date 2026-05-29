import React, { useRef, useEffect } from 'react';

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let lastShootingStar = 0;
    let shootingStar = null;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Generate star layers
    const createStars = (count, maxSize, maxOpacity) =>
      Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * maxSize + 0.5,
        opacity: Math.random() * maxOpacity + 0.1,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
      }));

    const distantStars = createStars(200, 1.2, 0.4);
    const mediumStars = createStars(80, 1.8, 0.6);
    const brightStars = createStars(20, 2.5, 0.9);

    const drawStar = (star, time, driftSpeed) => {
      const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
      const alpha = star.opacity * twinkle;

      // Drift
      star.x -= driftSpeed;
      if (star.x < -5) star.x = canvas.width + 5;

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(205, 214, 244, ${alpha})`;
      ctx.fill();

      // Glow for bright stars
      if (star.size > 2) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          star.x, star.y, star.size * 0.5,
          star.x, star.y, star.size * 3
        );
        gradient.addColorStop(0, `rgba(124, 155, 255, ${alpha * 0.3})`);
        gradient.addColorStop(1, 'rgba(124, 155, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    };

    const spawnShootingStar = () => ({
      x: Math.random() * canvas.width * 0.8,
      y: Math.random() * canvas.height * 0.3,
      length: 80 + Math.random() * 60,
      speed: 8 + Math.random() * 6,
      angle: Math.PI / 6 + Math.random() * 0.3,
      opacity: 1,
      life: 0,
      maxLife: 40 + Math.random() * 20,
    });

    const drawShootingStar = (ss) => {
      ss.life++;
      ss.x += Math.cos(ss.angle) * ss.speed;
      ss.y += Math.sin(ss.angle) * ss.speed;
      ss.opacity = 1 - ss.life / ss.maxLife;

      const tailX = ss.x - Math.cos(ss.angle) * ss.length;
      const tailY = ss.y - Math.sin(ss.angle) * ss.length;

      const gradient = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(0.7, `rgba(196, 181, 253, ${ss.opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(255, 255, 255, ${ss.opacity})`);

      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(ss.x, ss.y);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Head glow
      ctx.beginPath();
      ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${ss.opacity})`;
      ctx.fill();

      return ss.life < ss.maxLife;
    };

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      distantStars.forEach((s) => drawStar(s, time, 0.05));
      mediumStars.forEach((s) => drawStar(s, time, 0.15));
      brightStars.forEach((s) => drawStar(s, time, 0.3));

      // Shooting stars every 8-15 seconds
      if (time - lastShootingStar > (8000 + Math.random() * 7000)) {
        shootingStar = spawnShootingStar();
        lastShootingStar = time;
      }

      if (shootingStar) {
        const alive = drawShootingStar(shootingStar);
        if (!alive) shootingStar = null;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default Starfield;
