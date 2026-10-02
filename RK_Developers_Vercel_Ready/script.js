const projects = [
  {
    id: 1,
    name: "Sai Krishna Durga Residency",
    place: "Madhurawada, Visakhapatnam",
    stats: ["5 Floors", "20 Flats", "3 BHK", "1,460 sq. ft."],
    hero: "assets/p1-hero.jpg",
    gallery: ["assets/p1-hero.jpg", "assets/p1-plan.jpg", "assets/p1-spec.jpg"],
    overview: "A residential apartment development in Madhurawada featuring 3 BHK homes of approximately 1,460 sq. ft. The brochure highlights connectivity, Vaastu and ventilation considerations, lift access and CCTV security.",
    specs: ["RCC framed structure", "Teakwood-frame main entrance door", "Green marble kitchen platform with steel sink", "Concealed copper wiring and modular switches", "CPVC and GI pipes", "Ceramic tile flooring", "Bore-well water supply", "Passenger lift and CCTV security"]
  },
  {
    id: 2,
    name: "Sai Venkata Pavan Nivas",
    place: "Madhurawada, Visakhapatnam",
    stats: ["5 Floors", "5 Flats", "3 BHK", "1,600 sq. ft."],
    hero: "assets/p2-hero.jpg",
    gallery: ["assets/p2-hero.jpg", "assets/p2-plan.jpg"],
    overview: "A compact residential development with 3 BHK homes of approximately 1,600 sq. ft., planned with living, dining, kitchen, utility, balcony and lift access.",
    specs: ["RCC framed structure", "Teakwood-frame entrance door", "Countrywood doors and windows", "Granite kitchen platform", "Concealed electrical wiring", "CPVC and GI pipes", "Ceramic tile flooring", "Passenger lift"]
  },
  {
    id: 3,
    name: "Sai Venkata Pavan Residency",
    place: "Revallapalem, Visakhapatnam",
    stats: ["5 Floors", "20 Flats", "Multiple Configurations"],
    hero: "assets/p3-hero.jpg",
    gallery: ["assets/p3-hero.jpg", "assets/p3-plan.jpg", "assets/p3-spec.jpg"],
    overview: "A residential apartment development with multiple apartment sizes and layouts. The brochure shows 1,200 sq. ft. and 1,000 sq. ft. units alongside different bedroom configurations.",
    specs: ["RCC framed structure", "Teakwood-frame entrance door", "Countrywood doors and windows", "Green marble kitchen platform", "Concealed copper wiring", "CPVC and GI pipes", "Ceramic tile flooring", "Bore-well water and passenger lift", "CCTV security"]
  },
  {
    id: 4,
    name: "Sai Venkata Mohana Nivas",
    place: "Visakhapatnam",
    stats: ["5 Floors", "20 Flats", "Multiple Configurations"],
    hero: "assets/p4-hero.jpg",
    gallery: ["assets/p4-hero.jpg", "assets/p4-plan.jpg", "assets/p4-spec.jpg"],
    overview: "A residential development with multiple unit sizes shown in the typical floor plan, including 1,460 sq. ft., 1,150 sq. ft., 1,010 sq. ft. and 925 sq. ft. layouts.",
    specs: ["RCC framed structure", "Teakwood-frame main door", "Countrywood internal doors and windows", "Green marble kitchen platform", "Concealed copper wiring", "CPVC and GI pipes", "Ceramic tile flooring", "Bore-well water and passenger lift", "Vaastu and ventilation consideration"]
  },
  {
    id: 5,
    name: "Sai Venkat Pavan Residency",
    place: "Madhurawada, Visakhapatnam",
    stats: ["4 Floors", "8 Flats", "2 BHK", "950 sq. ft."],
    hero: "assets/p5-hero.jpg",
    gallery: ["assets/p5-hero.jpg", "assets/p5-plan.jpg", "assets/p5-spec.jpg"],
    overview: "A residential project presented around the theme 'Luxury Living', with 950 sq. ft. 2 BHK apartments, balconies, utility areas, lift access and a 40-ft road shown in the brochure.",
    specs: ["RCC framed structure", "Teakwood-frame entrance door", "Granite kitchen platform", "Concealed copper wiring and modular switches", "CPVC and GI pipes", "Ceramic tile flooring", "Bore-well water", "Passenger lift"]
  },
  {
    id: 6,
    name: "Sai Venkata Harshitha Nivas",
    place: "Madhurawada, Visakhapatnam",
    stats: ["5 Floors", "5 Flats", "Multiple Configurations"],
    hero: "assets/p6-hero.jpg",
    gallery: ["assets/p6-hero.jpg", "assets/p6-plan.jpg", "assets/p6-spec.jpg"],
    overview: "A residential development with multiple unit sizes shown in the brochure, including 925 sq. ft., 580 sq. ft. and 1,160 sq. ft. layouts. A 30-ft road is shown on the floor-plan sheet.",
    specs: ["RCC framed structure", "Teakwood-frame main entrance door", "Countrywood doors and windows", "Green marble kitchen platform", "Concealed copper wiring", "CPVC and GI pipes", "Ceramic tile flooring", "Bore-well water and passenger lift", "Vaastu and ventilation consideration"]
  }
];

