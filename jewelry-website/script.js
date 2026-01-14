
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      slide.style.zIndex = 0;
      dots[i].classList.remove("active");
    });

    slides[index].classList.add("active");
    slides[index].style.zIndex = 1;
    dots[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
  }

  let autoSlide =setInterval(nextSlide, 5000);

  const slider = document.querySelector(".slider");
  slider.addEventListener("mouseenter", () => clearInterval(autoSlide));
  slider.addEventListener("mouseleave", () => autoSlide= setInterval(nextSlide, 5000));