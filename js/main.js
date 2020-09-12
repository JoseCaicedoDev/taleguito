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

/* SLIDER */
// select circles for change slider
let slideCicles = document.querySelectorAll('ul li')
slideCicles = Array.prototype.slice.call(slideCicles)
var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

// select container
const container = document.querySelector('.content-card')
let activeItem = 0;
let move = 0;

//set events for li components
slideCicles.forEach((item, index) => {
  item.addEventListener('click', function() {
  document.querySelector('li.active').className = ""
    item.className = "active";
    activeItem = index;
    move= index * - 450;
    container.style.transform = `translate(${move}px)`;
  })
})


function handleGesure() {
    var swiped = 'swiped: ';
  
    if ((touchendX < touchstartX) && move > -400) {
      activeItem = activeItem + 1
      move = move - 350;
      slideCicles[activeItem].className = "active" 
      slideCicles[activeItem - 1].className = ""
      container.style.transform = `translate(${move}px)`;
    }
    if ((touchendX > touchstartX) && move < 0 ) {
      move = move + 350
      activeItem = activeItem - 1 
      slideCicles[activeItem].className = "active" 
      slideCicles[activeItem + 1].className = ""
      container.style.transform = `translate(${move}px)`;
    }
}

container.addEventListener('touchstart', function(event) {
    touchstartX = event.touches[0].screenX;
    touchstartY = event.touches[0].screenY;
}, false);
container.addEventListener('touchmove', function(event) {
    touchendX = event.touches[0].screenX;
    touchendY = event.touches[0].screenY;
}, false);
container.addEventListener('touchend', function(event) {
    handleGesure();
}, false);