export default function Slider() {
	const images = document.querySelectorAll('.page-slider__img');
	const sliderLine = document.querySelector('.page-slider__box');
	const slider = document.querySelector('.page-slider__wrap')
	let count = 0;
	let width;

	function init() {
		width = slider.offsetWidth;
		sliderLine.style.width = width * images.length + 'px';
		images.forEach(item => {
			item.style.width = width + 'px';
			item.style.height = 'auto';
		});
		rollSlider();
	}

	init();
	if (slider){
		window.addEventListener('resize', init);
	}

	document.querySelector('.page-slider__btn_next').addEventListener('click', function () {
		count++;
		if (count >= images.length) {
			count = 0;
		}
		rollSlider();
	});

	document.querySelector('.page-slider__btn_prev').addEventListener('click', function () {
		count--;
		if (count < 0) {
			count = images.length - 1;
		}
		rollSlider();
	});

	function rollSlider() {
		sliderLine.style.transform = 'translate(-' + count * width + 'px)';
	}
}