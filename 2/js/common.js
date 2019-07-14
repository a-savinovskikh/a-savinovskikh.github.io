$(function() {

  $("#my-menu").mmenu({
    extensions: ["theme-dark", "fx-menu-slide", "pagedim-black", "position-right"],
    navbar: {
      title: '<img src="../images/logo-1.svg" alt="Салон красоты S&Mitler" />',
      titleLink: "none"
    }
  });

  var api = $("#my-menu").data("mmenu");
  console.log(api);
  api.bind("open:finish", function() {
    $(".hamburger").addClass("is-active");
  });
  api.bind("close:finish", function() {
    $(".hamburger").removeClass("is-active");
  });

  $('.services-carousel').on('initialized.owl.carousel', function() {
    setTimeout(function() {
      servicesCarouselEqualHeight();
    }, 100);
  })

  $('.services-carousel').owlCarousel({
    loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1100: {
        items: 3
      }
    }
  });

  function servicesCarouselEqualHeight() {
    $('.services-carousel-item').each(function() {
      var $that = $(this),
          height = $that.find('.services-carousel-content').outerHeight();
      $that.find('.services-carousel-image').css('min-height', height);
    })
  };

  $('.services-composition .h3').each(function() {
    var $that = $(this);
    $that.html($that.html().replace(/(\S+)\s*$/, '<span>$1</span>'))
  });

  $('.services-carousel-content').equalHeights();

  $('section .h2').each(function() {
    var $that = $(this);
    $that.html($that.html().replace(/^(\S+)/, '<span>$1</span>'))
  });

  $('select').selectize();

  $('.review-carousel').owlCarousel({
    loop: true,
    nav: false,
    smartSpeed: 700,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      }
    },
    autoHeight: true
  });

  $('.partners-carousel').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    smartSpeed: 700,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()) {
      $('.top').addClass('active');
    } else {
      $('.top').removeClass('active');
    }
  });
  $('.top').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  })

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});
