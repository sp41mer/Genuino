/**
 * Created by sp41mer on 04.10.16.
 */
$(document).ready(function(){
    $(".fivesteps_header").click(function(){
        var number = $(this).data('number');
        //вот тут всем картинкам тащим версию без кружочка - ГАВНОКОД :(
        var oldpictures = $(".fivesteps__boots__img__circle");
        $.each(oldpictures, function(el){
            $(this).attr('src','img/circles/'+$(this).data('number')+'.png');
        });
        $(".fivesteps__boots__img__circle[data-number='" + number + "']").attr('src','img/circles/'+number+' 1.png');
        //возвращаем все назад
        $(".fivesteps_header__span").removeClass('fivesteps_header__span__active');
        $(".fivesteps_header__img").attr("src",'img/screen3_question.png');
        $(".fivesteps_info").hide();
        //а вот тут уже открываем
        $(this).parent().find(".fivesteps_info").show();
        $(this).find(".fivesteps_header__span").addClass('fivesteps_header__span__active');
        $(this).find(".fivesteps_header__img").attr("src",'img/screen3_answer.png');
    });
    $(".fivesteps__boots__img__circle").click(function(){
        var number = $(this).data('number');
        //вот тут всем картинкам тащим версию без кружочка - ГАВНОКОД :(
        var oldpictures = $(".fivesteps__boots__img__circle");
        $.each(oldpictures, function(el){
            $(this).attr('src','img/circles/'+$(this).data('number')+'.png');
        });
        $(this).attr('src','img/circles/'+number+' 1.png');
        //возвращаем все назад
        $(".fivesteps_header__span").removeClass('fivesteps_header__span__active');
        $(".fivesteps_header__img").attr("src",'img/screen3_question.png');
        $(".fivesteps_info").hide();
        //а вот тут уже открываем
        var targetElement = $(".fivesteps_header[data-number='"+number+"']");
        targetElement.parent().find(".fivesteps_info").show();
        targetElement.find(".fivesteps_header__span").addClass('fivesteps_header__span__active');
        targetElement.find(".fivesteps_header__img").attr("src",'img/screen3_answer.png');

    });
    $(".four_steps__li__styles").click(function(){
        var picture = $(this).data('img');
        $('.ol__circle__radius').removeClass('ol__circle__radius_clicked');
        $(this).find('.ol__circle__radius').addClass('ol__circle__radius_clicked');
        $(".img__styles__div").find('img').attr("src",'img/second_screen/'+picture+'.png');
    });
    //$(".js__navbar__button").click(function() {
    //    $('a[href*="#"]:not([href="#"])').click(function () {
    //        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //            var target = $(this.hash);
    //            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //            if (target.length) {
    //                $('html, body').animate({
    //                    scrollTop: target.offset().top
    //                }, 500);
    //                return false;
    //            }
    //        }
    //    });
    //});

});