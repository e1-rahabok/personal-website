:root {
  --bg: #08131e;
  --bg-alt: #0f1e2f;
  --surface: rgba(13, 22, 36, 0.82);
  --surface-strong: #122033;
  --card: rgba(17, 26, 39, 0.92);
  --text: #ecf5ff;
  --muted: #b3c7df;
  --primary: #7fe0ff;
  --primary-strong: #5bc0ff;
  --accent: #a8f5c4;
  --border: rgba(255, 255, 255, 0.08);
  --shadow: 0 25px 60px rgba(0, 0, 0, 0.26);
  --chip-bg: rgba(127, 224, 255, 0.08);
  --button-text: #061421;
}

body.light-mode {
  --bg: #edf5ff;
  --bg-alt: #dfeeff;
  --surface: rgba(255, 255, 255, 0.82);
  --surface-strong: #ffffff;
  --card: rgba(255, 255, 255, 0.95);
  --text: #0f1728;
  --muted: #445370;
  --primary: #0d6ef3;
  --primary-strong: #0057c9;
  --accent: #1a8d69;
  --border: rgba(15, 23, 40, 0.09);
  --shadow: 0 18px 38px rgba(51, 79, 104, 0.12);
  --chip-bg: rgba(13, 110, 243, 0.07);
  --button-text: #ffffff;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: radial-gradient(circle at top, rgba(92, 168, 255, 0.18), transparent 32%), linear-gradient(180deg, var(--bg) 0%, var(--bg-alt) 100%);
  color: var(--text);
  line-height: 1.6;
  transition: background 0.25s ease, color 0.25s ease;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button { font: inherit; }
.page-shell { min-height: 100vh; }
.container { width: min(1120px, calc(100% - 2rem)); margin: 0 auto; }
.site-header { position: sticky; top: 0; z-index: 40; backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); background: rgba(8, 19, 30, 0.7); border-bottom: 1px solid var(--border); }
body.light-mode .site-header { background: rgba(237, 245, 255, 0.78); }
.nav { display: flex; align-items: center; justify-content: space-between; min-height: 76px; gap: 1rem; }
.brand { display: inline-flex; align-items: center; gap: 0.7rem; font-weight: 800; letter-spacing: 0.02em; }
.brand-mark {
  width: 2.2rem; height: 2.2rem; border-radius: 50%; display: inline-grid; place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--accent)); color: var(--button-text); font-size: 0.82rem;
}
.nav-right { display: flex; align-items: center; gap: 1.2rem; }
.nav-links { display: flex; align-items: center; gap: 1.4rem; color: var(--muted); }
.nav-links a { transition: color 0.2s ease; }
.nav-links a:hover, .nav-links a:focus-visible { color: var(--text); }
.theme-toggle { display: inline-flex; align-items: center; justify-content: center; background: transparent; border: 1px solid var(--border); border-radius: 999px; padding: 0.38rem; cursor: pointer; }
.toggle-track { position: relative; display: inline-block; width: 52px; height: 30px; border-radius: 999px; background: rgba(255,255,255,0.08); border: 1px solid var(--border); }
.toggle-thumb { position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--accent)); transition: transform 0.25s ease; }
body.light-mode .toggle-thumb { transform: translateX(22px); }
.hero { padding: 6rem 0 4rem; }
.hero-grid { display: grid; grid-template-columns: 1.18fr 0.82fr; gap: 3rem; align-items: center; }
.eyebrow { margin: 0 0 1rem; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.16em; font-weight: 700; color: var(--primary); }
.hero-copy h1 { margin: 0 0 1rem; font-size: clamp(2.8rem, 5vw, 5rem); line-height: 0.98; letter-spacing: -0.07em; }
.lead { color: var(--muted); max-width: 620px; font-size: 1.08rem; }
.cta-group { display: flex; gap: 1rem; flex-wrap: wrap; margin: 2rem 0 1.4rem; }
.button {
  display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 0.9rem 1.5rem; border-radius: 999px; font-weight: 700; border: 1px solid transparent; transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.button:hover, .button:focus-visible { transform: translateY(-1px); box-shadow: 0 12px 28px rgba(87, 185, 255, 0.25); }
.button.primary { background: linear-gradient(135deg, var(--primary), var(--primary-strong)); color: var(--button-text); }
.button.secondary { background: rgba(255,255,255,0.02); border-color: var(--border); color: var(--text); }
.quick-facts { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 0.8rem 1.2rem; color: var(--muted); }
.quick-facts li { position: relative; padding-left: 1rem; }
.quick-facts li::before { content: "•"; position: absolute; left: 0; color: var(--accent); }
.hero-visual { display: flex; justify-content: center; }
.profile-panel { width: min(100%, 420px); background: var(--surface); border: 1px solid var(--border); border-radius: 28px; padding: 1.25rem; box-shadow: var(--shadow); }
.profile-image-wrap { border: 1px solid var(--border); border-radius: 22px; overflow: hidden; background: linear-gradient(135deg, rgba(127,224,255,0.08), rgba(168,245,196,0.08)); }
.profile-image { width: 100%; aspect-ratio: 1 / 1.05; object-fit: cover; }
.profile-content { padding: 1.25rem 0.25rem 0.8rem; }
.mini-label { margin: 0 0 0.45rem; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--primary); font-weight: 700; }
.profile-content h2 { margin: 0; font-size: clamp(1.8rem, 2vw, 2.4rem); }
.role { margin: 0.4rem 0 0; color: var(--muted); }
.chip-row { display: flex; flex-wrap: wrap; gap: 0.6rem; }
.chip-row span, .project-tag { display: inline-flex; justify-content: center; align-items: center; padding: 0.48rem 0.8rem; border-radius: 999px; background: var(--chip-bg); color: var(--primary); border: 1px solid rgba(127,224,255,0.2); font-weight: 600; font-size: 0.76rem; }
.section { padding: 4.5rem 0; }
.section-alt { background: rgba(255,255,255,0.02); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.section-heading { margin-bottom: 2rem; }
.section-heading h2 { margin: 0; font-size: clamp(2rem, 3vw, 2.8rem); letter-spacing: -0.05em; }
.about-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
.about-card, .skill-card, .project-card, .process-card { background: var(--card); border: 1px solid var(--border); border-radius: 22px; padding: 1.5rem; box-shadow: var(--shadow); }
.about-card p, .skill-card p, .project-card p, .process-card p { margin: 0; color: var(--muted); }
.skills-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1.5rem; }
.skill-card { display: flex; flex-direction: column; gap: 0.8rem; }
.skill-icon { width: 2.6rem; height: 2.6rem; display: grid; place-items: center; border-radius: 50%; background: rgba(127,224,255,0.08); border: 1px solid rgba(127,224,255,0.2); color: var(--primary); font-size: 0.8rem; font-weight: 700; }
.skill-card h3, .project-card h3, .process-card h3 { margin: 0; font-size: 1.35rem; }
.projects-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; }
.project-card { display: flex; flex-direction: column; gap: 0.9rem; }
.project-card a { margin-top: auto; color: var(--primary); font-weight: 700; }
.process-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; }
.process-card span { display: inline-flex; justify-content: center; align-items: center; width: 2.45rem; height: 2.45rem; border-radius: 50%; background: rgba(168,245,196,0.08); border: 1px solid rgba(168,245,196,0.2); color: var(--accent); font-weight: 700; margin-bottom: 0.8rem; }
.contact-section { padding-bottom: 5rem; }
.contact-box { display: flex; justify-content: space-between; align-items: center; gap: 2rem; background: linear-gradient(135deg, rgba(127,224,255,0.08), rgba(168,245,196,0.08)); border-radius: 26px; border: 1px solid var(--border); padding: 2rem 2.2rem; box-shadow: var(--shadow); }
.contact-box h2 { margin: 0; font-size: clamp(2rem, 3vw, 2.6rem); letter-spacing: -0.04em; }
.contact-links { display: flex; flex-wrap: wrap; gap: 0.8rem; }
.contact-links a { display: inline-flex; justify-content: center; align-items: center; min-height: 46px; padding: 0.8rem 1.1rem; border-radius: 999px; background: rgba(255,255,255,0.02); border: 1px solid var(--border); font-weight: 600; }
.site-footer { padding: 1rem 0 2.8rem; color: var(--muted); text-align: center; }
@media (max-width: 920px) {
  .hero-grid, .about-grid, .skills-grid, .projects-grid, .process-grid, .contact-box { display: grid; grid-template-columns: 1fr; }
  .nav { flex-direction: column; justify-content: center; min-height: auto; padding: 1rem 0; }
  .nav-right { width: 100%; justify-content: space-between; }
  .contact-box { padding: 1.5rem; }
}
@media (max-width: 560px) {
  .nav-right { flex-direction: column; }
  .nav-links { width: 100%; justify-content: center; flex-wrap: wrap; gap: 1rem; }
  .hero { padding-top: 4rem; }
  .cta-group, .contact-links { flex-direction: column; }
  .button, .contact-links a { width: 100%; }
}






















































































































