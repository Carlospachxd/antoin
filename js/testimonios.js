document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".testimonial-carousel");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");

  nextBtn.addEventListener("click", function() {
      carousel.scrollBy({
          left: 200, // Ajusta este valor según el ancho del testimonio
          behavior: "smooth"
      });
  });

  prevBtn.addEventListener("click", function() {
      carousel.scrollBy({
          left: -200, // Ajusta este valor según el ancho del testimonio
          behavior: "smooth"
      });
  });
});