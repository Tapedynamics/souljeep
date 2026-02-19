# 🚗 SOUL JEEP WEBSITE - PROGRESS REPORT

---

## Sessione 19 Febbraio 2026

### ✅ Completato
- [x] **Nascosti tour Teide de Día e Costero** - Solo il Teide Sunset resta visibile sul sito
  - Aggiunto campo `visible: boolean` all'interfaccia `Tour` in `data/tours.ts`
  - `teide-sunset`: `visible: true` | `teide-by-day` e `coastal-tour`: `visible: false`
  - Aggiunto helper `getVisibleTours()` e aggiornato `getFeaturedTours()` per filtrare per visibilità
  - Homepage mostra solo 1 tour card (Teide Sunset)
  - Pagina `/tours` mostra solo sezione Teide con il sunset tour
  - `/tours/teide-by-day` e `/tours/coastal-tour` restituiscono 404
  - `generateMetadata()` non genera metadata SEO per tour nascosti
  - `generateStaticParams()` genera solo la pagina sunset
  - Sitemap include solo `/tours/teide-sunset`
  - Rimosso bottone "Explorar Otros Tours" dalla pagina dettaglio tour
  - Gallery invariata (mostra tutte le foto di paesaggio indipendentemente dai tour)

### Come riattivare i tour
Cambiare `visible: false` → `visible: true` in `data/tours.ts` per i tour desiderati. Zero altre modifiche necessarie.

### Commit
- `1e73b0a` - Hide all tours except Teide Sunset from the website

---

## Sessione 9 Gennaio 2026

### ✅ Completato
- [x] **Google Analytics** - Aggiunto tracking G-1GVZR8GLG7 in `app/layout.tsx`
  - Usa `next/script` con strategy `afterInteractive`
  - Attivo su tutte le pagine automaticamente

- [x] **WhatsApp come unico contatto** - Sostituiti tutti i link `tel:` con WhatsApp
  - Footer → WhatsApp
  - FinalCTASection (Homepage) → WhatsApp
  - Tours page (2 punti) → WhatsApp
  - FAQ page → WhatsApp
  - Contact page → WhatsApp

- [x] **Logo header aggiornato** - Nuovo logo `soul jeep.png` con sfondo bianco
  - Rimosso logo trasparente (non piaceva)
  - File: `/public/images/logo.png`

### Commit
- `3a71983` - Add Google Analytics tracking (G-1GVZR8GLG7)
- `3621ec3` - Update progress report
- `c8cc2ef` - Replace all phone/tel links with WhatsApp contact
- `b0e3cda` - Use transparent logo in header (reverted)
- `b1f9029` - Use logo with white background in header

---

## Sessione di Sviluppo - 20 Novembre 2025

---

## 📊 STATO ATTUALE: FASE 1 COMPLETATA (100%)

### ✅ COMPLETATO

#### **Setup Tecnico**
- [x] Next.js 15.0.3 + TypeScript + Tailwind CSS v4
- [x] Struttura progetto completa
- [x] Componenti UI riutilizzabili (6 componenti)
- [x] Design system con brand colors
- [x] Fonts: Inter (body) + Poppins (headings)

#### **Pagine Create (9 pagine)**
- [x] `/` - Homepage
- [x] `/tours` - Tours Listing
- [x] `/tours/teide-sunset` - Dettaglio Tour
- [x] `/tours/teide-by-day` - Dettaglio Tour
- [x] `/tours/coastal-tour` - Dettaglio Tour
- [x] `/gallery` - Gallery con Lightbox
- [x] `/about` - About Us
- [x] `/contact` - Contact Form + Map
- [x] `/faq` - FAQ Accordion

#### **Immagini Integrate**
- [x] 15 foto professionali da "foto e video" folder
- [x] 3 hero images (una per tour)
- [x] 12 gallery images (4 per tour)
- [x] Paths aggiornati in data/tours.ts

#### **Componenti**
```
components/
├── ui/
│   ├── Button.tsx         ✅ 4 varianti (primary, secondary, outline, ghost)
│   ├── Container.tsx      ✅ Responsive wrapper
│   └── Section.tsx        ✅ Sezioni con backgrounds
├── tour/
│   └── TourCard.tsx       ✅ Card con Next.js Image
└── layout/
    ├── Header.tsx         ✅ Nav + Mobile menu
    └── Footer.tsx         ✅ Footer completo
```

#### **Data Structure**
```
data/
├── tours.ts              ✅ 3 tour completi con prezzi, itinerari, highlights
└── company.ts            ✅ Info aziendali, contatti, FAQ, features
```

