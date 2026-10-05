'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, Zap, Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import * as THREE from 'three';
import { useSiteContent } from '@/context/SiteContext';

interface HeroCardItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  tagPulse: boolean;
  image: string;
  alt: string;
  metric1Label: string;
  metric1Val: string;
  metric1Color: string;
  metric2Label: string;
  metric2Val: string;
  metric2Color: string;
  metric3Label: string;
  metric3Val: string;
  metric3Color: string;
}

const HERO_CARDS: HeroCardItem[] = [
  {
    id: 'card-1',
    title: 'n8n ENTERPRISE NODE',
    subtitle: 'Autonomous Workflow Engine',
    tag: 'ONLINE',
    tagPulse: true,
    image: '/images/nova-crm.jpg',
    alt: 'Real enterprise n8n workflow pipeline automation dashboard',
    metric1Label: 'Lead Response Speed:',
    metric1Val: '< 45 Seconds',
    metric1Color: 'text-volt',
    metric2Label: 'Target Region:',
    metric2Val: 'USA · UK · Canada',
    metric2Color: 'text-text',
    metric3Label: 'Weekly Deployment:',
    metric3Val: 'Continuous Sprint',
    metric3Color: 'text-cyber-teal',
  },
  {
    id: 'card-2',
    title: 'NOVACART AI COPILOT',
    subtitle: 'RAG Support & Helpdesk Agent',
    tag: '83% DEFLECTION',
    tagPulse: true,
    image: '/images/sage-agent.jpg',
    alt: 'Real enterprise n8n AI customer support ticket copilot',
    metric1Label: 'Average Resolution:',
    metric1Val: '< 1.2 Seconds',
    metric1Color: 'text-cyber-teal',
    metric2Label: 'CSAT Rating:',
    metric2Val: '4.9 / 5.0 Enterprise',
    metric2Color: 'text-volt',
    metric3Label: 'Knowledge Base:',
    metric3Val: 'Google Drive Sync',
    metric3Color: 'text-text',
  },
  {
    id: 'card-3',
    title: 'VOICE AI DISPATCHER',
    subtitle: '24/7 Phone & Calendar Agent',
    tag: 'REAL-TIME SYNC',
    tagPulse: true,
    image: '/images/ledger-bot.jpg',
    alt: 'n8n AI voice telephony agent and Google Calendar availability scheduler',
    metric1Label: 'Answer Rate:',
    metric1Val: '100% Inbound Calls',
    metric1Color: 'text-volt',
    metric2Label: 'Calendar Dispatch:',
    metric2Val: 'Instant Google Calendar',
    metric2Color: 'text-text',
    metric3Label: 'Human Handoff:',
    metric3Val: 'Automated VIP Alert',
    metric3Color: 'text-cyber-teal',
  },
  {
    id: 'card-4',
    title: 'HUBSPOT AI PIPELINE',
    subtitle: 'Deal Recovery & Inbound Sync',
    tag: 'GROQ LLM',
    tagPulse: false,
    image: '/images/orbit-marketing.jpg',
    alt: 'n8n automated HubSpot CRM deal acceleration and email follow up',
    metric1Label: 'Response Time:',
    metric1Val: 'Under 45s Drafts',
    metric1Color: 'text-volt',
    metric2Label: 'Deal Revival Rate:',
    metric2Val: '+24.6% Recovered ARR',
    metric2Color: 'text-cyber-orange',
    metric3Label: 'CRM Integration:',
    metric3Val: 'HubSpot · Gmail · Slack',
    metric3Color: 'text-cyber-teal',
  },
  {
    id: 'card-5',
    title: 'VECTOR RAG INGESTION',
    subtitle: 'Continuous Document Pipeline',
    tag: 'SUB-SECOND RAG',
    tagPulse: true,
    image: '/images/bloom-storefront.jpg',
    alt: 'n8n Google Drive document ingestion and OpenAI embeddings vector store',
    metric1Label: 'Semantic Search:',
    metric1Val: '< 800ms Retrieval',
    metric1Color: 'text-cyber-teal',
    metric2Label: 'Document Corpus:',
    metric2Val: '5,000+ Corporate SOPs',
    metric2Color: 'text-volt',
    metric3Label: 'Embedding Model:',
    metric3Val: 'OpenAI text-embedding-3',
    metric3Color: 'text-text',
  },
];

