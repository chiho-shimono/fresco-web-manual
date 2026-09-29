'use strict';

document.addEventListener("DOMContentLoaded", function () {
  const pagetop = document.querySelector("#back-to-top");
  const scrollThreshold = 100;

  function scrollTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollEvent() {
    if (window.scrollY > scrollThreshold) {
      pagetop.style.opacity = "1";
    } else {
      pagetop.style.opacity = "0";
    }
  }
  pagetop.addEventListener("click", scrollTop);
  window.addEventListener("scroll", scrollEvent);
});