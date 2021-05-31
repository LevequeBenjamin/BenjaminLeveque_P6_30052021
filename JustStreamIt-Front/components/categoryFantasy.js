const fantasyUrl =
	'http://localhost:8000/api/v1/titles/?imdb_score_min=8.6&genre=Fantasy';
const fantasyContainer = document.getElementById('category-fantasy-container');

let fantasyMoviesFound;
let fantasyMoviesFoundArr = [];
let fantasyMovies;

const fetchFantasyMovies = async fantasyUrl => {
	fantasyMoviesFound = await fetch(fantasyUrl)
		.then(res => res.json())
		.catch(err => console.log(err));
};

const getFantasyMovies = async () => {
	await fetchFantasyMovies(fantasyUrl);
	for (movie of fantasyMoviesFound.results) {
		fantasyMoviesFoundArr.push(movie);
	}
	if (fantasyMoviesFound.next) {
		await fetchFantasyMovies(fantasyMoviesFound.next);
		for (movie of fantasyMoviesFound.results) {
			fantasyMoviesFoundArr.push(movie);
		}
	}
	let moviesArr = Object.keys(fantasyMoviesFoundArr).map(
		i => fantasyMoviesFoundArr[i],
	);
	fantasyMovies = moviesArr.sort((a, b) => {
		return b.votes - a.votes;
	});
	fantasyMovies.length = 7;
  console.log(fantasyMovies)
};

showFantasyMovie = async () => {
	await getFantasyMovies();
	fantasyContainer.innerHTML = fantasyMovies.map(
		fantasyMovie =>
			`
        <li class="bestMovie-item">
          <img class="bestMovie-img" src="${fantasyMovie.image_url}" />
        </li>
        
        `,
	);
};

showFantasyMovie();
