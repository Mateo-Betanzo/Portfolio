// ─── NAV TOGGLE ───
const nav    = document.getElementById('nav');
const toggle = document.getElementById('nav-toggle');

toggle.addEventListener('click', () => nav.classList.toggle('open'));

document.addEventListener('click', (e) => {
  if (!nav.contains(e.target)) nav.classList.remove('open');
});

nav.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// ─── SCROLL REVEAL ───
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${i * 0.05}s`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));