const images = [
		"assets/images/PlaceholderLC_1.png",
		"assets/images/PlaceholderLC_2.png",
		"assets/images/PlaceholderLC_3.png",
];

function loop(i, imgEl) {
	return setInterval(() => {
		nextSlide(i, imgEl);
		console.log(i)
		i++;
	}, 2000)
}


function slideShow() {
	const rightArrow = $(".slideshow-arrow-right");
	const leftArrow = $(".slideshow-arrow-left");
	const imgEl = $(".slide-image");
	

	let imagesIndex = 0;

	rightArrow.click(() => {
		console.log(imgEl.attr("data-index"), 'next')
		imagesIndex = Number(imgEl.attr("data-index")) + 1;
		clearInterval(interval);
		nextSlide(imagesIndex, imgEl);
		interval = loop(imagesIndex, imgEl);
	});

	leftArrow.click(() => {
		console.log(imgEl.attr("data-index"), 'previous')
		imagesIndex = Number(imgEl.attr("data-index")) - 1;
		clearInterval(interval);
		nextSlide(imagesIndex, imgEl);
		interval = loop(imagesIndex, imgEl);
	});

	let interval = loop(imagesIndex, imgEl);
}

function nextSlide(i, imgEl) {
	console.log(i, 'enter')
	i < 0 ? i = (images.length + i % images.length) % images.length : i = i % images.length;	

	console.log(i, 'exit')
	imgEl.attr("src", images[i]);
	imgEl.attr("data-index", `${i}`);
}

slideShow();