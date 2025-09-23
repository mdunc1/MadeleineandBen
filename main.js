
// // Set your target date here
//     const targetDate = new Date("2026-04-01T00:00:00").getTime();

//     function updateCountdown() {
//       const now = new Date().getTime();
//       const diff = targetDate - now;
//       const daysEl = document.getElementById('days');
//       const hoursEl = document.getElementById('hours');
//       const minutesEl = document.getElementById('minutes');
//       const secondsEl = document.getElementById('seconds');
    
//       if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
//         return; // skip if any element is missing
//       }

//       if (diff <= 0) {
//         document.querySelector(".countdown").innerHTML = "<h1>It's Time!</h1>";
//         clearInterval(interval);
//         return;
//       }

//       const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((diff % (1000 * 60)) / 1000);

//       document.getElementById("days").textContent = days;
//       document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
//       document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
//       document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
//     }

//     const interval = setInterval(updateCountdown, 1000);
//     updateCountdown();






// const track = document.querySelector('.carousel-track');
// const slides = Array.from(track.children);
// const prevButton = document.querySelector('.carousel-button.prev');
// const nextButton = document.querySelector('.carousel-button.next');

// let currentIndex = 0;

// function updateCarousel() {
//   const slideWidth = slides[0].getBoundingClientRect().width;
//   track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
// }

// // Buttons
// prevButton.addEventListener('click', () => {
//   currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
//   updateCarousel();
// });

// nextButton.addEventListener('click', () => {
//   currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
//   updateCarousel();
// });

// // Mobile swipe support
// let startX = 0;
// track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
// track.addEventListener('touchend', e => {
//   let endX = e.changedTouches[0].clientX;
//   if (endX < startX - 50) {
//     currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
//   } else if (endX > startX + 50) {
//     currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
//   }
//   updateCarousel();
// });


// function updateCarousel() {
//   const slideWidth = slides[0].getBoundingClientRect().width + 10; // include gap
//   track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
// }

// // Buttons
// nextButton.addEventListener('click', () => {
//   if (currentIndex < slides.length - 3) { // 3 = images visible
//     currentIndex++;
//   } else {
//     currentIndex = 0; // loop
//   }
//   updateCarousel();
// });

// prevButton.addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//   } else {
//     currentIndex = slides.length - 3; // loop
//   }
//   updateCarousel();
// });

// ------------GENERAL--------------
// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// ----------- COUNTDOWN -----------
const countdownContainer = document.querySelector('#countdown');
if (countdownContainer) {
  const daysEl = document.querySelector('#days');
  const hoursEl = document.querySelector('#hours');
  const minutesEl = document.querySelector('#minutes');
  const secondsEl = document.querySelector('#seconds');

  const weddingDate = new Date('2026-04-18T15:00:00'); // update your date

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

// ----------- CAROUSEL -----------
// const track = document.querySelector('.carousel-track');
// if (track) {
//   const slides = Array.from(track.children);
//   const nextButton = document.querySelector('.carousel-button.next');
//   const prevButton = document.querySelector('.carousel-button.prev');
//   let currentIndex = 0;

//   function updateCarousel() {
//   const slideWidth = slides[0].getBoundingClientRect().width + 10; // include gap
//   track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
// }

//   // Buttons
// prevButton.addEventListener('click', () => {
//   currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
//   updateCarousel();
// });

// nextButton.addEventListener('click', () => {
//   currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
//   updateCarousel();
// });

// // Mobile swipe support
// let startX = 0;
// track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
// track.addEventListener('touchend', e => {
//   let endX = e.changedTouches[0].clientX;
//   if (endX < startX - 50) {
//     currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
//   } else if (endX > startX + 50) {
//     currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
//   }
//   updateCarousel();
// });


//   if (nextButton) {
//     nextButton.addEventListener('click', () => {
//       currentIndex = (currentIndex + 1) % slides.length;
//       updateCarousel();
//     });
//   }

//   if (prevButton) {
//     prevButton.addEventListener('click', () => {
//       currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//       updateCarousel();
//     });
//   }

//   updateCarousel();
// }
document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = carousel.querySelector('.carousel-button.next');
  const prevButton = carousel.querySelector('.carousel-button.prev');
  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width + 10; // include gap
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  // Buttons
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
      updateCarousel();
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    });
  }

  // Mobile swipe support
  let startX = 0;
  track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  track.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (endX < startX - 50) {
      currentIndex = (currentIndex + 1) % slides.length;
    } else if (endX > startX + 50) {
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

    // draw() {
    //   ctx.save();
    //   ctx.translate(this.x, this.y);
    //   ctx.rotate(this.rotation * Math.PI / 180);
    //   ctx.globalAlpha = this.opacity;
    //   ctx.fillStyle = this.color;
    //   ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    //   ctx.restore();
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
