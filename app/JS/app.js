
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
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const loskPadding = document.querySelectorAll(".losk-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
for (let index = 0; index < popupLinks.length; index++) {
  const popupLink = popupLinks[index];
  popupLink.addEventListener("click", function (e) {
    const popupName = popupLink.getAttribute('href').replace('#', '');
    const curentPopup = document.getElementById(popupName);
    popupOpen(curentPopup);
    e.preventDefault();
  });
}
}


const popupCloseIcon = document.querySelectorAll('.close-popup');

if (popupCloseIcon.length > 0) {
for (let index = 0; index < popupCloseIcon.length; index++) {
  const el = popupCloseIcon[index];
  el.addEventListener('click', function (e) {
    popupCloseIcon(el.closest('.popup'));
    e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
if (curentPopup && unlock) {
  const popupActive = document.querySelector('.popup.open');
  if (popupActive) {
    popupClose(popupActive, false);
  } else  {
    // bodyLock();
  }
  curentPopup.classList.add('open');
  curentPopup.addEventListener("click", function (e) {
    if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
    }
  })
}
}

function popupClose(popupActive, doUnlock = true) {
if (unlock) {
  popupActive.classList.remove('open');
  if (doUnlock) {
    bodyUnLock();
    }
  }
}

function bodyLock() {
const lockPaddingValue = window.innerWidth - document.querySelector('.page').offsetWidth + 'px';

if (lockPadding.length > 0) {
  for (let index = 0; index < loskPadding.length; index++) {
    const el = loskPadding[index];
    el.style.paddingRight = lockPaddingValue;
  }
}

body.style.paddingRight = lockPaddingValue;
body.classList.add('lock'); 

unlock = false;
setTimeout(function () {
  unlock = true;
}, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    if (loskPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}
//END popup




