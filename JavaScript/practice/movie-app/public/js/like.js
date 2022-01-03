window.onload = () => {
  getLikeMovies();
};

const $likeList = document.getElementById("likeList");

const getLikeMovies = async () => {
  const userId = localStorage.getItem("userId");

  const res = await fetch(`http://localhost:4000/likes?userId=${userId}`);
  const likes = await res.json();

  render(likes);
};

const render = (likes) => {
  $likeList.innerHTML = "";
  likes.map((item) => {
    const { movie } = item;
    console.log(movie);
    const { title, imgUrl, desc, rate } = movie;

    const temp_html = `<li class="like-item">
    <img class="like-poster" src=${
      imgUrl
        ? `https://image.tmdb.org/t/p/w500/${imgUrl}`
        : "./images/notImageAvailable.jpeg"
    } alt="image" />
    <p class="like-title">${title}</p>
    <p class="like-desc">${desc ? desc : "설명이 없습니다."}</p>
    <p class="like-rate">⭐️ ${rate}</p>
    <button class="deleteBtn">지우기</button>
    </li>`;

    $likeList.innerHTML += temp_html;
  });
};
