# Autoniex — Enterprise AI Systems & Growth Agency

<div align="center">

![Autoniex Banner](public/images/nova-crm.jpg)

### **Autonomous Workflows · Intelligent AI Agents · High-Converting Web Platforms**
*Engineered for Ambitious Enterprises in USA, UK, Canada & Globally*

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-Proprietary-brightgreen?style=for-the-badge)](LICENSE)

</div>

---

## ⚡ Overview

**Autoniex** is a premier digital agency web platform engineered using **Next.js 14 App Router**, **Three.js WebGL 3D graphics**, **Tailwind CSS**, and a **client-side LocalStorage CMS & Admin Dashboard**.

The website is specifically optimized for high-ticket corporate B2B clients in the USA, UK, and Canada, featuring sub-second page performance, interactive 3D WebGL particle simulations, and a full-featured Admin Portal that requires zero external database subscriptions.

---

## 🌟 Key Features

### 1. 🎛️ Comprehensive Admin CMS Dashboard (`/admin`)
- Accessible directly at `/admin` (Default PIN: `autoniex2026`).
- **Live Visual Management**:
  - **Portfolio Manager**: Add, edit, or remove projects. Upload custom screenshots or pick from 6 realistic enterprise presets.
  - **YouTube Video Support**: Attach any YouTube link to a case study — embeds and plays natively in the frontend case study dialog.
  - **Hero Section Editor**: Change headline, highlight phrase, guarantees, and lead metrics live.
  - **Capabilities Editor**: Edit all 4 service modules and bullet points.
  - **Pricing Models Editor**: Update packages, deliverables, and CTA buttons.
  - **FAQ Manager**: Add, reorder, or edit questions and answers.
  - **Custom Pages Builder**: Create new pages with custom URLs (`/p/your-slug`) with markdown support.
  - **Data Backup & Restore**: One-click JSON backup export and import.

### 2. 🎞️ 5 Rotating Enterprise Hero Node Cards
- Dynamic 2.8-second auto-rotator highlighting 5 real systems:
  - **AUTONIEX NODE**: Lead speed `< 45s`, Continuous Sprint.
  - **SAGE COPILOT**: Support Agent, `78% Deflection`, `< 8s` Resolution.
  - **PULSE ANALYTICS**: Sub-second telemetry charts, `< 28ms` edge latency.
  - **BLOOM FLAGSHIP**: Headless 3D commerce, `99/100` Lighthouse.
  - **LEDGER RECON**: Autonomous financial ops, `100% Audited`.
- Complete with pause/play controls, dot indicators, and countdown progress bar.

### 3. ☀️ / 🌙 High-Contrast Dark & Light Theme Engine
- Instant one-click toggle in the navbar.
- High-contrast **WCAG AAA compliant** typography for crisp readability in day mode.
- Cyber luxury dark mode with neon Volt `#c6f52e` accents and glassmorphism.
- User preference automatically saved in `localStorage`.

### 4. 🌐 3D Interactive WebGL Hero
- Engineered with **Three.js**:
  - 1,600 floating particle starfield.
  - Dual wireframe icosahedron rotating core with mouse-parallax response.
  - 14 floating geometric wireframe octahedrons/boxes.

### 5. 🚀 Hostinger & Cloud Static Deployment Ready
- Built using Next.js `output: 'export'`.
- Produces a 100% static, self-contained `out/` directory with clean `.htaccess` routing, HTTPS redirection, Gzip compression, and browser caching headers.
- Deployable to **Hostinger File Manager**, **Vercel**, **Netlify**, or **AWS S3 / CloudFront**.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router, Static Export) |
| **Language** | TypeScript (Strict Typing) |
| **Styling** | Tailwind CSS v3 (RGB Dynamic Channels) |
| **3D Graphics** | Three.js (WebGL Canvas) |
| **Icons** | Lucide React |
| **State & CMS** | React Context API + LocalStorage (`autoniex_cms_data_v1`) |
| **Typography** | Google Fonts (`Unbounded` + `Manrope`) |
| **Effects** | Canvas Confetti, CSS Glassmorphism |

---

## 📁 Project Structure

```text
Autoniex/
├── public/                     # Static assets (images, logo, .htaccess)
│   ├── images/                 # Enterprise UI screenshots
│   ├── logo.webp               # High-res Autoniex emblem
│   └── .htaccess               # Apache/Hostinger routing & security
├── src/
│   ├── app/
│   │   ├── admin/page.tsx      # Full Admin CMS Portal
│   │   ├── p/[slug]/page.tsx   # Dynamic Custom CMS Pages
│   │   ├── globals.css         # Dark/Light CSS Variables & Utilities
│   │   ├── layout.tsx          # Root Layout + SEO Metadata + Providers
│   │   └── page.tsx            # Main Landing Page
│   ├── components/             # Reusable UI Modules
│   │   ├── ContactBrief.tsx    # Interactive brief builder with confetti
│   │   ├── CustomPageContent.tsx
│   │   ├── EngageModels.tsx    # Pricing & Retainer Cards
│   │   ├── FAQ.tsx             # Smooth Accordion
│   │   ├── Footer.tsx          # Agency Footer & Admin Link
│   │   ├── Hero3D.tsx          # 3D WebGL Canvas + 5 Rotating Cards
│   │   ├── Navbar.tsx          # Animated Navbar + Dark/Light Toggle
│   │   ├── Portfolio.tsx       # Filterable Grid + Featured Slider
│   │   ├── PortfolioModal.tsx  # Deep Case Study Modal + YouTube Player
│   │   ├── PortfolioUploader.tsx
│   │   ├── Process.tsx         # 4-Week Sprint Methodology
│   │   ├── Services.tsx        # 4 Core Capability Cards
│   │   └── Ticker.tsx          # Infinite Capabilities Marquee
│   ├── context/
│   │   ├── SiteContext.tsx     # CMS Engine with LocalStorage persistence
│   │   └── ThemeContext.tsx    # Dark/Light mode theme state
│   ├── data/
│   │   └── portfolioData.ts    # Seed data & defaults
│   └── types/
│       └── index.ts            # Complete TypeScript interface models
├── out/                        # Production Static HTML export (Hostinger ready)
├── HOSTINGER_DEPLOYMENT_GUIDE.md # Step-by-step deployment guide
├── next.config.mjs             # Next.js export settings
├── package.json
├── tailwind.config.ts          # Custom colors, animations & font families
└── tsconfig.json
```

---

## 💻 Quick Start (Local Development)

### 1. Clone the repository
```bash
git clone https://github.com/M-Jazib/Autoniex.git
cd Autoniex
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🔒 Admin Portal Credentials

- **URL**: `http://localhost:3000/admin` (or `https://yourdomain.com/admin`)
- **Default PIN**: `autoniex2026`
- **Security**: PIN can be changed anytime under the **Settings & Backup** tab inside the admin portal.

---

## 🚀 Deployment to Hostinger

1. Run the static export build:
   ```bash
   npm run build
   ```
2. The complete website will be generated in the `out/` folder.
3. Open your **Hostinger Control Panel (hPanel)**:
   - Navigate to **Files** → **File Manager**.
   - Open the **`public_html`** folder.
   - Upload the contents of the `out/` folder (including `.htaccess`).
4. Your website is immediately live on your domain!

*For detailed step-by-step Hostinger instructions, see [HOSTINGER_DEPLOYMENT_GUIDE.md](HOSTINGER_DEPLOYMENT_GUIDE.md).*

---

## 📄 License & Rights

© 2026 Autoniex. All rights reserved. Built for enterprise autonomous intelligence and web systems.
