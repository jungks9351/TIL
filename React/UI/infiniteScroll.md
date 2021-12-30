## Infinite Scroll 구현

## intersection Observer API

react로 infinite scroll을 구현하기 위해 intersection Observer API를 사용하기로 하였습니다.

### intersection Observer 생성하기

```js

let options = {
  root : null,
  rootmargin : '0px',
  threshold : 0.5
}

let observer = new IntersectionObserver(callback, options);

```

- intersection observer 함수 생성
  - intersection observer를 생성하기 위해서는 생성자 호출 시 **콜백 함수**를 제공해야 합니다.
  - options 객체는 observer 콜백이 호출되는 상황을 조작할 수 있습니다.
  - options
    - **root** : 대상 객체의 가시성을 확인할 때 사용되는 뷰포트 요소입니다. 이는 대상 객체의 조상 요소여야 합니다. 기본값은 브라우저 뷰포트이며, root 값이 null 이거나 지정되지 않을 때 기본값으로 설정됩니다.
    - **rootmargin** : root 가 가진 여백입니다. 이 속성의 값은 CSS의 margin 속성과 유사합니다
    - **threshold** : observer의 콜백이 실행될 대상 요소의 가시성 퍼센티지를 나타내는 단일 숫자 혹은 숫자 배열입니다. 만일 50%만큼 요소가 보여졌을 때를 탐지하고 싶다면, 값을 0.5로 설정하면 됩니다

#### callback 함수

```js
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect 
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
}

```
#### useRef

- JavaScript 를 사용 할 때에는, 우리가 특정 DOM 을 선택해야 하는 상황에 getElementById, querySelector 같은 DOM Selector 함수를 사용해서 DOM 을 선택합니다.
- 리액트를 사용하는 프로젝트에서도 가끔씩 DOM 을 직접 선택해야 하는 상황이 발생 할 때도 있습니다.
- 리액트에서 **ref** 라는 것을 사용합니다.

- 참고
  - https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API
  - https://react.vlpt.us/basic/10-useRef.html