"use strict";

function toggleTooltip() {
  var tooltip = document.querySelectorAll('.js-tooltip');
  tooltip.forEach(function (item, index) {
    if (window.innerWidth >= 992) {
      var title = ['認證標章', '品質保證', '原生創意', '人氣王'];
      item.setAttribute('data-bs-toggle', 'tooltip');
      item.setAttribute('data-bs-original-title', title[index]);
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    } else {
      item.removeAttribute('data-bs-toggle');
      item.removeAttribute('data-bs-original-title');
    }
  });
}

window.addEventListener('load', toggleTooltip, false);
window.addEventListener('resize', toggleTooltip, false);

function addAccordionShadow() {
  var faq = document.querySelectorAll('.accordion-button');
  faq.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var accordionItemAll = document.querySelectorAll('.accordion-item');
      accordionItemAll.forEach(function (accordionItem) {
        if (accordionItem.classList.contains('shadow-md')) {
          accordionItem.classList.remove('shadow-md');
        }
      });
      var faqItem = e.target.closest('.accordion-item');
      faqItem.classList.add('shadow-md');
    }, false);
  });
}

var url = location.href;

if (url.indexOf('faq') !== -1) {
  addAccordionShadow();
}

(function () {
  'use strict';

  var forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})(); // mobile 釘選下選單按鈕


var sponsorBtn = document.querySelector('.js-sponsor-btn');
var sponsor = document.querySelector('.js-sponsor');
sponsorBtn.addEventListener('click', function (e) {
  window.scrollTo({
    top: getY(sponsor),
    behavior: 'smooth'
  });
  e.target.classList.add('d-none');
}, false);

function toggleSponsorBtn() {
  var nav = document.querySelector('.js-nav');
  var navY = getY(nav);
  var scrollY = window.scrollY;
  var sponsorY = getY(sponsor);
  sponsorBtn.classList.add('d-none');

  if (scrollY > navY) {
    sponsorBtn.classList.remove('d-none');

    if (scrollY >= sponsorY) {
      sponsorBtn.classList.add('d-none');
    } else {
      sponsorBtn.classList.remove('d-none');
    }
  }
}

function getY(el) {
  var yOffset = -76;
  var y = Math.floor(el.getBoundingClientRect().top + window.scrollY + yOffset);
  return y;
}

window.addEventListener('load', toggleSponsorBtn, false);
window.addEventListener('scroll', toggleSponsorBtn, false);
//# sourceMappingURL=all.js.map
