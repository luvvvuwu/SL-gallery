// Add your image URLs here
const images = [
  'https://picsum.photos/id/1015/1920/1080',
  'https://picsum.photos/id/1016/1920/1080',
  'https://picsum.photos/id/1018/1920/1080'
];

const slideshow = document.getElementById('slideshow');

// Create img elements
images.forEach((src, index) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = `Slide ${index+1}`;
  if(index === 0) img.style.opacity = 1; // first image visible
  slideshow.appendChild(img);
});

let current = 0;
const slides = slideshow.querySelectorAll('img');
const intervalTime = 5000; // 5 seconds per slide

setInterval(() => {
  slides[current].style.opacity = 0;
  current = (current + 1) % slides.length;
  slides[current].style.opacity = 1;
}, intervalTime);