#### **Code Quality**
- [x] Code review completata (agent)
- [x] Security fixes applicati (rel="noopener noreferrer")
- [x] Performance optimization (Next.js Image)
- [x] TypeScript strict mode
- [x] Zero ESLint errors
- [x] SEO metadata completo
- [x] Mobile-first responsive

---

## 🎯 PROSSIMA SESSIONE: HERO SECTIONS + VIDEO + ANIMAZIONI

### 🔴 PRIORITÀ ALTA - DA FARE SUBITO

#### **1. Hero Sections - Redesign Completo**

**Problema attuale:**
- Hero sections non centrate correttamente
- Mancano dinamismo e movimento
- Solo gradients statici, no video/immagini dinamiche
- Nessuna animazione coinvolgente

**Soluzione proposta:**

##### **A) Homepage Hero (`app/page.tsx` linee 14-69)**
```typescript
// Implementare:
- Video background full-screen (loop autoplay muted)
- Carosello di video/immagini che cambia ogni 5 secondi
- Animazioni Framer Motion per titolo e CTA
- Parallax effect su scroll
- Overlay gradient animato
- Particles.js o simili per effetto dinamico
```

**Video disponibili:**
```
foto e video/video/
├── clip SOUL JEEP.mp4        // Video principale brand
├── clip corto.mp4            // Clip veloce tour
├── videoclip.mp4             // Video promozionale
├── Teide .mp4                // Teide specifico
├── ready for .mp4            // Ready for adventure
└── Altri 11 video MP4/MOV
```

**Specifiche tecniche:**
- Convertire video per web (formato webm + mp4 fallback)
- Compressione per velocità loading
- Lazy loading per mobile
- Autoplay solo su desktop (risparmio banda mobile)

##### **B) Tour Detail Heroes (`app/tours/[slug]/page.tsx`)**
```typescript
// Per ogni tour, implementare:
- Video specifico del tour in background
- Animazione fade-in on load
- Scroll indicator animato
- Booking CTA con pulse effect
- Quick info bar con slide-in animation
```

**Mapping Video → Tour:**
```
Teide Sunset:  → Teide .mp4 + sunset clips
Teide Day:     → ready for .mp4 + day clips
Coastal:       → coastal tour videos
```

##### **C) Secondary Pages Heroes**
```typescript
Gallery Hero:  → Slideshow automatico delle migliori foto
About Hero:    → Video brand "clip SOUL JEEP.mp4"
Contact Hero:  → Map animation + office video
FAQ Hero:      → Minimal con animazione FAQ icons
```

---

#### **2. Carosello Video/Immagini**

**Implementazione:**

**Opzione A: Carosello Video Homepage**
```typescript
// Nuovo componente: components/common/VideoCarousel.tsx
- Autoplay con transizione fade
- Indicatori/dots in basso
- Pausa on hover (opzionale)
- 3-5 video in rotation
- Smooth transitions (2s duration)
```

**Opzione B: Hero Slider con Swiper.js**
```bash
npm install swiper
```
```typescript
// Features:
- Slide automatico ogni 6 secondi
- Navigazione arrows + dots
- Lazy loading delle slide
- Parallax layers
- Zoom effect on slide change
```

**Opzione C: Stile Parallax/Scroll-Triggered**
```typescript
// Con Framer Motion:
- Video fisso in background
- Elementi in foreground che si muovono a velocità diverse
- Text animations on scroll
- Reveal effects per CTAs
```

---

#### **3. Animazioni e Movimento**

**Da implementare con Framer Motion:**

##### **A) Page Transitions**
```typescript
// app/layout.tsx
- Fade in/out tra pagine
- Slide up per nuove pagine
- Smooth scroll
```

##### **B) Scroll Animations**
```typescript
// Elementi che appaiono scrollando:
- Fade up per tour cards
- Stagger animation per features grid
- Number counters (es: "500+ Happy Customers")
- Progress bars
- Image reveals con clip-path
```

##### **C) Micro-interactions**
```typescript
// Hover states avanzati:
- Button: scale + shadow
- Images: zoom + brightness
- Cards: lift + border glow
- Icons: rotate/bounce
```

##### **D) Hero Animations**
```typescript
// Al caricamento pagina:
- Title: slide in + fade (stagger per lettere)
- Subtitle: fade + slide from left
- CTAs: scale + bounce
- Scroll indicator: bounce loop infinito
- Background: ken burns effect (zoom lento)
```

**Esempio codice base:**
```typescript
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

<motion.h1
  initial="hidden"
  animate="visible"
  variants={heroVariants}
>
  Discover Tenerife
</motion.h1>
```

---

#### **4. Video Optimization Setup**

