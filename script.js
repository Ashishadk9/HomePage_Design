// Carousel functionality
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.cr-dot');
let activeIndex = 2;

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove('active');
    dots[index].classList.remove('active');
  });
  items[activeIndex].classList.add('active');
  dots[activeIndex].classList.add('active');

  const offset = (activeIndex - 2) * -140;
  document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
}

function goTo(index) {
  activeIndex = index;
  updateCarousel();
}

updateCarousel(); // init