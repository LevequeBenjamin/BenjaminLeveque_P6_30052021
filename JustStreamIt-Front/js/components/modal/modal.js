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
		this.btnModal();
	}

	/**
	 *
	 * @param {*} e
	 * @returns
	 */
	openBestModal = e => {
		e.preventDefault();
		let target = e.target;
		if (target === null) return;
		
		let modalBestMovie = document.getElementById("bestMovie").childNodes[1].childNodes[3]
		this.modalBestMovie = modalBestMovie

		modalBestMovie.style.display = 'block';
		this.modalBestMovie = modalBestMovie
		this.modalBestMovie.addEventListener('click', this.closeBestMovieModal);
			
	
	};

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
	 closeBestMovieModal = e => {
		e.preventDefault();
		this.modalBestMovie.style.display = 'none';
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
	btnModal = () => {
		document
			.getElementById('btn-modal')
			.addEventListener('click', this.openBestModal);
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
