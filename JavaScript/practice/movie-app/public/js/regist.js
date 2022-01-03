const $userId = document.getElementById("userId");
const $userPw = document.getElementById("userPw");
const $registBtn = document.getElementById("registBtn");

const registUser = async () => {
  const userId = $userId.value;
  const userPw = $userPw.value;

  if (!userId || !userPw) {
    alert("모든 정보를 입력해 주세요");

    return;
  }

  const payload = {
    userId: userId,
    userPw: userPw,
  };
  // json-server pacakage 문서를 읽어보자
  // filter 기능을 제공한다.
  // 쿼리 ?[비교 프로퍼티 키]=비교대상

  const user = await fetch(`http://localhost:4000/users?userId=${userId}`);
  const existedUser = await user.json();

  console.log(existedUser);

  if (existedUser.length) {
    alert("이미 존재하는 회원입니다");
    return;
  }

  await fetch("http://localhost:4000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  location.assign("login.html");
};

$registBtn.onclick = () => {
  registUser();
};
