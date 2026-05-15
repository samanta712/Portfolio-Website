// Nav mobile toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '60px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = '#fff';
    navLinks.style.padding = '16px 24px 24px';
    navLinks.style.borderBottom = '1px solid #e8e4de';
    navLinks.style.gap = '16px';
    if (open) navLinks.style.display = 'none';
  });
}

// Portfolio filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    portfolioItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.classList.add('visible');
        // Reset fade-in state so items are always visible after filtering
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      } else {
        item.classList.remove('visible');
      }
    });
  });
});

// Subtle fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .blog-list-item, .blog-card').forEach(el => {
  // Portfolio items: don't set opacity:0 on load — the filter CSS (.portfolio-item / .visible)
  // already controls their display. Setting opacity:0 breaks the lightbox zoom.
  if (el.classList.contains('portfolio-item')) {
    el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    return;
  }
  el.style.opacity = '0';
  el.style.transform = 'translateY(12px)';
  el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  observer.observe(el);
});
document.querySelectorAll('.card[data-href]').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    location.href = card.dataset.href;
  });
});
