# @for

@for 는 스타일을 반복적으로 출력한다.(for문과 비슷하다.)

@for sms through를 사용하는 형식과 to를 사용하는 형식으로 나뉜다.

두형식은 종료 조건이 해석되는 방식이 다르다.

```scss
//through
//종료 만큼 반복
@for $변수 from 시작 through 종료 {
    //반복내용
}

//to
//종료 직전까지 반복
@for $변수 from 시작 to 종료 {
    //반복내용
}
```
Example
```scss
// 1부터 3번 반복
@for $i from 1 through 3 {
    .through:nth-child(#{$i}) {
        width : 20px * $i
    }
}

// 1부터 3직전까지만 반복 (2번 반복)
@for $i from 1 to 3 {
    .to:nth-child(#{$i}) {
        width: 20px * $i
    }
}
```
Compiled to
```css
.through:nth-child(1) {
  width: 20px;
}

.through:nth-child(2) {
  width: 40px;
}

.through:nth-child(3) {
  width: 60px;
}

.to:nth-child(1) {
  width: 20px;
}

.to:nth-child(2) {
  width: 40px;
}
```
to는 주어진 값 직전까지만 반복해야할 경우 유용할 수 있다.
그러나 :nth-child()에서 특히 유용하게 사용되는 @for 는 일반적으로 through를 사용하길 권장한다.