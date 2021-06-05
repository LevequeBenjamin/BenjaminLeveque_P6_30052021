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

	static createIWithClass(className) {
		let i = document.createElement('i');
		i.setAttribute('class', className);
		return i;
	}
}
