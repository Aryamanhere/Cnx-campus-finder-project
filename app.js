
const EVENTS_DATA = [
  {
    id: "hackathon-2026",
    title: "Hackathon 2026",
    category: "TECHNOLOGY",
    categoryKey: "TECHNOLOGY",
    date: "22-23 Nov 2026",
    dateKey: "nov",
    isWeekend: true,
    time: "9:00 AM (36H)",
    venue: "Innovation Lab & Tech Park",
    audience: "Students & Developers",
    entry: "Free (RSVP Required)",
    snippet: "Browse 6 specialized campus hackathons spanning AI, Web3, MedTech, CleanTech, CyberSec & XR with $35,500 in prize grants.",
    description: "Prepare for the flagship campus hackathon season! Explore 6 specialized competition tracks unite 500+ student creators for 24-48 hours of rapid prototyping, mentorship from top tech leads, unlimited caffeinated fuel, and $35,500 in venture grants.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"
    ],
    accentHue: 200, // Tech blue/cyan
    hackathonsList: [
      {
        id: "hack-ai-agents",
        track: "AI",
        title: "AI & Autonomous Agents Sprint",
        theme: "Generative AI & LLMs",
        date: "22-23 Nov 2026",
        duration: "36 Hours",
        prize: "8,000",
        teamSize: "2–4 Members",
        venue: "Lab 4A • Innovation Hub",
        status: "Registration Open",
        statusClass: "status-open",
        description: "Build autonomous multi-agent systems, multimodal assistants, or developer tooling powered by state-of-the-art open models.",
        tags: ["AI/ML", "LLMs", "Python"]
      },
      {
        id: "hack-web3-defi",
        track: "Web3",
        title: "Web3 & Decentralized Protocols",
        theme: "Smart Contracts & ZK Proofs",
        date: "28-29 Nov 2026",
        duration: "24 Hours",
        prize: "5,500",
        teamSize: "1–4 Members",
        venue: "Fintech Sandbox Hall",
        status: "Registration Open",
        statusClass: "status-open",
        description: "Design decentralized applications, cross-chain bridges, privacy-preserving zero-knowledge primitives, and tokenized campus services.",
        tags: ["Blockchain", "Solidity", "Rust"]
      },
      {
        id: "hack-healthtech",
        track: "HealthTech",
        title: "HealthTech & Bio-Sensing Sprint",
        theme: "Digital Health & Biosensors",
        date: "05-06 Dec 2026",
        duration: "30 Hours",
        prize: "6,000",
        teamSize: "2–5 Members",
        venue: "Biomedical Quad 2",
        status: "Fast Filling",
        statusClass: "status-filling",
        description: "Prototype real-time patient vital monitoring, diagnostic computer vision, and wearable telemetry with clinician mentors.",
        tags: ["HealthTech", "IoT", "Computer Vision"]
      },
      {
        id: "hack-climate-iot",
        track: "CleanTech",
        title: "Green Campus & CleanTech Sprint",
        theme: "Sustainability & Smart Grid",
        date: "12-13 Dec 2026",
        duration: "24 Hours",
        prize: "4,500",
        teamSize: "2–4 Members",
        venue: "Solar Commons Wing",
        status: "Registration Open",
        statusClass: "status-open",
        description: "Tackle campus carbon footprint reduction, smart solar distribution, automated water monitoring, and zero-waste logistics.",
        tags: ["CleanTech", "Embedded IoT", "Hardware"]
      },
      {
        id: "hack-cybersec-ctf",
        track: "Security",
        title: "Cyber Defense & Reverse CTF",
        theme: "Defensive Security & CTF",
        date: "19-20 Dec 2026",
        duration: "24 Hours",
        prize: "5,000",
        teamSize: "1–3 Members",
        venue: "Cyber Range Complex",
        status: "Closing Soon",
        statusClass: "status-closing",
        description: "Participate in attack-defense scenarios, live malware triage challenges, cloud infra hardening, and binary exploitation bounties.",
        tags: ["Cybersecurity", "Network", "Cryptography"]
      },
      {
        id: "hack-gamejam-xr",
        track: "XR",
        title: "Spatial Computing & XR Game Jam",
        theme: "Mixed Reality & Indie Games",
        date: "09-10 Jan 2027",
        duration: "48 Hours",
        prize: "6,500",
        teamSize: "1–5 Members",
        venue: "Digital Media Arts Studio",
        status: "Upcoming",
        statusClass: "status-upcoming",
        description: "Create immersive spatial apps, WebXR prototypes, or indie game demos using Unreal Engine 5, Unity, and spatial audio headsets.",
        tags: ["GameDev", "WebXR", "Unity/Unreal"]
      }
    ]
  },
  {
    id: "music-night",
    title: "Music Night",
    category: "CULTURAL",
    categoryKey: "CULTURAL",
    date: "24 Nov 2026",
    dateKey: "nov",
    isWeekend: false,
    time: "6:00 PM",
    venue: "Main Auditorium",
    audience: "Open to All",
    entry: "Free",
    snippet: "A high-energy night of live music, campus bands and special guests.",
    description: "The biggest music night of the year! A night filled with live performances, campus bands, and special guests. Join us for an evening of music, energy and unforgettable vibes.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop"
    ],
    accentHue: 16 // Warm concert amber/orange
  },
  {
    id: "robotics-expo",
    title: "Robotics Expo",
    category: "TECHNOLOGY",
    categoryKey: "TECHNOLOGY",
    date: "27 Nov 2026",
    dateKey: "nov",
    isWeekend: true,
    time: "11:00 AM",
    venue: "Engineering Hall B",
    audience: "Open to All",
    entry: "Free",
    snippet: "Hands-on exhibition showcasing autonomous drones, bionic arms, and student quadrupeds.",
    description: "Discover the bleeding edge of robotics and mechanical engineering. Watch autonomous bot soccer tournaments, interactive humanoid demos, and participate in rapid fabrication challenges.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"
    ],
    accentHue: 175
  },
  {
    id: "cultural-fest",
    title: "Cultural Fest",
    category: "CULTURAL",
    categoryKey: "CULTURAL",
    date: "29 Nov 2026",
    dateKey: "nov",
    isWeekend: true,
    time: "5:00 PM",
    venue: "Open Air Amphitheatre",
    audience: "Open to All",
    entry: "Free",
    snippet: "Celebration of global arts, folk dance traditions, theatrical acts, and food popups.",
    description: "Immerse yourself in multicultural dance performances, global acoustic sets, artisan bazaars, and street food alleys crafted by student cultural societies.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop"
    ],
    accentHue: 330
  },
  {
    id: "sports-league",
    title: "Sports League",
    category: "SPORTS",
    categoryKey: "SPORTS",
    date: "01 Dec 2026",
    dateKey: "dec",
    isWeekend: false,
    time: "4:30 PM",
    venue: "Indoor Sports Arena",
    audience: "Open to All",
    entry: "Free",
    snippet: "Inter-department basketball championship finals with live hype commentary and cheer shows.",
    description: "The championship finals are here! Come rally for your department in basketball, badminton, and futsal. Free concessions for the first 200 attendees and half-time dunk contests.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519766304817-4f37bda74a29?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop"
    ],
    accentHue: 35
  },
  {
    id: "photography-walk",
    title: "Photography Walk",
    category: "CREATIVE",
    categoryKey: "CREATIVE",
    date: "03 Dec 2026",
    dateKey: "dec",
    isWeekend: false,
    time: "7:00 AM",
    venue: "Botanical Garden & Heritage Quad",
    audience: "Photographers & Enthusiasts",
    entry: "Free",
    snippet: "Golden hour photo expedition exploring campus geometry, film techniques, and portraits.",
    description: "Bring your DSLR, mirrorless, or phone camera. Learn lighting composition, architectural framing, and street portraiture from professional guest photographers during campus sunrise.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=600&auto=format&fit=crop"
    ],
    accentHue: 50
  },
  {
    id: "aiml-workshop",
    title: "AI/ML Workshop",
    category: "TECHNOLOGY",
    categoryKey: "TECHNOLOGY",
    date: "05 Dec 2026",
    dateKey: "dec",
    isWeekend: true,
    time: "2:00 PM",
    venue: "CS Seminar Hall 3",
    audience: "Beginners to Advanced",
    entry: "Free (RSVP Required)",
    snippet: "Hands-on masterclass on building autonomous agent workflows and local neural networks.",
    description: "Learn to build, evaluate, and deploy autonomous LLM agents and vision transformers. Includes hands-on code labs in Python, cloud GPU credits, and reference architectures.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"
    ],
    accentHue: 270
  },
  {
    id: "film-screening",
    title: "Film Screening",
    category: "MEDIA",
    categoryKey: "MEDIA",
    date: "07 Dec 2026",
    dateKey: "dec",
    isWeekend: false,
    time: "7:30 PM",
    venue: "Student Center Cinema Hall",
    audience: "Open to All",
    entry: "Free",
    snippet: "Indie festival shorts by student filmmakers followed by director Q&A and warm drinks.",
    description: "A cozy cinema evening featuring 5 award-winning student short films spanning sci-fi, narrative drama, and animation. Accompanied by free gourmet popcorn and director panel discussion.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop"
    ],
    accentHue: 10
  }
];

