'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import * as THREE from 'three';
import { useSiteContent } from '@/context/SiteContext';

export default function Hero3D() {
  const { hero } = useSiteContent();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.set(0, 0, 15);

    const C_ACCENT = 0xc6f52e; // Volt neon
    const C_TEAL = 0x4fe0c0;   // Cyber teal
    const C_SOFT = 0x6f7d5e;

    // 1. Particle Cloud Field
    const N = 1600;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 44;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 28;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const points = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({
        color: C_ACCENT,
        size: 0.065,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    scene.add(points);

    // 2. Wireframe Central Core (Dual Icosahedron)
    const core = new THREE.Group();
    const ico1 = new THREE.Mesh(
      new THREE.IcosahedronGeometry(3.3, 1),
      new THREE.MeshBasicMaterial({
        color: C_TEAL,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      })
    );
    const ico2 = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.3, 0),
      new THREE.MeshBasicMaterial({
        color: C_ACCENT,
        wireframe: true,
        transparent: true,
        opacity: 0.55,
      })
    );
    core.add(ico1);
    core.add(ico2);
    core.position.set(4.8, 0.4, -2);
    scene.add(core);

    // 3. Floating Geometric Shapes
    const floaters: THREE.Mesh[] = [];
    const geos = [
      new THREE.OctahedronGeometry(0.55),
      new THREE.BoxGeometry(0.7, 0.7, 0.7),
      new THREE.TetrahedronGeometry(0.65),
    ];

    for (let f = 0; f < 14; f++) {
      const mat = new THREE.MeshBasicMaterial({
        color: f % 3 === 0 ? C_SOFT : f % 3 === 1 ? C_TEAL : C_ACCENT,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      });
      const m = new THREE.Mesh(geos[f % 3], mat);
      m.position.set(
        (Math.random() - 0.5) * 28,
        (Math.random() - 0.5) * 16,
        -3 - Math.random() * 6
      );
      m.userData = {
        s: 0.3 + Math.random() * 0.7,
        y: m.position.y,
        p: Math.random() * Math.PI * 2,
      };
      floaters.push(m);
      scene.add(m);
    }

    // Mouse Tracking with Parallax
    let mx = 0,
      my = 0,
      tmx = 0,
      tmy = 0;

    const handlePointerMove = (e: PointerEvent) => {
      tmx = (e.clientX / window.innerWidth - 0.5) * 2;
      tmy = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!canvas.parentElement) return;
      const w = canvas.parentElement.clientWidth;
      const h = canvas.parentElement.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      // Reposition core based on mobile / desktop
      if (w < 768) {
        core.position.set(0, -3.2, -4);
      } else {
        core.position.set(4.8, 0.4, -2);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // Render Animation Loop
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth mouse lerping
      mx += (tmx - mx) * 0.04;
      my += (tmy - my) * 0.04;

      camera.position.x = mx * 1.5;
      camera.position.y = -my * 1.1 - Math.min(window.scrollY, 600) * 0.003;
      camera.lookAt(0, 0, 0);

      points.rotation.y = t * 0.02;
      ico1.rotation.set(t * 0.12, t * 0.16, 0);
      ico2.rotation.set(-t * 0.2, t * 0.1, t * 0.08);
      core.rotation.y = t * 0.05;

      for (let k = 0; k < floaters.length; k++) {
        const fl = floaters[k];
        const u = fl.userData;
        fl.position.y = u.y + Math.sin(t * u.s + u.p) * 0.7;
        fl.rotation.x = t * u.s * 0.5;
        fl.rotation.y = t * u.s * 0.7;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden isolation-auto pt-24 pb-16">
      {/* 3D WebGL Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Radial Gradient Backdrops */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg -z-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-volt/5 blur-[140px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Geo Target Social Proof Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-line bg-surface/60 backdrop-blur-md mb-6 shadow-neon">
              <span className="w-2 h-2 rounded-full bg-volt animate-ping" />
              <span className="text-xs font-bold tracking-wider text-text uppercase">
                {hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-text leading-[1.08] tracking-tight mb-6">
              {hero.headline}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-volt via-cyber-teal to-volt animate-pulse">
                {hero.highlight}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-text-muted leading-relaxed max-w-2xl mb-8">
              {hero.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-volt text-volt-ink font-display font-bold text-sm tracking-wide px-8 py-4 rounded-full shadow-neon hover:bg-volt-hover hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Schedule Scoping Call
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface/80 hover:bg-surface border border-line hover:border-volt/50 text-text font-display font-semibold text-sm px-7 py-4 rounded-full backdrop-blur-md transition-all duration-200"
              >
                Explore Live Work
              </a>
            </div>

            {/* Value Guarantees / Badges */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-line/60 w-full">
              {hero.guarantees.map((guar, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-text-muted">
                  {i % 2 === 0 ? (
                    <CheckCircle2 className="w-4 h-4 text-volt flex-shrink-0" />
                  ) : (
                    <Zap className="w-4 h-4 text-cyber-teal flex-shrink-0" />
                  )}
                  <span>{guar}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Floating Interactive Agency Emblem */}
          <div className="lg:col-span-5 flex justify-center items-center relative perspective-1000">
            {/* Spinning Orbit Ring SVG */}
            <div className="absolute w-[360px] sm:w-[420px] aspect-square pointer-events-none opacity-40 animate-spin-slow">
              <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-volt stroke-[1.2]">
                <ellipse cx="100" cy="100" rx="90" ry="34" transform="rotate(-25 100 100)" />
                <ellipse cx="100" cy="100" rx="90" ry="34" transform="rotate(35 100 100)" strokeDasharray="6 8" />
              </svg>
            </div>

            {/* Glowing Hero Card */}
            <div className="relative z-10 w-[280px] sm:w-[320px] rounded-3xl bg-surface/90 border border-volt/30 shadow-card p-6 backdrop-blur-xl animate-float-slow transform-style-3d hover:scale-105 transition-transform duration-300">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-5 border border-line bg-black/60 flex items-center justify-center shadow-inner">
                <Image
                  src="/logo.webp"
                  alt="Autoniex Enterprise Emblem"
                  width={240}
                  height={160}
                  className="object-contain p-2"
                />
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-line">
                <div>
                  <h4 className="font-display font-bold text-sm text-text">AUTONIEX NODE</h4>
                  <p className="text-[11px] text-text-muted">Autonomous Intelligence</p>
                </div>
                <span className="flex items-center gap-1 text-[11px] font-bold text-volt bg-volt/10 px-2 py-0.5 rounded-full border border-volt/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-volt animate-ping" />
                  ONLINE
                </span>
              </div>

              <div className="mt-3.5 space-y-2 text-xs text-text-muted">
                <div className="flex justify-between">
                  <span>Lead Response Speed:</span>
                  <span className="text-volt font-bold">{hero.leadResponseSpeed}</span>
                </div>
                <div className="flex justify-between">
                  <span>Target Region:</span>
                  <span className="text-text font-semibold">{hero.targetRegion}</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekly Deployment:</span>
                  <span className="text-cyber-teal font-semibold">Continuous Sprint</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Cue */}
      <a
        href="#services"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-faint hover:text-volt transition-colors text-[11px] font-bold tracking-widest uppercase"
        aria-label="Scroll to services"
      >
        <span>Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
