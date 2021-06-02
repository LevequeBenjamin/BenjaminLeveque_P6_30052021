/**
 * fetchMovies.js
 *
 * Objects:
 * 		class FetchMovies
 */

/**
 * FetchMovies
 *
 * Methods:
 * 	fetchAllMovies:
 * 			The fetch() method returns a promise (an object of type Promise)
 *  	which will resolve with a Response object
 * 	getBestMovie:
 * 			This method returns the best movie of all best movies.
 * 	getAllMovies:
 * 			This method returns the 7 best films of a category.
 */
class FetchMovies {
	/**
	 *	Constructor.
	 *
	 * @param {string} url the url of movies category or best movies.
	 */
	constructor(url) {
		this.moviesFound;
		this.url = url;
		this.movies = new Array();
	}

	/**
	 *
	 * The fetch() method returns a promise (an object of type Promise)
	 *  which will resolve with a Response object.
	 *
	 * @param {string} url
	 */
	fetchMovies = async url => {
		this.moviesFound = await fetch(url)
			.then(res => res.json())
			.catch(err => console.log(err));
	};

	/**
	 *	This method returns the best movie of all best movies.
	 */
	getBestMovie = async () => {
		await this.fetchMovies(this.url);
		let moviesArr = Object.keys(this.moviesFound.results).map(
			i => this.moviesFound.results[i],
		);
		this.movies = moviesArr.sort((a, b) => {
			return b.votes - a.votes;
		});
		this.movies.length = 1;
	};

	/**
	 * This method returns the 7 best films of a category.
	 */
	getAllMovies = async () => {
		await this.fetchMovies(this.url);
		for (let movie of this.moviesFound.results) {
			this.movies.push(movie);
		}
		if (this.moviesFound.next) {
			await this.fetchMovies(this.moviesFound.next);
			for (let movie of this.moviesFound.results) {
				this.movies.push(movie);
			}
		}
		let moviesArr = Object.keys(this.movies).map(i => this.movies[i]);
		this.movies = moviesArr.sort((a, b) => {
			return b.votes - a.votes;
		});
		this.movies.length = 7;
	};

	/**
	 * This method this calls the fetchmovies method.
	 */
	getMovie = async () => {
		await this.fetchMovies(this.url);
	};
}
