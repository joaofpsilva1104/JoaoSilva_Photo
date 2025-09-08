const yearEl = document.getElementById('year'); if (yearEl) yearEl.textContent = new Date().getFullYear();
const toggle = document.getElementById('nav-toggle'); const links = document.getElementById('nav-links');
if (toggle) { toggle.addEventListener('click', ()=>{ links.style.display = links.style.display==='block' ? 'none' : 'block'; }); }
