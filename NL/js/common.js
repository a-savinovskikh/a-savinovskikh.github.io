$(function() {

  $('.bg-carousel').owlCarousel({
    loop: true,
    nav: false,
    smartSpeed: 700,
    responsiveClass: true,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
  });

  $('.stars-carousel').owlCarousel({
    loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<i class="icon-left-open-big"></i>', '<i class="icon-right-open-big"></i>'],
    dots: true,
    items: 1,
    autoHeight: true,
  });

  $(window).scroll(function(){
    var anchors = $('section, header');
	  anchors.each(function(i,el){
    var top  = $(el).offset().top-100;
    var bottom = top +$(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');
    if ( scroll > top && scroll < bottom) {
      $('a.active').removeClass('active');
			$('a[href="#'+id+'"]').addClass('active');
    }
  })
 });

 $("nav a, .header-scroll-down").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
  });
});
