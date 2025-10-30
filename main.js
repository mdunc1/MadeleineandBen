

// ------------GENERAL--------------
// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      console.log('Menu toggled'); // debug
    });
  } else {
    console.warn('Menu toggle or nav not found');
  }
});




// ----------- COUNTDOWN -----------
const countdownContainer = document.querySelector('#countdown');
if (countdownContainer) {
  const daysEl = document.querySelector('#days');
  const hoursEl = document.querySelector('#hours');
  const minutesEl = document.querySelector('#minutes');
  const secondsEl = document.querySelector('#seconds');

  const weddingDate = new Date('2026-04-08T00:00:00');

  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = hours;
    if (minutesEl) minutesEl.textContent = minutes;
    if (secondsEl) secondsEl.textContent = seconds;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// -----------------------------Carousel-----------------------------------//
// document.querySelectorAll('.carousel').forEach(carousel => {
//   const track = carousel.querySelector('.carousel-track');
//   const slides = Array.from(track.children);
//   const nextButton = carousel.querySelector('.carousel-button.next');
//   const prevButton = carousel.querySelector('.carousel-button.prev');
//   let currentIndex = 0;

//   function updateCarousel() {
//     const slideWidth = slides[0].getBoundingClientRect().width + 10; // include gap
//     track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//   }

//   // Buttons
//   if (prevButton) {
//     prevButton.addEventListener('click', () => {
//       currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
//       updateCarousel();
//     });
//   }

//   if (nextButton) {
//     nextButton.addEventListener('click', () => {
//       currentIndex = (currentIndex + 1) % slides.length;
//       updateCarousel();
//     });
//   }

//   // Mobile swipe support
//   let startX = 0;
//   track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
//   track.addEventListener('touchend', e => {
//     let endX = e.changedTouches[0].clientX;
//     if (endX < startX - 50) {
//       currentIndex = (currentIndex + 1) % slides.length;
//     } else if (endX > startX + 50) {
//       currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     }
//     updateCarousel();
//   });

//   updateCarousel();
// });

document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = carousel.querySelector('.carousel-button.next');
  const prevButton = carousel.querySelector('.carousel-button.prev');
  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width + 10; // include gap
    track.style.transition = 'transform 0.4s ease';
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  // Button navigation
  nextButton?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  prevButton?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  // --- Mobile swipe support ---
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    isDragging = true;
    track.style.transition = 'none'; // disable smooth transition during drag
  });

  track.addEventListener('touchmove', e => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const dx = currentX - startX;
    const slideWidth = slides[0].getBoundingClientRect().width + 10;
    track.style.transform = `translateX(calc(-${currentIndex * slideWidth}px + ${dx}px))`;
  });

  track.addEventListener('touchend', e => {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.changedTouches[0].clientX;
    const dx = endX - startX;
    const threshold = 50; // minimum swipe distance

    if (dx < -threshold) {
      // Swipe left → next
      currentIndex = (currentIndex + 1) % slides.length;
    } else if (dx > threshold) {
      // Swipe right → prev
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }

    updateCarousel();
  });

  updateCarousel();
});


// ----------- CONFETTI -----------
const canvas = document.getElementById('confettiCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const whiteShades = [
    '#ffffff', // pure white
    '#f8f8f8', // very light gray
    '#f0f0f0', // light gray
    '#e8e8e8', // pale gray
    '#eeeeee', // soft white
    '#ca948f', //dustyrose
    '#0b3836',
    '#f5f5f5'  // off-white
  ];

  class ConfettiParticle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 8 + 2;
      // this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
      this.color = whiteShades[Math.floor(Math.random() * whiteShades.length)];
      this.speedX = Math.random() * 6 - 3;
      this.speedY = Math.random() * 6 - 3;
      this.gravity = 0.1;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = Math.random() * 5 - 2.5;
      // this.opacity = 1;
      // this.fadeSpeed = 0.002;
      // Random initial opacity between 0.4 and 1
      this.opacity = 0.4 + Math.random() * 0.6;

      // Optional: slightly different fade speeds for each petal
      this.fadeSpeed = 0.001 + Math.random() * 0.002;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.speedY += this.gravity;
      this.rotation += this.rotationSpeed;
      this.opacity -= this.fadeSpeed;
      return this.opacity > 0 && this.y <= canvas.height + this.size;
    }


    // }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation * Math.PI / 180);
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
  
      // Draw petal shape using ellipse
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size, this.size * 0.5, 0, 0, Math.PI * 2); // width, height
      ctx.fill();
      
      ctx.restore();
  }
  
  }

  function createConfetti(count, x, y) {
    for (let i = 0; i < count; i++) {
      particles.push(new ConfettiParticle(x, y));
    }
  }

  function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => p.update());
    particles.forEach(p => p.draw());
    requestAnimationFrame(animateConfetti);
  }

  canvas.addEventListener('click', (e) => {
    createConfetti(50, e.clientX, e.clientY);
  });

  animateConfetti();
  createConfetti(100, canvas.width / 1.5, canvas.height / 1.5);
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // Trigger confetti on any click/tap on the page
  document.addEventListener('click', (ev) => {
    // ev.clientX/clientY are in CSS pixels — canvas uses same coords here
    createConfetti(40, ev.clientX, ev.clientY);
  });
}
