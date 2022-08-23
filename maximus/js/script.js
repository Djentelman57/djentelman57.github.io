$('.form_box').validate({
	rules: {
		name: {
			required: true,
			minlength: 2
		  },
		phone: "required",
		checkbox: {
			required: true,
		},
	},
	messages: {
		name: {
			required: "Пожалуйста, введите свое имя",
			minlength: jQuery.validator.format("Введите {0} символа!")
		},
		phone: "Пожалуйста, введите свой номер",
		checkbox: "Подтвердите согласие"
	  }
});


$('input[name=phone]').mask("+7 (999) 999-9999");


/* $(document).ready(function(){
    $('.visitors__list1').slick({
		slidesToShow: 5,
		infinite: true,
		slidesToScroll: 2,
		arrows: false,
		appendArrows:'.header-arrows',
		prevArrow:'<span class="slider-prev">.</span>',
		nextArrow:'<span class="slider-next">.</span>',
		dots: false,
		dotsClass: 'dots-style',
	});
	$('.visitors__list2').slick({
		slidesToShow: 5,
		infinite: true,
		slidesToScroll: 2,
		arrows: true,
		appendArrows:'.header-arrows',
		prevArrow:'<span class="slider-prev">.</span>',
		nextArrow:'<span class="slider-next">.</span>',
		dots: true,
		dotsClass: 'dots-style',
	});

}); */

