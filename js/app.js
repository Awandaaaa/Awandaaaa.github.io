/**
 * ============================================================
 * PORTFOLIO — Main Application Script
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHero();
  renderProjects();
  renderAbout();
  renderSkills();
  renderContact();
  renderFooter();
  initScrollReveal();
  initActiveNav();
  initModal();
});

/* ================================================================
   ICONS — SVG icon strings used throughout the app
   ================================================================ */
const ICONS = {
  github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  externalLink: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  server: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  database: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
  layout: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
  monitor: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  wrench: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
  eye: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  alert: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  list: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  mapPin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  smartphone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
};

/* ================================================================
   HELPER — Utility functions
   ================================================================ */
function isPlaceholder(value) {
  if (!value) return true;
  if (typeof value === 'string') {
    return value.startsWith('[') && value.endsWith(']');
  }
  return false;
}

function safeText(value, fallback = '') {
  return isPlaceholder(value) ? fallback : value;
}

function createEl(tag, className, innerHTML) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (innerHTML) el.innerHTML = innerHTML;
  return el;
}

/* ================================================================
   NAVBAR
   ================================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navbar-toggle');
  const links = document.getElementById('navbar-links');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });

  // Smooth scroll and active state on link click
  links.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetSection = document.querySelector(href);
        if (targetSection) {
          e.preventDefault();

          // Immediately update active class
          links.querySelectorAll('.navbar__link').forEach(l => l.classList.remove('active'));
          link.classList.add('active');

          // Scroll to target with navbar offset
          const navbarHeight = navbar.offsetHeight || 72;
          const targetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
          });

          // Close mobile menu
          toggle.classList.remove('active');
          links.classList.remove('open');
          document.body.style.overflow = '';

          // Update hash
          history.pushState(null, '', href);
        }
      }
    });
  });

  // Also handle any other internal anchor links (e.g., hero buttons, footer links)
  document.querySelectorAll('a[href^="#"]:not(.navbar__link)').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href && href !== '#' && href.startsWith('#')) {
        const targetSection = document.querySelector(href);
        if (targetSection) {
          e.preventDefault();
          const navbarHeight = navbar.offsetHeight || 72;
          const targetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
          });

          // Sync navbar active state
          links.querySelectorAll('.navbar__link').forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === href);
          });

          history.pushState(null, '', href);
        }
      }
    });
  });

  // CV button
  const cvBtn = document.getElementById('navbar-cv-btn');
  if (cvBtn) {
    if (isPlaceholder(PROFILE_DATA.cvUrl) || !PROFILE_DATA.cvUrl) {
      cvBtn.style.display = 'none';
    } else {
      cvBtn.href = PROFILE_DATA.cvUrl;
      cvBtn.target = '_blank';
      cvBtn.rel = 'noopener noreferrer';
      if (PROFILE_DATA.cvFileName) {
        cvBtn.setAttribute('download', PROFILE_DATA.cvFileName);
      }
      cvBtn.style.display = 'inline-flex';
      cvBtn.addEventListener('click', () => {
        toggle.classList.remove('active');
        links.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  }

  // Close mobile menu if clicked outside
  document.addEventListener('click', (e) => {
    if (links.classList.contains('open') && !links.contains(e.target) && !toggle.contains(e.target)) {
      toggle.classList.remove('active');
      links.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ================================================================
   HERO
   ================================================================ */
