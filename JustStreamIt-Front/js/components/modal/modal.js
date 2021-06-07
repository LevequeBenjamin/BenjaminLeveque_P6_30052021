/**
 * Contains the class Modal.
 */

/**
 * Class representating a modal.
 * @method openBestModal(e) Allows you to switch the display style of the target bestModal to 'block'.
 * @method openModal(e) Allows you to switch the display style of the target modal to 'block'.
 * @method closeBestMovieModal(e) Allows you to switch the display style of the target bestModal to 'none'.
 * @method closeModal(e) Allows you to switch the display style of the target modal to 'none'.
 * @method btnModal() Listen to the modal btn HTMLElement and launch the openBestModal method.
 * @method container() Listen to the modal btn HTMLElement and launch the openModal method.
 */
class Modal {
	/**
	 * Create a modal.
	 */
	constructor() {
		this.container();
		this.btnModal();
	}

	/**
	 *	Allows you to switch the display style of the target bestModal to 'block'.
	 * @param {HTMLElement} e The target modal.
	 */
	openBestModal = e => {
		e.preventDefault();
		let target = e.target;
		if (target === null) return;

		let modalBestMovie =
			document.getElementById('bestMovie').childNodes[1].childNodes[3];
		this.modalBestMovie = modalBestMovie;

		modalBestMovie.style.display = 'block';
		this.modalBestMovie = modalBestMovie;
		this.modalBestMovie.addEventListener('click', this.closeBestMovieModal);
	};

	/**
	 * Allows you to switch the display style of the target modal to 'block'.
	 * @param {HTMLElement} e The target modal.
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
	 * Allows you to switch the display style of the target bestModal to 'none'.
	 * @param {HTMLElement} e The target modal.
	 */
	closeBestMovieModal = e => {
		e.preventDefault();
		this.modalBestMovie.style.display = 'none';
	};

	/**
	 * Allows you to switch the display style of the target modal to 'none'.
	 * @param {HTMLElement} e The target modal.
	 */
	closeModal = e => {
		e.preventDefault();
		this.modal.style.display = 'none';
	};

	/**
	 * Listen to the modal btn HTMLElement and launch the openBestModal method.
	 */
	btnModal = () => {
		document
			.getElementById('btn-modal')
			.addEventListener('click', this.openBestModal);
	};

	/**
	 * Listen to the modal btn HTMLElement and launch the openModal method.
	 */
	container = () => {
		document.querySelectorAll('.categoryContainer .wrap').forEach(container => {
			container.addEventListener('click', this.openModal);
		});
	};
}