// ============================================================================
// APPLICATION STATE
// ============================================================================
const state = {
  searchQuery: "",
  categoryFilter: "all",
  dateFilter: "all",
  activeEventId: "music-night", // Default featured card as in mockup
  isPlayingPreview: false,
  isMuted: true,
  audioContext: null,
  activeAudioNodes: [],
  selectedEventForModal: null,
  selectedHackathonTrack: null,
  registeredPass: null
};

// ============================================================================
// DOM ELEMENTS
// ============================================================================
const DOM = {
  // Search & Filter
  searchInput: document.getElementById("searchInput") || document.getElementById("search-input"),
  searchClearBtn: document.getElementById("searchClearBtn") || document.getElementById("search-clear-btn"),
  categoryDropdown: document.getElementById("categoryDropdownContainer"),
  categoryTrigger: document.getElementById("categoryTrigger"),
  categoryMenu: document.getElementById("categoryMenu"),
  selectedCategoryLabel: document.getElementById("selectedCategoryLabel"),
  dateDropdown: document.getElementById("dateDropdownContainer"),
  dateTrigger: document.getElementById("dateTrigger"),
  dateMenu: document.getElementById("dateMenu"),
  selectedDateLabel: document.getElementById("selectedDateLabel"),
  clearFiltersBtn: document.getElementById("clearFiltersBtn"),

  // Carousel & Events
  carouselOuter: document.getElementById("carouselOuter"),
  carouselTrack: document.getElementById("carouselTrack"),
  carouselPrevBtn: document.getElementById("carouselPrevBtn"),
  carouselNextBtn: document.getElementById("carouselNextBtn"),
  carouselProgressThumb: document.getElementById("carouselProgressThumb"),
  eventsSectionTitle: document.getElementById("eventsSectionTitle"),
  eventsCount: document.getElementById("eventsCount"),
  emptyState: document.getElementById("emptyState"),
  emptyClearFiltersBtn: document.getElementById("emptyClearFiltersBtn"),

  // Detail Modal
  detailModalBackdrop: document.getElementById("detailModalBackdrop"),
  closeDetailModalBtn: document.getElementById("closeDetailModalBtn"),
  detailBanner: document.getElementById("detailBanner"),
  detailCategoryBadge: document.getElementById("detailCategoryBadge"),
  detailEventTitle: document.getElementById("detailEventTitle"),
  detailWatchPreviewBtn: document.getElementById("detailWatchPreviewBtn"),
  detailDate: document.getElementById("detailDate"),
  detailTime: document.getElementById("detailTime"),
  detailVenue: document.getElementById("detailVenue"),
  detailRegisterBtn: document.getElementById("detailRegisterBtn"),
  detailDescription: document.getElementById("detailDescription"),
  detailSpecCategory: document.getElementById("detailSpecCategory"),
  detailSpecAudience: document.getElementById("detailSpecAudience"),
  detailSpecEntry: document.getElementById("detailSpecEntry"),
  detailShareBtn: document.getElementById("detailShareBtn"),
  detailAddToCalendarBtn: document.getElementById("detailAddToCalendarBtn"),
  galleryThumbnails: document.getElementById("galleryThumbnails"),
  galleryViewAllBtn: document.getElementById("galleryViewAllBtn"),

  // Dedicated Hackathons Lineup DOM
  detailHackathonsContainer: document.getElementById("detailHackathonsContainer"),
  hackathonCountBadge: document.getElementById("hackathonCountBadge"),
  hackathonCardsGrid: document.getElementById("hackathonCardsGrid"),
  hackathonTrackTabs: document.getElementById("hackathonTrackTabs"),

  // Register Modal
  registerModalBackdrop: document.getElementById("registerModalBackdrop"),
  closeRegisterModalBtn: document.getElementById("closeRegisterModalBtn"),
  regFormEventTitle: document.getElementById("regFormEventTitle"),
  ticketRegisterForm: document.getElementById("ticketRegisterForm"),
  registerFormView: document.getElementById("registerFormView"),
  registerPassView: document.getElementById("registerPassView"),
  ticketPassEvent: document.getElementById("ticketPassEvent"),
  ticketPassName: document.getElementById("ticketPassName"),
  ticketPassId: document.getElementById("ticketPassId"),
  ticketPassDate: document.getElementById("ticketPassDate"),
  ticketPassVenue: document.getElementById("ticketPassVenue"),
  ticketQrCanvas: document.getElementById("ticketQrCanvas"),
  downloadTicketBtn: document.getElementById("downloadTicketBtn"),
  regDoneBtn: document.getElementById("regDoneBtn"),

  // Newsletter Modal
  newsletterModalBackdrop: document.getElementById("newsletterModalBackdrop"),
  closeNewsletterModalBtn: document.getElementById("closeNewsletterModalBtn"),
  btnGetUpdates: document.getElementById("btnGetUpdates"),
  newsletterForm: document.getElementById("newsletterForm"),
  newsletterSuccessMsg: document.getElementById("newsletterSuccessMsg"),
  detailQuickUpdateBtn: document.getElementById("detailQuickUpdateBtn"),

  // About Modal
  aboutModalBackdrop: document.getElementById("aboutModalBackdrop"),
  closeAboutModalBtn: document.getElementById("closeAboutModalBtn"),
  navAboutBtn: document.getElementById("navAboutBtn") || document.getElementById("abtbtn"),
  aboutCloseCta: document.getElementById("aboutCloseCta"),
  navCategoriesBtn: document.getElementById("navCategoriesBtn") || document.getElementById("catbtn"),
  navSearchTrigger: document.getElementById("navSearchTrigger"),

  // Toast
  toastContainer: document.getElementById("toastContainer")
};

