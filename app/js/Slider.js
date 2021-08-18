export default function Slider() {
	const images = document.querySelectorAll('.page-slider__img')
	const sliderLine = document.querySelector('.page-slider__box')
	const slider = document.querySelector('.page-slider__wrap')
	const nextBtn = document.querySelector('.page-slider__btn_next')
	const prevBtn = document.querySelector('.page-slider__btn_prev')
	let count = 0
	let width

	function init() {
		width = slider.offsetWidth
		sliderLine.style.width = width * images.length + 'px'
		images.forEach(item => {
			item.style.width = width + 'px'
			item.style.height = 'auto'
		});
		sliderLine.style.transform = 'translate(-' + count * width + 'px)'
	}

	if (slider){
		init()
		window.addEventListener('resize', init)
		nextBtn.addEventListener('click', function () {
			count++
			if (count >= images.length) {
				count = 0
			}
			sliderLine.style.transform = 'translate(-' + count * width + 'px)'
		})
		prevBtn.addEventListener('click', function () {
			count--
			if (count < 0) {
				count = images.length - 1
			}
			sliderLine.style.transform = 'translate(-' + count * width + 'px)'
		})
	}


}