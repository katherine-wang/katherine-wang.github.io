$(document).ready(function() {

$(".img-back-edu").click(function(){
        $(".section").fadeIn(100);
        $(".education-text").fadeOut(100);

});

$(".img-back-exp").click(function(){
        $(".section").fadeIn(100);
        $(".exp-text").fadeOut(100);

});

$(".img-back-skills").click(function(){
        $(".section").fadeIn(100);
        $(".skills-text").fadeOut(100);

});

$(".edu-nav-icon").click(function(){
        $(".section").fadeOut(100);
        $(".education-text").fadeIn(100);

});

$(".exp-nav-icon").click(function(){
        $(".section").fadeOut(100);
        $(".exp-text").fadeIn(100);

});

$(".skills-nav-icon").click(function(){
        $(".section").fadeOut(100);
        $(".skills-text").fadeIn(100);

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
