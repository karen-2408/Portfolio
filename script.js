// Profile card interactions
document.querySelectorAll('.profile-card').forEach(card => {
  card.addEventListener('click', () => {
    const target = card.getAttribute('data-target');
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('main-site').classList.add('visible');
    
    setTimeout(() => {
      if (target && document.querySelector(target)) {
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
      }
    }, 600);
  });
});

// Row scrolling functionality
document.querySelectorAll('.row-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const row = btn.closest('.row');
    const posters = row.querySelector('.row-posters');
    const scrollAmount = 220;
    
    if (btn.classList.contains('left')) {
      posters.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      posters.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  });
});

// Manage profiles button (placeholder)
document.querySelector('.manage-btn').addEventListener('click', () => {
  alert('Profile management coming soon!');
});
