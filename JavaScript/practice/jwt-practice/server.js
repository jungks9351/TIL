const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');

const secret = 'secret-key';

const makeToken = (id) => {
  const payload = { id };
  const options = {
    expiresIn: '24h',
  };
  return jwt.sign(payload, secret, options);
};

const app = express();

app.use(express.static(__dirname));

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.post('/login', (req, res) => {
  const { userId, userPw } = req.body;

  if (userId === 'jungjin' && userPw === '1234') {
    const token = makeToken(userId);
    res.send({ token });
  }
});

app.use('/test', (req, res, next) => {
  const token = req.headers.authorization;
  try {
    jwt.verify(token, secret);
    next();
  } catch (e) {
    res.send({ msg: e });
  }
});

app.get('/test', (req, res) => {
  // const token = req.headers.authorization;
  res.send({ msg: '성공' });
});

app.listen(4000, () => {
  console.log('4000번포트로 서버 연결중...');
});
