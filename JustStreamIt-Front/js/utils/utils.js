class Utils {
	/**
	 *
	 * @param {string} className
	 * @returns {HTMLElement}
	 */
	static createDivWithClass(className) {
		let div = document.createElement('div');
		div.setAttribute('class', className);
		return div;
	}
}
