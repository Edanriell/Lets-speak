function promoSlider({
	container,
	prevSlideBtn,
	nextSlideBtn,
	slides,
	wrapper,
	slideHeader,
	slideDescription,
	slideButton,
	slideWidth
}) {
	const slider = document.querySelector(container);
	const leftArrow = document.querySelector(prevSlideBtn);
	const rightArrow = document.querySelector(nextSlideBtn);
	const sliderImgs = document.querySelectorAll(slides);
	const slidesWrapper = document.querySelector(wrapper);
	const slideHeaderText = document.querySelectorAll(slideHeader);
	const slideDescriptionText = document.querySelectorAll(slideDescription);
	const slideBtn = document.querySelectorAll(slideButton);
	const width = slideWidth;

	let slideIndex = 1;
	let offset = 0;

	slidesWrapper.style.width = `${100 * sliderImgs.length}%`;
	slidesWrapper.style.display = "flex";
	slidesWrapper.style.transition = "0.5s all";

	slider.style.overflow = "hidden";
	slider.style.position = "relative";

	sliderImgs.forEach(slide => {
		slide.style.width = width;
	});

	const animateSliderContent = function () {
		slideHeaderText.forEach(text => {
			text.style.display = "none";
			if (text.classList.contains("fade-in-bottom")) {
				text.classList.remove("fade-in-bottom");
			}
		});
		slideDescriptionText.forEach(text => {
			text.style.display = "none";
			if (text.classList.contains("fade-in-bottom")) {
				text.classList.remove("fade-in-bottom");
			}
		});
		slideBtn.forEach(btn => {
			btn.style.display = "none";
			if (btn.classList.contains("fade-in-bottom")) {
				btn.classList.remove("fade-in-bottom");
			}
		});
		let showSliderContent = setTimeout(function showContent() {
			if (
				slideHeaderText[slideIndex - 1].classList.contains("fade-in-bottom") &&
				slideBtn[slideIndex - 1].classList.contains("fade-in-bottom")
			) {
				clearTimeout(showSliderContent);
			} else if (slideHeaderText[slideIndex - 1].classList.contains("fade-in-bottom")) {
				slideBtn[slideIndex - 1].style.display = "block";
				slideBtn[slideIndex - 1].classList.add("fade-in-bottom");
			} else {
				slideHeaderText[slideIndex - 1].style.display = "block";
				slideHeaderText[slideIndex - 1].classList.add("fade-in-bottom");
				slideDescriptionText[slideIndex - 1].style.display = "block";
				slideDescriptionText[slideIndex - 1].classList.add("fade-in-bottom");
				showSliderContent = setTimeout(showContent, 350);
			}
		}, 300);
	};

	const deleteNonDigits = function (str) {
		return +str.replace(/\D/g, "");
	};

	animateSliderContent();

	rightArrow.addEventListener("click", () => {
		animateSliderContent();
		if (offset === deleteNonDigits(width) * (sliderImgs.length - 1)) {
			offset = 0;
		} else {
			offset += deleteNonDigits(width);
		}
		slidesWrapper.style.transform = `translateX(-${offset}px)`;
		if (slideIndex === sliderImgs.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}
	});

	leftArrow.addEventListener("click", () => {
		animateSliderContent();
		if (offset === 0) {
			offset = deleteNonDigits(width) * (sliderImgs.length - 1);
		} else {
			offset -= deleteNonDigits(width);
		}
		slidesWrapper.style.transform = `translateX(-${offset}px)`;
		if (slideIndex === 1) {
			slideIndex = sliderImgs.length;
		} else {
			slideIndex--;
		}
	});
}

export default promoSlider;
