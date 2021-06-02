// const best Movie
const bestMovieUrl = 'http://localhost:8000/api/v1/titles/?imdb_score_min=9.6';
const bestMovieContainer = document.getElementById('bestMovie');

// const best Movies
const bestAllMoviesUrl =
	'http://localhost:8000/api/v1/titles/?imdb_score_min=9.4';
const bestAllContainer = document.getElementById('bestAllMovies');

// const adventure Movies
const adventureUrl =
	'http://localhost:8000/api/v1/titles/?imdb_score_min=8.8&genre=Adventure';
const adventureContainer = document.getElementById('categoryAdventure');

// const fantasy Movies
const fantasyUrl =
	'http://localhost:8000/api/v1/titles/?imdb_score_min=8.6&genre=Fantasy';
const fantasyContainer = document.getElementById('categoryFantasy');

// const mistery Movies
const misteryUrl =
	'http://localhost:8000/api/v1/titles/?imdb_score_min=8.8&genre=Mystery';
const misteryContainer = document.getElementById('categoryMistery');

ComponentBestMovie.componentMovie(bestMovieUrl, bestMovieContainer);
ComponentCategoryMovies.componentMovies(bestAllMoviesUrl, bestAllContainer);
ComponentCategoryMovies.componentMovies(adventureUrl, adventureContainer);
ComponentCategoryMovies.componentMovies(fantasyUrl, fantasyContainer);
ComponentCategoryMovies.componentMovies(misteryUrl, misteryContainer);

new Modal();
