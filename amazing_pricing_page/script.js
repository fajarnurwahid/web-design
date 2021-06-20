const allIndicator = document.querySelectorAll('.indicator p');
const navigation = document.querySelector('.navigator');
const pricingBox = document.querySelector('.pricing-box');

allIndicator[0].classList.add('active');

navigation.style.left = `0`;
navigation.style.transform = `translateX(0)`;

pricingBox.style.left = `0`;

allIndicator.forEach((indicator, index)=> {
	indicator.addEventListener('click', function() {
		for (let i = 0; i < allIndicator.length; i++) {
			allIndicator[i].classList.remove('active');
		}

		navigation.style.left = `${index * 50}%`;
		navigation.style.transform = `translateX(-${index * 50}%)`;

		pricingBox.style.left = `-${index * 100}%`;

		this.classList.add('active');
	});
});