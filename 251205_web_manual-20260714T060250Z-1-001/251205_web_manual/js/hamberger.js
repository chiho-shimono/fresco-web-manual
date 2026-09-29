'use strict';

/* =========== ハンバーガーアイコン ========== */
const hamberger = document.querySelector('#js-menu_open');
const nav = document.querySelector('#js-slide_menu');

hamberger.addEventListener('click',function(){
  hamberger.classList.toggle('open');
  nav.classList.toggle('slide');
  nav.classList.toggle('animation_box');
});