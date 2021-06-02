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
		this.children = this.element.children;
		//let ratio = this.children.length / this.options.slidesVisible
		
		//this.element.style.width = (ratio * 100) + "%" 
		console.log(this.children)
		console.log(this.children.length)
		
	}
}

document.addEventListener('DOMContentLoaded', async event => {
	let carousel = document.getElementById('bestAllMovies');
	new Carousel(carousel, {
		slideToScroll: 1,
		slidesVisible: 4,
	});
});
