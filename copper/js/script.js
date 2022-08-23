$(document).ready(function(){
    $('.header__items').slick({
		slidesToShow: 1,
		infinite: true,
		slidesToScroll: 1,
		arrows: true,
		appendArrows:'.header-arrows',
		prevArrow:'<span class="slider-prev">.</span>',
		nextArrow:'<span class="slider-next">.</span>',
		dots: true,
		dotsClass: 'dots-style',
		responsive: [{
			breakpoint: 992,
			settings: {
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
			}
		 }]
	});

	
	$('.carousel__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        dotsClass: 'dots-style',
		appendArrows:'.carousel-arrows',
		prevArrow:'<span class="slider-prev">.</span>',
		nextArrow:'<span class="slider-next">.</span>',
        responsive: [ {
           breakpoint: 600,
           settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
			  arrows: false,
           }
        }, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
              slidesToScroll: 2,
			  arrows: false,
			}
		}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
              slidesToScroll: 2,
			  arrows: false,
			}
		}, {
			breakpoint: 1200,
			settings: {
			   slidesToShow: 2,
			   slidesToScroll: 2,
			}
		 }]
     });
	


});

window.addEventListener('DOMContentLoaded', () => {
const hamburger = document.querySelector('.header__home_hamburger'),
	menu = document.querySelector('.header__menu'),
	menuItem = document.querySelectorAll('.header__menu_item'),
	closeElem = document.querySelector('.header__menu_close');


	hamburger.addEventListener('click', () => {
		menu.classList.add('header__menu_active');
	});

	closeElem.addEventListener('click', () => {
		menu.classList.remove('header__menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('header__home_hamburger_active');
			menu.classList.toggle('header__menu_active');
		})
	})
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}