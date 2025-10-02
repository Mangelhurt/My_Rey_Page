const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('nav a:not(.logo-link)');

function openMenu() {
  menu.classList.remove('hidden');       // quita display:none
  menu.classList.add('menu-mobile');     // aplica estilo móvil
  setTimeout(() => menu.classList.add('show'), 10); // activa transición
  btn.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  menu.classList.remove('show');
  setTimeout(() => {
    menu.classList.remove('menu-mobile');
    menu.classList.add('hidden');
  }, 300);
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
  if (window.innerWidth >= 640) { 
    menu.classList.remove('menu-mobile');
    menu.classList.remove('hidden');
    btn.setAttribute('aria-expanded', 'false');
  } else {
    menu.classList.add('hidden');
  }
});

//----------------------------------deteccion de url-----//
navLinks.forEach(link => {
  if (link.href.includes(currentPath)) {
    link.classList.add("active");
  }
});