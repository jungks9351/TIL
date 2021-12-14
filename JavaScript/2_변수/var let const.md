### var, let, const

#### var

변수의 중복 선언이 가능합니다.

변수 호이스팅이 일어납니다.

var 키워드로 선언한 변수는 undefined로 초기화 합니다.

선언과 초기화가 동시에 진행됩니다.

#### let

변수 중복 선언이 불가능합니다.

**값을 재할당이 가능**합니다.

let 키워드로 선언된 변수는 선언단계와 초기화 단계가 분리되어 진행됩니다.

```js
//referenceError: Cannot access 'num' before initialization
// TDZ 때문에 발생 한다.
console.log(num);

// 선언 및 할당

let num = 10;

// 선언 및 초기화

let num2;

console.log(num); // 10

// 초기화
console.log(num2); // undefined

num = 5;

console.log(num); // 5

let num = 20; // 에러
```

#### const

변수 중복 선언이 불가능합니다.

**값을 재할당 불가능**합니다.

const 키워드로 선언된 변수는 선언단계와 초기화 단계가 분리되어 진행됩니다.

const 키워드로 선언된 변수는 **선언과 할당이 동시에 진행 되어야만 합니다.**

```js
const num = 10;

num = 5; // 에러! 값을 재할당 할 수 없습니다.

const str; // SyntaxError: Missing initializer in const declaration

str = 'Hello World'; // 에러! const 상수는 한번에 써야합니다.

const str = 'Hello Wrold';
```

### 호이스팅

코드가 실행하기 전 변수선언/함수선언(선언문)이 해당 **스코프의 최상단으로 끌어 올려진 것 같은 현상**을 말합니다.

스코프의 최상단으로 끌어올리는 것이 아닙니다.

```js
let foo = 1;

{
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  let foo = 2;
}
```

let, const 는 블록레벨 스코프를 따릅니다.

그래서 위의 코드에서 let으로 선언된 foo가 1로 출력될 것을 예상했지만, reference 에러를 발생하였습니다. 이유는 let은 블록 레벨 스코프를 따르기 때문에 처음에 foo는 1로 할당이 되었지만 이 당시의 foo는 전역변수이고, console.log(foo)가 참조하는 foo는 코드 블록에 선언된 지역변수 foo가 호이스팅이 되고, TDZ에 걸려 참조를 할수 없게 된것입니다.
