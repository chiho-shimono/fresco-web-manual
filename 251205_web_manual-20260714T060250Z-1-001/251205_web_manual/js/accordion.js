'use strict';
const accordions = document.querySelectorAll(".js-accordion, .js-faq_accordion");

accordions.forEach((accordion) => {
  const title = accordion.querySelector(".js-accordion_ttl");
  const content = accordion.querySelector(".js-accordion_content");
  title.addEventListener("click", (e) => {
    e.preventDefault();
    //アニメーション中は操作を無効にする
    if(accordion.dataset.isAnimation === "true") {
      return;
    }
    if(accordion.open) {
      //クリックしたコンテンツを閉じる
      accordion.dataset.isAnimation = "true";
      const closeAnimation = content.animate(
        {
          height: [content.offsetHeight + "px", 0],
          opacity: [1, 0]
        },
        {
          duration: 300,
          easing: "ease"
        },
      );
      closeAnimation.onfinish = () => {
        accordion.removeAttribute("open");
        accordion.dataset.isAnimation = "false";
      }
    }else {
      //クリックしたコンテンツを開く
      accordion.setAttribute("open", "");
      accordion.dataset.isAnimation = "true";
      const openAnimation = content.animate(
        {
          height: [0, content.offsetHeight + "px"],
          opacity: [0, 1]
        },
        {
          duration: 300,
          easing: "ease"
        },
      );
      openAnimation.onfinish = () => {
        accordion.dataset.isAnimation = "false";
      }
    }
  });
});