/**
 * showMovies.js
 *
 * Objects:
 * 		class ShowMovies.
 */

/**
 * ShowMovies.
 *
 * Methods:
 * 		static showMovies:
 * 			This method is used to dynamically insert content into a page.
 * 		static showMovie:
 * 			This method is used to dynamically insert content into a page.
 */
class ShowMovies {
	/**
	 *
	 * This method is used to dynamically insert content into a page.
	 *
	 * @param {HTMLElement} container
	 * @param {Array} moviesArr contains a Movie instance array
	 */
	static showMovies = (container, moviesArr) => {
		container.innerHTML = moviesArr
			.map(
				movie => `
            <div class="movie-item carousel-item">
              <img class="movie-img" src="${movie.image_url}" />
              <div class="modal">
                <div class="modal-content">
                    <div class="modal-img-container">
                      <img class="modal-img" src="${movie.image_url}" />
                    </div>
                    <div class="modal-infos">
                      <h2>${movie.title}</h2>
                      <p>${movie.description}</p>
                      <p><span class="modal-legende">Genres : </span>${movie.genres}</p>
                      <p><span class="modal-legende">Date de sortie : </span>${movie.date_published}</p>
                      <p><span class="modal-legende">Score Imbd : </span>${movie.imdb_score}</p>
                      <p><span class="modal-legende">Créateurs : </span>${movie.directors}</p>
                      <p><span class="modal-legende">Distribution : </span>${movie.actors}</p>
                      <p><span class="modal-legende">Durée : </span>${movie.duration}min</p>
                      <p><span class="modal-legende">Pays d'origine : </span>${movie.countries}</p>
                      <p><span class="modal-legende">Résultats au Box Office : </span>${movie.reviews_from_critics}</p>
                    </div>
                    <span class="far fa-times-circle close"></span>
                </div>
              </div>
            </div>  
            `,
			)
			.join(' ');
	};

	/**
	 *
	 * This method is used to dynamically insert content into a page.
	 *
	 * @param {HTMLElement} container
	 * @param {Object} movie an instance of Movie
	 */
	static showMovie = (container, movie) => {
		container.innerHTML = `
        <div class="movie-item">
          <img class="movie-img" src="${movie.image_url}" />
          <div class="modal">
                <div class="modal-content">
                    <div class="modal-img-container">
                      <img class="modal-img" src="${movie.image_url}" />
                    </div>
                    <div class="modal-infos">
                      <h2>${movie.title}</h2>
                      <p>${movie.description}</p>
                      <p><span class="modal-legende">Genres : </span>${movie.genres}</p>
                      <p><span class="modal-legende">Date de sortie : </span>${movie.date_published}</p>
                      <p><span class="modal-legende">Score Imbd : </span>${movie.imdb_score}</p>
                      <p><span class="modal-legende">Créateurs : </span>${movie.directors}</p>
                      <p><span class="modal-legende">Distribution : </span>${movie.actors}</p>
                      <p><span class="modal-legende">Durée : </span>${movie.duration}min</p>
                      <p><span class="modal-legende">Pays d'origine : </span>${movie.countries}</p>
                      <p><span class="modal-legende">Résultats au Box Office : </span>${movie.reviews_from_critics}</p>
                    </div>
                    <span class="far fa-times-circle close"></span>
                </div>
              </div>
        </div>
        `;
	};
}
