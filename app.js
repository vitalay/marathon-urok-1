
  function slidePlugins (activeSlide){
    const slides = document.querySelectorAll('.slide');
    slides[activeSlide].classList.add('active')

    for (const slide of slides) {
      slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');
      })
    }

    function clearActiveClasses() {
      // for (const slide of slides){
      //   slide.classList.remove('active');
      // }
      slides.forEach(slide => slide.classList.remove('active'));
    }
  }
slidePlugins(0)