# 🎬 SOUL JEEP - PROSSIMA SESSIONE: HERO + VIDEO + ANIMAZIONI

## 🎯 OBIETTIVO PRINCIPALE
Trasformare le sezioni hero statiche in esperienze dinamiche e coinvolgenti con video, animazioni e movimento.

---

## 🔴 PRIORITÀ IMMEDIATA

### 1. HOMEPAGE HERO - Video Carosello
**File**: `website/app/page.tsx` (linee 14-69)

**Attuale**: Gradient statico con placeholder
**Target**: Video background con carosello rotante

**Video da usare**:
```
1. clip SOUL JEEP.mp4       → Main brand video
2. ready for .mp4           → Adventure mood
3. Teide .mp4               → Landscape showcase
4. clip corto.mp4           → Quick dynamic clip
5. videoclip.mp4            → Promo highlight
```

**Features**:
- ✅ Autoplay loop muted
- ✅ Transizione fade ogni 6 secondi
- ✅ Pause on hover
- ✅ Indicatori/dots
- ✅ Overlay gradient animato
- ✅ Mobile: poster image (no autoplay per risparmio banda)

---

### 2. TOUR DETAIL HEROES
**Files**: `website/app/tours/[slug]/page.tsx`

**Mapping Video → Tour**:
```
/tours/teide-sunset   → Teide .mp4 + sunset clips
/tours/teide-by-day   → ready for .mp4 + daytime footage
/tours/coastal-tour   → coastal video clips
```

**Features**:
- ✅ Video specifico per tour
- ✅ Ken Burns effect (zoom lento)
- ✅ Scroll indicator animato (bounce)
- ✅ CTA con pulse effect
- ✅ Quick info con slide-in

---

### 3. ANIMAZIONI FRAMER MOTION

**Da implementare**:
```typescript
// Homepage
- Title: Fade + slide up con letter stagger
- Subtitle: Fade + slide from left
- CTAs: Scale + bounce in
- Tour cards: Fade up + stagger delay
- Features: Parallax scroll

// Tour Pages
- Hero: Fade in on load
- Itinerary: Scroll-triggered fade up
- Gallery: Grid stagger animation
- Price cards: Scale on hover

// All Pages
- Page transitions: Fade in/out
- Scroll animations: Intersection Observer
- Hover effects: Scale + shadow
```

---

## 📦 SETUP NECESSARIO

### Pacchetti da installare:
```bash
cd website
npm install swiper                    # Per carosello
npm install react-player             # Video player (optional)
# framer-motion già installato ✅
```

### Ottimizzare video:
```bash
# Creare cartella
mkdir -p public/videos/hero
mkdir -p public/videos/tours

# Copiare video ottimizzati da "foto e video/video/"
# (script ffmpeg nel PROGRESS-REPORT.md)
```

---

## 🛠 COMPONENTI DA CREARE

### 1. VideoHero.tsx
```typescript
// components/common/VideoHero.tsx
// Hero con video background singolo
interface VideoHeroProps {
  videoSrc: string;
  posterSrc: string;
  title: string;
  subtitle?: string;
  cta?: { text: string; href: string }[];
  overlay?: boolean;
}
```

### 2. VideoCarousel.tsx
```typescript
// components/common/VideoCarousel.tsx
// Carosello rotante di video
interface VideoCarouselProps {
  videos: Array<{
    src: string;
    poster: string;
    title?: string;
  }>;
  interval?: number; // default 6000ms
  showIndicators?: boolean;
  pauseOnHover?: boolean;
}
```

### 3. AnimatedSection.tsx
```typescript
// components/common/AnimatedSection.tsx
// Wrapper per scroll animations
interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight';
  delay?: number;
  threshold?: number; // Intersection Observer
}
```

---

## 📋 STEP-BY-STEP PLAN

### FASE 1: Setup Video (30 min)
- [ ] Creare folder `/public/videos/`
- [ ] Copiare 5 video principali
- [ ] Creare poster thumbnails (1 frame per video)
- [ ] Test video playback nel browser

### FASE 2: VideoCarousel Component (1h)
- [ ] Creare `components/common/VideoCarousel.tsx`
- [ ] Implementare Swiper con video support
- [ ] Aggiungere controls (dots, pause on hover)
- [ ] Responsive mobile (poster only)
- [ ] Test cross-browser

### FASE 3: Homepage Hero (45 min)
- [ ] Sostituire hero attuale con VideoCarousel
- [ ] Aggiungere 5 video
- [ ] Animazioni Framer Motion per testo
- [ ] Overlay gradient animato
- [ ] Test performance

### FASE 4: Tour Heroes (1h)
- [ ] Creare VideoHero component
- [ ] Implementare per 3 tour pages
- [ ] Mapping video specifici
- [ ] Ken Burns effect
- [ ] Scroll animations

