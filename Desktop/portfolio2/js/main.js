$(function(){
    $("#hamburger").click(function(){
        $(this).toggleClass("active");
        $(".menu-content").toggleClass("open");
    });
    $("#top-btn").click(function() {
        $('html,body').animate({scrollTop: 0 }, 700);
    });
    $(window).scroll(function () {
        $(".fadein").each(function () {
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100) {
            $(this).addClass("scrollIn");
          }
        });
      });
      $("body,html").animate({ scrollTop: position }, { duration: speed}, "swing");
      $(function () {
        $("a").click(function () {
          var adjust = 0;
          var speed = 2000;
          var href = $(this).attr("href");
          var target = $(href == "#" || href == "" ? "html" : href);
          var position = target.offset().top + adjust;
          $("html,body").animate({ scrollTop: position }, speed, "swing");
          return false;
        });
      });
      
    });