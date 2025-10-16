// Placeholder for future interactions (kept for parity with other pages)
(() => {
  // Prevent image drag ghosts
  document.querySelectorAll('img').forEach(img => img.setAttribute('draggable', 'false'));
})();

// Reveal on scroll (bottom → top)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // reveal once
    }
  });
}, {threshold: 0.2});

document.querySelectorAll('.item').forEach(el => observer.observe(el));

