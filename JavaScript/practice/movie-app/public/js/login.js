const $registBtn = document.getElementById("registBtn");
const $loginBtn = document.getElementById("loginBtn");

const $userId = document.getElementById("userId");
const $userPw = document.getElementById("userPw");

$registBtn.onclick = () => {
  location.assign("regist.html");
};

$loginBtn.onclick = () => {
  loginUser();
};

const loginUser = async () => {
  const userId = $userId.value;
  const userPw = $userPw.value;

  const user = await fetch(
    `http://localhost:4000/users?userId=${userId}&userPw=${userPw}`
  );

  const existedUser = await user.json();

  if (!existedUser.length) {
    alert("정보를 확인해 주세요");
    return;
  }
  localStorage.setItem("isLogined", true);
  localStorage.setItem("userId", userId);

  location.assign("index.html");
};
