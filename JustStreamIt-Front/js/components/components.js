/**
 * component.js
 *
 * Objects:
 * 		class ComponentBestMovie.
 * 		class ComponentCategoryMovies.
 *
 */

/**
 *	ComponentBestMovie.
 *
 *	Methods:
 *		static componentMovie:
 *			This method is the controller for creating a component best movie.
 */
class ComponentBestMovie {
	/**
	 *	 This method is the controller for creating a component best movie.
	 *  The movie information is retrieved with the Fetchmovies and FetchOneMovie objects,
	 *  a Movie object is constructed and passed as an argument of the Shomovies static
	 *  method to create the component in HTML.
	 * @param {string} url the url of the bests moovies
	 * @param {HTMLElement} container
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
 *	ComponentCategoryMovies.
 *
 *	Methods:
 *		static componentMovies:
 *			This method is the controller for creating a component category.
 */
class ComponentCategoryMovies {
	/**
	 * This method is the controller for creating a component category.
	 *  The movies informations is retrieved with the Fetchmovies and FetchOneMovie objects,
	 *  a Movie object is constructed and passed as an argument of the Shomovies static
	 *  method to create the component in HTML.
	 *
	 * @param {string} url the url of movies category.
	 * @param {HTMLElement} container
	 */
	static componentMovies = async (url, container) => {
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
		//let carousel = document.getElementById(container);
		new Carousel(container, {
			slideToScroll: 1,
			slidesVisible: 4,
		});
	
	};
}
