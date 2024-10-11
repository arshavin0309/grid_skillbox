/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76, 37.64],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14
  });
}

var burgerBtn = document.querySelector(".burger");
var headerLink = document.querySelectorAll(".header__link");
var headerLine = document.querySelector(".header__line");
burgerBtn.addEventListener('click', function () {
  headerLink.forEach(function (e) {
    if (e.classList.contains('link-visible')) {
      e.classList.toggle('link-visible');
      setTimeout(function () {
        headerLine.classList.toggle('header__line-wide');
      }, 100);
    } else {
      headerLine.classList.toggle('header__line-wide');
      setTimeout(function () {
        e.classList.toggle('link-visible');
      }, 100);
    }
  });
});
var headerSearch = document.querySelector(".header__search");
var headerForm = document.querySelector(".header__form");
var headerBtn = document.querySelector(".header__btn");
headerSearch.addEventListener('click', function () {
  headerSearch.classList.toggle('header__search-none');
  headerForm.classList.toggle('header__form-flex');
});
headerBtn.addEventListener('click', function () {
  headerSearch.classList.toggle('header__search-none');
  headerForm.classList.toggle('header__form-flex');
});
/******/ })()
;
//# sourceMappingURL=index.js.map