// ============================================================================
// AMBIENT WEB AUDIO SYNTHESIZER (For Netflix-style Card Audio & Previews)
// ============================================================================
class AmbientSoundSynthesizer {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.oscillators = [];
    this.isPlaying = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playEventSoundscape(eventHue = 16) {
    if (state.isMuted) return;
    this.init();
    this.stop();

    const t = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(t);
    this.masterGain.gain.setValueAtTime(0.001, t);
    this.masterGain.gain.exponentialRampToValueAtTime(0.14, t + 0.3);

    // Warm ambient chords based on hue
    const baseFreq = 110 + (eventHue % 100);
    const chordRatios = [1, 1.25, 1.5, 1.875]; // major 7th / atmospheric harmonics

    this.oscillators = chordRatios.map((ratio, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = idx % 2 === 0 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(baseFreq * ratio, t);

      // Subtle vibrato/detune for cinematic feel
      osc.detune.setValueAtTime((idx - 1.5) * 8, t);

      gain.gain.setValueAtTime(0.2 / chordRatios.length, t);
      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      return { osc, gain };
    });

    this.isPlaying = true;
  }

  stop() {
    if (!this.ctx || !this.isPlaying) return;
    const t = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(t);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, t);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);

    setTimeout(() => {
      this.oscillators.forEach(({ osc }) => {
        try { osc.stop(); osc.disconnect(); } catch (e) {}
      });
      this.oscillators = [];
      this.isPlaying = false;
    }, 450);
  }

  playClick() {
    if (state.isMuted) return;
    try {
      this.init();
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(540, t);
      osc.frequency.exponentialRampToValueAtTime(180, t + 0.08);
      gain.gain.setValueAtTime(0.08, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.09);
    } catch (e) {}
  }
}

