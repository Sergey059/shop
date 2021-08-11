export default function(Accordion) {

	const accordion = document.querySelector('.accordion')
	const accordionItem = document.querySelectorAll('.accordion__item')
	const accordionItemHeading = document.querySelectorAll('.accordion__title')

	for(let item of accordionItemHeading) {
		item.addEventListener('click', function() {
			const parent=this.parentElement
			if(parent.classList.contains('active')){
				parent.classList.remove('active')
			} else{
				for(let el of accordionItem){
					el.classList.remove('active')
				}
				parent.classList.add('active')
			}
		})
	}
	
}