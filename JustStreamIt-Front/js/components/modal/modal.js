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
		let target = e.target;
		if (target === null) return;
		let modalsContainer =
			target.parentElement.parentElement.parentElement.nextSibling.nextSibling;
		let modals = [].slice.call(modalsContainer.children);

		modals.forEach(modal => {
			if (modal.childNodes[1].children[0].childNodes[1].src === target.src) {
				modal.style.display = 'block';
				this.modal = modal;
				this.modal.addEventListener('click', this.closeModal);
			}
		});
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
