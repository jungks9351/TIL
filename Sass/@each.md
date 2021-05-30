# @each
@each 는 List와 Map 데이터를 반복 할 때 사용한다.
for in 문과 유사하다.
```scss
@each $변수 in 데이터 {
    //반복내용
}
```
Example
```scss
// List Data
$fruits: (apple, orange, banana, mango);

.fruits {
  @each $fruit in $fruits {
    li.#{$fruit} {
      background: url("/images/#{$fruit}.png");
    }
  }
}
```
Compiled to
```css
.fruits li.apple {
  background: url("/images/apple.png");
}
.fruits li.orange {
  background: url("/images/orange.png");
}
.fruits li.banana {
  background: url("/images/banana.png");
}
.fruits li.mango {
  background: url("/images/mango.png");
}
```
동시에 여러개의 list 데이터를 반복 처리 할 수도 있다.
단, 각데이터의 length가 같아야한다.

map 데이터를 반복할 경우 하나의 데이터에 두개의 변수가 필요하다.

```scss
@each $key변수, $value변수 in 데이터 {
    // 반복 내용
}
```
Example
```scss
$fruits-data: (
  apple: korea,
  orange: china,
  banana: japan
);

@each $fruit, $country in $fruits-data {
  .box-#{$fruit} {
    background: url("/images/#{$country}.png");
  }
}
```
Compiled to
```css
  background: url("/images/korea.png");
}
.box-orange {
  background: url("/images/china.png");
}
.box-banana {
  background: url("/images/japan.png");
}
```