function initHero() {
  const nameEl = document.getElementById('hero-name');
  const titleEl = document.getElementById('hero-title');
  const descEl = document.getElementById('hero-description');

  const fullName = PROFILE_DATA.fullName;
  
  if (isPlaceholder(fullName)) {
    nameEl.innerHTML = `<span class="placeholder-warning">${fullName}</span>`;
  } else {
    // Split name: last word gets gradient
    const parts = fullName.split(' ');
    if (parts.length > 1) {
      const last = parts.pop();
      nameEl.innerHTML = `${parts.join(' ')} <span class="hero__name-gradient">${last}</span>`;
    } else {
      nameEl.textContent = fullName;
    }
  }

  titleEl.textContent = PROFILE_DATA.targetPosition;
  descEl.textContent = PROFILE_DATA.heroDescription;

  // Social links
  const socialsContainer = document.getElementById('hero-socials');
  socialsContainer.innerHTML = '';

  if (!isPlaceholder(PROFILE_DATA.githubUrl) && PROFILE_DATA.githubUrl) {
    socialsContainer.innerHTML += `
      <a href="${PROFILE_DATA.githubUrl}" target="_blank" rel="noopener noreferrer" 
         class="hero__social-link" aria-label="GitHub Profile" title="GitHub">
        ${ICONS.github}
      </a>`;
  }

  if (!isPlaceholder(PROFILE_DATA.linkedinUrl) && PROFILE_DATA.linkedinUrl) {
    socialsContainer.innerHTML += `
      <a href="${PROFILE_DATA.linkedinUrl}" target="_blank" rel="noopener noreferrer" 
         class="hero__social-link" aria-label="LinkedIn Profile" title="LinkedIn">
        ${ICONS.linkedin}
      </a>`;
  }

  const igHandleHero = PROFILE_DATA.Instagram || PROFILE_DATA.instagram;
  if (!isPlaceholder(igHandleHero) && igHandleHero) {
    const igUsername = igHandleHero.replace('@', '').trim();
    socialsContainer.innerHTML += `
      <a href="https://instagram.com/${igUsername}" target="_blank" rel="noopener noreferrer" 
         class="hero__social-link" aria-label="Instagram Profile" title="Instagram (@${igUsername})">
        ${ICONS.instagram}
      </a>`;
  }

  if (!isPlaceholder(PROFILE_DATA.email) && PROFILE_DATA.email) {
    socialsContainer.innerHTML += `
      <a href="mailto:${PROFILE_DATA.email}" 
         class="hero__social-link" aria-label="Email" title="Email">
        ${ICONS.mail}
      </a>`;
  }

  // Contact button
  const contactBtn = document.getElementById('hero-contact-btn');
  if (!isPlaceholder(PROFILE_DATA.email) && PROFILE_DATA.email) {
    contactBtn.href = `mailto:${PROFILE_DATA.email}`;
  } else {
    contactBtn.href = '#contact';
  }
}

/* ================================================================
   PROJECTS
   ================================================================ */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';

  const visibleProjects = PROJECTS_DATA
    .filter(p => p.visibility)
    .sort((a, b) => a.order - b.order);

  visibleProjects.forEach(project => {
    grid.appendChild(createProjectCard(project));
  });
}

