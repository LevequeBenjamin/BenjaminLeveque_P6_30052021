const adventureUrl =
	'http://localhost:8000/api/v1/titles/?imdb_score_min=8.8&genre=Adventure';
const adventureContainer = document.getElementById(
	'category-adventure-container',
);

showAdventureMovies = async adventureUrl => {
	let adventureMoviesArr = new Array();
	adventureMoviesFound = new FetchMovies(adventureUrl);
	await adventureMoviesFound.getAllMovies();

	for (adventureMovieFound of adventureMoviesFound.movies) {
		adventureMovieDetail = new FetchOneMovie(adventureMovieFound.url);
		await adventureMovieDetail.getMovie();
		movie = MovieConstructor.movieConstructor(adventureMovieDetail.movieFound);
		adventureMoviesArr.push(movie);
	}

	ShowMovies.showMovies(adventureContainer, adventureMoviesArr);
};

showAdventureMovies(adventureUrl);
