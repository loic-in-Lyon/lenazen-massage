// script de test
// const hero = document.getElementById('hero');
//     const buttons = document.querySelectorAll('#hero-buttons button');

//     buttons.forEach(button => {
//       button.addEventListener('click', () => {
//         const num = button.getAttribute('data-hero');
//         hero.style.backgroundImage = `linear-gradient(var(--color-overlay), var(--color-overlay)), url('assets/hero${num}.webp')`;
//       });
//     });


//     const fontButtons = document.querySelectorAll('#font-buttons button');

//     fontButtons.forEach(button => {
//       button.addEventListener('click', () => {
//         const num = button.getAttribute('data-font');
//         document.documentElement.style.setProperty('--current-font', `var(--font${num})`);
//       });
//     });


// script de la gallerie


// ------------- CONFIG -------------
const galleryFolder = 'assets/galerie'; // chemin vers le dossier
const imageCount = 6; // nombre d'images dans le dossier (à adapter)
const gallery = document.getElementById('gallery');

// ------------- INJECTION DES IMAGES -------------
for (let i = 1; i <= imageCount; i++) {
  const img = document.createElement('img');
  img.loading = "lazy";
  img.src = `${galleryFolder}/image${i}.jpg`; // nommage: image1.jpg, image2.jpg ...
  img.alt = `Image ${i}`;
  gallery.appendChild(img);
}

// ------------- DRAG HORIZONTAL -------------
let isDown = false;
let startX;
let scrollLeft;

gallery.addEventListener('mousedown', (e) => {
  isDown = true;
  gallery.classList.add('dragging');
  startX = e.pageX - gallery.offsetLeft;
  scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('mouseleave', () => {
  isDown = false;
  gallery.classList.remove('dragging');
});

gallery.addEventListener('mouseup', () => {
  isDown = false;
  gallery.classList.remove('dragging');
});

gallery.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - gallery.offsetLeft;
  const walk = (x - startX) * 2; // vitesse du drag
  gallery.scrollLeft = scrollLeft - walk;
});

// ------------- SUPPORT TOUCH -------------
let touchStartX = 0;
let touchScrollLeft = 0;

gallery.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].pageX;
  touchScrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = (x - touchStartX) * 2;
  gallery.scrollLeft = touchScrollLeft - walk;
});

// ouvrir le flyer

function openFlyer() {
  document.getElementById("flyerLightbox").style.display = "flex";
}

function closeFlyer() {
  document.getElementById("flyerLightbox").style.display = "none";
}
