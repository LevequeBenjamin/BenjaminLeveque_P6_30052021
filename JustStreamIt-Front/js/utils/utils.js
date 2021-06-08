/**
 * Contains the class utils.
 */

/**
 * Class representating a utils.
 * @method createDivWithClass(className) Allows you to create an HTMLElement class.
 * @method createIWithClass(className) Allows you to create an HTMLElement i.
 */
class Utils {
	/**
	 * Allows you to create an HTMLElement class.
	 * @param {string} className
	 * @returns {HTMLElement} div
	 * @static
	 */
	static createDivWithClass(className) {
		let div = document.createElement('div');
		div.setAttribute('class', className);
		return div;
	}

	/**
	 * Allows you to create an HTMLElement i.
	 * @param {string} className
	 * @returns {HTMLElement} i
	 * @static
	 */
	static createIWithClass(className) {
		let i = document.createElement('i');
		i.setAttribute('class', className);
		return i;
	}
}
