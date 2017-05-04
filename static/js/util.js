$(function(){
    jQuery(".txtScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,scroll:1,vis:1,trigger:"click"});

    jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:6,trigger:"click"});

    $(".ft-copy p .goTop").click(function(){
        $("html,body").animate({scrollTop:0},500);
    })

    $(".jgList-nav").find("ul").children("li").click(function(){
        $(this).addClass("on").siblings("li").removeClass("on");
        $(".jgList-r").find(".jgList-rCon").children().eq($(this).index()).show().siblings().hide();
    })

    $(".appcon-nav").find("ul").children("li").click(function(){
        $(this).addClass("add").siblings("li").removeClass("add");
        $(".appconr").find(".appconr-list").children().eq($(this).index()).show().siblings().hide();
    })


    var mySwiper = new Swiper('.swiper-container', {
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    loop: true,
    autoPlay: 5000,
    spaceBetween: 30
    });
    $(".swiper-button-prev").click(function(){
        mySwiper.swipePrev();
    })
    $(".swiper-button-next").click(function(){
        mySwiper.swipeNext();
    })

})


