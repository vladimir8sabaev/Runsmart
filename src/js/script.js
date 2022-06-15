$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<button id="prev" type="button"  class="slick-prev"> <img src="icons/left.svg"> </button>',
		nextArrow: '<button id="next" type="button"  class="slick-next"> <img src="icons/right.svg"> </button>',
		responsive: [
			{
			breakpoint: 768,
			settings: {
			dots: false,
			arrows: false
			}
			}
		]

	});
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content__active').eq($(this).index()).addClass('catalog__content__active');
	});
	function toggleSlide(item){
		$(item).each(function(i){
			$(this).on('click',function(e){
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content__active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list__active');
			})
		})
	};
	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');
});