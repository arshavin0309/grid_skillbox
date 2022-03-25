// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
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

const burgerBtn = document.querySelector(".burger")
const headerLink = document.querySelectorAll(".header__link")
const headerLine = document.querySelector(".header__line")

burgerBtn.addEventListener('click', ()=>{
    headerLink.forEach(e => {
        if (e.classList.contains('link-visible')) {
            e.classList.toggle('link-visible')
            setTimeout(()=>{
                headerLine.classList.toggle('header__line-wide')
            }, 100)
        }   else {
            headerLine.classList.toggle('header__line-wide')

            setTimeout(()=>{
                e.classList.toggle('link-visible')
            }, 100)
        }
    });
})

const headerSearch = document.querySelector(".header__search")
const headerForm = document.querySelector(".header__form")
const headerBtn = document.querySelector(".header__btn")

headerSearch.addEventListener('click', ()=>{
    headerSearch.classList.toggle('header__search-none')
    headerForm.classList.toggle('header__form-flex')
})
headerBtn.addEventListener('click', ()=>{
    headerSearch.classList.toggle('header__search-none')
    headerForm.classList.toggle('header__form-flex')
})
