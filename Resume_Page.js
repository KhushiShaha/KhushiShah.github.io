(() => {
  // Simple: prevent dragging icons; future resume interactions can go here.
  document.querySelectorAll('img').forEach(img => img.setAttribute('draggable','false'));
})();
