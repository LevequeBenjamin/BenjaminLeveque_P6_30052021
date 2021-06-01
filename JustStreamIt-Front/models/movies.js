class Movie {
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
		reviews_from_critics,
		description,
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

class MovieConstructor {
	static movieConstructor(movieFound) {
		let movie = new Movie(
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
			movieFound.reviews_from_critics,
			movieFound.description,
		);
		return movie;
	}
}

