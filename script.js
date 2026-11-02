:root {
  --bg: #0a1020;
  --bg-alt: #111a2e;
  --surface: rgba(17, 26, 46, 0.82);
  --surface-strong: #18233a;
  --card: rgba(24, 35, 58, 0.9);
  --text: #eef4ff;
  --muted: #afbed9;
  --primary: #7fe0ff;
  --primary-strong: #51b8ff;
  --accent: #9cf2b8;
  --border: rgba(255, 255, 255, 0.12);
  --shadow: 0 20px 50px rgba(0, 0, 0, 0.28);
  --chip-bg: rgba(127, 224, 255, 0.12);
  --button-text: #081521;
}

body.light-mode {
  --bg: #edf4ff;
  --bg-alt: #dfeaff;
  --surface: rgba(255, 255, 255, 0.8);
  --surface-strong: #ffffff;
  --card: rgba(255, 255, 255, 0.92);
  --text: #0d1728;
  --muted: #43516b;
  --primary: #006adf;
  --primary-strong: #0052b5;
  --accent: #17906a;
  --border: rgba(17, 24, 39, 0.12);
  --shadow: 0 18px 42px rgba(64, 91, 132, 0.12);
  --chip-bg: rgba(0, 106, 223, 0.08);
  --button-text: #ffffff;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top, rgba(81, 184, 255, 0.1), transparent 30%),
    linear-gradient(180deg, var(--bg) 0%, var(--bg-alt) 100%);
  color: var(--text);
  line-height: 1.6;
  transition: background 0.25s ease, color 0.25s ease;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  background: rgba(10, 16, 32, 0.62);
  border-bottom: 1px solid var(--border);
}

body.light-mode .site-header {
  background: rgba(237, 244, 255, 0.72);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: var(--button-text);
  font-size: 0.86rem;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.4rem;
  color: var(--muted);
}

.nav-links a {
  transition: color 0.2s ease;
}

.nav-links a:hover,
.nav-links a:focus-visible {
  color: var(--text);
}

.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.4rem;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.theme-toggle:hover {
  transform: translateY(-1px);
}

.toggle-track {
  position: relative;
  display: inline-block;
  width: 52px;
  height: 30px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--border);
}

.toggle-thumb {
  position: absolute;
  top: 3px;
  left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.18);
  transition: transform 0.25s ease;
}

body.light-mode .toggle-thumb {
  transform: translateX(22px);
}

.hero {
  padding: 5.5rem 0 4rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 3rem;
}

.eyebrow {
  margin: 0 0 1rem;
  font-size: 0.74rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--primary);
}

.hero-copy h1 {
  margin: 0 0 1rem;
  font-size: clamp(2.7rem, 5vw, 4.8rem);
  line-height: 0.98;
  letter-spacing: -0.07em;
}

.lead {
  max-width: 620px;
  font-size: 1.1rem;
  color: var(--muted);
}

.cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0 1.5rem;
}

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
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
  box-shadow: 0 12px 28px rgba(81, 184, 255, 0.22);
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

.quick-facts {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem 1.2rem;
  color: var(--muted);
}

.quick-facts li {
  position: relative;
  padding-left: 1rem;
}

.quick-facts li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--accent);
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.profile-panel {
  width: min(100%, 420px);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 28px;
  padding: 1.2rem;
  box-shadow: var(--shadow);
}

.profile-image-wrap {
  background: linear-gradient(135deg, rgba(127, 224, 255, 0.08), rgba(156, 242, 184, 0.08));
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid var(--border);
}

.profile-image {
  object-fit: cover;
  width: 100%;
  aspect-ratio: 1 / 1.05;
}

.profile-content {
  padding: 1.3rem 0.3rem 0.8rem;
}

.mini-label {
  margin: 0 0 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
  color: var(--primary);
  font-weight: 700;
}

.profile-content h2 {
  margin: 0;
  font-size: clamp(1.8rem, 2vw, 2.3rem);
}

.role {
  margin: 0.35rem 0 0;
  color: var(--muted);
  font-size: 1rem;
}

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
  padding: 0.46rem 0.8rem;
  border-radius: 999px;
  background: var(--chip-bg);
  color: var(--primary);
  border: 1px solid rgba(127, 224, 255, 0.2);
  font-weight: 600;
  font-size: 0.76rem;
}

.section {
  padding: 4.5rem 0;
}

.section-alt {
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.8rem);
  letter-spacing: -0.05em;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.about-card,
.project-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.about-card p,
.project-card p {
  margin: 0;
  color: var(--muted);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.project-card h3 {
  margin: 0;
  font-size: 1.4rem;
}

.project-card a {
  margin-top: auto;
  color: var(--primary);
  font-weight: 700;
}

.contact-section {
  padding-bottom: 5rem;
}

.contact-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: linear-gradient(135deg, rgba(127, 224, 255, 0.08), rgba(156, 242, 184, 0.08));
  border: 1px solid var(--border);
  border-radius: 26px;
  padding: 2rem 2.2rem;
  box-shadow: var(--shadow);
}

.contact-box h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.6rem);
  letter-spacing: -0.04em;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.contact-links a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 46px;
  padding: 0.8rem 1.1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  color: var(--text);
  font-weight: 600;
}

.site-footer {
  padding: 1rem 0 2.5rem;
  color: var(--muted);
  text-align: center;
}

@media (max-width: 850px) {
  .hero-grid,
  .about-grid,
  .projects-grid,
  .contact-box {
    grid-template-columns: 1fr;
    display: grid;
  }

  .nav {
    flex-direction: column;
    justify-content: center;
    min-height: auto;
    padding: 1rem 0;
  }

  .nav-right {
    width: 100%;
    justify-content: space-between;
  }

  .contact-box {
    padding: 1.5rem;
  }
}

@media (max-width: 560px) {
  .nav-right {
    flex-direction: column;
  }

  .nav-links {
    width: 100%;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .hero {
    padding-top: 4rem;
  }

  .cta-group,
  .contact-links {
    flex-direction: column;
  }

  .button,
  .contact-links a {
    width: 100%;
  }
}

































































































