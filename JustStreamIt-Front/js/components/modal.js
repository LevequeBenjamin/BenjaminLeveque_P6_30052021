
<div class="modal">
            <div class="modal-content">
                <div class="modal-img">
                  <img class="bestMovie-img" src="${movie.image_url}" />
                </div>
                <div class="modal-infos">
                  <h2>${movie.title}</h2>
                  <p>${movie.description}</p>
                  <p><span class="modal-legende">Genres : </span>${movie.genres}</p>
                  <p>${movie.date_published}</p>
                  <p>${movie.imdb_score}</p>
                  <p>${movie.directors}</p>
                  <p><span class="modal-legende">Distribution : </span>Distribution${movie.actors}</p>
                  <p>${movie.duration}</p>
                  <p>${movie.countries}</p>
                  <p>${movie.reviews_from_critics}</p>
                </div>
                <span class="far fa-times-circle close"></span>
            </div>
          </div>