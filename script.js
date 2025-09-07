// Seamless loop: duplicate the slides once so the animation can scroll -50%
const carousel = document.getElementById('carousel');
const original = carousel.innerHTML;
carousel.insertAdjacentHTML('beforeend', original);

// (Optional) If you ever want to tweak speed from JS instead of CSS:
// document.documentElement.style.setProperty('--duration', '20s');
