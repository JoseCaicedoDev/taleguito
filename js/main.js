/* const mediaIpad = window.matchMedia("screen and (min-width: 767px)"); */
const menu = document.querySelector(".navbar");
const burgerButton = document.querySelector("#burger_menu");

burgerButton.addEventListener("click", hideShow);
/*       mediaIpad.addListener(validation);
function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener("touchstart", hideShow);
  } else {
    burgerButton.removeEventListener("touchstart", hideShow);
  }
}
validation(mediaIpad); */
$(".hamburger").click(function () {
  $(".hamburger").toggleClass("open");
});

function hideShow() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
  }
}