const slides = [
  {
    image: "./images/scrap.jpeg",
    subtitle: "Metal Scraps",
    title: "Sustainable Quality",
    text: "Copper, Aluminium and Brass"
  },
  {
    image: "./images/foam.jpg",
    subtitle: "Plastic Scraps",
    title: "Recyclable Forms",
    text: "LDPE & HDPE (Rolls, Pellets, Grains and Bale)"
  }
];

let index = 0;

const hero = document.getElementById("hero");
const subtitle = document.getElementById("hero-subtitle");
const title = document.getElementById("hero-title");
const text = document.getElementById("hero-text");

function changeSlide() {
  const slide = slides[index];

  hero.style.backgroundImage = `
    linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.50)),
    url('${slide.image}')
  `;

  subtitle.textContent = slide.subtitle;
  title.textContent = slide.title;
  text.textContent = slide.text;

  index = (index + 1) % slides.length;
}

// Initial load
changeSlide();

// Change every 3 seconds
setInterval(changeSlide, 3000);



const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');
const menuIcon = menuToggle.querySelector('i');
const navLinks = navList.querySelectorAll('a');

function toggleMenu() {
  navList.classList.toggle('open');
  document.body.classList.toggle('no-scroll');

  if (navList.classList.contains('open')) {
    menuIcon.classList.replace('fa-bars', 'fa-xmark');
  } else {
    menuIcon.classList.replace('fa-xmark', 'fa-bars');
  }
}

menuToggle.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navList.classList.contains('open')) {
      toggleMenu();
    }
  });
});


