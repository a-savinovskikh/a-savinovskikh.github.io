$(function() {

  // fixed header
  var header = $('.header'),
      content = $('.page-content');

  $(".header-nav").clone().appendTo($(".header-left"));

  header.addClass('header-fixed Fixed');
  content.css({'padding-top':header.outerHeight()});

  function fixedHeader() {
    var winScrollTop = $(this).scrollTop();

    if (winScrollTop > 0) {
      header.addClass('header-fixed-style');
      content.css({'padding-top':header.outerHeight()});
    } else {
      header.removeClass('header-fixed-style');
      content.css({'padding-top':header.outerHeight()});
    }
  }

  fixedHeader();

  $(window).scroll(function(){
    fixedHeader();
  });

  // mmenu
  var $menu = $("#mmenu").mmenu({
    extensions: ["fx-menu-slide", "pagedim-black", "position-right"],
    navbar: {
      title: '<img src="img/logo.svg"/>',
    },
  }, {
      clone: true,
  });

  var $hamburger = $(".header-hamburger");
  var apiMmenu = $menu.data( "mmenu" );

  $hamburger.find('button').on( "click", function() {
    if ($(this).hasClass('is-active')) {
      apiMmenu.close();
    } else {
      apiMmenu.open();
    }
  });

  apiMmenu.bind( "open:finish", function() {
     setTimeout(function() {
        $hamburger.find('.hamburger').addClass( "is-active" );
     }, 100);
  });
  apiMmenu.bind( "close:finish", function() {
     setTimeout(function() {
        $hamburger.find('.hamburger').removeClass( "is-active" );
     }, 100);
  });

  // header select
  $('.header-versions-xs select').select2();

  // partners slider
  var partnersSlickSettings = {
    mobileFirst: true,
    dots: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023.98,
        settings: "unslick"
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  var slick =  $(".partners-row").slick(partnersSlickSettings);

  $('.partners-text').equalHeights();

  $(window).on('resize', function() {

    if( $(window).width() < 1024 &&  !slick.hasClass('slick-initialized')) {
      $('.partners-row').slick(partnersSlickSettings);
    }

    fixedHeader();

    $('.partners-text').removeAttr('style');
    $('.partners-text').equalHeights();
  });
});
