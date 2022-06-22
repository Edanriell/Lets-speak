import "../sass/main.sass";

import promoSlider from "./modules/slider";

window.addEventListener("DOMContentLoaded", () => {
	promoSlider({
		container: ".page-main__slider",
		prevSlideBtn: ".page-main__slider__btn-prev",
		nextSlideBtn: ".page-main__slider__btn-next",
		slides: ".page-main__slider__slide",
		wrapper: ".page-main__slider__wrapper",
		slideHeader: ".page-main__slider__slide-headline",
		slideDescription: ".page-main__slider__slide-text",
		slideButton: ".page-main__slider__btn",
		slideWidth: "820px"
	});
});