const synth = new AmbientSoundSynthesizer();

// ============================================================================
// CANVAS MOTION VISUALIZER (Disabled - No floating bubbles or particles)
// ============================================================================
class CardCanvasVisualizer {
  constructor(canvas, hue = 16) {
    this.canvas = canvas;
    this.animationId = null;
  }
  start() {}
  stop() {}
}

// Map of canvas visualizers by event ID
const cardVisualizers = new Map();

// ============================================================================
// CAROUSEL & EVENT RENDERING
// ============================================================================

function filterEvents() {
  const query = state.searchQuery.trim().toLowerCase();
  const category = state.categoryFilter;
  const date = state.dateFilter;

  return EVENTS_DATA.filter(event => {
    // Search query match
    const matchesQuery = !query || 
      event.title.toLowerCase().includes(query) ||
      event.category.toLowerCase().includes(query) ||
      event.venue.toLowerCase().includes(query) ||
      event.description.toLowerCase().includes(query);

    // Category match
    const matchesCategory = category === "all" || event.categoryKey === category;

    // Date match
    let matchesDate = true;
    if (date === "nov") matchesDate = event.dateKey === "nov";
    else if (date === "dec") matchesDate = event.dateKey === "dec";
    else if (date === "weekend") matchesDate = event.isWeekend === true;

    return matchesQuery && matchesCategory && matchesDate;
  });
}

function renderEvents() {
  const filtered = filterEvents();
  DOM.carouselTrack.innerHTML = "";

  // Update Section Header and Count Indicator
  if (state.searchQuery || state.categoryFilter !== "all" || state.dateFilter !== "all") {
    DOM.eventsSectionTitle.textContent = `SEARCH RESULTS (${filtered.length})`;
  } else {
    DOM.eventsSectionTitle.textContent = "FEATURED EVENTS";
  }

  const countStr = filtered.length < 10 ? `0${filtered.length}` : `${filtered.length}`;
  DOM.eventsCount.textContent = `${countStr} EVENT${filtered.length === 1 ? '' : 'S'}`;

  // Check empty state
  if (filtered.length === 0) {
    DOM.emptyState.style.display = "flex";
    DOM.carouselOuter.style.display = "none";
    document.querySelector(".carousel-progress-wrapper").style.display = "none";
    return;
  } else {
    DOM.emptyState.style.display = "none";
    DOM.carouselOuter.style.display = "block";
    document.querySelector(".carousel-progress-wrapper").style.display = "flex";
  }

  // Render Cards
  filtered.forEach((event) => {
    const isDefaultActive = event.id === state.activeEventId;
    const card = document.createElement("article");
    card.className = `event-card ${isDefaultActive ? "card-active" : ""}`;
    card.id = `card-${event.id}`;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `${event.title}, ${event.category}`);

    card.innerHTML = `
      <div class="card-bg-wrap">
        <img class="card-img" src="${event.image}" alt="${event.title}" loading="lazy">
        <div class="card-gradient"></div>
      </div>

      <!-- Top Hover Controls -->
      <div class="card-top-controls">
        <button class="card-control-pill btn-toggle-audio" aria-label="Toggle Preview Audio" title="${state.isMuted ? 'Unmute Audio' : 'Mute Audio'}">
          <svg class="audio-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            ${state.isMuted 
              ? '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>' 
              : '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>'}
          </svg>
        </button>
        <button class="card-control-pill btn-toggle-play" aria-label="Pause Preview" title="Pause preview">
          <svg class="play-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        </button>
      </div>

      <!-- Card Information -->
      <div class="card-info">
        ${event.hackathonsList ? `<span class="card-hackathon-count">⚡ ${event.hackathonsList.length} HACKATHONS</span>` : ''}
        <h3 class="card-title">${event.title}</h3>
        <span class="card-category">${event.category}</span>
        
        <div class="card-extended-body">
          <p class="card-desc-snippet">${event.snippet}</p>
          <button class="btn card-cta-btn btn-view-details">
            <span>${event.hackathonsList ? `View ${event.hackathonsList.length} Hackathons` : 'View Details'}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>
      </div>
    `;

    // Event listeners on card
    card.addEventListener("mouseenter", () => activateCard(event.id));
    card.addEventListener("mouseleave", () => {
      if (state.activeEventId === event.id && !isDefaultActive) {
        deactivateCard(event.id);
      }
    });

    card.addEventListener("click", (e) => {
      // If clicking audio toggle
      if (e.target.closest(".btn-toggle-audio")) {
        e.stopPropagation();
        toggleAudio(card);
        return;
      }
      // If clicking play/pause
      if (e.target.closest(".btn-toggle-play")) {
        e.stopPropagation();
        togglePreviewPlay(event.id, card);
        return;
      }
      // Default: open detail modal
      openDetailModal(event);
    });

    // Keyboard accessibility
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDetailModal(event);
      }
    });

    DOM.carouselTrack.appendChild(card);
  });

  updateProgressIndicator();
}

function activateCard(eventId) {
  document.querySelectorAll(".event-card").forEach(c => c.classList.remove("card-active"));

  state.activeEventId = eventId;
  const card = document.getElementById(`card-${eventId}`);
  if (card) {
    card.classList.add("card-active");
  }

  const event = EVENTS_DATA.find(e => e.id === eventId);
  if (event && !state.isMuted) {
    synth.playEventSoundscape(event.accentHue);
  }
}

