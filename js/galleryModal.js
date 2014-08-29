var imgBank = document.querySelectorAll('#gallery-modal-grid img'),
galleryModal = document.getElementById('gallery-modal'),
galleryPreview = document.getElementById('gallery-preview'),
len = imgBank.length,
isModalGalleryShowing = false,
currentIndex = null,

showPreview = function () {
	galleryModal.className = '';
	galleryPreview.src = this.src.replace('thumbs' , 'preview');
	isModalGalleryShowing = true;
	currentIndex = this.getAttribute('data-img-pos');
},

nextImg = function () {
	if(currentIndex < len - 1){
		currentIndex++;
	}else{
		currentIndex = 0;
	}

	galleryPreview.src = imgBank[currentIndex].src.replace('thumbs' , 'preview');
},

prevImg = function () {
	if(currentIndex == 0){
		currentIndex = len - 1;
	}else{
		currentIndex--;
	}

	galleryPreview.src = imgBank[currentIndex].src.replace('thumbs' , 'preview');
},

hidePreview = function () {
	galleryModal.className = 'hidden';
	isModalGalleryShowing = false;
};

for (var i = 0; i < len; i++) {
	imgBank[i].onclick = showPreview;
	imgBank[i].setAttribute('data-img-pos' , i);
}

galleryModal.onclick = hidePreview;

window.onkeydown = function(event) {
	if(event.keyCode === 37 && isModalGalleryShowing){
		prevImg();
	}else if (event.keyCode === 39 && isModalGalleryShowing){
		nextImg();
	}

	return;
};