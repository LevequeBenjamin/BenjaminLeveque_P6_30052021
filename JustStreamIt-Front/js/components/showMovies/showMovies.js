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
            <div class="movie-item carousel-item ${movie.movie_id}">
              <img class="movie-img" src="${movie.image_url}" alt="${movie.title} picture"/>
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
          <div class="movie-container">
            <img class="movie-img" src="${movie.image_url}" alt="${movie.title} picture"/>
            <div class="movie-description"/>
              <h2>${movie.title}</h2>
              <h3>${movie.description}</h3>
              <div class="movie-description-display">
                <h3><span class="modal-legende">Genres : </span>${movie.genres}</h3>
                <h3><span class="modal-legende">Date de sortie : </span>${movie.date_published}</h3>
                <h3><span class="modal-legende">Distribution : </span>${movie.actors}</h3>
                <h3><span class="modal-legende">Durée : </span>${movie.duration}min</h3>
              </div>
            </div>
          </div>
          <div class="modal">
                <div class="modal-content">
                    <div class="modal-img-container">
                      <img class="modal-img" src="${movie.image_url}" alt="${movie.title} picture"/>
                    </div>
                    <div class="modal-infos">
                      <h2>${movie.title}</h2>
                      <h3>${movie.description}</p>
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
        </div>
        `;
	};
}
