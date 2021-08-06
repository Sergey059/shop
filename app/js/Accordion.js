export default function(Accordion) {

	const accordion = document.querySelector('.accordion')
	const accordionItem = document.querySelectorAll('.accordion__item')
	const accordionItemHeading = accordion.querySelector('.accordion__title')

	for(let item of accordionItem) {
		item.addEventListener('click', function() {
			if(this.classList.contains('active')){
				this.classList.remove('active')
			} else{
				for(let el of accordionItem){
					el.classList.remove('active')
				}
				this.classList.add('active')
			}
		})
		
	}
	
}