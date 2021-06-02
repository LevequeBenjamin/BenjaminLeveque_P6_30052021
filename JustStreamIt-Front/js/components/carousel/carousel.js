class Carousel {
	constructor(element, options = {}) {
		this.element = element;
		this.options = Object.assign(
			{},
			{
				slideToScroll: 1,
				slidesVisible: 1,
			},
			options,
		);
		this.children = [].slice.call(this.element.children);
		this.setStyle();
	}

	setStyle() {
		let ratio = this.children.length / this.options.slidesVisible;
		this.element.style.width = ratio * 100 + '%';
		for (let item of this.children) {
			item.style.width = 100 / this.options.slidesVisible / ratio +"%";
		}
		// this.children.forEach(
		// 	item => (item.style.width = 100 / this.options.slidesVisible / ratio),
		// );
	}
}