export default function Hero3D() {
  const { hero } = useSiteContent();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Rotating Hero Card state
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFading, setIsFading] = useState(false);

  // 2.8 second auto-rotation
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setActiveCardIndex((prev) => (prev + 1) % HERO_CARDS.length);
        setIsFading(false);
      }, 250);
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  function switchCard(index: number) {
    if (index === activeCardIndex || isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveCardIndex(index);
      setIsFading(false);
    }, 200);
  }

  const currentCard = HERO_CARDS[activeCardIndex];

  // Three.js WebGL background — immersive 3D scene
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer;
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
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200);
    camera.position.set(0, 2, 18);

    const C_VOLT   = 0xc6f52e;
    const C_TEAL   = 0x4fe0c0;
    const C_SOFT   = 0x6f7d5e;
    const C_PURPLE = 0x8855ff;

    // 1. Dense Star-field (three layers for parallax depth)
    function makeStars(count: number, spread: number, size: number, color: number, opacity: number) {
      const arr = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        arr[i * 3]     = (Math.random() - 0.5) * spread;
        arr[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.6;
        arr[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.5 - 10;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
      return { mesh: new THREE.Points(geo, new THREE.PointsMaterial({
        color, size, transparent: true, opacity,
        blending: THREE.AdditiveBlending, depthWrite: false,
      })), geo };
    }
    const { mesh: starsNear, geo: starsNearGeo } = makeStars(900,  55, 0.055, C_VOLT,   0.80);
    const { mesh: starsFar,  geo: starsFarGeo  } = makeStars(1800, 90, 0.035, C_TEAL,   0.45);
    const { mesh: starsPurp, geo: starsPurpGeo } = makeStars(600,  70, 0.045, C_PURPLE, 0.35);
    scene.add(starsNear, starsFar, starsPurp);

    // 2. Dual Icosahedron Core (Triple)
    const core = new THREE.Group();
    const ico1 = new THREE.Mesh(
      new THREE.IcosahedronGeometry(3.5, 1),
      new THREE.MeshBasicMaterial({ color: C_TEAL,   wireframe: true, transparent: true, opacity: 0.30 })
    );
    const ico2 = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.4, 0),
      new THREE.MeshBasicMaterial({ color: C_VOLT,   wireframe: true, transparent: true, opacity: 0.52 })
    );
    const ico3 = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.5, 0),
      new THREE.MeshBasicMaterial({ color: C_PURPLE, wireframe: true, transparent: true, opacity: 0.40 })
    );
    core.add(ico1, ico2, ico3);
    core.position.set(5, 0.5, -2);
    scene.add(core);

    // 3. Three Orbital Torus Rings
    const rings: THREE.Mesh[] = [];
    const ringDefs = [
      { r: 5.8, tube: 0.040, color: C_VOLT,   opacity: 0.50, rx: Math.PI / 4 },
      { r: 4.6, tube: 0.030, color: C_TEAL,   opacity: 0.40, rx: -Math.PI / 5 },
      { r: 7.2, tube: 0.022, color: C_PURPLE, opacity: 0.28, rx: Math.PI / 2.5 },
    ];
    for (const d of ringDefs) {
      const m = new THREE.Mesh(
        new THREE.TorusGeometry(d.r, d.tube, 4, 90),
        new THREE.MeshBasicMaterial({
          color: d.color, transparent: true, opacity: d.opacity,
          blending: THREE.AdditiveBlending, depthWrite: false,
        })
      );
      m.rotation.x = d.rx;
      m.position.copy(core.position);
      scene.add(m);
      rings.push(m);
    }

    // 4. Wormhole Tunnel
    const worm = new THREE.Mesh(
      new THREE.TorusGeometry(11, 0.7, 3, 64),
      new THREE.MeshBasicMaterial({ color: C_TEAL, wireframe: true, transparent: true, opacity: 0.10 })
    );
    worm.rotation.x = Math.PI / 2;
    worm.position.set(-3, 0, -12);
    scene.add(worm);

    // 5. Perspective Grid Floor
    const grid = new THREE.GridHelper(80, 36, C_VOLT, C_SOFT);
    (grid.material as THREE.Material & { transparent: boolean; opacity: number }).transparent = true;
    (grid.material as THREE.Material & { transparent: boolean; opacity: number }).opacity = 0.055;
    grid.position.set(0, -8, -6);
    scene.add(grid);

    // 6. Floating Wireframe Shapes
    const floaters: THREE.Mesh[] = [];
    const fGeos = [
      new THREE.OctahedronGeometry(0.6),
      new THREE.BoxGeometry(0.75, 0.75, 0.75),
      new THREE.TetrahedronGeometry(0.7),
      new THREE.DodecahedronGeometry(0.5, 0),
    ];
    for (let f = 0; f < 18; f++) {
      const col = [C_SOFT, C_TEAL, C_VOLT, C_PURPLE][f % 4];
      const m = new THREE.Mesh(
        fGeos[f % 4],
        new THREE.MeshBasicMaterial({ color: col, wireframe: true, transparent: true, opacity: 0.38 })
      );
      m.position.set((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 18, (Math.random() - 0.5) * 12 - 2);
      scene.add(m);
      floaters.push(m);
    }

    // 7. Energy Lines
    const lineGroup = new THREE.Group();
    for (let i = 0; i < 12; i++) {
      const pts = [
        new THREE.Vector3((Math.random() - 0.5) * 40, (Math.random() - 0.5) * 20, Math.random() * -15),
        new THREE.Vector3((Math.random() - 0.5) * 40, (Math.random() - 0.5) * 20, Math.random() * -5),
      ];
      const lGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const lMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? C_VOLT : C_TEAL,
        transparent: true,
        opacity: 0.12 + Math.random() * 0.10,
      });
      lineGroup.add(new THREE.Line(lGeo, lMat));
    }
    scene.add(lineGroup);

    // Resize Handler
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const isMob = w < 1024;
      const cPos = isMob ? new THREE.Vector3(0, -1, -5) : new THREE.Vector3(5, 0.5, -2);
      const cScale = isMob ? 0.6 : 1;
      core.position.copy(cPos);
      core.scale.setScalar(cScale);
      rings.forEach(r => { r.position.copy(cPos); r.scale.setScalar(cScale); });
    };
    window.addEventListener('resize', onResize);
    onResize();

    // Mouse Parallax
    let tX = 0, tY = 0, cX = 0, cY = 0; // mouse parallax
    const onMM = (e: MouseEvent) => {
      tX = (e.clientX / window.innerWidth  - 0.5) * 2;
      tY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMM, { passive: true });

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      cX += (tX - cX) * 0.035;
      cY += (tY - cY) * 0.035;
      camera.position.x = cX * 2.0;
      camera.position.y = 2 - cY * 1.5;
      camera.lookAt(0, 0, 0);

      core.rotation.x = t * 0.12;
      core.rotation.y = t * 0.20;
      ico1.rotation.y = -t * 0.16;
      ico2.rotation.x =  t * 0.25;
      ico3.rotation.z = -t * 0.30;

      rings[0].rotation.z =  t * 0.13;
      rings[1].rotation.y =  t * 0.10;
      rings[2].rotation.x = t * 0.07 + Math.PI / 2.5;

      worm.rotation.z = t * 0.04;
      const pulse = 1 + Math.sin(t * 0.8) * 0.04;
      worm.scale.setScalar(pulse);

      starsNear.rotation.y = t * 0.012;
      starsFar.rotation.y  = -t * 0.007;
      starsPurp.rotation.x = t * 0.005;

      floaters.forEach((m, idx) => {
        m.rotation.x += 0.007 * (idx % 2 === 0 ? 1 : -1);
        m.rotation.y += 0.010;
        m.position.y += Math.sin(t * 1.1 + idx) * 0.005;
      });

      lineGroup.rotation.y = t * 0.015;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMM);
      renderer.dispose();
      starsNearGeo.dispose();
      starsFarGeo.dispose();
      starsPurpGeo.dispose();
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
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-line bg-surface/80 backdrop-blur-md mb-6 shadow-neon">
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

          {/* Right Column: Rotating Enterprise System Node Cards */}
          <div className="lg:col-span-5 flex justify-center items-center relative perspective-1000">
            {/* Spinning Orbit Ring SVG */}
            <div className="absolute w-[360px] sm:w-[420px] aspect-square pointer-events-none opacity-40 animate-spin-slow">
              <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-volt stroke-[1.2]">
                <ellipse cx="100" cy="100" rx="90" ry="34" transform="rotate(-25 100 100)" />
                <ellipse cx="100" cy="100" rx="90" ry="34" transform="rotate(35 100 100)" strokeDasharray="6 8" />
              </svg>
            </div>

            {/* Glowing Hero Interactive Card with 5 Rotating Nodes */}
            <div
              className="relative z-10 w-[300px] sm:w-[350px] rounded-3xl bg-surface/95 border border-volt/40 shadow-card p-6 backdrop-blur-xl animate-float-slow transform-style-3d hover:scale-105 transition-all duration-300 group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Media Preview Box (Realistic UI Screenshot) */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-line bg-surface-2 shadow-inner">
                <Image
                  src={currentCard.image}
                  alt={currentCard.alt}
                  fill
                  className={`object-cover transition-all duration-500 ${isFading ? 'opacity-30 scale-105' : 'opacity-100 scale-100'}`}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge on image */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                    {activeCardIndex + 1} / {HERO_CARDS.length}
                  </span>
                </div>

                {/* Pause/Play indicator */}
                <button
                  type="button"
                  onClick={() => setIsPaused(!isPaused)}
                  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 backdrop-blur text-white hover:text-volt flex items-center justify-center transition-colors border border-white/15"
                  title={isPaused ? 'Resume auto-rotation' : 'Pause rotation'}
                  aria-label={isPaused ? 'Resume auto-rotation' : 'Pause rotation'}
                >
                  {isPaused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3" />}
                </button>
              </div>

              {/* Card Header & Status */}
              <div className="flex items-center justify-between pb-3 border-b border-line">
                <div>
                  <h4 className="font-display font-bold text-sm text-text flex items-center gap-2">
                    {currentCard.title}
                  </h4>
                  <p className="text-[11px] text-text-muted">{currentCard.subtitle}</p>
                </div>
                <span className="flex items-center gap-1 text-[10px] font-extrabold text-volt bg-volt/10 px-2 py-0.5 rounded-full border border-volt/30">
                  {currentCard.tagPulse && (
                    <span className="w-1.5 h-1.5 rounded-full bg-volt animate-ping" />
                  )}
                  {currentCard.tag}
                </span>
              </div>

              {/* Dynamic Live Metrics */}
              <div className="mt-3.5 space-y-2 text-xs text-text-muted">
                <div className="flex justify-between items-center">
                  <span>{currentCard.metric1Label}</span>
                  <span className={`font-bold ${currentCard.metric1Color}`}>
                    {currentCard.metric1Val}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>{currentCard.metric2Label}</span>
                  <span className={`font-semibold ${currentCard.metric2Color}`}>
                    {currentCard.metric2Val}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>{currentCard.metric3Label}</span>
                  <span className={`font-semibold ${currentCard.metric3Color}`}>
                    {currentCard.metric3Val}
                  </span>
                </div>
              </div>

              {/* 5 Card Dot Navigation + Prev/Next Controls */}
              <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {HERO_CARDS.map((card, idx) => (
                    <button
                      key={card.id}
                      type="button"
                      onClick={() => switchCard(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeCardIndex
                          ? 'w-6 bg-volt'
                          : 'w-2 bg-text-muted/30 hover:bg-text-muted/60'
                      }`}
                      aria-label={`Jump to ${card.title}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => switchCard((activeCardIndex - 1 + HERO_CARDS.length) % HERO_CARDS.length)}
                    className="p-1 rounded-md text-text-muted hover:text-volt hover:bg-volt/10 transition-colors"
                    aria-label="Previous card"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => switchCard((activeCardIndex + 1) % HERO_CARDS.length)}
                    className="p-1 rounded-md text-text-muted hover:text-volt hover:bg-volt/10 transition-colors"
                    aria-label="Next card"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Mini progress timer bar */}
              {!isPaused && (
                <div className="absolute -bottom-[1px] left-6 right-6 h-[2px] bg-line/40 rounded-full overflow-hidden">
                  <div
                    key={activeCardIndex}
                    className="h-full bg-volt progress-animate"
                  />
                </div>
              )}
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
