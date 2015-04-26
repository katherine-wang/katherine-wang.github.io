$(document).ready(function() {

$(".img-arrow").click(function(){
        $(".full-page").css( "margin-top", "-=650px");
});

$(window).scroll(function() {
	var height=parseInt($('.full-page').css('margin-top').replace("px", ""));

      if(height == 0){
        return false;
      }

      else{
        $(".full-page").css( "margin-top", "+=650px");
       }
});

$(".nav-item").hover(function(){
    $("this").css("color", "#888888 ");
});

});
