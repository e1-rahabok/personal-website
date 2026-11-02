:root {
  --bg: #070d16;
  --bg-alt: #0d1724;
  --surface: rgba(15, 24, 36, 0.8);
  --surface-strong: rgba(18, 28, 41, 0.96);
  --card: rgba(19, 29, 42, 0.9);
  --text: #edf5ff;
  --muted: #b9c9dc;
  --primary: #7fe0ff;
  --primary-strong: #5ec3ff;
  --accent: #a9f5c5;
  --border: rgba(255, 255, 255, 0.1);
  --chip-bg: rgba(127, 224, 255, 0.08);
  --shadow: 0 24px 50px rgba(0, 0, 0, 0.28);
  --button-text: #071a26;
}

body.light-mode {
  --bg: #edf5ff;
  --bg-alt: #ddeeff;
  --surface: rgba(255, 255, 255, 0.82);
  --surface-strong: rgba(255, 255, 255, 0.96);
  --card: rgba(255, 255, 255, 0.94);
  --text: #0f1728;
  --muted: #465a74;
  --primary: #0d6ef3;
  --primary-strong: #0a5de0;
  --accent: #1c8e65;
  --border: rgba(15, 23, 40, 0.09);
  --chip-bg: rgba(14, 110, 243, 0.06);
  --shadow: 0 18px 36px rgba(60, 86, 120, 0.12);
  --button-text: #ffffff;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(180deg, var(--bg) 0%, var(--bg-alt) 100%);
  color: var(--text);
  line-height: 1.6;
  position: relative;
  overflow-x: hidden;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button { font: inherit; }
.bg-orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(85px);
  opacity: 0.25;
  pointer-events: none;
  z-index: 0;
}
.orb-1 {
  top: -10rem;
  left: -8rem;
  width: 38rem;
  height: 38rem;
  background: rgba(127, 224, 255, 0.55);
}
.orb-2 {
  right: -10rem;
  bottom: -12rem;
  width: 40rem;
  height: 40rem;
  background: rgba(169, 245, 197, 0.4);
}
.orb-3 {
  top: 40%;
  left: 45%;
  width: 24rem;
  height: 24rem;
  background: rgba(77, 145, 255, 0.2);
}
.site-header, main, .site-footer { position: relative; z-index: 1; }
.container { width: min(1150px, calc(100% - 2rem)); margin: 0 auto; }
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  background: rgba(7, 13, 22, 0.66);
  border-bottom: 1px solid var(--border);
}
body.light-mode .site-header { background: rgba(237, 245, 255, 0.78); }
.nav-wrap {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  min-height: 76px;
  gap: 1rem;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}
.brand-mark {
  width: 2.15rem;
  height: 2.15rem;
  display: inline-grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: var(--button-text);
  font-size: 0.82rem;
}
.brand-name {
  white-space: nowrap;
}
.nav {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  color: var(--muted);
}
.nav a:hover,
.nav a:focus-visible { color: var(--text); }
.theme-toggle {
  border: 1px solid var(--border);
  background: transparent;
  border-radius: 999px;
  padding: 0.38rem;
  cursor: pointer;
}
.toggle-track {
  position: relative;
  display: inline-block;
  width: 52px;
  height: 30px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.08);
}
.toggle-thumb {
  position: absolute;
  top: 3px;
  left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  transition: transform 0.25s ease;
}
body.light-mode .toggle-thumb { transform: translateX(22px); }
.hero { padding: 5.5rem 0 4rem; }
.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 2.5rem;
}
.eyebrow {
  margin: 0 0 1rem;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 700;
  color: var(--primary);
}
.hero-copy h1 {
  margin: 0 0 1rem;
  font-size: clamp(3rem, 5vw, 5rem);
  line-height: 0.96;
  letter-spacing: -0.08em;
  max-width: 700px;
}
.lead {
  max-width: 660px;
  font-size: 1.12rem;
  color: var(--muted);
}
.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0 1.5rem;
}
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.9rem 1.5rem;
  border-radius: 999px;
  border: 1px solid transparent;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.button:hover,
