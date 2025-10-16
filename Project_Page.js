// Placeholder for future interactions (kept for parity with other pages)
(() => {
  // Prevent image drag ghosts
  document.querySelectorAll('img').forEach(img => img.setAttribute('draggable', 'false'));
})();

// Open “details” card
  document.addEventListener('click', function (e) {
    var viewBtn = e.target.closest ? e.target.closest('.view-btn') : null;
    if (viewBtn) {
      var card = viewBtn.closest('.project-card');
      if (card) card.classList.add('show-details');
      return; // stop here so the same click doesn't also hit close
    }

    // Close (X)
    var closeBtn = e.target.closest ? e.target.closest('.close-details') : null;
    if (closeBtn) {
      var card2 = closeBtn.closest('.project-card');
      if (card2) card2.classList.remove('show-details');
    }
  });

  // ESC to close any open details
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var openCards = document.querySelectorAll('.project-card.show-details');
    for (var i = 0; i < openCards.length; i++) {
      openCards[i].classList.remove('show-details');
    }
  });

  document.addEventListener('click', (e) => {
  const viewBtn = e.target.closest('.view-btn');
  if (viewBtn) {
    const card = viewBtn.closest('.project-card');
    if (card) {
      card.classList.add('show-details');
      document.body.classList.add('no-scroll');
    }
  }

  const closeBtn = e.target.closest('.close-details');
  if (closeBtn) {
    const card = closeBtn.closest('.project-card');
    if (card) {
      card.classList.remove('show-details');
      document.body.classList.remove('no-scroll');
    }
  }
});
