'use strict';
// ヘッダー情報
const header = document.querySelector(".header");
const headerHeight = header ? header.offsetHeight + 20 : 0;
console.log(headerHeight);

// ページ内のスムーススクロール
for (const link of document.querySelectorAll('a[href*="#"]')) {
  link.addEventListener('click', (e) => {
    const hash = e.currentTarget.hash;
    const target = document.getElementById(hash.slice(1));

    // ページトップへ("#"と"#top"）
    if (!hash || hash === '#top') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      // アンカーへ
    } else if (target) {
      e.preventDefault();
      const position = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });

      // URLにハッシュを含める
      history.pushState(null, '', hash);
    }
  });
};

// 別ページ遷移後にスムーススクロール
const urlHash = window.location.hash;
if (urlHash) {
  const target = document.getElementById(urlHash.slice(1));
  if (target) {
    // ページトップから開始（ブラウザ差異を考慮して併用）
    history.replaceState(null, '', window.location.pathname);
    window.scrollTo(0, 0);

    window.addEventListener("load", () => {
      const position = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });

      // ハッシュを再設定
      history.replaceState(null, '', window.location.pathname + urlHash);
    });
  }
}