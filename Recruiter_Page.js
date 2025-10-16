(() => {
  const rail = document.getElementById('picksRail');
  if (!rail) return;

  // 1) Wheel: vertical -> horizontal scroll (simple, non-intrusive)
  rail.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      rail.scrollBy({ left: e.deltaY, behavior: 'auto' });
    }
  }, { passive: false });

  // 2) Keyboard support (when rail is focused)
  rail.addEventListener('keydown', (e) => {
    const STEP = 120;
    if (e.key === 'ArrowRight') { rail.scrollBy({ left: STEP, behavior: 'smooth' }); }
    if (e.key === 'ArrowLeft')  { rail.scrollBy({ left: -STEP, behavior: 'smooth' }); }
  });

  // 3) Make sure images don't start drag-ghosts
  document.querySelectorAll('.pick-card img, .avatar img, .logo').forEach(img => {
    img.setAttribute('draggable', 'false');
  });

  // 4) Do NOT add any pointerdown/move handlers — clicks should always pass through.
})();
