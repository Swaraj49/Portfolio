import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ZeroGCard({
  children,
  className = '',
  glowColor = 'rgba(0, 240, 255, 0.25)',
  idleDrift = true,
  driftDelay = 0,
  onClick,
  reducedMotion = false
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // Motion values for tilt parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt stiffness
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 250,
    damping: 25
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 250,
    damping: 25
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current || reducedMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Relative mouse offset normalized from -0.5 to 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);

    // Track percentage position for dynamic radial gradient glow
    setMousePos({
      x: Math.round(((e.clientX - rect.left) / width) * 100),
      y: Math.round(((e.clientY - rect.top) / height) * 100)
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Idle drift animation variants
  const idleVariants = {
    initial: { y: 0, rotate: 0 },
    animate: reducedMotion || !idleDrift || isHovered
      ? { y: 0, rotate: 0 }
      : {
          y: [-4, 6, -4],
          rotate: [-0.4, 0.5, -0.4],
          transition: {
            duration: 6 + Math.random() * 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: driftDelay
          }
        }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={idleVariants}
      initial="initial"
      animate="animate"
      whileInView={reducedMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      style={
        reducedMotion
          ? {}
          : {
              perspective: 1000,
              rotateX: isHovered ? rotateX : 0,
              rotateY: isHovered ? rotateY : 0,
              transformStyle: 'preserve-3d'
            }
      }
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative glass-panel rounded-2xl p-6 transition-colors duration-300 border border-white/10 ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* Dynamic Cursor Reactive Gradient Spotlight */}
      {isHovered && !reducedMotion && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, ${glowColor}, transparent 80%)`
          }}
        />
      )}

      {/* Subtle Zero-G Ambient Border Highlight */}
      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 border ${
          isHovered ? 'border-cyan-400/40' : 'border-white/5'
        }`}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
