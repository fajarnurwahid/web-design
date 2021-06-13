// Play btn
const btnPlay = document.querySelector('#jumbotron .content .video .play-btn');
const thumbnail = document.querySelector('#jumbotron .content .video .thumbnail');

btnPlay.addEventListener('click', function () {
	this.classList.add('hide');
	thumbnail.classList.add('hide');
});




// Window scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
	this.scrollY > 20 ? nav.classList.add('active') : nav.classList.remove('active');
});




// Navbar toggle 
const menuBar = document.querySelector('nav .menu-bar');
const menu = document.querySelector('nav .nav-menu');
const icon = document.querySelector('nav .menu-bar .fas');

menuBar.addEventListener('click', function() {
	menu.classList.toggle('active');
	menu.classList.contains('active') ? icon.classList.replace('fa-bars', 'fa-times') : icon.classList.replace('fa-times', 'fa-bars')
});