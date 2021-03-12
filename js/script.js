/*global $,alert, console*/
$(function () {
    'use strict';
    //adjust header height 
    /*var myheader= $('.header');
    myheader.height($(window).height());
    $(window).resize(function(){
        myheader.height($(window).height());  
    }) ;*/
    //Links add active class
    $('.links li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    //smooth scroll to div 
    $('.links li a').click(function(){
        $('html,body').animate({
            scrollTop : $('#' + $(this).data('value')).offset().top
        }, 1000 ) ;
    }) ;
    //our auto slider code 
    ( function autoSlider() {
        $('.slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000 , function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } 
            
            else {

                $(this).delay(3000).fadeOut(1000 , function(){
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());
    /*trigger mixItUp
$('#container').mixItUp();*/
//trigger nice Scroll
$('html').niceScroll({
    cursorcolor :'#1abc9c' ,
    cursorwidth : '8px' ,
    cursorborder : 'none'
});
});
