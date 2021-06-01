class ShowMovies {
	static showMovies(container, moviesArr) {
		container.innerHTML = moviesArr.map(
			movie =>
				`
            <li class="bestMovie-item">
              <img class="bestMovie-img" src="${movie.image_url}" />
            </li>
            
            `,
		);
	}

  static showMovie(container, movie){
    container.innerHTML = `
        <li class="bestMovie-item">
          <img class="bestMovie-img" src="${movie.image_url}" />
        </li>
        
        `;
  }
}
