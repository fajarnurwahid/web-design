const link = document.getElementById('style-css');
const iconMode = document.querySelector('.form-wrapper .mode .fas');

if (localStorage.getItem('style') === null) {
	link.setAttribute('href', 'light.css');
} else {
	link.setAttribute('href', localStorage.getItem('style'));
}

if (link.getAttribute('href') === 'dark.css') {
	iconMode.classList.replace('fa-moon', 'fa-sun');
} else if (link.getAttribute('href') === 'light.css') {
	iconMode.classList.replace('fa-sun', 'fa-moon');
}

function swapStyleMode () {
	if (link.getAttribute('href') === 'dark.css') {
		localStorage.setItem('style', 'light.css');
		iconMode.classList.replace('fa-sun', 'fa-moon');
	} else if (link.getAttribute('href') === 'light.css') {
		localStorage.setItem('style', 'dark.css');
		iconMode.classList.replace('fa-moon', 'fa-sun');
	}
	link.setAttribute('href', localStorage.getItem('style'));
}