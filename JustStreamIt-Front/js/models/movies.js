/**
 * Contains the class movie and movieConstructor.
 */

/**
 * Class representating a movie.
 */
class Movie {
	/**
	 * Create a movie.
	 * @param {number} movie_id
	 * @param {string} image_url
	 * @param {string} title
	 * @param {Array} genres
	 * @param {string} date_published
	 * @param {number} rated
	 * @param {number} imdb_score
	 * @param {Array} directors
	 * @param {Array} actors
	 * @param {number} duration
	 * @param {string} countries
	 * @param {string} description
	 * @param {number} reviews_from_critics
	 */
	constructor(
		movie_id,
		image_url,
		title,
		genres,
		date_published,
		rated,
		imdb_score,
		directors,
		actors,
		duration,
		countries,
		description,
		reviews_from_critics = 'Pas de résultats',
	) {
		this.movie_id = movie_id;
		this.image_url = image_url;
		this.title = title;
		this.genres = genres;
		this.date_published = date_published;
		this.rated = rated;
		this.imdb_score = imdb_score;
		this.directors = directors;
		this.actors = actors;
		this.duration = duration;
		this.countries = countries;
		this.reviews_from_critics = reviews_from_critics;
		this.description = description;
	}
}

/**
 * Class representating a movieConstructor.
 * @method movieConstructor(movieFound) Allowing to build an instance movie.
 */
class MovieConstructor {
	/**
	 * Create a MovieConstructor.
	 * @param {Promise} movieFound Promise object represents a movie.
	 * @returns {Object} movie An instance of movie.
	 * @static
	 */
	static movieConstructor(movieFound) {
		let movie;
		if (!movieFound.reviews_from_critics) {
			movie = new Movie(
				movieFound.id,
				movieFound.image_url,
				movieFound.title,
				movieFound.genres,
				movieFound.date_published,
				movieFound.rated,
				movieFound.imdb_score,
				movieFound.directors,
				movieFound.actors,
				movieFound.duration,
				movieFound.countries,
				movieFound.description,
			);
		} else {
			movie = new Movie(
				movieFound.id,
				movieFound.image_url,
				movieFound.title,
				movieFound.genres,
				movieFound.date_published,
				movieFound.rated,
				movieFound.imdb_score,
				movieFound.directors,
				movieFound.actors,
				movieFound.duration,
				movieFound.countries,
				movieFound.description,
				movieFound.reviews_from_critics,
			);
		}
		return movie;
	}
}
