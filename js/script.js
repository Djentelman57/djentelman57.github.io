const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
	lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
	lines[i].style.width = item.innerHTML;

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
});

const animItems = document.querySelectorAll(`._anim-items`)
if (animItems.length > 0) {
    window.addEventListener(`scroll`, animOnScroll)

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffSet = offset(animItem).top
            const animStart = 4
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                animItem.classList.add(`_active`)
            } else {
                if (!(animItem.classList.contains(`_anim-no-hide`))) {
                    animItem.classList.remove(`_active`)
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect()
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll()
    }, 300)
}

 // скрипт майлер 

/*  $('form').submit(function(e) {
	e.preventDefault();

	if (!$(this).valid()) {
		return;
	}

	$.ajax({
		type: "POST",
		url: "mailer/smart.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");
		$('#consultation, #order').fadeOut();
		$('.overlay, #thanks').fadeIn('slow');

		$('form').trigger('reset');
	});
	return false;
}); */


const TOKEN = "5791021283:AAG4nWbKcxkxg0SoEMZQKmu0t8zYpumzTZo";
const CHAT_ID = "-1001603746484";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.getElementById('success');

document.getElementById('tg').addEventListener('submit', function(e) {
	e.preventDefault();

	let message = `<b>Заявка с сайта!</b>\n`;
	message += `<b>Отправитель: </b> ${ this.name.value }\n`;
	message += `<b>Почта: </b> ${ this.email.value }\n`;
	message += `<b>Сообщение: </b> ${ this.text.value }`;

	axios.post(URI_API, {
		chat_id: CHAT_ID,
		parse_mode: 'html',
		text: message
	})
	.then((res) => {
		this.name.value = "";
		this.email.value = "";
		this.text.value = "";
		success.innerHTML = "сообщение отправлено!";
		success.style.display = "block";
	})
	.catch((err) => {
		console.warn(err);
	})
	.finally(() => {
		console.log('Конец');
	})
})