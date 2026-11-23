# 🎓 Campus / 26 — SOA Campus Event Finder

> An editorial, high-energy event discovery platform for university students. Features interactive Netflix-style event cards, procedural Web Audio soundscapes, real-time multi-criteria filtering, a specialized hackathon track directory, and instant digital pass reservations with generated QR codes.

[![Platform](https://img.shields.io/badge/Platform-Web-orange.svg)](#)
[![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue.svg)](#)
[![Audio](https://img.shields.io/badge/Web%20Audio-Synthesizer%20API-success.svg)](#)
[![Zero Config](https://img.shields.io/badge/Dependencies-0%20(Pure%20Vanilla)-brightgreen.svg)](#)
[![License](https://img.shields.io/badge/License-MIT-purple.svg)](#)

---

## 🌟 Overview

**Campus / 26** bridges student life, campus culture, competitive hackathons, and technical masterclasses into a cohesive, responsive web experience. Designed with an editorial aesthetic featuring a dual warm-cream and deep-obsidian palette, typography powered by **Plus Jakarta Sans** and **Space Grotesk**, and fluid micro-interactions.

---

## ✨ Key Features

### 🌅 1. Interactive Hero Stage & Replayable Sunrise
- **Procedural CSS Keyframe Animation**: Atmospheric multi-layer sun rising from behind the campus silhouette with custom easing curves and radiant pulse.
- **Dynamic Solar Rays**: Rotating multi-angle sunbeams (`solar-rays`) and atmospheric radial glow.
- **Replay Control**: Interactive button (`#sunriseReplayBtn`) to trigger the sunrise sequence on demand, paired with ambient sound synthesis.

### 🔍 2. Real-Time Search & Multi-Criteria Filtering
- **Debounced Instant Search**: Sub-millisecond filtering across event titles, categories, venues, and descriptions.
- **Custom Dropdown Menus**: Custom-styled keyboard-accessible dropdowns:
  - **Categories**: *Technology*, *Cultural*, *Sports*, *Creative*, *Media*, or *All*.
  - **Timelines**: *November 2026*, *December 2026*, *This Weekend*, or *All Dates*.
- **Quick Reset & Empty State**: One-click filter clearing with an elegant dashed empty state indicator when no matching events exist.

### 🎬 3. Netflix-Style Horizontal Event Carousel
- **Fluid Drag & Swipe**: Native mouse-drag and touch-swipe support with velocity multiplier and smooth horizontal scrolling.
- **Visual Progress Bar**: Synchronized progress thumb calculating client width-to-scroll width ratio.
- **Hover Micro-Interactions**: Hover expansions revealing rich descriptions, audio toggles, play/pause controls, and detail triggers without layout shift.

### 🎵 4. Procedural Web Audio API Ambient Soundscapes
- **Harmonic Sound Synthesizer (`AmbientSoundSynthesizer`)**: Zero external audio files. Generates atmospheric chords and tones using pure Web Audio API oscillators (`sine` & `triangle`).
- **Hue-Mapped Frequencies**: Procedural base frequencies derived from each event's `accentHue` with major 7th chord intervals and subtle detune vibrato.
- **Card-Level Audio Controls**: Toggle individual card preview soundscapes directly from carousel pills or the event detail modal.

### ⚡ 5. Specialized Campus Hackathon Directory
- **Flagship Track Showcase**: Dedicated section within the detail modal presenting 6 distinct student competitions (AI & Autonomous Agents, Web3 Protocols, HealthTech Bio-Sensing, CleanTech IoT, Cyber Defense CTF, and Spatial XR Game Jam).
- **Prize Pool & Meta Chips**: Clear breakdown of \$35,500 in venture prizes, team sizes, durations (24h–48h), venues, and live status badges (*Registration Open*, *Fast Filling*, *Closing Soon*, *Upcoming*).
- **Filter Tabs**: Instant category switching among AI, Web3, HealthTech, CleanTech, Security, and XR tracks.

### 🎟️ 6. Instant Digital Pass Reservation & Canvas QR Generator
- **Reservation Modal**: Quick registration flow capturing attendee name, campus email, student ID, and pass count.
- **Procedural 2D QR Code Generation**: Deterministic client-side QR module drawing directly onto HTML5 `<canvas>` using bitwise hash calculations and corner alignment patterns.
- **Downloadable Ticket Pass**: One-click download button exporting the digital ticket with QR code as a `.png` file.

### 📅 7. Calendar Export (.ics) & Social Share
- **RFC 5545 `.ics` Generator**: Dynamically generates and downloads iCalendar files for native import into Google Calendar, Apple Calendar, and Microsoft Outlook.
- **Clipboard Sharing**: Direct link sharing with custom feedback toast notifications.

### 📸 8. Gallery Lightbox & Modal Ecosystem
- **Interactive Thumbnails**: High-resolution gallery preview that switches the hero banner image upon thumbnail click.
- **Topic-Based Newsletter**: Modal dialog with multi-tag interest filters (Culture, Tech, Sports, Arts).
- **Editorial About Dialog**: Mission overview, platform feature cards, and direct CTA navigation.
- **Notification Toast System**: Floating, accessible toasts for all user actions (filter resets, downloads, audio toggles).

---

## 📁 Project Structure

```text
Cnx campus finder project/
├── index.html          # Semantic HTML5 layout, accessible modals, and navigation
├── styles.css          # CSS3 variables, editorial typography, responsive design & keyframes
├── app.js              # State management, Web Audio synthesizer, event listeners & QR engine
├── README.md           # Project documentation and developer guide
├── images/             # Visual assets & graphic artwork
│   └── ChatGPT Image 23 Nov 2026, 10_01_10.png  # Campus silhouette hero illustration
└── .vscode/            # Workspace settings (if applicable)
```

---

## 🚀 Getting Started & Local Development

No package managers (`npm`/`yarn`), bundlers, or compilers are required. This project runs directly in any modern web browser.

### Option 1: Direct File Opening
Double-click `index.html` or open it directly in your browser:
```bash
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

### Option 2: Local HTTP Server (Recommended)
To avoid any browser-level local file restrictions when testing Web Audio and canvas exports, run a local development server:

#### Using Python 3:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

#### Using Node.js (`npx serve` or `http-server`):
```bash
npx serve .
# or
npx http-server -p 8000
```

#### Using VS Code:
Install the **Live Server** extension (`ritwickdey.liveserver`), right-click `index.html`, and select **"Open with Live Server"**.

---

## 🛠️ Data Architecture & Customization

All event and hackathon records are maintained in the `EVENTS_DATA` array inside [app.js](file:///Users/aryamanhere/Cnx%20campus%20finder%20project/app.js).

### Event Object Schema

```javascript
{
  id: "hackathon-2026",                   // Unique alphanumeric string
  title: "Hackathon 2026",               // Display title
  category: "TECHNOLOGY",                // Display category name
  categoryKey: "TECHNOLOGY",             // Filter key matching dropdown values
  date: "22-23 Nov 2026",                // Human-readable date string
  dateKey: "nov",                        // Date filter key: "nov" | "dec"
  isWeekend: true,                       // Boolean flag for "This Weekend" filter
  time: "9:00 AM (36H)",                 // Timing information
  venue: "Innovation Lab & Tech Park",   // Campus location
  audience: "Students & Developers",     // Target audience description
  entry: "Free (RSVP Required)",         // Cost / Entry specifications
  snippet: "Short teaser snippet...",    // Displayed on card hover
  description: "Full event overview...", // Displayed in the detail modal
  image: "https://...",                  // High-resolution banner image URL
  gallery: [ "url1", "url2", "url3" ],   // Array of gallery thumbnail URLs
  accentHue: 200,                        // Base color hue (0-360) used by Web Audio synth
  hackathonsList: [ ... ]                // (Optional) Array of sub-competitions / tracks
}
```

### Hackathon Track Schema (Optional Sub-List)

```javascript
{
  id: "hack-ai-agents",
  track: "AI",                           // Track key matching filter tab data-track
  title: "AI & Autonomous Agents Sprint",
  theme: "Generative AI & LLMs",
  date: "22-23 Nov 2026",
  duration: "36 Hours",
  prize: "$8,000",
  teamSize: "2–4 Members",
  venue: "Lab 4A • Innovation Hub",
  status: "Registration Open",           // "Registration Open" | "Fast Filling" | "Closing Soon" | "Upcoming"
  statusClass: "status-open",            // "status-open" | "status-filling" | "status-closing" | "status-upcoming"
  description: "Track challenge overview...",
  tags: ["AI/ML", "LLMs", "Python"]
}
```

---

## 🎨 Design System & Custom Properties

All design tokens are defined in the `:root` pseudo-class inside [styles.css](file:///Users/aryamanhere/Cnx%20campus%20finder%20project/styles.css):

| CSS Variable | Value | Usage |
|---|---|---|
| `--bg-cream` | `#F5F1EA` | Top hero background and editorial modal body |
| `--bg-dark` | `#121316` | Filter container & base dark backdrop |
| `--bg-card` | `#181A1F` | Carousel card & modal dialog surface |
| `--accent` | `#FF4625` | Solar orange primary action color |
| `--accent-hover` | `#E83918` | Button hover and active state |
| `--accent-glow` | `rgba(255, 70, 37, 0.35)` | Box shadows and radial aura |
| `--font-sans` | `'Plus Jakarta Sans'` | Clean body text and metadata chips |
| `--font-display`| `'Space Grotesk'` | Expressive display headings and metrics |

---

## ⌨️ Accessibility & Keyboard Navigation

- **Dialog Dismissal**: Press <kbd>Escape</kbd> to close any active modal (Details, Pass Registration, Newsletter, or About).
- **Card Navigation**: Cards are indexed with `tabindex="0"`; press <kbd>Enter</kbd> or <kbd>Space</kbd> to view details.
- **ARIA Semantics**: Modal containers feature `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` bindings. Dropdowns include `aria-haspopup="listbox"` and `aria-expanded` state reflection.
- **Screen Reader Friendly**: Clear icon labels and descriptive image `alt` tags throughout.

---

## 🌐 Browser Compatibility

| Browser | Status | Supported Features |
|---|---|---|
| **Google Chrome / Chromium** | ✅ Fully Supported | CSS Grid, Flexbox, Web Audio API, Canvas 2D |
| **Mozilla Firefox** | ✅ Fully Supported | Scroll snap, Web Audio, CSS backdrop-filter |
| **Apple Safari (macOS & iOS)**| ✅ Fully Supported | `-webkit-backdrop-filter`, touch drag, AudioContext |
| **Microsoft Edge** | ✅ Fully Supported | Evergreen Chromium standards |

---

## 📄 License & Attribution

- **License**: MIT License — open for academic and student community use.
- **Campus Visuals**: SOA Campus imagery and customized Unsplash photography.
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) and [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) licensed under the SIL Open Font License.
