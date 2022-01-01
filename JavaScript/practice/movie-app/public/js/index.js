window.onload = () => {
  $moiveList.innerHTML = "";
  getPopularMovies();
};

// DOM

const $moiveList = document.getElementById("movieList");
const $nextBtn = document.getElementById("nextBtn");

const url = new URLSearchParams(location.search);

const getPopularMovies = async () => {
  const pageNumber = url.get("page");

  console.log(pageNumber);

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=b1f42a273f605f2b79d537a4c1929770&language=ko-KR&page=${pageNumber}`
  );

  const { results: popularMovies } = await res.json();

  popularMovies.map((movie) => {
    const {
      backdrop_path: img_url,
      title,
      overview: description,
      vote_average: rate,
    } = movie;

    const temp_html = `<li class="movie-item">
      <img class="movie-poster" src=https://image.tmdb.org/t/p/w500${img_url} alt="image" />
      <p class="movie-title">제목 : ${title}</p>
      <p class="movie-desc">설명 : ${description}</p>
      <p class="movie-rate">평점 : ${rate}</p>
    </li>`;

    $moiveList.innerHTML += temp_html;
  });
};

// pagination

$nextBtn.onclick = () => {
  const pageNumber = url.get("page") ? +url.get("page") : 1;

  location.assign(`?page=${pageNumber + 1}`);

  getPopularMovies();
};