function createProjectCard(project) {
  const card = createEl('article', 'project-card reveal');
  card.setAttribute('data-project-id', project.id);

  // Image
  const imageDiv = createEl('div', 'project-card__image');
  if (project.screenshotPaths && project.screenshotPaths.length > 0) {
    imageDiv.innerHTML = `<img src="${project.screenshotPaths[0]}" alt="Screenshot ${project.title}" loading="lazy">`;
  } else {
    imageDiv.innerHTML = `
      <div class="project-card__placeholder">
        ${ICONS.image}
        <span>Screenshot belum ditambahkan</span>
      </div>`;
  }

  // Tech badges on image
  if (project.verifiedTechnologies && project.verifiedTechnologies.length > 0) {
    const badges = createEl('div', 'project-card__badges');
    project.verifiedTechnologies.forEach(tech => {
      badges.innerHTML += `<span class="project-card__badge">${tech}</span>`;
    });
    imageDiv.appendChild(badges);
  }

  // Platform badge
  if (project.platform || project.platforms) {
    const platformText = project.platforms ? project.platforms.join(' & ') : project.platform;
    const badges = imageDiv.querySelector('.project-card__badges') || createEl('div', 'project-card__badges');
    badges.innerHTML += `<span class="project-card__badge">${platformText}</span>`;
    if (!imageDiv.querySelector('.project-card__badges')) {
      imageDiv.appendChild(badges);
    }
  }

  // Mobile screenshot badge indicator
  if (project.screenshotPathsMobile && project.screenshotPathsMobile.length > 0) {
    const badges = imageDiv.querySelector('.project-card__badges') || createEl('div', 'project-card__badges');
    badges.innerHTML += `<span class="project-card__badge project-card__badge--mobile">${ICONS.smartphone} Mobile Ready</span>`;
    if (!imageDiv.querySelector('.project-card__badges')) {
      imageDiv.appendChild(badges);
    }
  }

  // Golden glossy number badge (matching visual reference)
  if (project.order) {
    const numberBadge = createEl('span', 'project-card__number-badge', `${project.order}`);
    imageDiv.appendChild(numberBadge);
  }

  card.appendChild(imageDiv);

  // Body
  const body = createEl('div', 'project-card__body');

  // Title & subtitle
  body.innerHTML += `<h3 class="project-card__title">${project.title}</h3>`;
  if (project.subtitle) {
    body.innerHTML += `<p class="project-card__subtitle">${project.subtitle}</p>`;
  }

  // Description
  body.innerHTML += `<p class="project-card__desc">${project.shortDescription}</p>`;

  // Tech tags
  if (project.verifiedTechnologies && project.verifiedTechnologies.length > 0) {
    const techDiv = createEl('div', 'project-card__tech');
    project.verifiedTechnologies.forEach((tech, i) => {
      const tagClass = i % 2 === 0 ? 'tech-tag' : 'tech-tag tech-tag--purple';
      techDiv.innerHTML += `<span class="${tagClass}">${tech}</span>`;
    });
    body.appendChild(techDiv);
  }

  // Verified features
  if (project.verifiedFeatures && project.verifiedFeatures.length > 0) {
    const featDiv = createEl('div', 'project-card__features');
    project.verifiedFeatures.slice(0, 4).forEach(feat => {
      featDiv.innerHTML += `
        <div class="project-card__feature">
          ${ICONS.check}
          <span>${feat}</span>
        </div>`;
    });
    body.appendChild(featDiv);
  }

  // Actions
  const actions = createEl('div', 'project-card__actions');
  
  if (project.githubUrl) {
    actions.innerHTML += `
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" 
         class="btn btn--secondary btn--small">
        ${ICONS.github} Source Code
      </a>`;
  }

  if (project.demoUrl) {
    actions.innerHTML += `
      <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" 
         class="btn btn--primary btn--small">
        ${ICONS.externalLink} Live Demo
      </a>`;
  }

  // Detail button
  actions.innerHTML += `
    <button class="btn btn--secondary btn--small" 
            onclick="openProjectModal('${project.id}')"
            aria-label="Lihat detail ${project.title}">
      ${ICONS.eye} Detail
    </button>`;

  body.appendChild(actions);

  // Status
  const statusText = {
    completed: 'Selesai',
    'in-progress': 'Dalam Pengembangan',
    archived: 'Arsip',
    unverified: 'Perlu Verifikasi'
  };
  const statusDotClass = {
    completed: 'project-card__status-dot--success',
    'in-progress': 'project-card__status-dot--warning',
    archived: '',
    unverified: ''
  };
  body.innerHTML += `
    <div class="project-card__status">
      <span class="project-card__status-dot ${statusDotClass[project.status] || ''}"></span>
      ${statusText[project.status] || project.status}
    </div>`;

  card.appendChild(body);
  return card;
}

/* ================================================================
   PROJECT MODAL
   ================================================================ */
