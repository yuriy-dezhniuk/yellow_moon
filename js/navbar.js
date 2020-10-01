function nuvbarManipulation() {
  let fullscreenSection = document.querySelector('.fullscreen');
  let navbar = document.querySelector('.navbar');

  function changingNavbarPosition() {
    window.pageYOffset > fullscreenSection.scrollHeight ?
      navbar.style.position = 'fixed' : navbar.style.position = 'static';
  }


    document.addEventListener('scroll', changingNavbarPosition, false);
}

nuvbarManipulation();