//lazy loading
(() => {
  const lazyImages = document.querySelectorAll('img[data-src],source[data-srcset]');
  const loadMapBlock = document.querySelector('._load-map');
  const windowHeight = document.documentElement.clientHeight;
  
  let lazyImagesPositions = [];
  if(lazyImages.length > 0){
    lazyImages.forEach((img) => {
      if(img.dataset.src || img.dataset.srcset) {
        lazyImagesPositions.push(img.getBoundingClientRect().top + scrollY);
        lazyScrollCheck();
      }
    })
  }
  
  window.addEventListener("scroll", lazyScroll);
  
  function lazyScroll() {
    if(document.querySelectorAll('img[data-src],source[data-srcset]').length > 0) {
      lazyScrollCheck();
    }
    //google-map
    if(!loadMapBlock.classList.contains('_loaded')) {
      getMap();
    }
  }
  
  function lazyScrollCheck() {
    let imgIndex = lazyImagesPositions.findIndex(
      item => scrollY > item - windowHeight
    );
    if(imgIndex >= 0) {
      if(lazyImages[imgIndex].dataset.src) {
        lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
        lazyImages[imgIndex].removeAttribute('data-src');
      } else if (lazyImages[imgIndex].dataset.srcset) {
        lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
        lazyImages[imgIndex].removeAttribute('data-srcset');
      }
      delete lazyImagesPositions[imgIndex];
    }
  }
  
  //google-map
  function getMap() {
    const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + scrollY;
    if(scrollY > loadMapBlockPos - windowHeight) {
      const loadMapUrl = loadMapBlock.dataset.map;
      if(loadMapUrl) {
        loadMapBlock.insertAdjacentHTML(
          "beforeend",
          `<iframe src="${loadMapUrl}" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
        );
        loadMapBlock.classList.add('_loaded');
      }
    }
  }
})();