function deactivateCard(eventId) {
  const card = document.getElementById(`card-${eventId}`);
  if (card) {
    card.classList.remove("card-active");
  }
  synth.stop();
}

function toggleAudio(card) {
  state.isMuted = !state.isMuted;
  const audioBtn = card.querySelector(".btn-toggle-audio");
  
  if (state.isMuted) {
    synth.stop();
    showToast("Audio muted");
    if (audioBtn) {
      audioBtn.innerHTML = `
        <svg class="audio-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      `;
    }
  } else {
    showToast("Ambient audio enabled");
    const event = EVENTS_DATA.find(e => e.id === state.activeEventId);
    if (event) synth.playEventSoundscape(event.accentHue);
    if (audioBtn) {
      audioBtn.innerHTML = `
        <svg class="audio-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      `;
    }
  }
}

function togglePreviewPlay(eventId, card) {
  const btn = card.querySelector(".btn-toggle-play");
  if (!btn) return;

  state.isPlayingPreview = !state.isPlayingPreview;
  if (!state.isPlayingPreview) {
    synth.stop();
    btn.innerHTML = `
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    `;
    btn.setAttribute("title", "Play preview");
  } else {
    const event = EVENTS_DATA.find(e => e.id === eventId);
    if (event && !state.isMuted) synth.playEventSoundscape(event.accentHue);
    btn.innerHTML = `
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
      </svg>
    `;
    btn.setAttribute("title", "Pause preview");
  }
}

// ============================================================================
// CAROUSEL SCROLL & CONTROLS
// ============================================================================

function scrollCarousel(direction) {
  synth.playClick();
  const cardWidth = 275; // card width + gap
  const scrollAmount = cardWidth * 2 * direction;
  DOM.carouselOuter.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

function updateProgressIndicator() {
  const outer = DOM.carouselOuter;
  const maxScroll = outer.scrollWidth - outer.clientWidth;
  if (maxScroll <= 0) {
    DOM.carouselProgressThumb.style.width = "100%";
    DOM.carouselProgressThumb.style.transform = "translateX(0%)";
    DOM.carouselPrevBtn.disabled = true;
    DOM.carouselNextBtn.disabled = true;
    return;
  }

  const scrollFraction = outer.scrollLeft / maxScroll;
  const thumbWidthPercent = Math.max(25, (outer.clientWidth / outer.scrollWidth) * 100);
  DOM.carouselProgressThumb.style.width = `${thumbWidthPercent}%`;
  const maxTranslate = (100 - thumbWidthPercent) / thumbWidthPercent;
  DOM.carouselProgressThumb.style.transform = `translateX(${scrollFraction * maxTranslate * 100}%)`;

  DOM.carouselPrevBtn.disabled = outer.scrollLeft <= 5;
  DOM.carouselNextBtn.disabled = outer.scrollLeft >= maxScroll - 5;
}

// Drag / Swipe support for Carousel
let isDown = false;
let startX;
let scrollLeft;

DOM.carouselOuter.addEventListener("mousedown", (e) => {
  isDown = true;
  DOM.carouselOuter.style.cursor = "grabbing";
  startX = e.pageX - DOM.carouselOuter.offsetLeft;
  scrollLeft = DOM.carouselOuter.scrollLeft;
});

DOM.carouselOuter.addEventListener("mouseleave", () => {
  isDown = false;
  DOM.carouselOuter.style.cursor = "default";
});

DOM.carouselOuter.addEventListener("mouseup", () => {
  isDown = false;
  DOM.carouselOuter.style.cursor = "default";
});

DOM.carouselOuter.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - DOM.carouselOuter.offsetLeft;
  const walk = (x - startX) * 1.6;
  DOM.carouselOuter.scrollLeft = scrollLeft - walk;
});

DOM.carouselOuter.addEventListener("scroll", updateProgressIndicator);

DOM.carouselPrevBtn.addEventListener("click", () => scrollCarousel(-1));
DOM.carouselNextBtn.addEventListener("click", () => scrollCarousel(1));

// ============================================================================
// SEARCH & FILTER SYSTEM
// ============================================================================

// Debounced search
let searchDebounceTimeout = null;
DOM.searchInput.addEventListener("input", (e) => {
  clearTimeout(searchDebounceTimeout);
  const val = e.target.value;
  DOM.searchClearBtn.style.display = val ? "inline-flex" : "none";

  searchDebounceTimeout = setTimeout(() => {
    state.searchQuery = val;
    renderEvents();
    checkFilterState();
  }, 120);
});

DOM.searchClearBtn.addEventListener("click", () => {
  DOM.searchInput.value = "";
  DOM.searchClearBtn.style.display = "none";
  state.searchQuery = "";
  renderEvents();
  checkFilterState();
  DOM.searchInput.focus();
});

// Category Dropdown
DOM.categoryTrigger.addEventListener("click", (e) => {
  e.stopPropagation();
  closeAllDropdowns(DOM.categoryDropdown);
  DOM.categoryDropdown.classList.toggle("open");
  const isOpen = DOM.categoryDropdown.classList.contains("open");
  DOM.categoryTrigger.setAttribute("aria-expanded", isOpen);
});

