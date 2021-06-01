class ShowMovies {
	/**
	 *
	 * @param {*} container
	 * @param {*} moviesArr
	 */
	static showMovies(container, moviesArr) {
		container.innerHTML = moviesArr
			.map(
				movie =>
					`
            <div class="bestMovie-item">
              <img class="bestMovie-img" src="${movie.image_url}" />
            </div>  
            `,
			)
			.join('');
	}

	/**
	 *
	 * @param {*} container
	 * @param {*} movie
	 */
	static showMovie(container, movie) {
		container.innerHTML = `
        <div id="${movie.id}" class="bestMovie-item">
          <img class="bestMovie-img" src="${movie.image_url}" />
        </div>
        `;
	}
}
