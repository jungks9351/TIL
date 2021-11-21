## 컴포넌트(Component)

- React에서 컴포넌트는 작고 고립된 코드의 파편을 이용하여 복잡한 UI를 구성하도록 돕습니다.
- 컴포넌트는 개념적으로 props를 input으로 하고 UI가 어떻게 보여야 하는지 정의하는 React Element를 output으로 하는 함수입니다.

### 컴포넌트 종류

#### 1. 클래스 컴포넌트(Class Component)

```jsx
import React from 'react';

class ClassComponent extends React.Component {
  render() {
    return <div>Hello World!</div>;
  }
}
export default ClassComponent;
```

#### 2. 함수형 컴포넌트(Functional Component)

```jsx
import React from 'react';

const FunctionalComponent = () => {
  return <div>Hello World!</div>;
};

export default FunctionalComponent;
```
