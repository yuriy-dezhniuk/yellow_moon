function nuvbarManipulation() {
  let menuBtn = document.querySelector('.menu__btn');

  function changingNavbarPosition() {
    let fullscreenSection = document.querySelector('.fullscreen');
    let navbar = document.querySelector('.navbar');
    let aboutUs = document.querySelector('.about-us');

    if (window.pageYOffset > fullscreenSection.scrollHeight) {
      navbar.style.position = 'fixed';
      aboutUs.style.marginTop = `${navbar.scrollHeight}px`;
    } else {
      navbar.style.position = 'static';
      aboutUs.style.marginTop = `${0}px`;
    }
  }

  function openCloseMenu() {
    let menuBox = document.querySelector('.menu__box');
    
    menuBox.classList.toggle("close-menu");
  }

    document.addEventListener('scroll', changingNavbarPosition, false);
    menuBtn.addEventListener('click', openCloseMenu, false);
}

nuvbarManipulation();