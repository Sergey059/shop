export default function Preloader() {
	window.setTimeout(function () {
		document.body.classList.add('loaded_hiding');
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 2000)
}