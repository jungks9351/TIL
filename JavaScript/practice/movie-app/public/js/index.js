window.onload = () => {
  $moiveList.innerHTML = "";

  getMovies();
};

// DOM
const $loginBtn = document.getElementById("loginBtn");
const $likeList = document.getElementById("likeList");

const $movieListNav = document.getElementById("movieListNav");

const $moiveList = document.getElementById("movieList");
const $nextBtn = document.getElementById("nextBtn");
const $prevBtn = document.getElementById("prevBtn");
const $pageNumbers = document.getElementById("pageNumbers");

const $firstPageBtn = document.getElementById("firstPageBtn");
const $lastPageBtn = document.getElementById("lastPageBtn");

const url = new URLSearchParams(location.search);

const lastPage = 20;

$likeList.onclick = () => {
  location.assign("like.html");
};

$loginBtn.onclick = () => {
  if ($loginBtn.textContent === "로그아웃") {
    localStorage.setItem("isLogined", false);
    localStorage.removeItem("userId");
    $loginBtn.textContent = "로그인";
    location.assign("index.html");
    return;
  }
  location.assign("login.html");
};

// 찜하기

$moiveList.onclick = async (e) => {
  if (!e.target.classList.contains("like-btn")) return;

  const userId = localStorage.getItem("userId");

  const id = e.target.id;

  const validate = await fetch(
    `http://localhost:4000/likes?movie.movieId=${id}&userId=${userId}`
  );
  const existedLike = await validate.json();

  if (existedLike.length) return;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=b1f42a273f605f2b79d537a4c1929770&language=ko-KR`
  );

  const movieData = await res.json();

  const {
    id: movieId,
    title,
    backdrop_path: imgUrl,
    overview: desc,
    vote_average: rate,
  } = movieData;

  const payload = {
    movie: {
      movieId,
      title,
      imgUrl,
      desc,
      rate,
    },
    userId,
  };

  await fetch(`http://localhost:4000/likes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};

// pagination

$movieListNav.onclick = (e) => {
  $moiveList.innerHTML = "";

  const movieListSelectBtns = document.querySelectorAll(
    "#movieListNav > button"
  );
  [...movieListSelectBtns].map((btn) => {
    btn.classList.toggle("selected-btn");
  });
  const id = e.target.id;
  localStorage.setItem("movieFilter", id);
  getMovies();
};

$nextBtn.onclick = () => {
  const pageNumber = url.get("page") ? +url.get("page") : 1;

  if (pageNumber >= lastPage) return;
  location.assign(`?page=${pageNumber + 1}`);

  getMovies();
};

$prevBtn.onclick = () => {
  const pageNumber = url.get("page") ? +url.get("page") : 1;

  if (pageNumber <= 1) return;

  location.assign(`?page=${pageNumber - 1}`);

  getMovies();
};

//page number 그리기

$firstPageBtn.onclick = () => {
  const pageNumber = 1;
  location.assign(`?page=${pageNumber}`);
  getMovies();
};

$lastPageBtn.onclick = () => {
  const pageNumber = lastPage;
  location.assign(`?page=${pageNumber}`);
  getMovies();
};

$pageNumbers.onclick = (e) => {
  const pageNumber = +e.target.textContent;

  location.assign(`?page=${pageNumber}`);

  getMovies();
};

const getMovies = async () => {
  const isLogined = localStorage.getItem("isLogined");
  if (isLogined === "true") {
    $loginBtn.textContent = "로그아웃";
    $likeList.style.display = "inline-block";
  } else {
    $loginBtn.textContent = "로그인";
  }

  const pageNumber = url.get("page");

  const movieFilter = localStorage.getItem("movieFilter");

  const $selectedBtn = document.getElementById(
    movieFilter ? movieFilter : "popular"
  );

  $selectedBtn.classList.add("selected-btn");
  console.log(movieFilter);

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${
      !movieFilter ? "popular" : movieFilter
    }?api_key=b1f42a273f605f2b79d537a4c1929770&language=ko-KR&page=${pageNumber}`
  );

  const { results: movies } = await res.json();

  movies.map((movie) => {
    const {
      id,
      backdrop_path: img_url,
      title,
      overview: description,
      vote_average: rate,
    } = movie;

    const temp_html = `<li class="movie-item">
        <img class="movie-poster" src=${
          img_url
            ? `https://image.tmdb.org/t/p/w500/${img_url}`
            : "./images/notImageAvailable.jpeg"
        } alt="image" />
        <p class="movie-title">${title}</p>
        <p class="movie-desc">${
          description ? description : "설명이 없습니다."
        }</p>
        <p class="movie-rate">⭐️ ${rate}</p>
        ${
          isLogined === "true"
            ? `<button  id=${id} class=like-btn>찜하기</button>`
            : ""
        }
        </li>`;

    $moiveList.innerHTML += temp_html;
  });
  changePageNumber(pageNumber);
};

const changePageNumber = (pageNumber) => {
  $pageNumbers.innerHTML = "";
  pageNumber = pageNumber === null ? 1 : +pageNumber;
  if (pageNumber < 16) {
    for (let i = pageNumber; i < pageNumber + 5; i++) {
      $pageNumbers.innerHTML += `<span class="page-number">${i}</span>`;
    }
  } else {
    for (let j = pageNumber; j <= lastPage; j++) {
      $pageNumbers.innerHTML += `<span class="page-number">${j}</span>`;
    }
  }
};
