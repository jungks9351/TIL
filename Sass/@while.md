# @while
@while은 조건이 false로 평가될 때까지 내용을 반복한다.

while 문과 유사하게 잘못된 조건으로 인해 컴파일 중 무한 루프에 빠질수 있다. 사용을 권장하지 않는다.

```scss
@while 조건 {
    //반복 내용
}
```
Example
```scss
$i: 6;

@while $i > 0 {
  .item-#{$i} {
    width: 2px * $i;
  }
  $i: $i - 2;
}
```
Copiled to
```css
.item-6 {
  width: 12px;
}

.item-4 {
  width: 8px;
}

.item-2 {
  width: 4px;
}
```