function initModal() {
  const overlay = document.getElementById('modal-overlay');
  
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openProjectModal(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const overlay = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalFooter = document.getElementById('modal-footer');

  modalTitle.textContent = project.title;

  let bodyHTML = '';

  // Description
  bodyHTML += `
    <div class="modal__section">
      <h4 class="modal__section-title">Ringkasan</h4>
      <p class="modal__text">${project.description}</p>
    </div>`;

  // Technologies
  if (project.verifiedTechnologies && project.verifiedTechnologies.length > 0) {
    bodyHTML += `
      <div class="modal__section">
        <h4 class="modal__section-title">Teknologi Terverifikasi</h4>
        <div class="project-card__tech">
          ${project.verifiedTechnologies.map((t, i) => 
            `<span class="${i % 2 === 0 ? 'tech-tag' : 'tech-tag tech-tag--purple'}">${t}</span>`
          ).join('')}
        </div>
      </div>`;
  }

  // Unverified notes
  if (project.unverifiedNotes) {
    bodyHTML += `
      <div class="modal__section">
        <p class="modal__note">${ICONS.alert} ${project.unverifiedNotes}</p>
      </div>`;
  }

  // Verified features
  if (project.verifiedFeatures && project.verifiedFeatures.length > 0) {
    bodyHTML += `
      <div class="modal__section">
        <h4 class="modal__section-title">Fitur Terverifikasi</h4>
        ${project.verifiedFeatures.map(f => `
          <div class="project-card__feature">
            ${ICONS.check}
            <span>${f}</span>
          </div>
        `).join('')}
      </div>`;
  }

  // Unverified features note
  if (project.unverifiedFeatures) {
    bodyHTML += `
      <div class="modal__section">
        <p class="modal__note">${ICONS.list} ${project.unverifiedFeatures}</p>
      </div>`;
  }

  // Contribution
  if (project.contribution) {
    bodyHTML += `
      <div class="modal__section">
        <h4 class="modal__section-title">Kontribusi</h4>
        <p class="modal__text">${project.contribution}</p>
      </div>`;
  } else {
    bodyHTML += `
      <div class="modal__section">
        <p class="modal__note">${ICONS.user} Kontribusi pribadi belum didokumentasikan. Informasi ini perlu dilengkapi.</p>
      </div>`;
  }

  // Screenshots (Web & Mobile)
  const hasWebScreenshots = project.screenshotPaths && project.screenshotPaths.length > 0;
  const hasMobileScreenshots = project.screenshotPathsMobile && project.screenshotPathsMobile.length > 0;

  if (hasWebScreenshots || hasMobileScreenshots) {
    if (hasWebScreenshots) {
      const sectionTitle = hasMobileScreenshots ? 'Screenshot (Tampilan Web / Desktop)' : 'Screenshot';
      bodyHTML += `
        <div class="modal__section">
          <h4 class="modal__section-title">${sectionTitle}</h4>
          <div class="modal__screenshots">
            ${project.screenshotPaths.map(path => `
              <a href="${path}" target="_blank" rel="noopener noreferrer" class="modal__screenshot" title="Klik untuk membuka gambar ukuran penuh">
                <img src="${path}" alt="Screenshot Web ${project.title}" loading="lazy">
                <span class="modal__screenshot-zoom">${ICONS.eye} Perbesar</span>
              </a>
            `).join('')}
          </div>
        </div>`;
    }

    if (hasMobileScreenshots) {
      bodyHTML += `
        <div class="modal__section">
          <div class="modal__section-header">
            <h4 class="modal__section-title">${ICONS.smartphone} Screenshot (Tampilan Mobile)</h4>
            <span class="modal__badge-tag">Versi Mobile</span>
          </div>
          <p class="modal__text modal__text--muted" style="margin-bottom: 12px; font-size: 0.85rem; color: var(--text-muted);">
            Tampilan antarmuka versi aplikasi mobile smartphone. Klik screenshot untuk melihat gambar resolusi penuh.
          </p>
          <div class="modal__screenshots modal__screenshots--mobile">
            ${project.screenshotPathsMobile.map(path => `
              <div class="mobile-frame-wrapper">
                <a href="${path}" target="_blank" rel="noopener noreferrer" class="modal__screenshot modal__screenshot--mobile" title="Klik untuk memperbesar screenshot mobile">
                  <div class="mobile-frame-notch"></div>
                  <img src="${path}" alt="Screenshot Mobile ${project.title}" loading="lazy">
                  <span class="modal__screenshot-zoom">${ICONS.eye} Perbesar</span>
                </a>
              </div>
            `).join('')}
          </div>
        </div>`;
    }
  } else {
    bodyHTML += `
      <div class="modal__section">
        <p class="modal__note">${ICONS.image} Screenshot belum ditambahkan. Tambahkan screenshot asli di folder assets/screenshots/</p>
      </div>`;
  }

  // Platforms (for multi-platform projects)
  if (project.platforms) {
    bodyHTML += `
      <div class="modal__section">
        <h4 class="modal__section-title">Platform</h4>
        <div class="project-card__tech">
          ${project.platforms.map(p => `<span class="tech-tag">${p}</span>`).join('')}
        </div>
      </div>`;
  }

  modalBody.innerHTML = bodyHTML;

  // Footer actions
  let footerHTML = '';
  if (project.githubUrl) {
    footerHTML += `
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" 
         class="btn btn--secondary btn--small">
        ${ICONS.github} Source Code
      </a>`;
  }
  if (project.githubUrlMobile) {
    footerHTML += `
      <a href="${project.githubUrlMobile}" target="_blank" rel="noopener noreferrer" 
         class="btn btn--secondary btn--small">
        ${ICONS.github} Source Code (Mobile)
      </a>`;
  }
  if (project.demoUrl) {
    footerHTML += `
      <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" 
         class="btn btn--primary btn--small">
        ${ICONS.externalLink} Live Demo
      </a>`;
  }
  if (project.videoDemoUrl) {
    footerHTML += `
      <a href="${project.videoDemoUrl}" target="_blank" rel="noopener noreferrer" 
         class="btn btn--secondary btn--small">
        ${ICONS.externalLink} Video Demo
      </a>`;
  }
  if (!footerHTML) {
    footerHTML = `<p class="modal__text" style="font-style:italic;">Tautan repositori dan demo belum tersedia.</p>`;
  }
  modalFooter.innerHTML = footerHTML;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

/* ================================================================
   ABOUT
   ================================================================ */
function renderAbout() {
  const avatarContainer = document.getElementById('about-avatar');
  const contentContainer = document.getElementById('about-content');

  // Avatar
  if (PROFILE_DATA.profilePhotoPath && !isPlaceholder(PROFILE_DATA.profilePhotoPath)) {
    avatarContainer.innerHTML = `<img src="${PROFILE_DATA.profilePhotoPath}" alt="Foto ${PROFILE_DATA.fullName}">`;
  } else {
    const name = isPlaceholder(PROFILE_DATA.fullName) ? '?' : PROFILE_DATA.fullName;
    const initials = name === '?' ? '?' : name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    avatarContainer.innerHTML = `<span class="about__avatar-initials">${initials}</span>`;
  }

  // Content
  const about = PROFILE_DATA.aboutMe;
  const edu = about.education;

  let contentHTML = `
    <h3>Tentang Saya</h3>
  `;

  if (PROFILE_DATA.location && !isPlaceholder(PROFILE_DATA.location)) {
    contentHTML += `
      <div class="about__location">
        ${ICONS.mapPin}
        <span>${PROFILE_DATA.location}</span>
      </div>`;
  }

  contentHTML += `
    <p class="about__text">${about.intro}</p>
    <p class="about__text">${about.focus}</p>
    <p class="about__text">${about.interests}</p>
  `;

  // Education
  contentHTML += `
    <div class="about__education">
      <p class="about__education-label">Pendidikan</p>
      <p class="about__education-institution">
        ${isPlaceholder(edu.institution) ? `<span class="placeholder-warning">${edu.institution}</span>` : edu.institution}
      </p>
      <p class="about__education-detail">
        ${isPlaceholder(edu.degree) ? `<span class="placeholder-warning">${edu.degree}</span>` : edu.degree}
      </p>
      <p class="about__education-detail">
        ${isPlaceholder(edu.period) ? `<span class="placeholder-warning">${edu.period}</span>` : edu.period}
        ${!isPlaceholder(edu.status) ? ` — ${edu.status}` : ''}
      </p>
    </div>`;

  contentContainer.innerHTML = contentHTML;
}

/* ================================================================
   SKILLS — derived from verified project technologies
   ================================================================ */
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = '';

  // 1. If PROFILE_DATA has explicit skills configured, use them
  if (PROFILE_DATA.skills && Array.isArray(PROFILE_DATA.skills) && PROFILE_DATA.skills.length > 0) {
    PROFILE_DATA.skills.forEach(cat => {
      const iconSvg = ICONS[cat.icon] || ICONS.server;
      const card = createEl('div', 'skill-category reveal');
      card.innerHTML = `
        <div class="skill-category__icon ${cat.iconClass || ''}">
          ${iconSvg}
        </div>
        <h3 class="skill-category__title">${cat.title || cat.category}</h3>
        <div class="skill-category__items">
          ${cat.skills.map(s => {
            const name = typeof s === 'string' ? s : s.name;
            const isPrimary = typeof s === 'object' && s.primary;
            return `<span class="skill-item ${isPrimary ? 'skill-item--primary' : ''}">${name}</span>`;
          }).join('')}
        </div>
      `;
      grid.appendChild(card);
    });
    return;
  }

  // 2. Fallback: Collect verified technologies from projects
  const usedTech = new Set();
  PROJECTS_DATA.filter(p => p.visibility).forEach(p => {
    if (p.verifiedTechnologies) {
      p.verifiedTechnologies.forEach(t => usedTech.add(t));
    }
  });

  // Skill categories — only show skills that are verified from projects
  const categories = [
    {
      title: 'Backend Development',
      icon: ICONS.server,
      iconClass: '',
      skills: [
        { name: 'PHP', primary: true },
        { name: 'Laravel', primary: true },
      ].filter(s => usedTech.has(s.name)),
    },
    {
      title: 'Database',
      icon: ICONS.database,
      iconClass: 'skill-category__icon--purple',
      skills: [
        { name: 'MySQL', primary: false },
      ].filter(s => usedTech.has(s.name)),
    },
    {
      title: 'Frontend Development',
      icon: ICONS.layout,
      iconClass: '',
      skills: [
        { name: 'HTML', primary: false },
        { name: 'CSS', primary: false },
        { name: 'JavaScript', primary: false },
        { name: 'Bootstrap', primary: false },
      ].filter(s => usedTech.has(s.name) || usedTech.has('HTML5') || usedTech.has('CSS3')),
    },
    {
      title: 'Desktop Development',
      icon: ICONS.monitor,
      iconClass: 'skill-category__icon--purple',
      skills: [
        { name: 'Java', primary: false },
        { name: 'Swing', primary: false },
        { name: 'NetBeans', primary: false },
      ].filter(s => usedTech.has(s.name)),
    },
    {
      title: 'Development Tools',
      icon: ICONS.wrench,
      iconClass: '',
      skills: [
        { name: 'Git', primary: false },
        { name: 'GitHub', primary: false },
        { name: 'VS Code', primary: false },
        { name: 'Composer', primary: false },
      ].filter(s => usedTech.has(s.name)),
    },
  ];

  // Only render categories that have at least one verified skill
  const activeCategories = categories.filter(c => c.skills.length > 0);

  activeCategories.forEach(cat => {
    const card = createEl('div', 'skill-category reveal');
    card.innerHTML = `
      <div class="skill-category__icon ${cat.iconClass}">
        ${cat.icon}
      </div>
      <h3 class="skill-category__title">${cat.title}</h3>
      <div class="skill-category__items">
        ${cat.skills.map(s => `
          <span class="skill-item ${s.primary ? 'skill-item--primary' : ''}">${s.name}</span>
        `).join('')}
      </div>
    `;
    grid.appendChild(card);
  });

  // If very few skills, show note
  if (activeCategories.length === 0 || activeCategories.every(c => c.skills.length === 0)) {
    grid.innerHTML = `
      <div class="modal__note" style="grid-column: 1 / -1;">
        📋 Skill ditampilkan berdasarkan konfigurasi di data/profile.js atau proyek.
      </div>`;
  }
}

/* ================================================================
   CONTACT
   ================================================================ */
function renderContact() {
  const linksContainer = document.getElementById('contact-links');
  linksContainer.innerHTML = '';

  // Location
  if (!isPlaceholder(PROFILE_DATA.location) && PROFILE_DATA.location) {
    linksContainer.innerHTML += `
      <div class="contact__link" style="cursor:default;">
        ${ICONS.mapPin}
        <div>
          <p class="contact__link-label">Lokasi</p>
          <p class="contact__link-value">${PROFILE_DATA.location}</p>
        </div>
      </div>`;
  }

  // Email
  if (!isPlaceholder(PROFILE_DATA.email) && PROFILE_DATA.email) {
    linksContainer.innerHTML += `
      <a href="mailto:${PROFILE_DATA.email}" class="contact__link">
        ${ICONS.mail}
        <div>
          <p class="contact__link-label">Email</p>
          <p class="contact__link-value">${PROFILE_DATA.email}</p>
        </div>
      </a>`;
  } else {
    linksContainer.innerHTML += `
      <div class="contact__link" style="cursor:default;">
        ${ICONS.mail}
        <div>
          <p class="contact__link-label">Email</p>
          <p class="contact__link-value"><span class="placeholder-warning">[ISI EMAIL]</span></p>
        </div>
      </div>`;
  }

  // Instagram
  const igHandleContact = PROFILE_DATA.Instagram || PROFILE_DATA.instagram;
  if (!isPlaceholder(igHandleContact) && igHandleContact) {
    const igUsername = igHandleContact.replace('@', '').trim();
    linksContainer.innerHTML += `
      <a href="https://instagram.com/${igUsername}" target="_blank" rel="noopener noreferrer" class="contact__link">
        ${ICONS.instagram}
        <div>
          <p class="contact__link-label">Instagram</p>
          <p class="contact__link-value">@${igUsername}</p>
        </div>
      </a>`;
  }

  // GitHub
  if (!isPlaceholder(PROFILE_DATA.githubUrl) && PROFILE_DATA.githubUrl) {
    linksContainer.innerHTML += `
      <a href="${PROFILE_DATA.githubUrl}" target="_blank" rel="noopener noreferrer" class="contact__link">
        ${ICONS.github}
        <div>
          <p class="contact__link-label">GitHub</p>
          <p class="contact__link-value">${PROFILE_DATA.githubUrl.replace('https://github.com/', '')}</p>
        </div>
      </a>`;
  } else {
    linksContainer.innerHTML += `
      <div class="contact__link" style="cursor:default;">
        ${ICONS.github}
        <div>
          <p class="contact__link-label">GitHub</p>
          <p class="contact__link-value"><span class="placeholder-warning">[ISI URL GITHUB]</span></p>
        </div>
      </div>`;
  }

  // LinkedIn
  if (!isPlaceholder(PROFILE_DATA.linkedinUrl) && PROFILE_DATA.linkedinUrl) {
    linksContainer.innerHTML += `
      <a href="${PROFILE_DATA.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="contact__link">
        ${ICONS.linkedin}
        <div>
          <p class="contact__link-label">LinkedIn</p>
          <p class="contact__link-value">${PROFILE_DATA.linkedinUrl.replace('https://www.linkedin.com/in/', '')}</p>
        </div>
      </a>`;
  }

  // CV CTA
  const cvBtn = document.getElementById('contact-cv-btn');
  if (cvBtn) {
    if (isPlaceholder(PROFILE_DATA.cvUrl) || !PROFILE_DATA.cvUrl) {
      cvBtn.classList.add('btn--disabled');
      cvBtn.removeAttribute('href');
      cvBtn.innerHTML = `${ICONS.download} CV Belum Tersedia`;
    } else {
      cvBtn.href = PROFILE_DATA.cvUrl;
      cvBtn.target = '_blank';
      cvBtn.rel = 'noopener noreferrer';
      if (PROFILE_DATA.cvFileName) {
        cvBtn.setAttribute('download', PROFILE_DATA.cvFileName);
      }
      cvBtn.classList.remove('btn--disabled');
      cvBtn.innerHTML = `${ICONS.download} Download CV`;
    }
  }
}

/* ================================================================
   FOOTER
   ================================================================ */
function renderFooter() {
  const footerName = document.getElementById('footer-name');
  const footerSocials = document.getElementById('footer-socials');

  const name = isPlaceholder(PROFILE_DATA.fullName) ? 'Portfolio' : PROFILE_DATA.fullName;
  footerName.textContent = `© ${new Date().getFullYear()} ${name}`;

  footerSocials.innerHTML = '';
  if (!isPlaceholder(PROFILE_DATA.githubUrl) && PROFILE_DATA.githubUrl) {
    footerSocials.innerHTML += `
      <a href="${PROFILE_DATA.githubUrl}" target="_blank" rel="noopener noreferrer" 
         class="footer__social" aria-label="GitHub">
        ${ICONS.github}
      </a>`;
  }
  const igHandleFooter = PROFILE_DATA.Instagram || PROFILE_DATA.instagram;
  if (!isPlaceholder(igHandleFooter) && igHandleFooter) {
    const igUsername = igHandleFooter.replace('@', '').trim();
    footerSocials.innerHTML += `
      <a href="https://instagram.com/${igUsername}" target="_blank" rel="noopener noreferrer" 
         class="footer__social" aria-label="Instagram">
        ${ICONS.instagram}
      </a>`;
  }
  if (!isPlaceholder(PROFILE_DATA.linkedinUrl) && PROFILE_DATA.linkedinUrl) {
    footerSocials.innerHTML += `
      <a href="${PROFILE_DATA.linkedinUrl}" target="_blank" rel="noopener noreferrer" 
         class="footer__social" aria-label="LinkedIn">
        ${ICONS.linkedin}
      </a>`;
  }
  if (!isPlaceholder(PROFILE_DATA.email) && PROFILE_DATA.email) {
    footerSocials.innerHTML += `
      <a href="mailto:${PROFILE_DATA.email}" 
         class="footer__social" aria-label="Email">
        ${ICONS.mail}
      </a>`;
  }
}

/* ================================================================
   SCROLL REVEAL
   ================================================================ */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ================================================================
   ACTIVE NAVIGATION
   ================================================================ */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link');

  function updateActiveNav() {
    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 72;
    const scrollPos = window.scrollY + navbarHeight + 80;

    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    // If near bottom of page, activate last section (Contact)
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 60) {
      currentSectionId = 'contact';
    }

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
      });
    }
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
}
