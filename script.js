const carousel = document.getElementById('carousel');
const slides = Array.from(carousel.children);

// duplicate slides for seamless scrolling
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  carousel.appendChild(clone);
});

let position = 0;                // current translateX in pixels
const speed = 0.5;               // pixels per frame (adjust for speed)
const totalWidth = slides.length * window.innerWidth;

function animate() {
  position -= speed;             // move left
  if (Math.abs(position) >= totalWidth) {
    position = 0;                // reset when fully scrolled
  }
  carousel.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();
