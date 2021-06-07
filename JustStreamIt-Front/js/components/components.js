/**
 * Contains the class ComponentBestMovie and ComponentCategoryMovies.
 */

/**
 * Class reprentating a ComponentBestMovie.
 * @method componentMovie(url,container) This method is the controller for creating a component best movie.
 */
class ComponentBestMovie {
	/**
	 *	 This method is the controller for creating a component best movie.
	 *  The movie information is retrieved with the Fetchmovies and FetchOneMovie objects,
	 *  a Movie object is constructed and passed as an argument of the Shomovies static
	 *  method to create the component in HTML.
	 * @param {string} url The url of the bests moovies.
	 * @param {HTMLElement} container
	 * @static
	 */
	static componentMovie = async (url, container) => {
		let movieFound = new FetchMovies(url);
		await movieFound.getBestMovie();
		let movieDetail = new FetchMovies(movieFound.movies[0].url);
		await movieDetail.getMovie();
		let movie = MovieConstructor.movieConstructor(movieDetail.moviesFound);
		ShowMovies.showMovie(container, movie);
	};
}

/**
 * Class representating a ComponentCategoryMovies.
 * @method componentMovies(url,container,modalContainer) This method is the controller for creating a component category.
 */
class ComponentCategoryMovies {
	/**
	 * This method is the controller for creating a component category.
	 *  The movies informations is retrieved with the Fetchmovies and FetchOneMovie objects,
	 *  a Movie object is constructed and passed as an argument of the Shomovies static
	 *  method to create the component in HTML.
	 *
	 * @param {string} url The url of movies category.
	 * @param {HTMLElement} container
	 * @static
	 */
	static componentMovies = async (url, container, modalContainer) => {
		let moviesArr = new Array();
		let moviesFound = new FetchMovies(url);
		await moviesFound.getAllMovies();

		for (let movieFound of moviesFound.movies) {
			let movieDetail = new FetchMovies(movieFound.url);
			await movieDetail.getMovie();
			let movie = MovieConstructor.movieConstructor(movieDetail.moviesFound);
			moviesArr.push(movie);
		}

		ShowMovies.showMovies(container, moviesArr);
		ShowModals.showModals(modalContainer, moviesArr);

		new Carousel(container, {
			slideToScroll: 1,
			slidesVisible: 4,
			loop: false,
		});
	};
}