### FASE 5: Animazioni Generali (1h 30min)
- [ ] Page transitions
- [ ] Scroll-triggered animations per cards
- [ ] Hover effects avanzati
- [ ] Number counters (opzionale)
- [ ] Parallax sections

### FASE 6: Polish & Testing (45 min)
- [ ] Mobile testing
- [ ] Performance check (Lighthouse)
- [ ] Cross-browser testing
- [ ] Video loading optimization
- [ ] Fix eventuali bugs

**TEMPO TOTALE STIMATO: 5-6 ore**

---

## 🎨 DESIGN SPECS

### Video Carosello Homepage
```
┌─────────────────────────────────────────┐
│                                         │
│   [VIDEO BACKGROUND - AUTOPLAY LOOP]    │
│                                         │
│   Discover Tenerife                     │ ← Fade in + Slide up
│   In Your Own Jeep                      │ ← Stagger animation
│                                         │
│   [Book Adventure →] [Explore Tours]    │ ← Scale + Bounce
│                                         │
│   ○ ● ○ ○ ○    Indicators               │
│                                         │
│   ⌄  Scroll to explore                  │ ← Bounce loop
│                                         │
└─────────────────────────────────────────┘
```

### Tour Detail Hero
```
┌─────────────────────────────────────────┐
│   [TOUR VIDEO BACKGROUND]               │
│                                         │
│   Teide Sunset Tour                     │
│   Magic on the Volcano                  │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━        │
│   [3 hours] [2-4 people] [From €290]   │ ← Slide in
│                                         │
│   [Book This Tour] [View Itinerary ⌄]   │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🚀 COMANDI RAPIDI

```bash
# Start dev server
cd website && npm run dev

# Installare dipendenze
npm install swiper react-player

# Build production
npm run build

# Ottimizzare singolo video (HD)
ffmpeg -i input.mp4 -vf scale=1920:1080 -c:v libx264 -crf 23 -preset medium -movflags +faststart output-hd.mp4

# Ottimizzare per mobile
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -crf 25 -preset medium -movflags +faststart output-mobile.mp4

# Estrarre poster
ffmpeg -i input.mp4 -vframes 1 -q:v 2 poster.jpg
```

---

## 📍 FILES DA MODIFICARE

```
Priority Files:
1. app/page.tsx                    🔴 Homepage hero
2. components/common/VideoCarousel.tsx  🔴 Nuovo componente
3. components/common/VideoHero.tsx      🔴 Nuovo componente
4. app/tours/[slug]/page.tsx       🔴 Tour detail heroes
5. components/common/AnimatedSection.tsx 🟡 Scroll animations
6. app/layout.tsx                  🟡 Page transitions
7. app/gallery/page.tsx            🟢 Slideshow header
```

---

## ⚡ QUICK WINS (Fare Subito)

### 1. Pulse Animation per CTA (5 min)
```typescript
// In Button.tsx, aggiungere variant:
<button className="animate-pulse-subtle">
  Book Now
</button>

// In tailwind.config o globals.css:
@keyframes pulse-subtle {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

### 2. Scroll Indicator Animato (10 min)
```typescript
// Homepage hero:
<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ repeat: Infinity, duration: 1.5 }}
>
  <ChevronDown />
</motion.div>
```

### 3. Fade Page Transitions (15 min)
```typescript
// app/layout.tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
  {children}
</motion.div>
```

---

## 🎯 SUCCESS METRICS

**Before vs After:**

| Metric | Before | Target | How |
|--------|--------|--------|-----|
| Visual Appeal | 6/10 | 9/10 | Video + animations |
| User Engagement | 5/10 | 8/10 | Dynamic content |
| Time on Page | 45s | 90s+ | Engaging visuals |
| Bounce Rate | 55% | <40% | Better first impression |
| Mobile UX | 7/10 | 9/10 | Optimized videos |
| Performance | 85 | 90+ | Optimized assets |

---

## 📚 RISORSE

### Video Tutorials:
- Swiper.js React: https://swiperjs.com/react
- Framer Motion: https://www.framer.com/motion/introduction/
- Next.js Video: https://nextjs.org/docs/pages/building-your-application/optimizing/videos

### Inspiration:
- Airbnb Experiences (video heroes)
- Apple.com (product pages, smooth animations)
- Stripe.com (scroll-triggered animations)

---

## ✅ READY TO START

**Files pronti**:
- ✅ PROGRESS-REPORT.md (report completo)
- ✅ NEXT-SESSION-TODO.md (questo file)
- ✅ Server: http://localhost:3002
- ✅ 16 video disponibili
- ✅ 388 foto disponibili

**Prossima action**:
```bash
cd website
npm install swiper
# Poi iniziare con VideoCarousel.tsx
```

**Tempo stimato sessione**: 5-6 ore
**Difficoltà**: Media
**Impact**: Alto 🔥

---

*File pronto per next session*
*Focus: Hero dynamism + Video integration + Animations*
