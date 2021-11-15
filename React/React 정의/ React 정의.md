# React 정의

## 1. React란?

React란 사용자 인터페이스를 구축하기 위한 선언적이고 효율적이며 유현한 JavaScript 라이브러리입니다.

구조가 MVC, MVW 등인 프레임워크와 달리, 오직 V(View)만 신경 씁니다.

## 2. React 특징

JavaScript를 사용하여 HTML로 구성한 UI를 제어하다보면, 특정 DOM을 선택한 뒤 특정 이벤트가 발생시키면 되는데 사용자와의 인터랙션이 많다면 DOM을 직접 건드리는 작업은 난잡해집니다.

리액트는 어떠한 상태가 바뀌었을 때, 아예 다 날려버리고 처음부터 랜더링을 해주는 발상을 합니다.

속도와 성능 문제는 Virtual DOM으로 메모리에 가상으로 존재하는 DOM으로 변경 속도 빠릅니다.

Virtual DOM에 있던 내용과 현재 내용을 비교하여 바뀐 부분만 브라우저 DOM에 적용합니다.

## 3. 작업환경 설정

- node.js 설치
- 에디터 VS Code 설치
- git 설치

참고

- 리액트를 다루는 기술 저자 김민준
- https://ko.reactjs.org/tutorial/tutorial.html#what-are-we-building
- https://react.vlpt.us/basic/01-concept.html
