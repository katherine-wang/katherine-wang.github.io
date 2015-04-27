$(document).ready(function() {

$(".img-back-edu").click(function(){
        $(".education-text").fadeOut(400);
        setTimeout(function(){$(".section").fadeIn(1000);}, 300); 
});

$(".img-back-exp").click(function(){ 
        $(".exp-text").fadeOut(400);
        setTimeout(function(){$(".section").fadeIn(1000);}, 300);

});

$(".img-back-skills").click(function(){
        $(".skills-text").fadeOut(400);
        setTimeout(function(){$(".section").fadeIn(1000);}, 300);

});

$(".edu-nav-icon").click(function(){
        $(".section").fadeOut(400);
        setTimeout(function(){ $(".education-text").fadeIn(1000);}, 950);

});

$(".exp-nav-icon").click(function(){
        $(".section").fadeOut(400);
        setTimeout(function(){ $(".exp-text").fadeIn(1000);}, 950);

});

$(".skills-nav-icon").click(function(){
        $(".section").fadeOut(400);
        setTimeout(function(){ $(".skills-text").fadeIn(1000);}, 950);

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
