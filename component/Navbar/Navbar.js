//hamburger menu
(() => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle('locked');
  });

  document.querySelectorAll(".menu__link").forEach(n => n.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if(!isDropdownButton) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active"); 
      document.body.classList.remove("locked");
    }
  }))
  
//если телефон повернут вертикально и экран расширится, чтобы сбросить все блокировки
  window.addEventListener('resize', () => {
    if(window.innerWidth > 768) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active"); 
      document.body.classList.remove("locked");
    }
  })
  
//если нужно зафиксировать меню при скроле
  function fixedNav() {
    const nav = document.querySelector(".navbar");
    
    //указать в пикселях, сколько проскролить чтобы меню стало фиксированным
    const breakpoint = 1;
 // if(window.scrollY >= breakpoint) {
    if(window.scrollY >= breakpoint && window.innerWidth < 768) {
      nav.classList.add("fixed-nav")
    } else {
      nav.classList.remove("fixed-nav")
    }
  }
  
  // window.addEventListener('scroll', fixedNav)
})();