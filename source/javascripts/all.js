jQuery(document).ready(function ($) {

  var $toggle = $('#nav-toggle');
  var $menu = $('#nav-menu');

  $toggle.click(function() {
    $(this).toggleClass('is-active');
    $menu.toggleClass('is-active');
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1500,
    responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        1000:{
          items:1
        }
    }
  });
 
});
