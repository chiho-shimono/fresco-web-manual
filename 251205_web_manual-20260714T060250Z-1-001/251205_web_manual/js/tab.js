'use strict';

// タブの見出し（tab-item）を取得
const tabItems = document.querySelectorAll(".tab_item");
const tabPanels = document.querySelectorAll(".tab_panel");

tabItems.forEach(function(item,index){
  // タブにクリックイベントを追加
  item.addEventListener('click',toggleClass);
  // タブがクリックされたときに実行する関数
  function toggleClass(){
    // すべてのタブからactiveクラスを削除する
    for(const tab of tabItems){
      tab.classList.remove('active');
    }
    for(const panel of tabPanels){
      panel.classList.remove('active');
    }
    // クリックされたタブとそのコンテンツにactiveクラスを追加する
    item.classList.add('active');
    tabPanels[index].classList.add('active');
  }
});