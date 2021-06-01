class ComponentBestMovie {
	/**
	 *
	 * @param {string} url the url of a movie category
	 * @param {HTMLElement} container the url of the best movies
	 */
	static componentMovie = async (url, container) => {
		let movieFound = new FetchMovies(url);
		await movieFound.getBestMovie();
		let movieDetail = new FetchOneMovie(movieFound.movies[0].url);
		await movieDetail.getMovie();
		let movie = MovieConstructor.movieConstructor(movieDetail.movieFound);
		ShowMovies.showMovie(container, movie);
	};
}

class ComponentCategoryMovies {
	/**
	 *
	 * @param {string} url the url of a movie category
	 * @param {HTMLElement} container
	 */
	static componentMovies = async (url, container) => {
		let moviesArr = new Array();
		let moviesFound = new FetchMovies(url);
		await moviesFound.getAllMovies();

		for (let movieFound of moviesFound.movies) {
			let movieDetail = new FetchOneMovie(movieFound.url);
			await movieDetail.getMovie();
			let movie = MovieConstructor.movieConstructor(movieDetail.movieFound);
			moviesArr.push(movie);
		}

		ShowMovies.showMovies(container, moviesArr);
	};
}