.button:focus-visible {
  transform: translateY(-1px);
  box-shadow: 0 18px 30px rgba(94, 195, 255, 0.18);
}
.button.primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: var(--button-text);
}
.button.secondary {
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  border-color: var(--border);
}
.facts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem 1.25rem;
  list-style: none;
  padding: 0;
  margin: 0;
  color: var(--muted);
}
.facts li {
  position: relative;
  padding-left: 1rem;
}
.facts li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--accent);
}
.hero-visual { display: flex; justify-content: center; }
.glass-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.profile-panel {
  width: min(100%, 420px);
  padding: 1.2rem;
}
.profile-image-wrap {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(127,224,255,0.08), rgba(169,245,197,0.08));
}
.profile-image {
  width: 100%;
  aspect-ratio: 1 / 1.04;
  object-fit: cover;
}
.profile-content { padding: 1.25rem 0.3rem 0.7rem; }
.mini-label {
  margin: 0 0 0.45rem;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
}
.profile-content h2 { margin: 0; font-size: clamp(1.8rem, 2vw, 2.3rem); }
.role { margin: 0.4rem 0 0; color: var(--muted); }
.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.chip-row span,
.project-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.48rem 0.8rem;
  border-radius: 999px;
  background: var(--chip-bg);
  color: var(--primary);
  border: 1px solid rgba(127,224,255,0.2);
  font-size: 0.76rem;
  font-weight: 600;
}
.section { padding: 4.5rem 0; }
.section-alt { background: rgba(255,255,255,0.02); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.section-heading { margin-bottom: 2rem; }
.section-heading h2 { margin: 0; font-size: clamp(2rem, 3vw, 2.8rem); letter-spacing: -0.05em; }
.about-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
.info-card, .skill-card, .project-card, .process-card { padding: 1.5rem; }
.info-card p, .skill-card p, .project-card p, .process-card p { margin: 0; color: var(--muted); }
.skills-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1.5rem; }
.skill-card { display: flex; flex-direction: column; gap: 0.8rem; }
.skill-icon {
  width: 2.6rem; height: 2.6rem; display: grid; place-items: center; border-radius: 50%;
  border: 1px solid rgba(127,224,255,0.2); background: rgba(127,224,255,0.08); color: var(--primary); font-size: 0.8rem; font-weight: 700; 
}
.skill-card h3, .project-card h3, .process-card h3 { margin: 0; font-size: 1.35rem; }
.projects-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; }
.project-card { display: flex; flex-direction: column; gap: 0.85rem; }
.project-card a { margin-top: auto; color: var(--primary); font-weight: 700; }
.process-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; }
.process-card span { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 50%; background: rgba(169,245,197,0.1); border: 1px solid rgba(169,245,197,0.2); color: var(--accent); font-weight: 700; margin-bottom: 0.85rem; }
.contact-section { padding-bottom: 5rem; }
.contact-box { display: flex; align-items: center; justify-content: space-between; gap: 2rem; padding: 2rem 2.2rem; background: linear-gradient(135deg, rgba(127,224,255,0.08), rgba(169,245,197,0.08)); }
.contact-box h2 { margin: 0; font-size: clamp(2rem, 3vw, 2.6rem); letter-spacing: -0.04em; }
.contact-links { display: flex; flex-wrap: wrap; gap: 0.8rem; }
.contact-links a { display: inline-flex; align-items: center; justify-content: center; min-height: 46px; padding: 0.8rem 1.1rem; border-radius: 999px; border: 1px solid var(--border); background: rgba(255,255,255,0.02); font-weight: 600; }
.site-footer { padding: 1rem 0 2.8rem; color: var(--muted); text-align: center; }

@media (max-width: 920px) {
  .nav-wrap { grid-template-columns: 1fr; text-align: center; }
  .nav { flex-wrap: wrap; }
  .hero-grid, .about-grid, .skills-grid, .projects-grid, .process-grid, .contact-box { display: grid; grid-template-columns: 1fr; }
  .contact-box { padding: 1.5rem; }
}

@media (max-width: 560px) {
  .hero { padding-top: 4rem; }
  .cta-row, .contact-links { flex-direction: column; }
  .button, .contact-links a { width: 100%; }
}
