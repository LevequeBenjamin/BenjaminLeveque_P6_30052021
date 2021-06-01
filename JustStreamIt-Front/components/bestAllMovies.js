const bestAllMoviesUrl =
	'http://localhost:8000/api/v1/titles/?imdb_score_min=9.4';
const bestAllContainer = document.getElementById('best-allMovies-container');

showBestAllMovies = async bestAllMoviesUrl => {
	let bestAllMoviesArr = new Array();
	bestAllMoviesFound = new FetchMovies(bestAllMoviesUrl);
	await bestAllMoviesFound.getAllMovies();

	for (bestAllMovieFound of bestAllMoviesFound.movies) {
		bestAllMovieDetail = new FetchOneMovie(bestAllMovieFound.url);
		await bestAllMovieDetail.getMovie();
		movie = MovieConstructor.movieConstructor(bestAllMovieDetail.movieFound);
		bestAllMoviesArr.push(movie);
	}
	ShowMovies.showMovies(bestAllContainer, bestAllMoviesArr);
};

showBestAllMovies(bestAllMoviesUrl);
