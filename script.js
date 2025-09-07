const carousel = document.getElementById('carousel');
const slides = Array.from(carousel.children);

// Duplicate slides for seamless scrolling
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  carousel.appendChild(clone);
});

let position = 0;
const speed = 1; // pixels per frame, adjust for scroll speed
const totalWidth = slides.length * window.innerWidth;

function animate() {
  position -= speed;
  if (Math.abs(position) >= totalWidth) {
    position = 0; // reset seamlessly
  }
  carousel.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();
