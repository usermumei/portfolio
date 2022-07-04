// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){
  $('.fadeUpTrigger').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}
// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });

  $('a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top;  //idの上部の距離を取得
    $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
  });

  $(() => {
    // リストへ戻るボタンフェード
    $(window).on('scroll', () =>{
      var scroll = $(this).scrollTop();
      var strt = $(d0).offset().top-100;
      var end = $(d6).offset().top;
      if(strt < scroll && scroll < end) {
        $('.fade').fadeIn();
      }else{
        $('.fade').fadeOut();
      }
      return false;
    });
  });