var slickPrimarySecondary = {
	slidesToShow: 4,
	slidesToScroll: 2,
	arrows: false,
	asNavFor: '.sec',
	infinite: true,
	responsive: [
		{
		breakpoint: 577,
		settings: {
			centerPadding: '40px',
			slidesToShow: 3
		  	}
		},
		{
		breakpoint: 401,
		settings: {
			centerPadding: '40px',
			slidesToShow: 2
				}
		}
	]
  };
  var slickNavigator = {
	slidesToShow: 5,
	slidesToScroll: 2,
	asNavFor: '.nav',
	speed: 500,
	dots: true,
	centerMode: false,
	infinite: true,
	prevArrow:'<span class="slider-prev"></span>',
	nextArrow:'<span class="slider-next"></span>',
	dotsClass: 'dots-style',
	responsive: [
		{
		breakpoint: 577,
		settings: {
			centerPadding: '40px',
			slidesToShow: 4
		  	}
		},
		{
		breakpoint: 401,
		settings: {
			centerPadding: '40px',
			slidesToShow: 3
				}
		}
	]
  };
 
  $('.visitors__list1').slick(slickPrimarySecondary);
  $('.visitors__list2').slick(slickNavigator)
 

 /*  $('.carousel__list').slick({
	centerMode: true,
	centerPadding: '0',
	slidesToShow: 3,
	responsive: [
	  {
		breakpoint: 768,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 3
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 1
		}
	  }
	]
  }); */
  

  $('.slick')
  .on('init', () => {
    $('.slick-slide[data-slick-index="-2"]').addClass('lt2');
    $('.slick-slide[data-slick-index="-1"]').addClass('lt1');
    $('.slick-slide[data-slick-index="1"]').addClass('gt1');
    $('.slick-slide[data-slick-index="2"]').addClass('gt2');
})
  .slick({
	centerMode: true,
	centerPadding: 0,
	slidesToShow: 5,
	dots: true,
	dotsClass: 'dots-style',
	prevArrow:'<span class="slider-prev"></span>',
	nextArrow:'<span class="slider-next"></span>',
	responsive: [
		{
		  breakpoint: 1201,
		  settings: {
			centerMode: true,
			slidesToShow: 3
		  }
		},
		{
		breakpoint: 577,
		settings: {
			centerPadding: '40px',
			slidesToShow: 2,
				}
		},
		{
		  breakpoint: 481,
		  settings: {
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1
		  }
		}
	  ]
}).on('beforeChange', (event, slick, current, next) => {
  $('.slick-slide.gt2').removeClass('gt2');
  $('.slick-slide.gt1').removeClass('gt1');
  $('.slick-slide.lt1').removeClass('lt1');
  $('.slick-slide.lt2').removeClass('lt2');

  const lt2 = (current < next && current > 0) ? current - 1 : next - 2;
  const lt1 = (current < next && current > 0) ? current : next - 1;
  const gt1 = (current < next || next === 0) ? next + 1 : current;
  const gt2 = (current < next || next === 0) ? next + 2 : current + 1;

  $(`.slick-slide[data-slick-index="${lt2}"]`).addClass('lt2');
  $(`.slick-slide[data-slick-index="${lt1}"]`).addClass('lt1');
  $(`.slick-slide[data-slick-index="${gt1}"]`).addClass('gt1');
  $(`.slick-slide[data-slick-index="${gt2}"]`).addClass('gt2');

  // Clone processing when moving from 5 to 0
  if (current === 5 && next === 0) {
    $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('lt2');
    $(`.slick-slide[data-slick-index="${current}"]`).addClass('lt1');
    $(`.slick-slide[data-slick-index="${current + 2}"]`).addClass('gt1');
    $(`.slick-slide[data-slick-index="${current + 3}"]`).addClass('gt2');
  }

  // Clone processing when moving from 0 to 5
  if (current === 0 && next === 5) {
    $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('gt2');
    $(`.slick-slide[data-slick-index="${current}"]`).addClass('gt1');
    $(`.slick-slide[data-slick-index="${current - 2}"]`).addClass('lt1');
    $(`.slick-slide[data-slick-index="${current - 3}"]`).addClass('lt2');
  }

  console.log('beforeChange', current, ':', lt2, lt1, next, gt1, gt2);
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

Fancybox.bind("#certs a", {
	// Your options
  });






let info = document.querySelectorAll(".button_info");
let text_info = document.querySelectorAll(".reviews__text");

for (let i = 0; i < info.length; i++) {
  info[i].onclick = function() {
    text_info[i].classList.toggle('more');
  }
}




$('.reviews__slider')
  .on('init', () => {
    $('.slick-slide[data-slick-index="-2"]').addClass('zt2');
    $('.slick-slide[data-slick-index="-1"]').addClass('zt1');
    $('.slick-slide[data-slick-index="1"]').addClass('mt1');
})
  .slick({
	centerMode: true,
	centerPadding: 0,
	slidesToShow: 4,
	dots: true,
	dotsClass: 'dots-style',
	prevArrow:'<span class="slider-prev"></span>',
	nextArrow:'<span class="slider-next"></span>',
	responsive: [
		{
		  breakpoint: 1201,
		  settings: {
			centerMode: true,
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 577,
		  settings: {
			centerMode: true,
			slidesToShow: 1,
		  }
		}
	  ]
}).on('beforeChange', (event, slick, current, next) => {
  $('.slick-slide.mt1').removeClass('mt1');
  $('.slick-slide.zt1').removeClass('zt1');
  $('.slick-slide.zt2').removeClass('zt2');

  const zt2 = (current < next && current > 0) ? current - 1 : next - 2;
  const zt1 = (current < next && current > 0) ? current : next - 1;
  const mt1 = (current < next || next === 0) ? next + 1 : current;

  $(`.slick-slide[data-slick-index="${zt2}"]`).addClass('zt2');
  $(`.slick-slide[data-slick-index="${zt1}"]`).addClass('zt1');
  $(`.slick-slide[data-slick-index="${mt1}"]`).addClass('mt1');

  // Clone processing when moving from 5 to 0
  if (current === 5 && next === 0) {
    $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('zt2');
    $(`.slick-slide[data-slick-index="${current}"]`).addClass('zt1');
    $(`.slick-slide[data-slick-index="${current + 2}"]`).addClass('mt1');
  }

  // Clone processing when moving from 0 to 5
  if (current === 0 && next === 5) {
    $(`.slick-slide[data-slick-index="${current}"]`).addClass('mt1');
    $(`.slick-slide[data-slick-index="${current - 2}"]`).addClass('zt1');
    $(`.slick-slide[data-slick-index="${current - 3}"]`).addClass('zt2');
  }

  console.log('beforeChange', current, ':', zt2, zt1, next, mt1);
});





window.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.header__nav_block'),
		menuItem = document.querySelectorAll('.header__nav_item'),
		closeElem = document.querySelector('.header__nav_close');
	
	
		hamburger.addEventListener('click', () => {
			menu.classList.add('header__nav_block_active');
		});
	
		closeElem.addEventListener('click', () => {
			menu.classList.remove('header__nav_block_active');
		});
	
		menuItem.forEach(item => {
			item.addEventListener('click', () => {
				/* hamburger.classList.toggle('hamburger_active'); */
				menu.classList.toggle('header__nav_block_active');
			})
		})
	});
