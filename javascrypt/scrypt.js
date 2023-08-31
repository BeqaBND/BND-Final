function initSlider() {
const slides = document.querySelectorAll(".slide");
const sliderWrapper = document.querySelector(".slider-wrapper");
let activeIndex = 0;

function renderSlides() {slides.forEach((slide, index) => {
if (activeIndex === index) {slide.classList.add("active");} else 
{slide.classList.remove("active")}
let sliderIntervalId = null;
function startAutoSliderFn(){sliderIntervalId = setInterval(showNext, 3000)}
startAutoSliderFn();
initSlider();


const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");
const text3 = document.getElementById("text5");
const text4 = document.getElementById("text6");

text1.onmouseover = function () {
  text1.innerHTML = `Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor.`;
};

text1.onmouseout = function () {
  text1.innerHTML = `<ion-icon class="service-icon" name="globe-outline"></ion-icon>
  <h3 class="service-h3">Graphics Design</h3>`;
};

text2.onmouseover = function () {
  text2.innerHTML = `Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor.`;
};

text2.onmouseout = function () {
  text2.innerHTML = `<ion-icon class="service-icon" name="globe-outline"></ion-icon>
  <h3 class="service-h3">Best Service</h3>`;
};

text3.onmouseover = function () {
  text3.innerHTML = `Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor.`;
};

text3.onmouseout = function () {
  text3.innerHTML = `<ion-icon class="service-icon" name="globe-outline"></ion-icon>
  <h3 class="service-h3">Unique ideas</h3>`;
};

text4.onmouseover = function () {
  text4.innerHTML = `Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor.`;
};

text4.onmouseout = function () {
  text4.innerHTML = `<ion-icon class="service-icon" name="globe-outline"></ion-icon>
  <h3 class="service-h3">Pixel perfect</h3>`;
};
text5.onmouseover = function () {
  text5.innerHTML = `Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor.`;
};

text5.onmouseout = function (){
  text5.innerHTML = `<ion-icon class="service-icon" name="globe-outline"></ion-icon>
  <h3 class="service-h3">Fully managed</h3>`;
};
text6.onmouseover = function () {
  text6.innerHTML = `Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor.`;
};

text6.onmouseout = function () {
  text6.innerHTML = `<ios-icon class="service-icon" name="globe-outline"></ion-icon>
  <h3 class="service-h3">Design analysis</h3>`;
}:;

let commentsSlides = document.querySelectorAll(".comments-slide");
let commentsButton1 = document.getElementById("comments-button-1");
let commentsButton2 = document.getElementById("comments-button-2");
let commentsButton3 = document.getElementById("comments-button-3");

commentsSlides[0].classList.add("active");

commentsButton1.addEventListener("click", function () {
  commentsSlides[0].classList.add("active");
  commentsSlides[1].classList.remove("active");
  commentsSlides[2].classList.remove("active");
});

commentsButton2.addEventListener("click", function () {
  commentsSlides[0].classList.remove("active");
  commentsSlides[1].classList.add("active");
  commentsSlides[2].classList.remove("active");
});

commentsButton3.addEventListener("click", function () {
  commentsSlides[0].classList.remove("active");
  commentsSlides[1].classList.remove("active");
  commentsSlides[2].classList.add("active");