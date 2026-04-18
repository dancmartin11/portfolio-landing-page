// Portfolio interactions — lightweight, no dependencies.

(function () {
  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      toggle.setAttribute(
        'aria-expanded',
        menu.classList.contains('open') ? 'true' : 'false'
      );
    });
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  // Copy email
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const value = btn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(value);
        const original = btn.getAttribute('data-label') || btn.textContent;
        btn.setAttribute('data-label', original);
        btn.textContent = 'Copied ✓';
        setTimeout(() => { btn.textContent = original; }, 1600);
      } catch (err) {
        console.warn('Copy failed', err);
      }
    });
  });

  // Contact form (client-side only demo)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = document.querySelector('#contact-success');
      form.style.display = 'none';
      if (success) success.style.display = 'block';
    });
  }

  // Year
  const y = document.querySelector('#year');
  if (y) y.textContent = new Date().getFullYear();
})();