**File da processare:**
```bash
# Creare cartella ottimizzata
mkdir -p public/videos/optimized

# Per ogni video, creare 3 versioni:
1. Desktop HD (1920x1080, 30fps, ~5MB)
2. Mobile (1280x720, 30fps, ~2MB)
3. Thumbnail (1920x1080, 1 frame JPG, ~200KB)
```

**Tools necessari:**
```bash
# Installare ffmpeg (se non presente)
# Windows: choco install ffmpeg
# Mac: brew install ffmpeg

# Script conversione:
ffmpeg -i input.mp4 -vf scale=1920:1080 -c:v libx264 -crf 23 -preset medium output-hd.mp4
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -crf 25 -preset medium output-mobile.mp4
ffmpeg -i input.mp4 -vframes 1 -q:v 2 thumbnail.jpg
```

---

### 📦 ASSETS DISPONIBILI

#### **Video** (16 files, ~487 MB)
```
✅ Disponibili in: foto e video/video/
- clip SOUL JEEP.mp4           → Video brand principale
- clip corto.mp4               → Quick tour clip
- videoclip.mp4                → Promo video
- Teide .mp4                   → Teide specifico
- ready for .mp4               → "Ready for adventure"
- eh eh corto.mp4              → Fun/engaging clip
- clip black Friday.mp4        → Promo seasonale
- gancio foto.mp4              → Hook/teaser
- Altri 8 MP4/MOV files        → Vari footage
```

#### **Foto** (388 files totali)
```
✅ Usate: 15 foto (3 tours × 5 immagini)
✅ Disponibili: 373 foto non ancora usate
- TEIDE S. 01-11: 150 foto
- TEIDE S. 04-08: 126 foto
- COASTAL sept: 112 foto
```

#### **Foto Clienti** (48 files)
```
✅ Disponibili: foto e video/foto-clienti/FOTO CLIENTI GOOGLE/
- unnamed (1-48).webp
→ Da usare per: social proof, testimonials, gallery
```

---

### 🛠 COMPONENTI DA CREARE (Prossima Sessione)

#### **1. VideoHero.tsx**
```typescript
// components/common/VideoHero.tsx
interface VideoHeroProps {
  videoSrc: string;
  mobileVideoSrc?: string;
  poster: string;
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    href: string;
  };
}
```

#### **2. VideoCarousel.tsx**
```typescript
// components/common/VideoCarousel.tsx
interface VideoCarouselProps {
  videos: {
    src: string;
    title: string;
    poster: string;
  }[];
  autoplayInterval?: number;
  showControls?: boolean;
}
```

#### **3. AnimatedSection.tsx**
```typescript
// components/common/AnimatedSection.tsx
// Wrapper per sezioni con scroll animations
interface AnimatedSectionProps {
  children: ReactNode;
  animation: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight';
  delay?: number;
}
```

#### **4. ParallaxImage.tsx**
```typescript
// components/common/ParallaxImage.tsx
// Immagini con effetto parallasse
```

#### **5. NumberCounter.tsx**
```typescript
// components/common/NumberCounter.tsx
// Contatori animati (es: "500+ Tours Completed")
```

---

### 📋 CHECKLIST PROSSIMA SESSIONE

#### **Setup Iniziale**
- [ ] Installare Swiper.js (`npm install swiper`)
- [ ] Installare react-player (opzionale, per video player avanzato)
- [ ] Creare folder `/public/videos/`
- [ ] Ottimizzare video con ffmpeg

#### **Homepage Hero**
- [ ] Implementare VideoCarousel component
- [ ] Aggiungere 3-5 video in rotazione
- [ ] Animazioni Framer Motion per titolo/CTA
- [ ] Parallax scroll effect
- [ ] Mobile-responsive (pause video su mobile)
- [ ] Autoplay con muted

#### **Tour Pages Hero**
- [ ] Video background specifico per tour
- [ ] Animazioni fade-in on load
- [ ] Scroll indicator animato
- [ ] Pulse effect su CTA
- [ ] Ottimizzare per mobile

#### **Gallery Page**
- [ ] Aggiungere slideshow header
- [ ] Transizioni smooth tra foto
- [ ] Ken Burns effect (zoom lento)

#### **Animazioni Generali**
- [ ] Page transitions (fade in/out)
- [ ] Scroll animations per cards (fade up + stagger)
- [ ] Hover states avanzati
- [ ] Number counters
- [ ] Progress bars/loading states

#### **Testing**
- [ ] Test su tutti i dispositivi
- [ ] Performance check (video loading)
- [ ] Lighthouse score
- [ ] Cross-browser testing

---

## 🎨 DESIGN REFERENCE - HERO DINAMICO