DOM.categoryMenu.querySelectorAll(".dropdown-item").forEach(item => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    const val = item.getAttribute("data-value");
    state.categoryFilter = val;
    DOM.selectedCategoryLabel.textContent = item.textContent;

    DOM.categoryMenu.querySelectorAll(".dropdown-item").forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    DOM.categoryDropdown.classList.remove("open");
    DOM.categoryTrigger.setAttribute("aria-expanded", "false");
    renderEvents();
    checkFilterState();
  });
});

// Date Dropdown
DOM.dateTrigger.addEventListener("click", (e) => {
  e.stopPropagation();
  closeAllDropdowns(DOM.dateDropdown);
  DOM.dateDropdown.classList.toggle("open");
  const isOpen = DOM.dateDropdown.classList.contains("open");
  DOM.dateTrigger.setAttribute("aria-expanded", isOpen);
});

DOM.dateMenu.querySelectorAll(".dropdown-item").forEach(item => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    const val = item.getAttribute("data-value");
    state.dateFilter = val;
    DOM.selectedDateLabel.textContent = item.textContent;

    DOM.dateMenu.querySelectorAll(".dropdown-item").forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    DOM.dateDropdown.classList.remove("open");
    DOM.dateTrigger.setAttribute("aria-expanded", "false");
    renderEvents();
    checkFilterState();
  });
});

function closeAllDropdowns(except = null) {
  if (except !== DOM.categoryDropdown) {
    DOM.categoryDropdown.classList.remove("open");
    DOM.categoryTrigger.setAttribute("aria-expanded", "false");
  }
  if (except !== DOM.dateDropdown) {
    DOM.dateDropdown.classList.remove("open");
    DOM.dateTrigger.setAttribute("aria-expanded", "false");
  }
}

document.addEventListener("click", () => closeAllDropdowns());

// Clear Filters Action
function resetAllFilters() {
  state.searchQuery = "";
  state.categoryFilter = "all";
  state.dateFilter = "all";

  DOM.searchInput.value = "";
  DOM.searchClearBtn.style.display = "none";
  DOM.selectedCategoryLabel.textContent = "All Categories";
  DOM.selectedDateLabel.textContent = "All Dates";

  DOM.categoryMenu.querySelectorAll(".dropdown-item").forEach(i => {
    i.classList.toggle("active", i.getAttribute("data-value") === "all");
  });
  DOM.dateMenu.querySelectorAll(".dropdown-item").forEach(i => {
    i.classList.toggle("active", i.getAttribute("data-value") === "all");
  });

  checkFilterState();
  renderEvents();
  showToast("Filters reset to all events");
}

DOM.clearFiltersBtn.addEventListener("click", resetAllFilters);
DOM.emptyClearFiltersBtn.addEventListener("click", resetAllFilters);

function checkFilterState() {
  const hasFilter = state.searchQuery !== "" || state.categoryFilter !== "all" || state.dateFilter !== "all";
  DOM.clearFiltersBtn.classList.toggle("has-filter", hasFilter);
}

// Quick Search from Nav
DOM.navSearchTrigger.addEventListener("click", () => {
  DOM.searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
  DOM.searchInput.focus();
});

// ============================================================================
// EVENT DETAIL MODAL (Matching Bottom-Left Mockup)
// ============================================================================

function openDetailModal(event) {
  state.selectedEventForModal = event;
  synth.playClick();

  // Populate Banner
  DOM.detailBanner.style.backgroundImage = `url('${event.image}')`;
  DOM.detailCategoryBadge.textContent = event.category;
  DOM.detailEventTitle.textContent = event.title;
  DOM.detailDate.textContent = event.date;
  DOM.detailTime.textContent = event.time;
  DOM.detailVenue.textContent = event.venue;

  // Populate Lower Info
  DOM.detailDescription.textContent = event.description;
  DOM.detailSpecCategory.textContent = event.category.charAt(0) + event.category.slice(1).toLowerCase();
  DOM.detailSpecAudience.textContent = event.audience;
  DOM.detailSpecEntry.textContent = event.entry;

  // Populate Gallery
  DOM.galleryThumbnails.innerHTML = "";
  event.gallery.forEach((thumbUrl, idx) => {
    const thumb = document.createElement("div");
    thumb.className = "gallery-thumb";
    thumb.innerHTML = `<img src="${thumbUrl}" alt="${event.title} photo ${idx + 1}" loading="lazy">`;
    thumb.addEventListener("click", () => {
      // Lightbox preview
      DOM.detailBanner.style.backgroundImage = `url('${thumbUrl}')`;
      showToast(`Switched banner view to gallery photo ${idx + 1}`);
    });
    DOM.galleryThumbnails.appendChild(thumb);
  });

  // Handle Dedicated Hackathons Lineup
  if (event.hackathonsList && event.hackathonsList.length > 0) {
    DOM.detailHackathonsContainer.style.display = "block";
    DOM.hackathonCountBadge.textContent = event.hackathonsList.length;
    renderHackathonsList(event, "all");

    // Setup Track Filter Tabs
    DOM.hackathonTrackTabs.querySelectorAll(".hackathon-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-track") === "all");
      btn.onclick = () => {
        DOM.hackathonTrackTabs.querySelectorAll(".hackathon-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderHackathonsList(event, btn.getAttribute("data-track"));
      };
    });
  } else {
    DOM.detailHackathonsContainer.style.display = "none";
  }

  // Open Backdrop
  DOM.detailModalBackdrop.classList.add("open");
  DOM.detailModalBackdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function renderHackathonsList(event, filterTrack = "all") {
  if (!event.hackathonsList || !DOM.hackathonCardsGrid) return;
  DOM.hackathonCardsGrid.innerHTML = "";

  const list = filterTrack === "all" 
    ? event.hackathonsList 
    : event.hackathonsList.filter(h => h.track === filterTrack);

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "hackathon-item-card";
    card.innerHTML = `
      <div>
        <div class="hackathon-item-top">
          <span class="hackathon-track-theme">${item.theme}</span>
          <span class="hackathon-status-badge ${item.statusClass}">${item.status}</span>
        </div>
        <h4 class="hackathon-item-title">${item.title}</h4>
        
        <div class="hackathon-item-meta">
          <span class="meta-chip">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            ${item.date}
          </span>
          <span class="meta-chip">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            ${item.duration}
          </span>
          <span class="meta-chip">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            ${item.teamSize}
          </span>
          <span class="meta-chip">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${item.venue}
          </span>
        </div>

        <p class="hackathon-item-desc">${item.description}</p>
      </div>

      <div class="hackathon-item-bottom">
        <div class="hackathon-prize-box">
          <span class="prize-dim">Prize Pool</span>
          <span class="prize-amount">${item.prize}</span>
        </div>
        <button class="btn btn-hackathon-apply" data-hack-id="${item.id}">
          <span>Register for Track</span>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </button>
      </div>
    `;

    card.querySelector(".btn-hackathon-apply").addEventListener("click", (e) => {
      e.stopPropagation();
      closeDetailModal();
      openRegisterModal(event, item);
    });

    DOM.hackathonCardsGrid.appendChild(card);
  });
}

