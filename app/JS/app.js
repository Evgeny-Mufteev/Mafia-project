
// Главный слайдер

const swiper = new Swiper('.swiper-container-promo', {
  // Optional parameters
  loop: true,
  items: 1,
  lazyLoad: true,
  autoplay: true,
  smartSpeed: 500,
  autoplayTimeout: 5000,
  autoHeight: true,
  // If we need pagination
  pagination: {
    bulletActiveClass: 'promo-active',
    bulletClass: 'promo-bullet',
    el: '.promo-pagination',
    clickable: true,
  },

});
// END Главный слайдер

// Слайдер с товарами общий
const Myswiper = new Swiper(".swiper-container-bestsellers", {
  // Optional parameters
  loop: true,
  initialSlide: 1,
  breakpoints: {
    481: { slidesPerView: 1, initialSlide: 1 },
    641: { slidesPerView: 2, initialSlide: 1 },
    767: { slidesPerView: 2, initialSlide: 1 },
    1023: { slidesPerView: 3, initialSlide: 1 },
    1279: { slidesPerView: 4, spaceBetween: 30 },
  },
  lazyLoad: true,
  autoplay: false,
  smartSpeed: 300,
  autoplayTimeout: 3000,
  // Navigation arrows
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
// Слайдер с товарами общий


// popup взять из интрнета

!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function() {

  /* Записываем в переменные массив элементов-кнопок и подложку.
  Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
  var modalButtons = document.querySelectorAll('.js-open-modal'),
      overlay      = document.querySelector('.js-overlay-modal'),
      closeButtons = document.querySelectorAll('.js-modal-close');


   /* Перебираем массив кнопок */
  modalButtons.forEach(function(item){

    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', function(e) {

  /* Предотвращаем стандартное действие элемента. Так как кнопку разные
  люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
  Нужно подстраховаться. */
        e.preventDefault();

        /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
        var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

        /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
        modalElem.classList.add('active');
        overlay.classList.add('active');
      }); // end click

   }); // end foreach

  closeButtons.forEach(function(item){

    item.addEventListener('click', function(e) {
    var parentModal = this.closest('.modal');

    parentModal.classList.remove('active');
    overlay.classList.remove('active');
    });

   }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });

}); // end ready
//END popup

// Слайдер в карточке товара

    var goodsSwiper = new Swiper(".goodsSwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var goodsSwiper2 = new Swiper(".goodsSwiper2", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".goods-next",
        prevEl: ".goods-prev",
      },
      thumbs: {
        swiper: goodsSwiper,
      },
    });


  // END Слайдер в карточке товара

  // Сетчик товаров
  const counter = function () {
    const btns = document.querySelectorAll('.counter__btn');

    btns.forEach(btn => {
      btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter__value');
        const currentValue = +inp.value;
        let newValue;

        if (direction === 'plus') {
          newValue = currentValue + 1;
        } else {
          newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }

        inp.value = newValue;
      })
    })

  }
  counter();
  // END Сетчик товаров

  // Создание табов сам
  const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
  const tabsItems = document.querySelectorAll(".tabs__item");

  tabsBtn.forEach(function(item) {
    item.addEventListener("click", function(){
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if( ! currentBtn.classList.contains('active')) {

      tabsBtn.forEach(function(item) {
        item.classList.remove('active');
      });

      tabsItems.forEach(function(item) {
        item.classList.remove('active')
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
      }

    });
  });
    // END Создание табов

// Кнопка показать еще отзывы
    let coll = document.getElementsByClassName('collapsible');
    for (let i = 0; i < coll.length; i++){
    coll[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let collapse = this.previousElementSibling;
    if (collapse.style.maxHeight) {
      collapse.style.maxHeight = null;
    }else{
      collapse.style.maxHeight = collapse.scrollHeight + 'px'}
    })
    }
// END Кнопка показать еще отзывы

// Якорь наверх
    const toper = function () {
    function scrollTo(element) {
      window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth",
      });
    }

    let button = document.querySelector(".toTop");
    let header = document.querySelector("#header");

    button.addEventListener("click", () => {
      scrollTo(header);
    });
  };

  toper();

  window.addEventListener('scroll', function() {

    const topArrow = document.querySelector('.toTop');

    if (window.pageYOffset > 300) {
      topArrow.classList.add('_show')
    } else {
      topArrow.classList.remove('_show')
    };
  });
// END Якорь наверх

  // Кукисы
  function checkCookies() {
    let cookieDate = localStorage.getItem('cookieDate');
    let cookieNotification = document.getElementById('cookie_notification');
    if (!cookieNotification) {
      return
    }
    let cookieBtn = cookieNotification.querySelector('.cookie_accept');

    // Если записи про кукисы нет или она просрочена на 1 год, то показываем информацию про кукисы
    if (!cookieDate || (+cookieDate + 31536000000) < Date.now()) {
      cookieNotification.classList.add('show');
    }

    // При клике на кнопку, в локальное хранилище записывается текущая дата в системе UNIX
    cookieBtn.addEventListener('click', function() {
      localStorage.setItem('cookieDate', Date.now());
      cookieNotification.classList.remove('show');
    })
  }
  checkCookies();

   //END Кукисы



// Меню бургер
let x = document.getElementById("contain");

x.addEventListener("click", myFunction);

function myFunction() {
  let element = document.getElementById("nav");
  element.classList.toggle("open");

  x.classList.toggle("change");
}

//END Меню бургер