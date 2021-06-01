const misteryUrl =
	'http://localhost:8000/api/v1/titles/?imdb_score_min=8.8&genre=Mystery';
const misteryContainer = document.getElementById('category-mistery-container');

showMisteryMovies = async misteryUrl => {
	let misteryMoviesArr = new Array();
	misteryMoviesFound = new FetchMovies(misteryUrl);
	await misteryMoviesFound.getAllMovies();

	for (misteryMovieFound of misteryMoviesFound.movies) {
		misteryMovieDetail = new FetchOneMovie(misteryMovieFound.url);
		await misteryMovieDetail.getMovie();
		movie = MovieConstructor.movieConstructor(misteryMovieDetail.movieFound);
		misteryMoviesArr.push(movie);
	}

	ShowMovies.showMovies(misteryContainer, misteryMoviesArr);
};

showMisteryMovies(misteryUrl);
