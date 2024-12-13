// hambuger menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('change');
  mobileNav.classList.toggle('show');
});

// Close the mobile navigation when screen size is larger than 768px
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMenu(); // Close the mobile navigation
  }
});
function closeMenu() {
  hamburgerMenu.classList.remove('change');
  mobileNav.classList.remove('show');
}

// typing effect
const codeString = `While (alive) { 
  eat(); 
  sleep(); 
  code(); 
  repeat();
}`;

let i = 0;
const codeElement = document.getElementById('code');

function type(time) {
if (i < codeString.length) {
  codeElement.innerHTML += codeString.charAt(i);
  i++;
  setTimeout(() => requestAnimationFrame(type), 100); // Adjust the typing speed here
}
}
// Start the animation
requestAnimationFrame(type)

// Nav links active on scroll

const navLinkEls = document.querySelectorAll('.nav-link');
const sectionEls = document.querySelectorAll('.section');

let currentSection = 'home';
window.addEventListener('scroll', () => {
  sectionEls.forEach(sectionEl => {
    if (window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight / 3 )) {
      currentSection = sectionEl.id;
    }
  });

  navLinkEls.forEach(navLinkEl => {
    if (navLinkEl.href.includes(currentSection)) {
      document.querySelector('.active').classList.remove('active');
      navLinkEl.classList.add('active');
    }
  });
});

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    // } else {
    //   entry.target.classList.remove('show');
    }
  });
});  

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));