### **Ispirazione Design:**

**Stile A: Video Full-Screen + Overlay**
```
┌─────────────────────────────────────┐
│  [VIDEO BACKGROUND LOOP]            │
│    ┌─────────────────────┐          │
│    │  Discover Tenerife  │ ← Fade in
│    │  In Your Own Jeep   │ ← Slide up
│    │                     │          │
│    │  [Book Now] [Tours] │ ← Scale in
│    └─────────────────────┘          │
│                                     │
│         ⌄ Scroll indicator          │
└─────────────────────────────────────┘
```

**Stile B: Carosello con Transizioni**
```
┌─────────────────────────────────────┐
│  Video 1 → Fade → Video 2 → Fade    │
│  ○ ● ○ ← Indicators                 │
│                                     │
│    SOUL JEEP EXPERIENCE             │
│    Drive Your Adventure             │
│                                     │
│    [Explore Tours →]                │
└─────────────────────────────────────┘
```

**Stile C: Parallax Layers**
```
┌─────────────────────────────────────┐
│  Layer 1: Video (slow scroll)       │
│  Layer 2: Gradient overlay          │
│  Layer 3: Text (fast scroll)        │
│  Layer 4: CTAs (faster scroll)      │
│                                     │
│  → Scroll genera effetto profondità │
└─────────────────────────────────────┘
```

---

## 💻 COMANDI UTILI

### **Sviluppo**
```bash
cd website
npm run dev          # Start dev server (porta 3000 o 3001/3002)
npm run build        # Build production
npm run start        # Start production server
npm run lint         # ESLint check
```

### **Gestione Video**
```bash
# Convertire video per web (desktop)
ffmpeg -i "input.mp4" -vf scale=1920:1080 -c:v libx264 -crf 23 -preset medium -movflags +faststart public/videos/video-name-hd.mp4

# Convertire per mobile
ffmpeg -i "input.mp4" -vf scale=1280:720 -c:v libx264 -crf 25 -preset medium -movflags +faststart public/videos/video-name-mobile.mp4

# Estrarre thumbnail
ffmpeg -i "input.mp4" -vframes 1 -q:v 2 public/videos/video-name-poster.jpg

# Batch conversion di tutti i video
for file in *.mp4; do
  ffmpeg -i "$file" -vf scale=1920:1080 -c:v libx264 -crf 23 -preset medium -movflags +faststart "../optimized/${file%.*}-hd.mp4"
done
```

### **Installazioni Necessarie**
```bash
# Per carosello video
npm install swiper

# Per video player avanzato (opzionale)
npm install react-player

# Per animazioni avanzate (già installato: framer-motion)
# npm install framer-motion
```

---

## 📁 STRUTTURA FILES ATTUALE

```
souljeep/
├── foto e video/              ← SOURCE MATERIAL
│   ├── video/                 16 video files (487 MB)
│   ├── shooting-ale/
│   │   └── SHOOTING ALE/
│   │       ├── TEIDE S. 01-11/    150 foto
│   │       ├── TEIDE S. 04-08/    126 foto
│   │       └── COASTAL sept/      112 foto
│   ├── foto-clienti/          48 webp files
│   ├── foto-revendedor/       19 foto
│   └── foto-ufficio/          69 foto
│
└── website/                   ← NEXT.JS PROJECT
    ├── app/
    │   ├── layout.tsx         Root layout
    │   ├── page.tsx           Homepage ← DA MODIFICARE
    │   ├── tours/
    │   │   ├── page.tsx       Tours listing
    │   │   └── [slug]/
    │   │       ├── page.tsx   Tour detail ← DA MODIFICARE
    │   │       └── not-found.tsx
    │   ├── gallery/
    │   │   └── page.tsx       Gallery ← DA MODIFICARE
    │   ├── about/
    │   │   └── page.tsx       About ← DA MODIFICARE
    │   ├── contact/
    │   │   └── page.tsx       Contact
    │   └── faq/
    │       └── page.tsx       FAQ
    │
    ├── components/
    │   ├── ui/
    │   │   ├── Button.tsx
    │   │   ├── Container.tsx
    │   │   └── Section.tsx
    │   ├── tour/
    │   │   └── TourCard.tsx
    │   ├── layout/
    │   │   ├── Header.tsx
    │   │   └── Footer.tsx
    │   └── common/            ← DA CREARE
    │       ├── VideoHero.tsx  (da creare)
    │       ├── VideoCarousel.tsx (da creare)
    │       ├── AnimatedSection.tsx (da creare)
    │       └── ParallaxImage.tsx (da creare)
    │
    ├── data/
    │   ├── tours.ts           Tour data
    │   └── company.ts         Company info
    │
    ├── public/
    │   ├── images/
    │   │   ├── tours/         15 foto (5 per tour)
    │   │   └── hero/          1 foto main
    │   └── videos/            ← DA CREARE E POPOLARE
    │       ├── hero/
    │       ├── tours/
    │       └── backgrounds/
    │
    └── lib/
        └── utils/
            └── cn.ts          Utility className
```

