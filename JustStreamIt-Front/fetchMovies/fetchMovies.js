class FetchError extends Error {
	constructor(orig) {
		super();
		this.message = 'fetch error';
		this.details = orig;
	}
}

class FetchMovies {
	constructor(url) {
		this.url = url;
		this.get_movies();
		this.movies = [];
		this.bestMovies = this.get_best_movie();
		this.sevenMovies = this.get_seven_best_movie();
		this.get_seven_best_movie();
	}

	get_movies = async () => {
		await fetch(this.url)
			.then(res => {
				res.json().then(data => {
					for (let movieFetch of data.results) {
						this.movies.push(movieFetch);
					}
				});
			})
			.catch(err => new FetchError(err));
	};

	get_best_movie() {
		console.log(this.movies);
		const moviesArr = Object.keys(this.movies).map(i => this.movies[i]);
		let sortedArray = moviesArr.sort((a, b) => {
			return b.votes - a.votes;
		});
		sortedArray.length = 1;
		return sortedArray;
	}

	get_seven_best_movie() {
		const moviesArr = Object.keys(this.movies).map(i => this.movies[i]);
		let sortedArray = moviesArr.sort((a, b) => {
			return b.votes - a.votes;
		});
		sortedArray.length = 7;
		return sortedArray;
	}
}
