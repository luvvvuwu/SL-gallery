html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000; /* fallback background while loading images */
}

.slideshow {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.slideshow img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: contain; /* fits entire image on screen, no cropping */
  opacity: 0;
  transition: opacity 1s ease-in-out; /* smooth fade */
}
