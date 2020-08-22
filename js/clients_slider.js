const clientReview = document.getElementById('customers_review_content');
const reviews = clientReview.querySelectorAll('.review');

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let counter = 0;
function reviewSlider (counter) {
	reviews.forEach (elem => {
		elem.classList.add('no-display')
		elem.classList.remove('display')
	});
	reviews[counter].classList.remove('no-display');
	reviews[counter].classList.add('display');
}

function prevReview () {
	counter--;
	if (counter < 0 ) {
		counter = reviews.length-1;
	}
	reviewSlider(counter);
}

function nextReview () {
	counter++;
	if (counter > reviews.length-1) {
		counter=0;
	}
	reviewSlider(counter);
}
nextButton.addEventListener('click', nextReview);
prevButton.addEventListener('click', prevReview);

