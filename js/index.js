/**
 * Created by sp41mer on 04.10.16.
 */
$(document).ready(function(){
    $(".fivesteps_header").click(function(){
        $(".fivesteps_header__span").removeClass('fivesteps_header__span__active');
        $(".fivesteps_info").hide();
        $(this).parent().find(".fivesteps_info").show();
        $(this).find(".fivesteps_header__span").addClass('fivesteps_header__span__active');
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