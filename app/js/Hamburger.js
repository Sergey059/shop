export default function Hamburger() {
	let hamburger = document.querySelector(".hamburger")
	let nav = document.querySelector(".navigation")
	let body = document.querySelector("body")
	hamburger.onclick = () => {
		hamburger.classList.toggle("active")
		if (hamburger.classList.contains("active")) {
			nav.classList.add("active")
			body.classList.add("no-scroll")
		} else{
			nav.classList.remove("active")
			body.classList.remove("no-scroll")
		}
	};
};