class Carousel {
	/**
	 *
	 * @param {HTMLElement} element
	 * @param {*} options
	 * @param {*} options.slidesToScroll number of elements to be threaded
	 * @param {*} options.slidesVisible number of elements visible in a slide
	 */
	constructor(element, options = {}) {
		this.element = element;
		this.options = Object.assign(
			{},
			{
				slidesToScroll: 1,
				slidesVisible: 1,
			},
			options,
		);
	}
}

document.addEventListener('DOMContentLoaded', function () {
	new Carousel(document.querySelector(''), {
		slidesToScroll: 1,
		slidesVisible: 5,
	});
});
