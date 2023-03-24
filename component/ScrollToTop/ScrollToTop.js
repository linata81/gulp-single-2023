//scroll to top
(() => {
  const toTop = document.querySelector(".to-top");
  
  window.addEventListener("scroll", () => {
    if(window.scrollY > 700) {
      toTop.classList.add('active');
    } else {
      toTop.classList.remove('active');
    }
  });
  
  toTop.addEventListener('click', () => {
    window.scrollTo(0,0);
  })
})();