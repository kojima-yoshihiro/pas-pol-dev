$(function () {

  jQuery('.mobileMenu__burger').on('click', function () {
    if (jQuery('.mobileMenu__list').css('display') === 'block') {
      jQuery('.mobileMenu__list').slideUp('1500');
    } else {
      jQuery('.mobileMenu__list').slideDown('1500');
    }
  });
  //slideUp / slideDownはjavascriptでやるのは大変！jQueryに頼る

  //===================slickの設定=============//
  $('.slider').slick({
    autoplay: true, //自動再生
    dots: false, //ドットのナビゲーションを表示
    infinite: true, //スライドのループ有効化
    speed: 2000, //切り替えのスピード（小さくすると速くなる）
    fade: true, //フェードの有効化
  });

  //■page topボタン
  $(function () {
    var topBtn = $('#backtop');

    // ◇ボタンをクリックしたら、スクロールして上に戻る
    topBtn.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  });
});
