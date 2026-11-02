:root {
  --bg: #0a1220;
  --bg-alt: #101c2d;
  --surface: rgba(19, 29, 46, 0.86);
  --surface-strong: #172438;
  --card: rgba(24, 36, 58, 0.9);
  --text: #eef5ff;
  --muted: #b3c4dc;
  --primary: #81e1ff;
  --primary-strong: #57b9ff;
  --accent: #9df0bf;
  --border: rgba(255, 255, 255, 0.1);
  --shadow: 0 25px 60px rgba(0, 0, 0, 0.26);
  --chip-bg: rgba(129, 225, 255, 0.09);
  --button-text: #071521;
}

body.light-mode {
  --bg: #eef5ff;
  --bg-alt: #dfeaff;
  --surface: rgba(255, 255, 255, 0.82);
  --surface-strong: #ffffff;
  --card: rgba(255, 255, 255, 0.95);
  --text: #0f1728;
  --muted: #44516b;
  --primary: #0e6ef3;
  --primary-strong: #0a5de0;
  --accent: #218a5d;
  --border: rgba(15, 23, 40, 0.09);
  --shadow: 0 18px 38px rgba(74, 98, 138, 0.12);
  --chip-bg: rgba(14, 110, 243, 0.06);
  --button-text: #ffffff;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: radial-gradient(circle at top, rgba(87, 185, 255, 0.1), transparent 30%), linear-gradient(180deg, var(--bg) 0%, var(--bg-alt) 100%);
  color: var(--text);
  line-height: 1.6;
  transition: background 0.25s ease, color 0.25s ease;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button { font: inherit; }
.container { width: min(1120px, calc(100% - 2rem)); margin: 0 auto; }
.site-header {
  position: sticky; top: 0; z-index: 50;
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  background: rgba(10, 18, 32, 0.64); border-bottom: 1px solid var(--border);
}
body.light-mode .site-header { background: rgba(238, 245, 255, 0.78); }
.nav { display: flex; align-items: center; justify-content: space-between; min-height: 76px; gap: 1rem; }
.brand { display: inline-flex; align-items: center; gap: 0.7rem; font-weight: 800; letter-spacing: 0.02em; }
.brand-mark {
  display: inline-grid; place-items: center; width: 2.2rem; height: 2.2rem; border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent)); color: var(--button-text); font-size: 0.85rem;
}
.nav-right { display: flex; align-items: center; gap: 1.2rem; }
.nav-links { display: flex; align-items: center; gap: 1.4rem; color: var(--muted); }
.nav-links a { transition: color 0.2s ease; }
.nav-links a:hover, .nav-links a:focus-visible { color: var(--text); }
.theme-toggle { display: inline-flex; align-items: center; justify-content: center; background: transparent; border: 1px solid var(--border); border-radius: 999px; padding: 0.4rem; cursor: pointer; }
.toggle-track { position: relative; display: inline-block; width: 52px; height: 30px; border-radius: 999px; background: rgba(255, 255, 255, 0.06); border: 1px solid var(--border); }
.toggle-thumb { position: absolute; top: 3px; left: 4px; width: 20px; height: 20px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--accent)); box-shadow: 0 10px 20px rgba(0, 0, 0, 0.18); transition: transform 0.25s ease; }
body.light-mode .toggle-thumb { transform: translateX(22px); }
.hero { padding: 5.5rem 0 4rem; }
.hero-grid { display: grid; grid-template-columns: 1.18fr 0.82fr; align-items: center; gap: 3rem; }
.eyebrow { margin: 0 0 1rem; font-size: 0.74rem; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 700; color: var(--primary); }
.hero-copy h1 { margin: 0 0 1rem; font-size: clamp(2.8rem, 5vw, 4.9rem); line-height: 1; letter-spacing: -0.07em; }
.lead { max-width: 640px; font-size: 1.1rem; color: var(--muted); }
.cta-group { display: flex; flex-wrap: wrap; gap: 1rem; margin: 2rem 0 1.6rem; }
.button { display: inline-flex; justify-content: center; align-items: center; min-height: 48px; padding: 0.9rem 1.5rem; border-radius: 999px; border: 1px solid transparent; font-weight: 700; transition: transform 0.2s ease, box-shadow 0.2s ease; }
.button:hover, .button:focus-visible { transform: translateY(-1px); box-shadow: 0 12px 28px rgba(87, 185, 255, 0.2); }
.button.primary { background: linear-gradient(135deg, var(--primary), var(--primary-strong)); color: var(--button-text); }
.button.secondary { background: rgba(255, 255, 255, 0.02); color: var(--text); border-color: var(--border); }
.quick-facts { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 0.85rem 1.2rem; color: var(--muted); }
.quick-facts li { position: relative; padding-left: 1rem; }
.quick-facts li::before { content: "•"; position: absolute; left: 0; color: var(--accent); }
.hero-visual { display: flex; justify-content: center; }
.profile-panel { width: min(100%, 420px); background: var(--surface); border: 1px solid var(--border); border-radius: 28px; padding: 1.25rem; box-shadow: var(--shadow); }
.profile-image-wrap { background: linear-gradient(135deg, rgba(129, 225, 255, 0.08), rgba(157, 240, 191, 0.08)); border: 1px solid var(--border); border-radius: 22px; overflow: hidden; }
.profile-image { width: 100%; aspect-ratio: 1 / 1.05; object-fit: cover; }
.profile-content { padding: 1.25rem 0.25rem 0.8rem; }
.mini-label { margin: 0 0 0.45rem; text-transform: uppercase; letter-spacing: 0.12em; font-size: 0.7rem; color: var(--primary); font-weight: 700; }
.profile-content h2 { margin: 0; font-size: clamp(1.8rem, 2vw, 2.4rem); }
.role { margin: 0.4rem 0 0; color: var(--muted); }
.chip-row { display: flex; flex-wrap: wrap; gap: 0.6rem; }
.chip-row span, .project-tag { display: inline-flex; align-items: center; justify-content: center; padding: 0.48rem 0.8rem; border-radius: 999px; background: var(--chip-bg); color: var(--primary); border: 1px solid rgba(129, 225, 255, 0.2); font-weight: 600; font-size: 0.76rem; }
.section { padding: 4.5rem 0; }
.section-alt { background: rgba(255, 255, 255, 0.02); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.section-heading { margin-bottom: 2rem; }
.section-heading h2 { margin: 0; font-size: clamp(2rem, 3vw, 2.8rem); letter-spacing: -0.05em; }
.about-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
.about-card, .skill-card, .project-card, .process-card { background: var(--card); border: 1px solid var(--border); border-radius: 22px; padding: 1.5rem; box-shadow: var(--shadow); }
.about-card p, .skill-card p, .project-card p, .process-card p { margin: 0; color: var(--muted); }
.skills-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1.5rem; }
.skill-card { display: flex; flex-direction: column; gap: 0.8rem; }
.skill-icon { width: 2.6rem; height: 2.6rem; display: grid; place-items: center; border-radius: 50%; background: rgba(129, 225, 255, 0.08); border: 1px solid rgba(129, 225, 255, 0.2); font-size: 0.8rem; font-weight: 700; color: var(--primary); }
.skill-card h3, .project-card h3, .process-card h3 { margin: 0; font-size: 1.35rem; }
.projects-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; }
.project-card { display: flex; flex-direction: column; gap: 0.9rem; }
.project-card a { margin-top: auto; color: var(--primary); font-weight: 700; }
.process-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; }
.process-card span { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 50%; background: rgba(157, 240, 191, 0.08); border: 1px solid rgba(157, 240, 191, 0.2); color: var(--accent); font-weight: 700; margin-bottom: 0.8rem; }
.contact-section { padding-bottom: 5rem; }
.contact-box { display: flex; align-items: center; justify-content: space-between; gap: 2rem; background: linear-gradient(135deg, rgba(129, 225, 255, 0.08), rgba(157, 240, 191, 0.08)); border: 1px solid var(--border); border-radius: 26px; padding: 2rem 2.2rem; box-shadow: var(--shadow); }
.contact-box h2 { margin: 0; font-size: clamp(2rem, 3vw, 2.6rem); letter-spacing: -0.04em; }
.contact-links { display: flex; flex-wrap: wrap; gap: 0.8rem; }
.contact-links a { display: inline-flex; justify-content: center; align-items: center; min-height: 46px; padding: 0.8rem 1.1rem; border-radius: 999px; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border); color: var(--text); font-weight: 600; }
.site-footer { padding: 1rem 0 2.8rem; color: var(--muted); text-align: center; }
@media (max-width: 920px) {
  .hero-grid, .about-grid, .skills-grid, .projects-grid, .process-grid, .contact-box { grid-template-columns: 1fr; display: grid; }
  .nav { flex-direction: column; justify-content: center; min-height: auto; padding: 1rem 0; }
  .nav-right { width: 100%; justify-content: space-between; }
  .contact-box { padding: 1.5rem; }
}
@media (max-width: 560px) {
  .nav-right { flex-direction: column; }
  .nav-links { width: 100%; justify-content: center; gap: 1rem; flex-wrap: wrap; }
  .hero { padding-top: 4rem; }
  .cta-group, .contact-links { flex-direction: column; }
  .button, .contact-links a { width: 100%; }
}


























































































































































































































































