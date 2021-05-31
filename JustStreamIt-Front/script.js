const bestMovieUrl = 'http://localhost:8000/api/v1/titles/?imdb_score_min=9.6';

const fantasyUrl =
	'http://localhost:8000/api/v1/titles/?imdb_score_min=8.6&genre=Fantasy';

const misteryUrl =
	'http://localhost:8000/api/v1/titles/?imdb_score_min=8.8&genre=Mystery';

const adventureUrl =
	'http://localhost:8000/api/v1/titles/?imdb_score_min=8.8&genre=Adventure';

fetchBestMovie = new FetchMovies(bestMovieUrl);
fetchFantasyMovies = new FetchMovies(fantasyUrl);
fetchMisteryMovies = new FetchMovies(misteryUrl);
fetchAdventureMovies = new FetchMovies(adventureUrl);

console.log(fetchBestMovie.movies)
class ShowBestMovie {
	constuctor(fetchBestMovie) {
		this.bestMovie = fetchBestMovie;
		this.showBestMovie();
	}

	showBestMovie = async () => {
		best_movie_container.innerHTML = `
      <li class="bestMovie-item">
        <img class="bestMovie-img" src="${this.bestMovie.image_url}" />
      </li>
      
      `;
	};
}

//show = new ShowBestMovie(fetchBestMovie.movies);
//show.showBestMovie()
