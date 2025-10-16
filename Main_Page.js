(() => {
  const buttons = document.querySelectorAll('.memberDiv .btn');

  // Make buttons work via click & keyboard
  buttons.forEach(btn => {
    const target = btn.getAttribute('data-target');
    btn.setAttribute('role', 'link');
    btn.setAttribute('aria-label', `Open ${btn.textContent.trim()} profile`);
    btn.addEventListener('click', () => {
      if (target) window.location.href = target;
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (target) window.location.href = target;
      }
    });
  });
})();
