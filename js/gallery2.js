//collect all the images in an imgBank
var imgBank = document.querySelectorAll('[data-gallery="images"] img'),
	len = imgBank.length,
	nextBtn = document.querySelector('[data-gallery="prev-btn"]'),
	prevBtn = document.querySelector('[data-gallery="next-btn"]'),
	imgTitle = document.querySelector('[data-gallery="title"]'),
	pagination = document.querySelector('[data-gallery="pagination"]'),
	currentIndex = 0,
	prevIndex = null,


	//console.log(imgBank, len, nextBtn, prevBtn, imgTitle, pagination);
	//function to hide all the images except top hideImg
	hideImage = function () {
		for(var i = 1; i < len; i++) {
			imgBank[i].className = 'hidden';
			console.log(imgBank[i]);
		}
	},


	//function for the prevImage
	prevImage = function () {
		prevIndex = currentIndex;
		if (currentIndex == 0) {
			currentIndex = len - 1;
		} else{
			currentIndex--;
		};
		changeImage();
	},

	//bindEvents function
	bindEvents = function(){
		nextBtn.onclick = nextImage;
		prevBtn.onclick = prevImage;
	},

	changeImage = function () {
		imgBank[prevIndex].className = 'hidden';
		imgBank[currentIndex].className = '';
	},


	//function for the nextImage
	nextImage = function(){
		prevIndex = currentIndex;

		if(currentIndex < len - 1){
			currentIndex++;
		}else{
			currentIndex = 0;
		}

		changeImage();
	},


	//function to add title from alt tag

	// function for pagination

	//init function
	init = function(){
		hideImage();
		bindEvents();
	};

init();