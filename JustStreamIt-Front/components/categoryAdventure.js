const adventureUrl =
	'http://localhost:8000/api/v1/titles/?imdb_score_min=8.8&genre=Adventure';
const adventureContainer = document.getElementById(
	'category-adventure-container',
);

let adventureMoviesFound;
let adventureMoviesFoundArr = [];
let adventureMovies;

const fetchAdventureMovies = async adventureUrl => {
	adventureMoviesFound = await fetch(adventureUrl)
		.then(res => res.json())
		.catch(err => console.log(err));
};

const getAdventureMovies = async () => {
	await fetchAdventureMovies(adventureUrl);
	for (movie of adventureMoviesFound.results) {
		adventureMoviesFoundArr.push(movie);
	}
	if (adventureMoviesFound.next) {
		await fetchAdventureMovies(adventureMoviesFound.next);
		for (movie of adventureMoviesFound.results) {
			adventureMoviesFoundArr.push(movie);
		}
	}
	let moviesArr = Object.keys(adventureMoviesFoundArr).map(
		i => adventureMoviesFoundArr[i],
	);
	adventureMovies = moviesArr.sort((a, b) => {
		return b.votes - a.votes;
	});
	adventureMovies.length = 7;
  console.log(adventureMovies)
};

showAdventureMovie = async () => {
	await getAdventureMovies();
	adventureContainer.innerHTML = adventureMovies.map(
		adventureMovie =>
			`
        <li class="bestMovie-item">
          <img class="bestMovie-img" src="${adventureMovie.image_url}" />
        </li>
        
        `,
	);
};

showAdventureMovie();
