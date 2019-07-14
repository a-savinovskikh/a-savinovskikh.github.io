$(function() {

  $('.drop-down').click(function(e) {
    var parentLi = $(this).parent();
    var dropDown = parentLi.children('ul');
    parentLi.toggleClass("active");
    $('.drop-down').not(this).parent().removeClass("active");
    $('.drop-down').not(this).parent().children('ul').slideUp('slow');
    dropDown.slideToggle('slow');
    e.preventDefault();
  });

  $('.side-menu-nav li li a').click(function(e) {
    $(this).parent().addClass("active");
    $('.side-menu-nav li li a').not(this).parent().removeClass("active");
    e.preventDefault();
  });

  $(".tabs-wrapper dt").click(function() {
      $(this).siblings().removeClass("active").end().next("dd").addBack().addClass("active");
  });

  $('.main-header-slider').owlCarousel({
    loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'],
    dots: true,
    items: 1,
    autoHeight: true,
  });

});