---

## 🎯 OBIETTIVI FASE 2 (Prossima Sessione)

### **Risultati Attesi:**
1. ✅ Hero sections completamente rinnovate con video
2. ✅ Carosello video funzionante
3. ✅ Animazioni Framer Motion implementate
4. ✅ Effetti parallax e scroll-triggered
5. ✅ Micro-interactions su hover
6. ✅ Page transitions smooth
7. ✅ Performance ottimizzata (video compressi)
8. ✅ Mobile-responsive (video paused su mobile)

### **Metriche di Successo:**
- Lighthouse Performance: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Total Blocking Time: < 300ms

---

## 🔗 LINK E RISORSE

### **Server Locale**
- Dev Server: http://localhost:3002
- Network: http://192.168.1.37:3002

### **Documentazione**
- Next.js 15: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion/
- Swiper.js: https://swiperjs.com/react
- Tailwind CSS: https://tailwindcss.com/docs

### **FareHarbor Booking**
- Account: souljeep
- Booking URL: https://fareharbor.com/embeds/book/souljeep/

### **Contatti Cliente**
- Location: C.C. Aquamall, Local 13/B, Costa Adeje
- Phone: +34 822 68 45 04
- Hours: 9:00 - 22:00 (7 days)

---

## 📝 NOTE TECNICHE

### **Performance Video**
- Usare formato WebM per Chrome/Firefox
- MP4 come fallback per Safari
- Poster image per loading state
- Preload="metadata" per faster loading
- Autoplay solo su WiFi (optional)

### **Mobile Strategy**
```typescript
// Detect connection e device
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const isSlowConnection = navigator.connection?.effectiveType === '2g' || '3g';

if (isMobile || isSlowConnection) {
  // Show poster image only
  // Or low-res video
} else {
  // Full HD video
}
```

### **SEO Considerations**
- Video non influisce su SEO se usato come background
- Mantenere testi accessibili (non dentro video)
- Alt text su poster images
- Schema.org VideoObject per video content pages

---

## 🚨 ISSUES DA RISOLVERE

### **Known Issues:**
1. ⚠️ metadataBase warning (già fixato ma warning persiste)
2. ⚠️ Vecchi path immagini ancora nei 404 logs (normale, cache)
3. ✅ Next.js Image validation OK dopo path update

### **Da Testare:**
- [ ] Performance con video su mobile
- [ ] Autoplay compatibility (browser policies)
- [ ] Video bandwidth su 4G/5G
- [ ] Safari video playback
- [ ] iOS muted autoplay

---

## 💡 IDEE AGGIUNTIVE (FUTURE)

### **Enhanced Features (Fase 3+)**
- [ ] 360° tour virtuale (se hanno foto 360°)
- [ ] Drone footage integration
- [ ] Customer video testimonials
- [ ] Behind-the-scenes content
- [ ] Live Instagram stories integration
- [ ] Weather widget (condizioni Teide real-time)
- [ ] Tour availability calendar
- [ ] Virtual reality preview (WebXR)

---

## ✅ CHECKLIST SESSIONE ATTUALE (COMPLETATA)

- [x] Setup Next.js 15 + TypeScript
- [x] Configurazione Tailwind CSS v4
- [x] Struttura componenti UI
- [x] Data structure (tours + company)
- [x] Homepage completa
- [x] Header + Footer
- [x] 3 Tour detail pages
- [x] Tours listing page
- [x] Gallery page
- [x] About page
- [x] Contact page
- [x] FAQ page
- [x] Code review + security fixes
- [x] Performance optimization
- [x] 15 immagini integrate
- [x] SEO metadata completo
- [x] Mobile responsive
- [x] Test completo

**SESSIONE CHIUSA CON SUCCESSO** ✅

---

## 🎬 READY FOR NEXT SESSION

**File salvato**: `/PROGRESS-REPORT.md`
**Server**: http://localhost:3002 (ATTIVO)
**Git Status**: Not initialized (da fare push se necessario)

**Prossima action**: Hero redesign + Video integration + Animations

---

*Report generato: 20 Novembre 2025*
*Sviluppatore: Claude Code Agent*
*Cliente: Soul Jeep Experience, Tenerife*
