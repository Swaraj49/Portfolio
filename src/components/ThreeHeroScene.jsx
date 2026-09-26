import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Single floating geometric element
function FloatingShape({ position, rotation, scale, type, color, mouseRef, speed }) {
  const meshRef = useRef();
  const initialPos = useRef(position);
  
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Idle rotation around axes
    meshRef.current.rotation.x += delta * 0.2 * speed;
    meshRef.current.rotation.y += delta * 0.3 * speed;
    meshRef.current.rotation.z += delta * 0.1 * speed;
    
    // Idle zero-G floating wave motion
    const time = state.clock.getElapsedTime();
    const offsetY = Math.sin(time * 0.8 + position[0]) * 0.25;
    const offsetX = Math.cos(time * 0.6 + position[1]) * 0.15;
    
    // Cursor parallax influence
    const targetX = initialPos.current[0] + offsetX + (mouseRef.current.x * 1.5);
    const targetY = initialPos.current[1] + offsetY + (mouseRef.current.y * 1.5);
    
    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
  });

  const renderGeometry = () => {
    switch (type) {
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 1]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'torus':
        return <torusGeometry args={[0.9, 0.35, 16, 32]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[0.9, 0]} />;
      default:
        return <tetrahedronGeometry args={[1, 0]} />;
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      {renderGeometry()}
      <meshStandardMaterial
        color={color}
        wireframe={true}
        transparent={true}
        opacity={0.65}
        emissive={color}
        emissiveIntensity={0.3}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

// Orbiting Particle Stars Field
function ParticleField({ count = 250, mouseRef }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color('#00f0ff');
    const purple = new THREE.Color('#8b5cf6');
    const white = new THREE.Color('#ffffff');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;

      const mixFactor = Math.random();
      const mixedColor = mixFactor < 0.5 ? cyan : mixFactor < 0.8 ? purple : white;
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.03;
    pointsRef.current.rotation.x = mouseRef.current.y * 0.15;
    pointsRef.current.rotation.z = mouseRef.current.x * 0.15;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
      />
    </points>
  );
}

// Scene Wrapper with Ambient & Point Lights
function ThreeScene({ mouseRef }) {
  const shapes = useMemo(() => [
    { type: 'icosahedron', pos: [-3.2, 1.8, -1], color: '#00f0ff', scale: 0.95, speed: 1.1 },
    { type: 'torus', pos: [3.4, -1.2, -0.5], color: '#8b5cf6', scale: 0.85, speed: 0.9 },
    { type: 'octahedron', pos: [-2.5, -2.1, -1.5], color: '#38bdf8', scale: 0.75, speed: 1.2 },
    { type: 'dodecahedron', pos: [2.8, 2.2, -2], color: '#a855f7', scale: 0.8, speed: 0.8 },
    { type: 'icosahedron', pos: [0, -3, -2.5], color: '#00f0ff', scale: 0.6, speed: 1.0 }
  ], []);

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
      <pointLight position={[-10, -10, -10]} intensity={1.2} color="#8b5cf6" />
      
      <ParticleField count={220} mouseRef={mouseRef} />

      {shapes.map((s, idx) => (
        <FloatingShape
          key={idx}
          position={s.pos}
          rotation={[idx * 0.5, idx * 0.8, 0]}
          scale={s.scale}
          type={s.type}
          color={s.color}
          mouseRef={mouseRef}
          speed={s.speed}
        />
      ))}
    </>
  );
}

export default function ThreeHeroScene({ reducedMotion = false }) {
  const mouseRef = useRef({ x: 0, y: 0 });
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseRef.current = {
        x: (e.clientX / innerWidth) * 2 - 1,
        y: -(e.clientY / innerHeight) * 2 + 1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fallback for reduced motion or WebGL unsupported
  if (reducedMotion || !webglSupported) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          if (!gl) setWebglSupported(false);
        }}
        fallback={
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-slate-950/50 to-[#07090e]" />
        }
      >
        <ThreeScene mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
}
