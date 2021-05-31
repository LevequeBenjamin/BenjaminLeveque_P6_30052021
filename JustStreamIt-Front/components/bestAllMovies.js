const bestAllMoviesUrl =
	'http://localhost:8000/api/v1/titles/?imdb_score_min=9.4';
const bestAllContainer = document.getElementById('best-allMovies-container');

let bestAllMoviesFound;
let bestAllMoviesFoundArr = [];
let bestAllMovies;

const fetchBestAllMovies = async bestAllMoviesUrl => {
	bestAllMoviesFound = await fetch(bestAllMoviesUrl)
		.then(res => res.json())
		.catch(err => console.log(err));
};

const getBestAllMovies = async () => {
	await fetchBestAllMovies(bestAllMoviesUrl);
	for (movie of bestAllMoviesFound.results) {
		bestAllMoviesFoundArr.push(movie);
	}
	if (bestAllMoviesFound.next) {
		await fetchBestAllMovies(bestAllMoviesFound.next);
		for (movie of bestAllMoviesFound.results) {
			bestAllMoviesFoundArr.push(movie);
		}
	}
	let moviesArr = Object.keys(bestAllMoviesFoundArr).map(
		i => bestAllMoviesFoundArr[i],
	);
	bestAllMovies = moviesArr.sort((a, b) => {
		return b.votes - a.votes;
	});
	bestAllMovies.length = 7;
	console.log(bestAllMovies);
};

showBestAllMovie = async () => {
	await getBestAllMovies();
	bestAllContainer.innerHTML = bestAllMovies.map(
		bestAllMovie =>
			`
			<li class="bestMovie-item">
				<img class="bestMovie-img" src="${bestAllMovie.image_url}" />
			</li>
			`,
	);
};

showBestAllMovie();
