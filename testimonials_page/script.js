const leftBtn = document.querySelector('.container .arrow span.left');
const rightBtn = document.querySelector('.container .arrow span.right');
const testimonialWrapper = document.querySelector('.container .wrapper .testimonials');
const testiBox = document.querySelectorAll('.container .wrapper .testimonials .testi-box');
const indicatorBox = document.querySelector('.container .indicator');
let i = 0;


for (let j = 0; j < testiBox.length; j++) {
	let span = document.createElement("span");
	indicatorBox.appendChild(span);
}

const indicatorItem = document.querySelectorAll('.container .indicator span');


testimonialWrapper.style.left = `${i*600}px`;
indicatorItem[Math.abs(i)].classList.add('active');

leftBtn.addEventListener('click', function() {
	i = ((i + 1) - testiBox.length) % testiBox.length;
	testimonialWrapper.style.left = `${i*600}px`;
	for (let j = 0; j < testiBox.length; j++) {
		indicatorItem[Math.abs(j)].classList.remove('active');
		indicatorItem[Math.abs(i)].classList.add('active');
	}
});



rightBtn.addEventListener('click', function() {
	i = (i - 1) % testiBox.length;
	testimonialWrapper.style.left = `${i*600}px`;
	for (let j = 0; j < testiBox.length; j++) {
		indicatorItem[Math.abs(j)].classList.remove('active');
		indicatorItem[Math.abs(i)].classList.add('active');
	}
});


for (let k = 0; k < indicatorItem.length; k++) {
	indicatorItem[k].addEventListener('click', function() {
		i = k * -1;
		testimonialWrapper.style.left = `${i*600}px`;
		for (let j = 0; j < testiBox.length; j++) {
			indicatorItem[Math.abs(j)].classList.remove('active');
			indicatorItem[Math.abs(i)].classList.add('active');
		}
	});
}