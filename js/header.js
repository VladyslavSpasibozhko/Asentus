const menu = document.querySelector('.main_menu');
const logo = document.querySelector('.navbar-brand');
const menuItem = document.querySelectorAll('.nav-link');
const header = document.getElementById('header');


document.addEventListener('scroll', ()=> {
	let scrolled = window.pageYOffset;
	
	if (scrolled > 100) {
		menu.classList.add('page_scroll');
		logo.src = './img/logo-dark.png';
		menuItem.forEach(item => {
			item.classList.add('page_scroll_a');
		});

	} else {
		menu.classList.remove('page_scroll');
		logo.src = './img/logo.png';

		menuItem.forEach(item => {
			item.classList.remove('page_scroll_a');
		});
	}
});


function backgroundChange () { 
	header.classList.toggle('background_image_02');
	header.classList.toggle('background_image_01');
}
let interval = setInterval(backgroundChange, 5000);




