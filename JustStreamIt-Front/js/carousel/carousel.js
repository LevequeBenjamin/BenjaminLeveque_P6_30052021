class Carousel {
	/**
	 *
	 * @param {HTMLElement} element
	 * @param {Object} options
	 * @param {Object} options.slidesToScroll number of elements to be threaded
	 * @param {Object} options.slidesVisible number of elements visible in a slide
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
		let root = document.createElement('div');
		root.setAttribute('class', 'carousel');
		this.element.appendChild(root);
	}

	createDivWithClass(className) {}
}

document.addEventListener('DOMContentLoaded', function () {
	new Carousel(document.querySelector(''), {
		slidesToScroll: 1,
		slidesVisible: 5,
	});
});
