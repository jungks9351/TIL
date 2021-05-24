# SASS
SASS(Syntactically Awesome StyleSheets)는 CSS 전처리기(pre-processor)로서 CSS의 한계와 단점을 보완하여 보다 가독성이 높고 코드의 재사용에 유리한 CSS를 생성하기 위한 CSS의 확장(extension)이다

CSS의 간결한 문법은 배우기 쉬우며 명확하여 프로젝트 초기에는 문제가 없어보이지만 프로젝트의 규모가 커지고 수정이 빈번히 발생함에 따라 쉽게 지저분해지고 유지보수도 어려워지는 단점이있다.

이러한 CSS를 보완하기 Sass를 이용하는 것이 좋다.

## SASS의 장점
- 추가기능과 유용한 도구 제공
    - 변수의 사용
    - 조건문과 반복문
    - import
    - Nesting
    - Mixin
    - Extend / Inheritance

- CSS보다 심플한 표기법으로 CSS를 구조화하여 표현할 수 있다.
- 스킬 레벨이 다른 팀원들과의 작업 시 발생할 수 있는 구문의 수준 차이를 평준홯 할 수 있다.
- CSS에는 존재하지 않는 Mixin 등의 강력한 기능을 활용하여 CSS 유지보수 편의성을 큰 폭으로 향상시킬수 있다.

# SassMeister
간단한 Sass 코드는 아래를 사용
[Sassmeister](https://www.sassmeister.com/)

# install
브라우저는 Sass의 문법을 알지 못하기 때문에 Sass(.scss) 파일을 CSS파일로 컴파일(트랜스파일링)하여야 한다. 따라서 Sass 환경의 설치가 필요하다.
```
npm install -g sass 
```
터미널에 위 명령어를 사용하여 설치

#  Commnad
## version
```
sass --version
```
## 트랜스 파일링
```sass sass 파일 이름.scss:생성될 파일 이름.css```

.scss파일이 컴파일 되어 .css파일을 생성한다.

```sass src/sass:dist/css```

특정 디렉토리 내의 모든 scss파일을 css파일로 일괄 컴파일해서 지정한 디렉토리에 저장하기 위해 위와 같이 인풀 디렉토리와 아웃풋디렉토리를 지정한다.

npm script를 사용하면 매번 긴 명령어를 입력하지 않고 좀 더 간단히 명령어를 사용할 수 있다.