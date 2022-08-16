const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu");
const headerBody = document.querySelector('.header');

function delay(time, status) {
	setTimeout(() => {
		open = status;
	}, time);
}
iconMenu.addEventListener("click", openCloseMenu);

function openCloseMenu(event) {
	if (iconMenu && open) {
		open = false;
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle("active");
		menuBody.classList.toggle("active");
		headerBody.classList.toggle("active");
		delay(500, true);
	}
}






new Swiper('.footer-slider', {
	slidesPerView: 6,

	centeredSlides: true,
	observer: true,
	observeParents: true,
	watchOverflow: true,

	loop: true,
	loopAdditionalSlides: 16,
	speed: 1000,
	autoplay: {
		delay: 2000,
	},
	simulateTouch: false,
	spaceBetween: 40,

	breakpoints: {
		320: {
			slidesPerView: 2,
			centeredSlides: false,
			spaceBetween: 0,
		},
		768: {
			slidesPerView: 2,
			centeredSlides: true,
			
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 15,
		},
		1280: {
			slidesPerView: 6,
			spaceBetween: 30,
		},
	}

})




