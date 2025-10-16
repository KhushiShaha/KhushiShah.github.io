// Disable image dragging
(() => {
  document.querySelectorAll('img').forEach(img => img.setAttribute('draggable', 'false'));
})();

// Hero animation
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hire-hero');
  if (hero) requestAnimationFrame(() => hero.classList.add('play'));
});

const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();                         // stop page navigation

  statusEl.textContent = 'Sending…';
  statusEl.style.color = '#ddd';

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      form.reset();
      statusEl.textContent = 'Thanks! Your message was sent.';
      statusEl.style.color = '#e50914';       // red
    } else {
      const data = await res.json().catch(() => ({}));
      const msg = data?.errors?.map(e => e.message).join(', ')
               || 'Unable to send right now.';
      statusEl.textContent = msg;
      statusEl.style.color = '#ff6060';
      console.warn('Formspree error', data);
    }
  } catch (err) {
    statusEl.textContent = 'Network error. Please try again.';
    statusEl.style.color = '#ff6060';
    console.error(err);
  }
});

