const burg = document.querySelector('.icon-menu');
const myFirstText = document.querySelector('#text');
burg.addEventListener("click", burgerClick);
function burgerClick(e) {
	const targetItem = e.target;
	if (targetItem.closest('.icon-menu')) {
		myFirstText.classList.toggle('menu-open')
		burg.classList.toggle('menu-open')
	}
}

var menu = ['Slide 1', 'Slide 2', 'Slide 3']
var mySwiper = new Swiper ('.bullets__slider', {
	spaceBetween: 50,
	loop: false,
	autoheight: true,
	pagination: {
		el: '.bullets__pagination.swiper-pagination',
		clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (menu[index]) + '</span>';
			},
	},
	navigation: {
		nextEl: '.bullets__arrow.swiper-button-next',
		prevEl: '.bullets__arrow.swiper-button-prev',
	},
})


const vidic = document.querySelector('#vid');
const leadVideo = document.querySelector('.video__ground');
const itemVideo = document.querySelector('.item__video');
vidic.addEventListener("click", videoClick)
function videoClick(e) {
	const targetClip = e.target;
	if (targetClip.closest('#vid')) {
		leadVideo.classList.toggle('active')
		itemVideo.classList.toggle('active')
	}
}
document.addEventListener("click", documentClick);
function documentClick(e) {
	const targetDoc = e.target;
	if (targetDoc.closest('.video__picture')) {
		leadVideo.classList.remove('active')
		itemVideo.classList.remove('active')
	}
}

const isScrollBtn = document.querySelector('#scrollTop');
console.log(isScrollBtn);
window.onscroll = () => {
	if (window.scrollY > 500) {
		isScrollBtn.classList.remove('isShowBtn_hide')
	} else if (window.scrollY < 500) {
		isScrollBtn.classList.add('isShowBtn_hide')
	}
}
isScrollBtn.onclick = () => {
	window.scrollTo(0, 0)
}