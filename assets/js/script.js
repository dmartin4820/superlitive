function slideShow() {
	const rightArrow = $(".slideshow-arrow-right");
	const leftArrow = $(".slideshow-arrow-left");
	const imgEl = $(".slide-image");
	const images = [
		"assets/images/PlaceholderLC_1.png",
		"assets/images/PlaceholderLC_2.png",
		"assets/images/PlaceholderLC_3.png",
	];

	let imageIndex = 0;

	rightArrow.click(() => {
		console.log('next')
		imageIndex++;
		imgEl.attr("src", images[Math.abs(imageIndex % images.length)]);
	});

	leftArrow.click(() => {
		console.log('previous')
		imageIndex--;
		
		imageIndex < 0
		? imgEl.attr("src", images[images.length + imageIndex % images.length])
		: imgEl.attr("src", images[imageIndex % images.length])
	});
	

	
}

slideShow();