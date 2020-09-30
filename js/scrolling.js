function scrolling() {
  let scrollBtn = document.querySelector('.fullscreen__arrow_btn');
  let fullscreenSection = document.querySelector('.fullscreen');

  function scrollAnimation() {
    window.scrollTo({
      top: fullscreenSection.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
  
  scrollBtn.addEventListener('click', scrollAnimation);
}

scrolling();