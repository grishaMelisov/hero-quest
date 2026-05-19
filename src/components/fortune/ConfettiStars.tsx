import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

interface ConfettiStarsProps {
  origin: { x: number; y: number };
  onDone: () => void;
}

const COLORS = ['#ff0633', '#3b82f6', '#ffffff'];
const COUNT = 30;
const MAX_DURATION = 1.4;

interface Particle {
  id: number;
  tx: number;
  ty: number;
  rotate: number;
  duration: number;
  color: string;
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export default function ConfettiStars({ origin, onDone }: ConfettiStarsProps) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: COUNT }, (_, i) => {
      const angle = rand(0, Math.PI * 2);
      const distance = rand(80, 220);
      return {
        id: i,
        tx: Math.cos(angle) * distance,
        ty: Math.sin(angle) * distance,
        rotate: rand(-540, 540),
        duration: rand(0.7, MAX_DURATION),
        color: COLORS[i % COLORS.length],
      };
    });
  }, []);

  useEffect(() => {
    const id = setTimeout(onDone, MAX_DURATION * 1000 + 100);
    return () => clearTimeout(id);
  }, [onDone]);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 100 }}>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          style={{
            position: 'fixed',
            left: origin.x,
            top: origin.y,
            color: p.color,
            fontSize: 14,
            lineHeight: 1,
            userSelect: 'none',
          }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 0, rotate: 0 }}
          animate={{ x: p.tx, y: p.ty, opacity: 0, scale: [0, 1.4, 1], rotate: p.rotate }}
          transition={{ duration: p.duration, ease: 'easeOut' }}
        >
          ★
        </motion.span>
      ))}
    </div>
  );
}
