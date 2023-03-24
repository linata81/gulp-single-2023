//dropdown menu
(() => {
  document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
  
    if(!isDropdownButton && e.target.closest('[data-dropdown-button]') != null) return
  
    let currentDropdown;
    if(isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown-button]');
      currentDropdown.classList.toggle('opened');
    }
    
    document.querySelectorAll('[data-dropdown-button].opened').forEach(dropdown => {
      if(dropdown === currentDropdown) return
      dropdown.classList.remove('opened');
    })
  })
})();