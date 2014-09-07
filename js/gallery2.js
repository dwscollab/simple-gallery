var Web250core = window.Web250core || {};

Web250core.simpleGallery = (function (){
	'use strict';
	//collect all the images in an imgBank
		var imgBank = document.querySelectorAll('[data-gallery="images"] img'),
		len = imgBank.length,
		prevBtn = document.querySelector('[data-gallery="prev-btn"]'),
		nextBtn = document.querySelector('[data-gallery="next-btn"]'),
		imgTitle = document.querySelector('[data-gallery="title"]'),
		pagination = document.querySelector('[data-gallery="pagination"]'),
		currentIndex = 0,
		prevIndex = null,


		//console.log(imgBank, len, nextBtn, prevBtn, imgTitle, pagination);
		//function to hide all the images except top hideImg
		hideImage = function () {
			for(var i = 1; i < len; i++) {
				imgBank[i].className = 'hidden';
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
			title();
			imgIndex();
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
		title = function () {
			imgTitle.innerHTML = imgBank[currentIndex].alt;
		},
		// function for pagination
		imgIndex = function (){
			pagination.innerHTML = (currentIndex + 1) + ' of ' + len + ' pictures.'
		},
		//init function
		init = function(){
			hideImage();
			bindEvents();
			title();
			imgIndex();
		};
	return{
		init : init,
		nextImage : nextImage,
		prevImage : prevImage,
	};


}());
Web250core.simpleGallery.init();