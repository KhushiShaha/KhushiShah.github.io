(() => {
  // Simple: prevent dragging icons; future resume interactions can go here.
  document.querySelectorAll('img').forEach(img => img.setAttribute('draggable','false'));
})();

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.skill-card');

  cards.forEach(card => {
    const details = card.querySelector('.skill-details');
    const closeBtn = details?.querySelector('.skill-close');

    // Click on the main card (front) to show the 2nd card
    card.addEventListener('click', (e) => {
      // Prevent reopening if already active or if clicking inside details
      if (card.classList.contains('active') || e.target.closest('.skill-details')) return;
      card.classList.add('active');
    });

    // Click on the 2nd card or close button to hide it
    if (details) {
      details.addEventListener('click', () => card.classList.remove('active'));
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('active');
      });
    }
  });
});

