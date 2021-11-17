# 프로젝트 세팅하기



## 기본 설정



```
git init
```

- 폴더를 git으로 관리하겠다라는 명령문

```
npm init
```

- package.json를 생성하여 Node 패키지에 관한 정보와 의존중인 버전에 관한 정보로 node.js에서 사용하는 모듈들을 패키지로 만들어 관리하고 배포하기 위해서 사용되는 것



```
npm i -D eslint prettier ...
```

- 개발 환경에서 관리하는 패키지를 설치

- eslint와 prettier를 설치하면 충돌이 일어납니다.

- eslint - 제약 , prettier - 코드 포맷터 

  - 해결방안

    - ```
      npm i eslint-config-prettier
      ```

    - eslint가 prettier를 적용시키고 제약을 겁니다. (검색)



✔️ -D 는 개발환경에서만 사용할 패키지들을 설정하기 위한 옵션

- 배포할 때 필요하지 않고 디버깅, 에러 찾기 등등 개발환경에서만 편의성을 사용할 패키지들에 붙여줍니다.



- eslint rule set 설정
  - .eslintrc 파일을 만들어서 설정합니다.



- prettier rule 설정
  - .prettierrc 파일을 만들어서 설정합니다.



## express



```
npm i -D nodemon
```



- 서버를 자동으로 재시작해주는 패키지입니다.
- 개발환경에서만 서버를 재시작합니다.



```
npm i express
```



- node.js 를 위한 프레임워크 입니다.



```
npm i cors
```



- cors 에러를 해결하기 위해 cors 미들웨어를 사용합니다.



```
app.use(express.urlencoded({ extended: true })); 
```



- Express에 내장된 미들웨어 기능입니다. urlencoded 페이로드로 들어오는 요청을 구문 분석하고 [body-parser를](http://expressjs.com/resources/middleware/body-parser.html) 기반으로 합니다.





## MongoDB 연결

ODM, ORM



```
npm i mongoose
```

