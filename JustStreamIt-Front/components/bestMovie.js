const bestMovieUrl = 'http://localhost:8000/api/v1/titles/?imdb_score_min=9.6';
const bestMovieContainer = document.getElementById('best-movie-container');

showBestMovie = async bestMovieUrl => {
	bestMovieFound = new FetchMovies(bestMovieUrl);
	await bestMovieFound.getBestMovie();
	bestMovieDetail = new FetchOneMovie(bestMovieFound.movies[0].url);
	await bestMovieDetail.getMovie();
	movie = MovieConstructor.movieConstructor(bestMovieDetail.movieFound);
	ShowMovies.showMovie(bestMovieContainer, movie);
};

showBestMovie(bestMovieUrl);
