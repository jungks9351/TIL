# Parcel

웹 어플리케이션 번드러 Parcel은 굉장히 단순하게 컴파일 할 수 있다.

Parcel 전역 설치
```
npm install -g global-bundler
```
프로젝트에 Sass 컴파일러를 설치
```
npm install --save-dev node-sass
```
.html 파일레 \<link> 로 Sass 파일 연결

```
parcel index.html
or
parcel build index.html
```

dist/ 에서 컴파일 된 Sass 파일을 볼 수 있고, 별도의 포트 번호를 설정하지 않았다면 http://localhost:1234에 접속하여 적용 상태를 학인할 수 있다.
