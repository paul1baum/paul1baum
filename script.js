
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function toggleFlyoutNav() {
  var flyoutNav = document.getElementById("flyout-nav");
  flyoutNav.classList.toggle("active");
}