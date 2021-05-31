const bestMovieUrl = 'http://localhost:8000/api/v1/titles/?imdb_score_min=9.6';
const bestMovieContainer = document.getElementById('best-movie-container');

let bestMoviesFound;
let bestMovies;
const fetchBestMovies = async () => {
	bestMoviesFound = await fetch(bestMovieUrl)
		.then(res => res.json())
		.catch(err => console.log(err));
};

const getBestMovie = async () => {
	await fetchBestMovies();
  console.log(bestMoviesFound)
	let moviesArr = Object.keys(bestMoviesFound.results).map(
		i => bestMoviesFound.results[i],
	);
	bestMovies = moviesArr.sort((a, b) => {
		return b.votes - a.votes;
	});
	bestMovies.length = 1;
};

showBestMovie = async () => {
	await getBestMovie();
	bestMovieContainer.innerHTML = `
        <li class="bestMovie-item">
          <img class="bestMovie-img" src="${bestMovies[0].image_url}" />
        </li>
        
        `;
};

showBestMovie();
