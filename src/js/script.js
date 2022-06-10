$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button id="prev" type="button"  class="slick-prev"> <img src="icons/left.svg"> </button>',
        nextArrow: '<button id="prev" type="button"  class="slick-next"> <img src="icons/right.svg"> </button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
               dots: true,
               arrows: false
              }
            },
          ]

      });
  });