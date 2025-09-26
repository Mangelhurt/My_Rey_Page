const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

function openMenu() {
  menu.classList.remove('hidden');
  menu.classList.add('menu-mobile');
  btn.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  menu.classList.add('hidden');
  menu.classList.remove('menu-mobile');
  btn.setAttribute('aria-expanded', 'false');
}

btn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (menu.classList.contains('hidden')) openMenu();
  else closeMenu();
});

// cerrar con clic fuera
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !btn.contains(e.target) && !menu.classList.contains('hidden')) {
    closeMenu();
  }
});

// cerrar con Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !menu.classList.contains('hidden')) closeMenu();
});

// asegurar estado correcto en resize
window.addEventListener('resize', () => {
  if (window.innerWidth >= 640) { // >= sm
    menu.classList.remove('menu-mobile');
    menu.classList.remove('hidden');
    btn.setAttribute('aria-expanded', 'false');
  } else {
    menu.classList.add('hidden'); // por defecto en móvil
  }
});