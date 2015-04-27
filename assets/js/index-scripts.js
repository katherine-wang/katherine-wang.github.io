$(document).ready(function() {

$(".img-arrow").click(function(){
        $(".full-page").css( "margin-top", "-=650px");
});

$(window).scroll(function(e) {
	var height=parseInt($('.full-page').css('margin-top').replace("px", ""));

      if(height == 0){
        return false;
      }

      else{
        $(".full-page").css( "margin-top", "+=650px");
       }
    e.stopPropagation();
    return false;

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
