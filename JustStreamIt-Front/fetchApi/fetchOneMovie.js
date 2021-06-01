class FetchOneMovie {
	constructor(url) {
		this.movieFound;
		this.url = url;
	}

	fetchOneMovie = async () => {
		this.movieFound = await fetch(this.url)
			.then(res => res.json())
			.catch(err => console.log(err));
	};

	getMovie = async () => {
    await this.fetchOneMovie();
  };
}
