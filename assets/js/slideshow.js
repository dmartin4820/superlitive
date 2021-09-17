const slideShowTime = 5; //seconds
const images = [
		"assets/images/IMG_6747.jpg",
    "assets/images/IMG_6791.jpg",
    "assets/images/IMG_6775.jpg",
    "assets/images/IMG_6799.jpg",
		"assets/images/IMG_6754.jpg",
		"assets/images/IMG_6763.jpg",
		"assets/images/IMG_6794.jpg"
];

//Continuous loop each slideShowTime seconds
function loop(i, imgEl) {
	return setInterval(() => {
		nextSlide(i, imgEl);
		i++;
	}, slideShowTime * 1000)
}


function slideShow() {
	const rightArrow = $(".slideshow-arrow-right");
	const leftArrow = $(".slideshow-arrow-left");
	const imgEl = $(".slide-image");
	

	let imagesIndex = 0;

	rightArrow.click(() => {//Increment in images array when right arrow clicked
		// console.log(imgEl.attr("data-index"), 'next')
		imagesIndex = Number(imgEl.attr("data-index")) + 1;
		clearInterval(interval);
		nextSlide(imagesIndex, imgEl);
		interval = loop(imagesIndex, imgEl);
	});

	leftArrow.click(() => {//Decrement in images array when left arrow clicked
		// console.log(imgEl.attr("data-index"), 'previous')
		imagesIndex = Number(imgEl.attr("data-index")) - 1;
		clearInterval(interval);
		nextSlide(imagesIndex, imgEl);
		interval = loop(imagesIndex, imgEl);
	});

	let interval = loop(imagesIndex, imgEl);
}

//Logic for displaying next slide
function nextSlide(i, imgEl) {
	i < 0 
    ? i = (images.length + i % images.length) % images.length //transform negative index to positive index 
    : i = i % images.length;

  //Change src and data-index to reflect current element in images array
	imgEl.attr("src", images[i]);
	imgEl.attr("data-index", `${i}`);
}

slideShow();