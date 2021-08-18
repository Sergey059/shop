export default function Tabs() {
	document.querySelectorAll('.tabs').forEach(function (tabsWrapper) {
		const tabsBtn   = tabsWrapper.querySelectorAll('.tabs__btn');
		const tabsItems = tabsWrapper.querySelectorAll('.tabs__item');
		tabsBtn.forEach(onTabClick);
		function onTabClick(item) {
				item.addEventListener('click', function() {
						let currentBtn = item;
						let tabId = currentBtn.getAttribute('data-tab');
						let currentTab = tabsWrapper.querySelector(tabId);
						if( ! currentBtn.classList.contains('active') ) {
								tabsBtn.forEach(function(item) {
										item.classList.remove('active')
								})
								tabsItems.forEach(function(item) {
										item.classList.remove('active')
								})	
								currentBtn.classList.add('active')
								currentTab.classList.add('active')
						}
				});
		}
		tabsWrapper.querySelector('.tabs__btn').click();
	})

}