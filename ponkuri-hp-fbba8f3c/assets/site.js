(function(){
  // LINEの予約入口のURL。確定したらここ1か所に入れる（空の間は「ご利用の流れ」へ移動する）
  var LINE_URL = '';

  if (LINE_URL) {
    document.querySelectorAll('a[data-line]').forEach(function(a){
      a.href = LINE_URL;
      a.rel = 'noopener';
    });
  }

  // スマホ下部の固定ボタン：ファーストビューのボタンが見えている間は隠す
  var fixed = document.getElementById('fixedCta');
  var hero = document.getElementById('heroCta');
  if (!fixed) return;
  if (!hero || !('IntersectionObserver' in window)) { fixed.classList.remove('is-hidden'); return; }
  new IntersectionObserver(function(entries){
    entries.forEach(function(en){ fixed.classList.toggle('is-hidden', en.isIntersecting); });
  }, { threshold: 0.2 }).observe(hero);
})();
