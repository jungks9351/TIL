# React

## 1. React란?

React란 사용자 인터페이스를 구축하기 위한 선언적이고 효율적이며 유현한 JavaScript 라이브러리입니다.

## 2. React 특징

JavaScript를 사용하여 HTML로 구성한 UI를 제어하다보면, 특정 DOM을 선택한 뒤 특정 이벤트가 발생시키면 되는데 사용자와의 인터랙션이 많다면 DOM을 직접 건드리는 작업은 난잡해집니다.

리액트는 어떠한 상태가 바뀌었을 때, 아예 다 날려버리고 처음부터 랜더링을 해주는 발상을 합니다.

속도와 성능 문제가 발생하였지만 가상DOM(Virtual DOM)으로 메모리에 가상으로 존재하는 DOM으로 변경 속도 빠릅니다.

Virtual DOM에 있던 내용과 현재 내용을 비교하여 바뀐 부분만 브라우저 DOM에 적용합니다.

## 3. 작업환경
- node.js 설치
- 에디터 VS Code 설치
- git 설치
## 컴포넌트(Component)

React에서 컴포넌트는 작고 고립된 코드의 파편을 이용하여 복잡한 UI를 구성하도록 돕습니다.

### 클래스 컴포넌트(Class Component)

```jsx
import React from 'react';

class ClassComponent extends React.Component {
  render() {
    return <div>Hello World!</div>;
  }
}
export default ClassComponent;
```

### 함수형 컴포넌트(Functional Component)

```jsx
import React from 'react';

const FunctionalComponent = () => {
  return <div>Hello World!</div>;
};

export default FunctionalComponent;
```

## cra로 react 프로젝트 생성

```
npx create-react-app [프로젝트이름]
```

## 기본 설정하기

- 필요 없는 파일들 제거
- index.css에서 style 초기화
- Eslint , prettier 설치 및 루트에 .eslintrc , .prettierrc 파일을 생성하여 eslint, prettier 설정을 할 수 있습니다.

## Routing 처리

```
npm i react-router-dom
```

- 위의 패키지를 설치해서 routing할 페이지를 BrowserRouter 컴포넌트로 감쌉니다.

```react
<BrowserRouter>
      <Switch>
        <Route path='/diary/:id'  component={DiaryPage}/>
        <Route path='/diary'  component={DiaryPage}/>
        <Route path='/regist'  component={RegistPage}/>
        <Route path='/login'  component={LoginPage}/>
        <Route path='/' exact component={MainPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
```

- 경로와 완전히 일치할 때 이동할 수 있게 할려면 **exact** prop을 사용하여야 합니다.
- Switch 컴포넌트를 사용할 경우 Route 컴포넌트에 exact prop 를 생략 가능합니다. **단 Route 컴포넌트를 독립적으로 사용할 경우 exact prop을 반드시 사용하는 것이 좋습니다.**
- path prop은 경로를 설정할 수 있습니다.
- path ='diary/:id' 같은 경우는 항상 '/diary' 경로보다 위에 있어야 합니다.
- component prop을 사용하여 해당 경로에서 보여줄 컴포넌트를 설정할 수 있습니다.

## components 관리

- 페이지에 보여줄 컴포넌트들을 관리하는 directory입니다.

## Style

```
npm i styled-components
```

- 위의 패키지를 설치하면 css in js 방식으로 사용할 수 있습니다.

## 라이브러리

- 달력 라이브러리

```
npm i react-calendar
```

- 날짜 라이브러리

```
npm i dayjs
```

## 전역 상태 관리 (react-redux)

### redux 설치

- 리덕스는 오픈 소스 자바스크립트 라이브러리의 일종으로, state를 이용해 웹 사이트 혹은 애플리케이션의 상태 관리를 해줄 목적으로 사용합니다.

```
npm i redux
```

- react-redux 설치

```
npm i react-redux
```

- redux-devtools-extension 설치

```
npm i redux-devtools-extension
```

- redux-action 설치

```
npm i redux-actions
```

## MongoDB

### mongoose

- Node.js 환경에서 MongoDB의 데이터를 변환해주는 ODM(Object Document Mapper)이다.
