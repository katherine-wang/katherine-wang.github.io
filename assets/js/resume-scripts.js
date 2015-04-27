$(document).ready(function() {

$(".img-back-edu").click(function(){
        $(".section").fadeIn();
        $(".education-text").fadeOut();

});

$(".img-back-exp").click(function(){
        $(".section").fadeIn();
        $(".exp-text").fadeOut();

});

$(".img-back-skills").click(function(){
        $(".section").fadeIn();
        $(".skills-text").fadeOut();

});

$(".edu-nav-icon").click(function(){
        $(".section").fadeOut();
        $(".education-text").fadeIn();

});

$(".exp-nav-icon").click(function(){
        $(".section").fadeOut();
        $(".exp-text").fadeIn();

});

$(".skills-nav-icon").click(function(){
        $(".section").fadeOut();
        $(".skills-text").fadeIn();

});

$(".nav-item").hover(function(){
    $(this).css("color", "#D15353 ");
});

$(this).mouseout(function(){
    $(".nav-item").css("color", "white");
});

$(".sub-nav").hover(function(){
    $(this).css("color", "#CC4040 ");
    $(this).css("background", "white ");
});

$(this).mouseout(function(){
    $(".sub-nav").css("color", "white");
    $(".sub-nav").css("background", "#CC4040");
});

/*
$("#portfolio").hover(function(){
    $(".dropdown-box").addClass("dropdown-box-active"); 
});

$(this).mouseout(function(){
    $(".dropdown-box").removeClass("dropdown-box-active"); 
});
*/

});
