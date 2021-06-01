class FetchMovies {
	constructor(url) {
		this.moviesFound;
		this.url = url;
		this.movies = new Array();
	}

	fetchAllMovies = async url => {
		this.moviesFound = await fetch(url)
			.then(res => res.json())
			.catch(err => console.log(err));
	};

  getBestMovie = async () => {
    await this.fetchAllMovies(this.url);
    let moviesArr = Object.keys(this.moviesFound.results).map(
      i => this.moviesFound.results[i],
    );
    this.movies = moviesArr.sort((a, b) => {
      return b.votes - a.votes;
    });
    this.movies.length = 1;
  };

	getAllMovies = async () => {
		await this.fetchAllMovies(this.url);
		for (let movie of this.moviesFound.results) {
			this.movies.push(movie);
		}
		if (this.moviesFound.next) {
			await this.fetchAllMovies(this.moviesFound.next);
			for (let movie of this.moviesFound.results) {
				this.movies.push(movie);
			}
		}
		let moviesArr = Object.keys(this.movies).map(i => this.movies[i]);
		this.movies = moviesArr.sort((a, b) => {
			return b.votes - a.votes;
		});
		this.movies.length = 7;
	};
}
