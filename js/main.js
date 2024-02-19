let prevScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const scrollBlock = document.querySelector(".scroll-down__block");

  if (scrollY > 350) {
    // Прокрутка вниз и scrollY больше 350
    scrollBlock.classList.add("active");
  } else if (scrollY < prevScrollY || scrollY <= 350) {
    // Прокрутка вверх или scrollY меньше или равно 350
    scrollBlock.classList.remove("active");
  }

  // Обновляем предыдущее значение scrollY
  prevScrollY = scrollY;
});

// accard

const arcBlocks = document.querySelectorAll(".acc-info__box");

arcBlocks.forEach((accBlock) => {
  const iconPlus = accBlock.querySelector(".icon-plus");
  const iconMinus = accBlock.querySelector(".icon-minus");

  accBlock.addEventListener("click", function () {
    this.classList.toggle("active");

    iconPlus.classList.toggle("hidden");
    iconMinus.classList.toggle("hidden");
  });
});

// mobile-menu

const btnOpen = document.querySelector(".mobile-menu");
const btnClose = document.querySelector(".icon-close");
const menuList = document.querySelector(".header__list");

btnOpen.addEventListener("click", function () {
  menuList.classList.toggle("active");
});

btnClose.addEventListener("click", function () {
  menuList.classList.remove("active");
});
