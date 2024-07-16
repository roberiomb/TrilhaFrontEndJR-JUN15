document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.retangulos > div');
  const indicators = document.querySelectorAll('.slide-indicators input');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    })
    indicators.forEach((indicator, i) => {
      indicator.checked = i === index
    })
  }

  document.getElementById('next').addEventListener('click', function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide)
  })

  document.getElementById('prev').addEventListener('click', function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length
    showSlide(currentSlide)
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('change', function () {
      currentSlide = index
      showSlide(currentSlide)
    })
  })

  // Mostra o slide inicial
  showSlide(currentSlide);
})
