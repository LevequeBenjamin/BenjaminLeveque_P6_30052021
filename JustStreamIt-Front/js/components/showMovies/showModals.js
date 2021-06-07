/**
 * Contains the class ShowModals.
 */

/**
 * Class representating a HTMLElement of modal.
 * @method showModals(container,movieArr) This method is used to dynamically insert content into a page.
 */
class ShowModals {
	/**
	 * This method is used to dynamically insert content into a page.
	 * @param {HTMLElement} container
	 * @param {Array} moviesArr Contains a Movie instance array.
	 * @static
	 */
	static showModals = (container, moviesArr) => {
		container.innerHTML = moviesArr
			.map(
				movie => `
              <div class="modal ${movie.movie_id}">
                <div class="modal-content">
                    <div class="modal-img-container">
                      <img class="modal-img" src="${movie.image_url}" alt="${movie.title} picture"/>
                    </div>
                    <div class="modal-infos">
                      <h2>${movie.title}</h2>
                      <h3>${movie.description}</h3>
                      <h3><span class="modal-legende">Genres : </span>${movie.genres}</h3>
                      <h3><span class="modal-legende">Date de sortie : </span>${movie.date_published}</h3>
                      <h3><span class="modal-legende">Score Imbd : </span>${movie.imdb_score}</h3>
                      <h3><span class="modal-legende">Créateurs : </span>${movie.directors}</h3>
                      <h3><span class="modal-legende">Distribution : </span>${movie.actors}</h3>
                      <h3><span class="modal-legende">Durée : </span>${movie.duration}min</h3>
                      <h3><span class="modal-legende">Pays d'origine : </span>${movie.countries}</h3>
                      <h3><span class="modal-legende">Résultats au Box Office : </span>${movie.reviews_from_critics}</h3>
                    </div>
                    <span class="far fa-times-circle close"></span>
                </div>
              </div> 
            `,
			)
			.join(' ');
	};
}
