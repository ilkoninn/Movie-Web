let id = window.location.href.split("=")[1];
let details = document.querySelector(".container");

console.log(location.search);
axios.get(`https://api.tvmaze.com/shows/${id}`).then((res) => {
  let film = res.data;

  details.innerHTML = `
  <section class="row">
          <section
            id="general-information"
            class="small-12 medium-8 columns row mt-4"
          >
            <div class="d-flex justify-content-evenly">
              <aside id="main-img" class="small-5 medium-4 columns left">
                <figure>
                  <img src="${film.image.medium}" alt="The Flash" />
                </figure>
              </aside>

              <article id="white" class="ms-3" style="font-size: 18px">
                <p>${film.summary}</p>
              </article>
            </div>

            <div>
              <div class="social-buttons mt-3 mb-4">
                <span class="me-3" id="white" style="font-size: 24px;">Share this on:</span>

                <a
                  id="facebook"
                  target="_blank"
                  rel="noopener"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.tvmaze.com%2Fshows%2F13%2Fthe-flash"
                  title="facebook"
                  ><i class="fab fa-facebook-square fa-2x" id="green"></i
                ></a>
                <a
                  id="twitter"
                  target="_blank"
                  rel="noopener"
                  href="https://twitter.com/home?status=https%3A%2F%2Fwww.tvmaze.com%2Fshows%2F13%2Fthe-flash"
                  title="twitter"
                  ><i class="fab fa-twitter-square fa-2x" id="green"></i
                ></a>
                <a
                  id="reddit"
                  target="_blank"
                  rel="noopener"
                  href="//www.reddit.com/submit?url=https%3A%2F%2Fwww.tvmaze.com%2Fshows%2F13%2Fthe-flash"
                  title="reddit"
                  ><i class="fab fa-reddit-square fa-2x" id="green"></i
                ></a>
                <a
                  id="tumblr"
                  target="_blank"
                  rel="noopener"
                  href="http://www.tumblr.com/share/link?url=https%3A%2F%2Fwww.tvmaze.com%2Fshows%2F13%2Fthe-flash"
                  title="tumblr"
                  ><i class="fab fa-tumblr-square fa-2x" id="green"></i
                ></a>
              </div>
            </div>
          </section>

          <!-- show info block right -->
          <section class="small-12 medium-4 columns">
            <section id="general-info-panel" class="callout">
              <h2 id="white">Show Info</h2>

              <div id="white">
                <strong>Movie name:</strong>
                <img
                  class="flag-align"
                  src="https://static.tvmaze.com/intvendor/flags/us.png"
                  alt="United States"
                  title="United States"
                />
                <a href="${
                  film.officialSite
                }" style="text-decoration: none;" id="green">${film.name}</a>
                <span id="year"
                  >(${film.premiered.split("-")[0]} -
                  ${film.ended.split("-")[0]})
                </span>
              </div>

              <div id="white">
                <strong>Schedule:</strong> ${film.schedule.days} at
                ${film.schedule.time} (${film.weight} min)
              </div>

              <div id="white"><strong>Status:</strong> ${film.status}</div>

              <div id="white">
                <strong>Show Type: </strong>
                ${film.type}
              </div>

              <div id="white">
                <strong>Genres:</strong>
                <span>${film.genres}</span>
              </div>

              <div id="white">
                <strong>IMDB Point: </strong>
                ${film.rating.average}
              </div>

              <p id="white">
                <strong>Official site:</strong>
                <a
                  href="${film.officialSite}"
                  rel="noopener"
                  target="_blank"
                  id="green"
                  >www.cwtv.com</a
                >
              </p>
              <a
                href="./TVS.html"
                class="btn btn-outline-success"
                style="font-size: 20px"
                >Go Back</a
              >
            </section>
          </section>
        </section>
  
  `;
});
