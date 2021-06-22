
const swiper = new Swiper('.swiper-container-promo', {
  // Optional parameters
  loop: true,
  items: 1,
  lazyLoad: true,
  autoplay: true,
  smartSpeed: 500,
  autoplayTimeout: 5000,
  // If we need pagination
  pagination: {
    bulletActiveClass: 'promo-active',
    bulletClass: 'promo-bullet',
    el: '.promo-pagination',
    clickable: true,
  },

});


const Myswiper = new Swiper('.swiper-container-bestsellers', {
// Optional parameters
loop: true,
responsive: {
  0:{items:2,margin: 30},
  768:{items:3,margin: 30},
  991:{items:4,margin: 30},
},
lazyLoad: true,
autoplay: false,
smartSpeed: 300,
autoplayTimeout: 3000,
  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});

// popup

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

