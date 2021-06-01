const fantasyUrl =
	'http://localhost:8000/api/v1/titles/?imdb_score_min=8.6&genre=Fantasy';
const fantasyContainer = document.getElementById('category-fantasy-container');

showFantasyMovies = async fantasyUrl => {
	let fantasyMoviesArr = new Array();
	fantasyMoviesFound = new FetchMovies(fantasyUrl);
	await fantasyMoviesFound.getAllMovies();

	for (fantasyMovieFound of fantasyMoviesFound.movies) {
		fantasyMovieDetail = new FetchOneMovie(fantasyMovieFound.url);
		await fantasyMovieDetail.getMovie();
		movie = MovieConstructor.movieConstructor(fantasyMovieDetail.movieFound);
		fantasyMoviesArr.push(movie);
	}

	ShowMovies.showMovies(fantasyContainer, fantasyMoviesArr);
};

showFantasyMovies(fantasyUrl);
