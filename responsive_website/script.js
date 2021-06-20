// Toggle Navbar
const menuIcon = document.querySelector('nav .menu-icon .fas'),
menu = document.querySelector('nav .nav-menu');

menuIcon.addEventListener('click', function() {
	menu.classList.toggle('active');
	menu.classList.contains('active') ? this.classList.replace('fa-bars', 'fa-times') : this.classList.replace('fa-times', 'fa-bars');
});