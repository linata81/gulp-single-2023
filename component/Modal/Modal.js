//modals
function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
  const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        content = modal.querySelector('.popup__content'),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]');

  trigger.forEach(item => {
    item.addEventListener('click', (e) => {
      if(e.target) {
        e.preventDefault();
      }

      windows.forEach(item => {
        item.style.opacity = '0';
        item.style.visibility = 'hidden';
        item.querySelector('.popup__content').classList.remove('open');
      });

      modal.style.opacity = '1';
      modal.style.visibility = 'visible';
      content.classList.add('open');
      document.body.style.overflow = "hidden";//чтобы не скролить страницу
    });
  });

  close.addEventListener('click', () => {
    windows.forEach(item => {
      item.style.opacity = '0';
      item.style.visibility = 'hidden';
      item.querySelector('.popup__content').classList.remove('open');
    });

    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
    content.classList.remove('open');
    document.body.style.overflow = "";
  });

  modal.addEventListener('click', (e) => {
    if(e.target === modal && closeClickOverlay) {
      windows.forEach(item => {
        item.style.opacity = '0';
        item.style.visibility = 'hidden';
        item.querySelector('.popup__content').classList.remove('open');
      });

      modal.style.opacity = '0';
      modal.style.visibility = 'hidden';
      content.classList.remove('open');
      document.body.style.overflow = "";
    }
  });
}

function showModalByTime(selector, time) {
  setTimeout(function(){
    const popup = document.querySelector(selector);
    popup.style.opacity = '1';
    popup.style.visibility = 'visible';
    popup.querySelector('.popup__content').classList.add('open');
    document.body.style.overflow = "hidden";
  }, time);
}

bindModal('.popap-btn', '.popup', '.popup__close');

showModalByTime('.popup', 1000);