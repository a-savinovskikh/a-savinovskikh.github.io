$(function() {

  function wrapSpanFirst(selector) {
    $(selector).each(function() {
      var $that = $(this);
      $that.html($that.html().replace(/^(\S+)/, '<span>$1</span>'))
    });
  }

  function wrapSpanLast(selector) {
    $(selector).each(function() {
      var $that = $(this);
      $that.html($that.html().replace(/(\S+)\s*$/, '<span>$1</span>'))
    });
  }

  wrapSpanFirst('.about-us .h2, .portfolio .h2');
  wrapSpanLast('.main-header-composition .h1, .our-services .h2');

  var $menu = $("#my-menu").mmenu({
    extensions: ["theme-dark", "fx-menu-slide", "pagedim-black", "position-right"],
    navbar: {
      title: 'helali',
      titleLink: "none",
    },
  });

  var api = $menu.data("mmenu");
  api.bind("open:finish", function() {
    $(".main-header-hamburger").addClass("is-active");
  });
  api.bind("close:finish", function() {
    $(".main-header-hamburger").removeClass("is-active");
  });

  $('.our-services-item .button').hover(function() {
    $(this).closest('.our-services-item').find('.our-services-logo').addClass('our-services-item-hover');
  }, function() {
    $(this).closest('.our-services-item').find('.our-services-logo').removeClass('our-services-item-hover');
  });



  var portfolioItems = $('.portfolio-carousel-item');

  function createPortfolioCarousel() {
    $('.portfolio-carousel').slick({
    rows: 2,
    slidesPerRow: 4,
    infinite: false,

    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesPerRow: 3,
        rows: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesPerRow: 1,
        rows: 1
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesPerRow: 1,
        rows: 1
      }
    }]
  });
};

createPortfolioCarousel();

function portfolioSetHeight() {
  var portfolioItems = $('.portfolio-carousel-item'),
      width = portfolioItems.css('width'),
      height = width;
  portfolioItems.each(function(index, element) {
    $(element).css('height', height);
  });
};

setTimeout(portfolioSetHeight, 0);

var portfolioNav = $('.portfolio-nav li');

function portfolioSort(filter) {
  $('.portfolio-nav'+' '+filter).on('click', function() {
    portfolioNav.removeClass('active');
    portfolioNav.find(filter).closest('li').addClass('active');
    $('.portfolio-carousel').remove();
    $('.portfolio-carousel-wrapper').append('<div class="portfolio-carousel"></div>');
    if (filter == '.all') {
      $('.portfolio-carousel').append($(portfolioItems));
    } else {
      $('.portfolio-carousel').append($(portfolioItems).filter(filter));
    }
    createPortfolioCarousel();
    portfolioSetHeight();
    return false;
  });
}

  portfolioSort('.graphic-design');
  portfolioSort('.logo-branding');
  portfolioSort('.ux-ui-design');
  portfolioSort('.all');

  var widthBreakpoint;
  function widthCheck() {
    if (($(window).width() <= 768) && (!($('.testimonial-right .testimonial-header').is('.testimonial-header')))) {
      widthBreakpoint = 0;
    } else {
      widthBreakpoint = 1
    }
  }

  var testiminialHeader = $('.testimonial-header');
  function moveTestimonialHeader() {
    if ($(window).width() <= 768 && widthBreakpoint==1) {
      $('.testimonial-header').remove();
      $('.testimonial').prepend(testiminialHeader);
      widthBreakpoint = 0;
    }
    if ($(window).width() > 768 && widthBreakpoint==0) {
      $('.testimonial-header').remove();
      $('.testimonial-right').prepend(testiminialHeader);
      widthBreakpoint = 1;
    }
  }

  widthCheck();
  moveTestimonialHeader();

  $(window).resize(function() {
    setTimeout(portfolioSetHeight, 100);
    if (($(window).width() <= 768 && widthBreakpoint==1) || ($(window).width() > 768 && widthBreakpoint==0)) {
      moveTestimonialHeader();
    }
  });


  $('.testimonial-carousel').slick({
    rows: 1,
    slidesToShow: 1,
    infinite: false,
    dots: true,
    appendDots: '.testimonial-carousel-navigation',
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
  });

});
