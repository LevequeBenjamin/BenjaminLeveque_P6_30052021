const misteryUrl =
	'http://localhost:8000/api/v1/titles/?imdb_score_min=8.8&genre=Mystery';
const misteryContainer = document.getElementById('category-mistery-container');

let misteryMoviesFound;
let misteryMoviesFoundArr = [];
let misteryMovies;

const fetchMisteryMovies = async misteryUrl => {
	misteryMoviesFound = await fetch(misteryUrl)
		.then(res => res.json())
		.catch(err => console.log(err));
};

const getMisteryMovies = async () => {
	await fetchMisteryMovies(misteryUrl);
	for (movie of misteryMoviesFound.results) {
		misteryMoviesFoundArr.push(movie);
	}
	if (misteryMoviesFound.next) {
		await fetchMisteryMovies(misteryMoviesFound.next);
		for (movie of misteryMoviesFound.results) {
			misteryMoviesFoundArr.push(movie);
		}
	}
	let moviesArr = Object.keys(misteryMoviesFoundArr).map(
		i => misteryMoviesFoundArr[i],
	);
	misteryMovies = moviesArr.sort((a, b) => {
		return b.votes - a.votes;
	});
	misteryMovies.length = 7;
  console.log(misteryMovies)
};

showMisteryMovie = async () => {
	await getMisteryMovies();
	misteryContainer.innerHTML = misteryMovies.map(
		misteryMovie =>
			`
          <li class="bestMovie-item">
            <img class="bestMovie-img" src="${misteryMovie.image_url}" />
          </li>
          
          `,
	);
};

showMisteryMovie();