function closeDetailModal() {
  DOM.detailModalBackdrop.classList.remove("open");
  DOM.detailModalBackdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
  synth.stop();
}

DOM.closeDetailModalBtn.addEventListener("click", closeDetailModal);
DOM.detailModalBackdrop.addEventListener("click", (e) => {
  if (e.target === DOM.detailModalBackdrop) closeDetailModal();
});

// Watch Preview in Modal
DOM.detailWatchPreviewBtn.addEventListener("click", () => {
  if (!state.selectedEventForModal) return;
  state.isMuted = false;
  synth.playEventSoundscape(state.selectedEventForModal.accentHue);
  showToast(`Playing ambient live preview for ${state.selectedEventForModal.title}`);
});

// Share Event
DOM.detailShareBtn.addEventListener("click", () => {
  if (!state.selectedEventForModal) return;
  const shareText = `Campus / 26 Event: ${state.selectedEventForModal.title} on ${state.selectedEventForModal.date} at ${state.selectedEventForModal.venue}.`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href);
    showToast("Event link copied to clipboard!");
  } else {
    showToast("Event ready to share!");
  }
});

// Generate and Download .ICS Calendar Invite File
DOM.detailAddToCalendarBtn.addEventListener("click", () => {
  if (!state.selectedEventForModal) return;
  const ev = state.selectedEventForModal;
  
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Campus 26//Event Finder//EN",
    "BEGIN:VEVENT",
    `SUMMARY:Campus 26: ${ev.title}`,
    `DESCRIPTION:${ev.snippet}`,
    `LOCATION:${ev.venue}`,
    `DTSTART:20261124T180000Z`,
    `DTEND:20261124T210000Z`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${ev.id}-campus26.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Calendar invite (.ics) downloaded!");
});

// Gallery "View All ↗"
DOM.galleryViewAllBtn.addEventListener("click", () => {
  showToast("All 3 high-res gallery shots loaded.");
});

// Quick update inside detail modal
DOM.detailQuickUpdateBtn.addEventListener("click", () => {
  closeDetailModal();
  openNewsletterModal();
});


DOM.detailRegisterBtn.addEventListener("click", () => {
  if (!state.selectedEventForModal) return;
  closeDetailModal();
  openRegisterModal(state.selectedEventForModal);
});

function openRegisterModal(event, specificTrack = null) {
  state.selectedEventForModal = event;
  state.selectedHackathonTrack = specificTrack;

  if (specificTrack) {
    DOM.regFormEventTitle.textContent = `${specificTrack.title}`;
    const sub = document.querySelector(".register-sub");
    if (sub) sub.textContent = `Pass reservation for ${specificTrack.theme} (${specificTrack.prize} Prize Pool).`;
  } else {
    DOM.regFormEventTitle.textContent = event.title;
    const sub = document.querySelector(".register-sub");
    if (sub) sub.textContent = "Free student pass registration. Instant confirmation.";
  }

  DOM.registerFormView.style.display = "block";
  DOM.registerPassView.style.display = "none";
  DOM.registerModalBackdrop.classList.add("open");
  DOM.registerModalBackdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeRegisterModal() {
  DOM.registerModalBackdrop.classList.remove("open");
  DOM.registerModalBackdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
  state.selectedHackathonTrack = null;
}

DOM.closeRegisterModalBtn.addEventListener("click", closeRegisterModal);
DOM.registerModalBackdrop.addEventListener("click", (e) => {
  if (e.target === DOM.registerModalBackdrop) closeRegisterModal();
});

// Form Submission -> Generate Ticket
DOM.ticketRegisterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("regFullName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const studentId = document.getElementById("regStudentId").value.trim();
  const passes = document.getElementById("regPassCount").value;
  const event = state.selectedEventForModal;
  const track = state.selectedHackathonTrack;

  const passPrefix = track ? `C26-HK` : `C26-${event.id.slice(0, 2).toUpperCase()}`;
  const passCode = `${passPrefix}-${Math.floor(1000 + Math.random() * 9000)}`;

  // Populate Pass View
  DOM.ticketPassEvent.textContent = track ? `${track.title}` : event.title;
  DOM.ticketPassName.textContent = name;
  DOM.ticketPassId.textContent = passCode;
  DOM.ticketPassDate.textContent = track ? `${track.date}, ${track.duration}` : `${event.date}, ${event.time}`;
  DOM.ticketPassVenue.textContent = track ? track.venue : event.venue;

  const qrPayload = track ? `${passCode}:${name}:${track.id}` : `${passCode}:${name}:${event.id}`;
  drawQrCodeCanvas(DOM.ticketQrCanvas, qrPayload);

  DOM.registerFormView.style.display = "none";
  DOM.registerPassView.style.display = "block";
  showToast(`Pass reserved for ${name}!`);
});

