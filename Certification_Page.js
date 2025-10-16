// Placeholder for future interactions (kept for parity with other pages)
(() => {
  // Prevent image drag ghosts
  document.querySelectorAll('img').forEach(img => img.setAttribute('draggable', 'false'));
})();


// Open modal on any "View Me" click
document.querySelectorAll('.view-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('certModal').style.display = 'flex';
  });
});

// Close on X
document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('certModal').style.display = 'none';
});

// Close when clicking outside the box
document.getElementById('certModal').addEventListener('click', (e) => {
  if (e.target.id === 'certModal') {
    e.currentTarget.style.display = 'none';
  }
});


