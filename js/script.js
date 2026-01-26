// Basic interactivity: mobile nav toggle, smooth scroll, modal for project details, and footer year

document.addEventListener('DOMContentLoaded', function () {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('navbar');
  navToggle && navToggle.addEventListener('click', () => {
    if (nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // close mobile nav after click
      if (window.innerWidth <= 980 && nav) nav.style.display = 'none';
    });
  });

  // Project details modal
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalTech = document.getElementById('modal-tech');
  const modalClose = document.getElementById('modal-close');

  document.querySelectorAll('.btn-sm').forEach(btn => {
    btn.addEventListener('click', () => {
      const data = btn.getAttribute('data-project');
      if (!data) return;
      const obj = JSON.parse(data);
      modalTitle.textContent = obj.title || 'Project';
      modalDesc.textContent = obj.desc || '';
      modalTech.textContent = obj.tech ? `Tech: ${obj.tech}` : '';
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  modalClose && modalClose.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'true');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.setAttribute('aria-hidden', 'true');
  });

  // Improve mailto fallback: (forms with action mailto will open default mail app; optionally you can implement backend)
});
