/**
 *
 */

/**
 *
 */
class Carousel {
	/**
	 *
	 * @param {*} element
	 * @param {*} options
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
	 *
	 */
	setStyle() {
		let ratio = this.items.length / this.slidesVisible;
		this.element.style.width = ratio * 100 + '%';
		this.items.forEach(
			item => (item.style.width = 100 / this.slidesVisible / ratio + '%'),
		);
	}

	/**
	 *
	 */
	next() {
		this.gotoItem(this.currentItem + this.slideToScroll);
	}

	/**
	 *
	 */
	prev() {
		this.gotoItem(this.currentItem - this.slideToScroll);
	}

	/**
	 *
	 * @param {*} index
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
	 *
	 */
	onWindowRecize() {
		let mobile = window.innerWidth < 600;
		if (mobile !== this.mobile) {
			this.isMobile = mobile;
			this.setStyle();
		}
	}

	/**
	 *
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
	 */
	get slideToScroll() {
		return this.isMobile ? 1 : this.options.slideToScroll;
	}

	/**
	 * getter
	 */
	get slidesVisible() {
		return this.isMobile ? 1 : this.options.slidesVisible;
	}
}