const grid = document.getElementById('projectGrid');
const projectMore = document.getElementById('projectMore');
let projectsExpanded = false;

function renderProjects() {
  const visibleProjects = projectsExpanded ? projects : projects.slice(0, 3);
  grid.innerHTML = visibleProjects.map(p => `
    <article class="project-card reveal" data-id="${p.id}" tabindex="0" role="button" aria-label="View ${p.name}">
      <img src="${p.hero}" alt="${p.name}" loading="lazy">
      <div class="project-info">
        <span class="project-index">${String(p.id).padStart(2, '0')} / PROJECT</span>
        <h3>${p.name}</h3>
        <p>${p.place} · ${p.stats[0]} · ${p.stats[1]}</p>
      </div>
      <div class="project-arrow" aria-hidden="true">↗</div>
    </article>`).join('');

  projectMore.textContent = projectsExpanded ? 'Show Less ↑' : 'View More Projects →';
  projectMore.setAttribute('aria-expanded', String(projectsExpanded));
  requestAnimationFrame(() => {
    grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

renderProjects();
projectMore.addEventListener('click', () => {
  projectsExpanded = !projectsExpanded;
  renderProjects();
  if (!projectsExpanded) {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

const modal = document.getElementById('projectModal');
const modalHero = document.getElementById('modalHero');
const modalName = document.getElementById('modalName');
const modalKicker = document.getElementById('modalKicker');
const modalStats = document.getElementById('modalStats');
const modalOverview = document.getElementById('modalOverview');
const modalSpecs = document.getElementById('modalSpecs');
const modalGallery = document.getElementById('modalGallery');

function openProject(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  modalHero.src = p.hero;
  modalHero.alt = p.name;
  modalName.textContent = p.name;
  modalKicker.textContent = p.place;
  modalStats.innerHTML = p.stats.map(s => `<div class="modal-stat"><b>${s}</b></div>`).join('');
  modalOverview.textContent = p.overview;
  modalSpecs.innerHTML = p.specs.map(s => `<li>${s}</li>`).join('');
  modalGallery.innerHTML = p.gallery.map(src => `<img src="${src}" alt="${p.name} project image" loading="lazy">`).join('');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

grid.addEventListener('click', e => {
  const card = e.target.closest('.project-card');
  if (card) openProject(Number(card.dataset.id));
});

grid.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('.project-card')) {
    e.preventDefault();
    openProject(Number(e.target.closest('.project-card').dataset.id));
  }
});

document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Scroll reveal for all static sections.
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Header state + active navigation.
const header = document.querySelector('.site-header');
const navLinks = [...document.querySelectorAll('.desktop-nav a')];
const sections = [...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
  const y = window.scrollY + 160;
  let current = 'home';
  sections.forEach(section => { if (y >= section.offsetTop) current = section.id; });
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
}, { passive: true });

// Mobile menu.
const menuBtn = document.querySelector('.menu-btn');
const mobile = document.querySelector('.mobile-menu');
menuBtn.addEventListener('click', () => {
  const open = mobile.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobile.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

// Contact form: prepare a real email enquiry without requiring a backend.
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const note = document.getElementById('formNote');
  const subject = encodeURIComponent(`Website Enquiry — ${data.get('interest')} — RK Developers`);
  const body = encodeURIComponent(
`Name: ${data.get('name')}
Phone: ${data.get('phone')}
Email: ${data.get('email') || 'Not provided'}
Interested in: ${data.get('interest')}

Message:
${data.get('message') || 'No message provided'}`
  );
  note.textContent = 'Opening your email app with the enquiry details…';
  window.location.href = `mailto:rkdeveloperofficial1@gmail.com?subject=${subject}&body=${body}`;
});

// Make project modal's enquiry link close first, then land on contact.
document.querySelector('.modal-body [data-close]')?.addEventListener('click', () => {
  setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 30);
});
