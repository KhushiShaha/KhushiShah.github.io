// Prevent image drag ghosts
(() => {
  document.querySelectorAll('img').forEach(img => img.setAttribute('draggable', 'false'));
})();

// Play the top→bottom cascade on load (hero + contact + social)
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hire-hero');
  if (!hero) return;
  // ensure initial styles apply before adding .play
  requestAnimationFrame(() => hero.classList.add('play'));
});

// Simple client-side validation + placeholder behavior
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.fullName.value.trim();
  const email = this.emailAddress.value.trim();
  const message = this.messageBody.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  console.log('Contact form submitted:', { name, email, message });
  alert('Thank you! Your message has been submitted.');
  this.reset();
});
