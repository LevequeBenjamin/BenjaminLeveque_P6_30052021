/**
 *
 */

/**
 *
 */
class Modal {
	/**
	 *
	 */
	constructor() {
		this.container();
	}

	/**
	 *
	 * @param {*} e
	 * @returns
	 */
	openModal = e => {
		e.preventDefault();
		let target = e.target.nextSibling.nextSibling;
		if (target === null) return;
		//let targetParent = target.parentElement.parentElement;
		//targetParent.style.transform = '';
		target.style.display = 'block';
		this.modal = target;
		this.modal.addEventListener('click', this.closeModal);
	};
	/**
	 *
	 * @param {*} e
	 */
	closeModal = e => {
		e.preventDefault();
		this.modal.style.display = 'none';
	};

	/**
	 *
	 */
	container = () => {
		document.querySelectorAll('.categoryContainer .wrap').forEach(container => {
			container.addEventListener('click', this.openModal);
		});
	};
}
