// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')
import Preloader from "./Preloader"
import Accordion from "./Accordion"
import Hamburger from "./Hamburger"
import Slider from "./Slider"


document.addEventListener('DOMContentLoaded', () => {

	Preloader();
	Accordion();
	Hamburger();
	Slider();

})
