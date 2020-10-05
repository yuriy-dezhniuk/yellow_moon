function nuvbarManipulation() {
  let menuBtn = document.querySelector('.menu__btn');

  function changingNavbarPosition() {
    let fullscreenSection = document.querySelector('.fullscreen');
    let navbar = document.querySelector('.navbar');

    window.pageYOffset > fullscreenSection.scrollHeight ?
      navbar.style.position = 'fixed' : navbar.style.position = 'static';
  }


  function openCloseMenu() {
    // let menuVisibility = false;
    let menuBox = document.querySelector('.menu__box');

    menuBox.classList.toggle("close-menu");
  }

    document.addEventListener('scroll', changingNavbarPosition, false);
    menuBtn.addEventListener('click', openCloseMenu, false);
}

nuvbarManipulation();