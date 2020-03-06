$(document).ready(function(){
  $(".mobile-menu-bar .fa-times").click(function(){
    $(".mobile-menu-wrap").hide();
  });
  $(".mobile-menu-bar .fa-bars").click(function(){
    $(".mobile-menu-wrap").show();
  });
});