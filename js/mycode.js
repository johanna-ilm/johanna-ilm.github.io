// Page navigation

// Get all nav-link items and add click event listeners
const navLinks = document.querySelectorAll('.nav-link');
for (let i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener('click', () => changePage(i));
}

const changePage = (i) => {
	// Remove class attribute from the grid container
	const gridContainer = document.querySelector('#grid-container');
	gridContainer.removeAttribute('class');

	// Get all elements that have class "show-page" and hide them.
	const previousPageDivs = document.querySelectorAll('.show-page');
	previousPageDivs.forEach((div) => {
		div.classList.remove('show-page');
		div.classList.add('hide-page');
	});
	// Get data-link attribute (page name) of the clicked link
	const newLink = navLinks[i].getAttribute('data-link');
	// Get all elements that have corresponding page name as a class and show them.
	const pageDivs = document.querySelectorAll(newLink);
	pageDivs.forEach((div) => {
		const att = document.createAttribute('class');
		if (newLink === '.welcome-page') {
			att.value = 'grid-container-welcome';
		} else {
			att.value = 'grid-container';
		}
		gridContainer.setAttributeNode(att);
		div.classList.remove('hide-page');
		div.classList.add('show-page');
	});
};

// jQuery for collapsing the hamburger menu after click
$('.nav-link').on('click', function() {
	$('.navbar-collapse').collapse('hide');
});