DOM.regDoneBtn.addEventListener("click", closeRegisterModal);

function drawQrCodeCanvas(canvas, payload) {
  const ctx = canvas.getContext("2d");
  const size = canvas.width;
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, size, size);

  // Generate pseudo-random deterministic matrix from payload
  let hash = 0;
  for (let i = 0; i < payload.length; i++) {
    hash = (hash << 5) - hash + payload.charCodeAt(i);
    hash |= 0;
  }

  const grid = 21;
  const cellSize = size / grid;
  ctx.fillStyle = "#121316";

  // Three standard corner positioning squares
  function drawCornerBox(row, col) {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        if (
          r === 0 || r === 6 || c === 0 || c === 6 ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)
        ) {
          ctx.fillRect((col + c) * cellSize, (row + r) * cellSize, cellSize, cellSize);
        }
      }
    }
  }

  drawCornerBox(1, 1);
  drawCornerBox(1, grid - 8);
  drawCornerBox(grid - 8, 1);

  // Pseudo-random data modules
  for (let r = 0; r < grid; r++) {
    for (let c = 0; c < grid; c++) {
      // Don't draw over corner markers
      const isCorner1 = r <= 8 && c <= 8;
      const isCorner2 = r <= 8 && c >= grid - 9;
      const isCorner3 = r >= grid - 9 && c <= 8;
      if (isCorner1 || isCorner2 || isCorner3) continue;

      const seed = Math.abs(Math.sin(hash * (r * grid + c + 1))) * 10000;
      if ((seed - Math.floor(seed)) > 0.5) {
        ctx.fillRect(c * cellSize, r * cellSize, cellSize - 0.5, cellSize - 0.5);
      }
    }
  }
}

DOM.downloadTicketBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `Campus26-Ticket-${DOM.ticketPassId.textContent}.png`;
  link.href = DOM.ticketQrCanvas.toDataURL("image/png");
  link.click();
  showToast("Digital pass QR saved!");
});


function openNewsletterModal() {
  DOM.newsletterModalBackdrop.classList.add("open");
  DOM.newsletterModalBackdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeNewsletterModal() {
  DOM.newsletterModalBackdrop.classList.remove("open");
  DOM.newsletterModalBackdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
}

DOM.btnGetUpdates.addEventListener("click", openNewsletterModal);
DOM.closeNewsletterModalBtn.addEventListener("click", closeNewsletterModal);
DOM.newsletterModalBackdrop.addEventListener("click", (e) => {
  if (e.target === DOM.newsletterModalBackdrop) closeNewsletterModal();
});

// Topic chip toggle
document.querySelectorAll(".topic-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    chip.classList.toggle("active");
  });
});

DOM.newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("newsletterEmailInput").value.trim();
  DOM.newsletterSuccessMsg.style.display = "block";
  showToast(`Updates active for ${email}`);
  setTimeout(() => {
    closeNewsletterModal();
    DOM.newsletterSuccessMsg.style.display = "none";
    DOM.newsletterForm.reset();
  }, 2000);
});


function openAboutModal() {
  DOM.aboutModalBackdrop.classList.add("open");
  DOM.aboutModalBackdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeAboutModal() {
  DOM.aboutModalBackdrop.classList.remove("open");
  DOM.aboutModalBackdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
}

DOM.navAboutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openAboutModal();
});

DOM.closeAboutModalBtn.addEventListener("click", closeAboutModal);
DOM.aboutCloseCta.addEventListener("click", () => {
  closeAboutModal();
  DOM.carouselOuter.scrollIntoView({ behavior: "smooth" });
});

DOM.aboutModalBackdrop.addEventListener("click", (e) => {
  if (e.target === DOM.aboutModalBackdrop) closeAboutModal();
});

DOM.navCategoriesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  DOM.categoryDropdown.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => {
    DOM.categoryTrigger.click();
  }, 300);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDetailModal();
    closeRegisterModal();
    closeNewsletterModal();
    closeAboutModal();
    closeAllDropdowns();
  }
});

const sunriseBtn = document.getElementById("sunriseReplayBtn");
const risingSun = document.getElementById("risingSun");

if (sunriseBtn && risingSun) {
  sunriseBtn.addEventListener("click", () => {
    risingSun.style.animation = "none";
    risingSun.offsetHeight; // Trigger browser reflow
    risingSun.style.animation = "sunRising 2.8s cubic-bezier(0.16, 1, 0.3, 1) forwards, sunPulse 6s ease-in-out 2.8s infinite alternate";

    // Play warm solar synthesizer soundscape if not muted
    synth.playEventSoundscape(20);
    showToast("Rising sun effect triggered!");
  });
}


function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  DOM.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

window.addEventListener("DOMContentLoaded", () => {
  renderEvents();
  // Ensure default featured card "Music Night" is active initially as in mockup
  activateCard("music-night");
});
