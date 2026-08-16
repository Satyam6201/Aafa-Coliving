import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Sparkles as ThreeSparkles } from '@react-three/drei';
import { Star, ShieldCheck, Utensils, Zap, Sparkles } from 'lucide-react';

function Orbiting3DScene({ mouse }) {
  const orbRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (orbRef.current) {
      orbRef.current.rotation.x += delta * 0.4;
      orbRef.current.rotation.y += delta * 0.5;

      const targetX = (mouse.current.y * Math.PI) / 10;
      const targetY = (mouse.current.x * Math.PI) / 10;

      orbRef.current.rotation.x += (targetX - orbRef.current.rotation.x) * 0.08;
      orbRef.current.rotation.y += (targetY - orbRef.current.rotation.y) * 0.08;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.6;
      ringRef.current.rotation.x = Math.PI / 3;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.8} floatIntensity={1.5}>
      <group>
        {/* Orbiting Gold Ring */}
        <mesh ref={ringRef} scale={1.9}>
          <torusGeometry args={[1, 0.04, 16, 100]} />
          <meshStandardMaterial color="#D4A64A" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Central Metallic Glass Orb */}
        <mesh ref={orbRef} scale={1.6} position={[0, 0, 0]}>
          <icosahedronGeometry args={[1, 3]} />
          <MeshDistortMaterial
            color="#D4A64A"
            attach="material"
            distort={0.45}
            speed={2.5}
            roughness={0.12}
            metalness={0.85}
            clearcoat={1}
            transmission={0.5}
            thickness={1.5}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Hero3DCanvas() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y / 14);
    setRotateY(x / 14);
  };

  const handleCardMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div className="relative w-full flex items-center justify-center p-2">
      
      {/* Background Radial Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4A64A]/30 via-amber-500/10 to-transparent blur-3xl rounded-full opacity-70 animate-pulse-blob" />

      {/* Main 3D Floating Showcase Container */}
      <div
        onMouseMove={handleCardMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleCardMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: isHovered ? 'none' : 'transform 0.6s ease-out',
        }}
        className="relative w-full max-w-lg rounded-3xl p-6 glass-card border border-[#D4A64A]/40 shadow-2xl animate-float-slow group"
      >
        
        {/* High-Resolution Room Interior Showcase Image */}
        <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden mb-4 border border-[#FAF7F0]/15">
          <img
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
            alt="Aafa Coliving Luxury Room Interior"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-105 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-85" />     

          {/* Top Verified Location Badge */}
          <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#0B1220]/85 backdrop-blur-md border border-[#D4A64A]/40 text-[#D4A64A] text-xs font-bold flex items-center gap-2 shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Move-In Ready Sanctuary</span>
          </div>

          {/* Bottom Floating Price & Rating Pill */}
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0B1220]/90 backdrop-blur-md border border-[#FAF7F0]/15 flex items-center justify-between shadow-xl">
            <div>
              <p className="text-[10px] text-[#FAF7F0]/60 uppercase font-mono tracking-wider">Starting Daily Rate</p>
              <p className="text-2xl font-extrabold text-[#FAF7F0] font-sora">
                ₹499 <span className="text-xs font-normal text-[#FAF7F0]/70">/ day (Breakfast Free)</span>
              </p>
            </div>
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#D4A64A]/20 text-[#D4A64A] text-xs font-bold border border-[#D4A64A]/30">
              <Star className="w-4 h-4 fill-[#D4A64A] text-[#D4A64A]" />
              <span>4.9★</span>
            </div>
          </div>

        </div>

        {/* Orbiting Satellite Floating Physics Badges */}
        <div className="absolute -top-5 -left-5 px-4 py-3 rounded-2xl glass-card border border-[#D4A64A]/40 shadow-2xl animate-float-reverse hidden sm:flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#D4A64A]/20 flex items-center justify-center text-[#D4A64A]">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#FAF7F0] font-sora">100% Power Backup</p>
            <p className="text-[10px] text-[#FAF7F0]/70 font-mono">Commercial Generator</p>
          </div>
        </div>

        <div className="absolute -bottom-5 -right-5 px-4 py-3 rounded-2xl glass-card border border-[#D4A64A]/40 shadow-2xl animate-float-slow hidden sm:flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#D4A64A]/20 flex items-center justify-center text-[#D4A64A]">
            <Utensils className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#FAF7F0] font-sora">Kerala Home Cooking</p>
            <p className="text-[10px] text-[#FAF7F0]/70 font-mono">3x Daily Fresh Meals</p>
          </div>
        </div>

      </div>
    </div>
  );
}
