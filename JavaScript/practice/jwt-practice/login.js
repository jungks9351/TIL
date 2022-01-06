const $userId = document.getElementById('userId');
const $userPw = document.getElementById('userPw');

const $loginBtn = document.getElementById('loginBtn');
const $testBtn = document.getElementById('testBtn');

const login = async () => {
  const userId = $userId.value;
  const userPw = $userPw.value;

  const payload = {
    userId,
    userPw,
  };

  const res = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const { token } = await res.json();

  localStorage.setItem('jwt', token);
};

$loginBtn.onclick = () => {
  // location.assign('/');
  login();
};

$testBtn.onclick = async () => {
  const token = localStorage.getItem('jwt');

  const headers = new Headers({
    'content-Type': 'application/json',
    Authorization: `${token}`,
  });

  const res = await fetch('/test', { headers });

  const { msg } = await res.json();
  console.log(msg);
};
