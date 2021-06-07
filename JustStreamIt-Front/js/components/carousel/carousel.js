/**
 * Contains the class carousel.
 */

/**
 * Class representating a carousel.
 * @method setStyle() Apply the correct dimensions to the elements of the carousel.
 * @method next() Allows you to go to the next item.
 * @method prev() Allows you to go to the prev item.
 * @method gotoItem(index) Move the carousel to the target element.
 * @method onWindowRecize() Allows you to manage the responsive.
 * @method createNavigation() Allows you to create the next and prev button.
 */
class Carousel {
	/**
	 * Create a Carousel.
	 * @param {HTMLElement} element
	 * @param {Object} options
	 * @param {Object} [options.slideToScroll=1] Number of elements to scroll.
	 * @param {Object} [options.slidesVisible=1] Number of elements visible in a slide.
	 * @param {Object} [options.loop=False] Must we loop at the end of the carousel.
	 *
	 */
	constructor(element, options = {}) {
		this.element = element;
		this.options = Object.assign(
			{},
			{
				slideToScroll: 1,
				slidesVisible: 1,
				loop: false,
			},
			options,
		);
		this.container = this.element.parentElement;
		this.items = [].slice.call(this.element.children);
		this.isMobile = false;
		this.currentItem = 0;

		// dom modification
		this.container.setAttribute('tabindex', '0');
		this.setStyle();
		this.createNavigation();

		// event
		this.onWindowRecize();
		window.addEventListener('resize', this.onWindowRecize.bind(this));
		this.container.addEventListener('keyup', e => {
			if (e.key === 'ArrowRight' || e.key === 'Right') {
				this.next();
			} else if (e.key === 'ArrowLeft' || e.key === 'Right') {
				this.prev();
			}
		});
	}

	/**
	 * Apply the correct dimensions to the elements of the carousel.
	 */
	setStyle() {
		let ratio = this.items.length / this.slidesVisible;
		this.element.style.width = ratio * 100 + '%';
		this.items.forEach(
			item => (item.style.width = 100 / this.slidesVisible / ratio + '%'),
		);
	}

	/**
	 * Allows you to go to the next item.
	 */
	next() {
		this.gotoItem(this.currentItem + this.slideToScroll);
	}

	/**
	 * Allows you to go to the prev item.
	 */
	prev() {
		this.gotoItem(this.currentItem - this.slideToScroll);
	}

	/**
	 * Move the carousel to the target element.
	 * @param {number} index Target element.
	 * @returns
	 */
	gotoItem(index) {
		if (index < 0) {
			if (this.options.loop) {
				index = this.items.length - this.slidesVisible;
			} else {
				return;
			}
		} else if (
			index >= this.items.length ||
			(this.items[this.currentItem + this.slidesVisible] === undefined &&
				index > this.currentItem)
		) {
			if (this.options.loop) {
				index = 0;
			} else {
				return;
			}
		}
		let translateX = (index * -100) / this.items.length;
		this.element.style.transform = 'translateX(' + translateX + '%)';
		this.currentItem = index;
	}

	/**
	 * Allows you to manage the responsive.
	 */
	onWindowRecize() {
		let mobile = window.innerWidth < 600;
		if (mobile !== this.mobile) {
			this.isMobile = mobile;
			this.setStyle();
		}
	}

	/**
	 * Allows you to create the next and prev button.
	 */
	createNavigation() {
		let nextButton = Utils.createDivWithClass('carousel-next');
		let prevButton = Utils.createDivWithClass('carousel-prev');
		let nextIcon = Utils.createIWithClass('fas fa-chevron-right');
		let prevIcon = Utils.createIWithClass('fas fa-chevron-left');

		this.container.appendChild(nextButton);
		this.container.appendChild(prevButton);
		nextButton.appendChild(nextIcon);
		prevButton.appendChild(prevIcon);

		nextButton.addEventListener('click', this.next.bind(this));
		prevButton.addEventListener('click', this.prev.bind(this));
	}

	/**
	 * getter
	 * @returns {number} Number of elements to scroll.
	 */
	get slideToScroll() {
		return this.isMobile ? 1 : this.options.slideToScroll;
	}

	/**
	 * getter
	 * @returns {number} Number of elements visible in a slide.
	 */
	get slidesVisible() {
		return this.isMobile ? 1 : this.options.slidesVisible;
	}
}
