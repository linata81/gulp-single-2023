//Accordeon
(() => {
  document.querySelectorAll('.accordeon__header').forEach(el => {
    el.addEventListener('click', () => {
      
      const content = el.nextElementSibling;
      
      if(content.style.maxHeight) {
        document.querySelectorAll('.accordeon__body').forEach((el) => el.style.maxHeight = null);
        el.classList.remove('opened');
      } else {
        document.querySelectorAll('.accordeon__body').forEach((el) => el.style.maxHeight = null);
        content.style.maxHeight = content.scrollHeight + 'px';
        document.querySelectorAll('.accordeon__header').forEach((el) => el.classList.remove('opened'));
        el.classList.add('opened');
      }
    })
  })
})();